<?php declare(strict_types=1);

namespace BlogModule\Tests\Page\Search;

use BlogModule\Tests\Fakes\FakeEntityRepository;
use BlogModule\Tests\Traits\ContextTrait;
use PHPUnit\Framework\TestCase;
use Sas\BlogModule\Content\Blog\BlogEntriesDefinition;
use Sas\BlogModule\Content\Blog\BlogEntriesEntity;
use Sas\BlogModule\Page\Search\BlogSearchPage;
use Sas\BlogModule\Page\Search\BlogSearchPageLoader;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\Routing\Exception\MissingRequestParameterException;
use Shopware\Storefront\Page\GenericPageLoaderInterface;
use Shopware\Storefront\Page\Page;
use Symfony\Component\HttpFoundation\Request;

class BlogSearchPageLoaderTest extends TestCase
{
    use ContextTrait;

    private GenericPageLoaderInterface $genericLoader;

    private EntityRepository $blogRepository;

    public function setUp(): void
    {
        $this->genericLoader = $this->createMock(GenericPageLoaderInterface::class);
        $this->blogRepository = new FakeEntityRepository(new BlogEntriesDefinition());

        $this->salesChannelContext = $this->getSaleChannelContext($this);

        $this->blogSearchPageLoader = new BlogSearchPageLoader(
            $this->genericLoader,
            $this->blogRepository,
        );
    }

    /**
     * This test verifies that the search page loader will throw an exception
     * when no search term is provided in the request.
     */
    public function testLoadWithoutSearchQuery(): void
    {
        $this->expectException(MissingRequestParameterException::class);
        $this->blogSearchPageLoader->load(new Request(), $this->salesChannelContext);
    }

    /**
     * This test verifies that the search page is loaded correctly with given search term
     */
    public function testLoad(): void
    {
        $searchResults = $this->createConfiguredMock(EntitySearchResult::class, [
            'first' => $this->createMock(BlogEntriesEntity::class),
        ]);
        $request = new Request(['search' => 'foo'], [], []);
        $this->blogRepository->entitySearchResults = [$searchResults];

        $this->genericLoader->method('load')->willReturn($this->createMock(Page::class));
        $actualResult = $this->blogSearchPageLoader->load($request, $this->salesChannelContext);

        static::assertInstanceOf(BlogSearchPage::class, $actualResult);
    }
}
