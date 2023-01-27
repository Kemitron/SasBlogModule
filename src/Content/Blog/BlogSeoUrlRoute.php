<?php declare(strict_types=1);

namespace Sas\BlogModule\Content\Blog;

use InvalidArgumentException;
use Shopware\Core\Content\Seo\SeoUrlRoute\SeoUrlMapping;
use Shopware\Core\Content\Seo\SeoUrlRoute\SeoUrlRouteConfig;
use Shopware\Core\Content\Seo\SeoUrlRoute\SeoUrlRouteInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\System\SalesChannel\SalesChannelEntity;

class BlogSeoUrlRoute implements SeoUrlRouteInterface
{
    final public const ROUTE_NAME = 'sas.frontend.blog.detail';

    public function __construct(private readonly BlogEntriesDefinition $definition)
    {
    }

    public function getConfig(): SeoUrlRouteConfig
    {
        return new SeoUrlRouteConfig(
            $this->definition,
            self::ROUTE_NAME,
            'blog/{{ entry.blogCategories.first.translated.name|lower }}/{{ entry.translated.title|lower }}'
        );
    }

    public function prepareCriteria(Criteria $criteria): void
    {
        $criteria->addAssociations([
            'blogCategories',
            'blogAuthor',
        ]);
    }

    public function getMapping(Entity $entry, ?SalesChannelEntity $salesChannel): SeoUrlMapping
    {
        if (!$entry instanceof BlogEntriesEntity) {
            throw new InvalidArgumentException('Expected BlogEntriesEntity');
        }

        return new SeoUrlMapping(
            $entry,
            ['articleId' => $entry->getId()],
            [
                'entry' => $entry,
            ]
        );
    }
}
