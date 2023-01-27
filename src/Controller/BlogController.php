<?php declare(strict_types=1);

namespace Sas\BlogModule\Controller;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use DateTime;
use Sas\BlogModule\Content\Blog\BlogEntriesCollection;
use Sas\BlogModule\Content\Blog\BlogEntriesEntity;
use Sas\BlogModule\Content\BlogAuthor\BlogAuthorEntity;
use Sas\BlogModule\Page\Search\BlogSearchPageLoader;
use Shopware\Core\Content\Cms\Exception\PageNotFoundException;
use Shopware\Core\Content\Cms\SalesChannel\SalesChannelCmsPageLoaderInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\RangeFilter;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\Framework\Routing\Exception\MissingRequestParameterException;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Controller\StorefrontController;
use Shopware\Storefront\Framework\Cache\Annotation\HttpCache;
use Shopware\Storefront\Page\GenericPageLoaderInterface;
use Shopware\Storefront\Page\MetaInformation;
use Shopware\Storefront\Page\Navigation\NavigationPage;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(defaults={"_routeScope" = {"storefront"}})
 */
class BlogController extends StorefrontController
{
    public function __construct(private readonly SystemConfigService $systemConfigService, private readonly GenericPageLoaderInterface $genericPageLoader, private readonly SalesChannelCmsPageLoaderInterface $cmsPageLoader, private readonly EntityRepository $blogRepository, private readonly BlogSearchPageLoader $blogSearchPageLoader)
    {
    }

    /**
     * @HttpCache()
     */
    #[Route(path: '/sas_blog/search', name: 'sas.frontend.blog.search', methods: ['GET'])]
    public function search(Request $request, SalesChannelContext $context): Response
    {
        try {
            $page = $this->blogSearchPageLoader->load($request, $context);
        } catch (MissingRequestParameterException) {
            return $this->forwardToRoute('frontend.home.page');
        }

        return $this->renderStorefront('@Storefront/storefront/page/blog-search/index.html.twig', ['page' => $page]);
    }

    /**
     * @HttpCache()
     *
     * @throws MissingRequestParameterException
     */
    #[Route(path: '/widgets/blog-search', name: 'widgets.blog.search.pagelet', methods: ['GET', 'POST'], defaults: ['XmlHttpRequest' => true])]
    public function ajax(Request $request, SalesChannelContext $context): Response
    {
        $request->request->set('no-aggregations', true);

        $page = $this->blogSearchPageLoader->load($request, $context);

        $response = $this->renderStorefront('@Storefront/storefront/page/blog-search/search-pagelet.html.twig', ['page' => $page]);
        $response->headers->set('x-robots-tag', 'noindex');

        return $response;
    }

    /**
     * @HttpCache()
     */
    #[Route(path: '/sas_blog/{articleId}', name: 'sas.frontend.blog.detail', methods: ['GET'])]
    public function detailAction(string $articleId, Request $request, SalesChannelContext $context): Response
    {
        $page = $this->genericPageLoader->load($request, $context);
        $page = NavigationPage::createFrom($page);

        $criteria = new Criteria([$articleId]);

        $criteria->addAssociations(['blogAuthor.salutation', 'blogCategories']);

        /** @var BlogEntriesCollection $results */
        $results = $this->blogRepository->search($criteria, $context->getContext())->getEntities();

        $cmsBlogDetailPageId = $this->systemConfigService->get('SasBlogModule.config.cmsBlogDetailPage');
        if (!\is_string($cmsBlogDetailPageId)) {
            throw new PageNotFoundException($articleId);
        }

        if (!$results->first()) {
            throw new PageNotFoundException($articleId);
        }

        $entry = $results->first();
        if (!$entry instanceof BlogEntriesEntity) {
            throw new PageNotFoundException($articleId);
        }

        $pages = $this->cmsPageLoader->load(
            $request,
            new Criteria([$cmsBlogDetailPageId]),
            $context
        );

        $page->setCmsPage($pages->first());

        $blogAuthor = $entry->getBlogAuthor();
        if (!$blogAuthor instanceof BlogAuthorEntity) {
            throw new PageNotFoundException($articleId);
        }

        $metaInformation = $page->getMetaInformation();
        if ($metaInformation instanceof MetaInformation) {
            $metaTitle = $entry->getMetaTitle() ?? $entry->getTitle();
            $metaDescription = $entry->getMetaDescription() ?? $entry->getTeaser();
            $metaAuthor = $blogAuthor->getTranslated()['name'];
            $metaInformation->setMetaTitle($metaTitle ?? '');
            $metaInformation->setMetaDescription($metaDescription ?? '');
            $metaInformation->setAuthor($metaAuthor ?? '');
            $page->setMetaInformation($metaInformation);
        }

        $page->setNavigationId($page->getHeader()->getNavigation()->getActive()->getId());

        return $this->renderStorefront('@Storefront/storefront/page/content/index.html.twig', [
            'page' => $page,
            'entry' => $entry,
        ]);
    }

    /**
     * @HttpCache()
     */
    #[Route(path: '/blog/rss', name: 'frontend.sas.blog.rss', methods: ['GET'])]
    public function rss(Request $request, SalesChannelContext $context): Response
    {
        $criteria = new Criteria();

        $dateTime = new DateTime();

        $criteria->addAssociations(['blogAuthor.salutation']);

        $criteria->addFilter(
            new EqualsFilter('active', true),
            new RangeFilter('publishedAt', [RangeFilter::LTE => $dateTime->format(\DATE_ATOM)])
        );

        $results = $this->blogRepository->search($criteria, $context->getContext())->getEntities();

        $page = $this->genericPageLoader->load($request, $context);
        $page = NavigationPage::createFrom($page);

        $response = $this->renderStorefront('@SasBlogModule/storefront/page/rss.html.twig', [
            'results' => $results,
            'page' => $page,
        ]);
        $response->headers->set('Content-Type', 'application/xml; charset=utf-8');

        return $response;
    }
}
