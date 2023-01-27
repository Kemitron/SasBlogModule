<?php declare(strict_types=1);

namespace Sas\BlogModule\Content\SalesChannel\Suggest;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use DateTime;
use Shopware\Core\Content\Product\SalesChannel\Suggest\AbstractProductSuggestRoute;
use Shopware\Core\Content\Product\SalesChannel\Suggest\ProductSuggestRouteResponse;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\ContainsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\RangeFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Sorting\FieldSorting;
use Shopware\Core\Framework\Feature;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Component\HttpFoundation\Request;

class ProductSuggestDecorated extends AbstractProductSuggestRoute
{
    public function __construct(private readonly AbstractProductSuggestRoute $decorated, private readonly EntityRepository $blogRepository, private readonly SystemConfigService $systemConfigService)
    {
    }

    public function getDecorated(): AbstractProductSuggestRoute
    {
        return $this->decorated;
    }

    public function load(
        Request $request,
        SalesChannelContext $context,
        Criteria $criteria
    ): ProductSuggestRouteResponse {
        $response = $this->getDecorated()->load($request, $context, $criteria);

        if (!$this->systemConfigService->get('SasBlogModule.config.enableSearchBox')) {
            return $response;
        }

        $limit = $response->getListingResult()->getCriteria()->getLimit() ?? 1;
        $blogResult = $this->getBlogs($request->get('search'), $context->getSalesChannel()->getId(), (int) $limit, $context->getContext());
        $response->getListingResult()->addExtension('blogResult', $blogResult);

        return $response;
    }

    private function getBlogs(string $term, string $saleChannelId, int $limit, Context $context): EntitySearchResult
    {
        $criteria = new Criteria();
        $criteria->setTerm($term);
        $criteria->setLimit($limit);
        $criteria->addAssociation('media');
        $criteria->addAssociation('blogCategories');
        $criteria->getAssociation('blogCategories')->addSorting(new FieldSorting('level', FieldSorting::ASCENDING));

        $criteria->addFilter(
            new EqualsFilter('active', true),
            new RangeFilter('publishedAt', [RangeFilter::LTE => (new DateTime())->format(\DATE_ATOM)])
        );

        if (Feature::isActive('FEATURE_SAS_BLOG_V2')) {
            $criteria->addFilter(new ContainsFilter('customFields.sales_channels_id', $saleChannelId));
        }

        return $this->blogRepository->search($criteria, $context);
    }
}
