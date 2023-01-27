<?php declare(strict_types=1);

namespace Sas\BlogModule\Content\Blog;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Sas\BlogModule\Content\Blog\Events\BlogIndexerEvent;
use Shopware\Core\Framework\DataAbstractionLayer\Dbal\Common\IteratorFactory;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityWrittenContainerEvent;
use Shopware\Core\Framework\DataAbstractionLayer\Indexing\EntityIndexer;
use Shopware\Core\Framework\DataAbstractionLayer\Indexing\EntityIndexingMessage;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class BlogEntitiesIndexer extends EntityIndexer
{
    public function __construct(private readonly EventDispatcherInterface $eventDispatcher, private readonly IteratorFactory $iteratorFactory, private readonly EntityRepository $repository)
    {
    }

    public function getName(): string
    {
        return 'sas.blog.entities.indexer';
    }

    public function update(EntityWrittenContainerEvent $event): ?EntityIndexingMessage
    {
        $blogEntriesUpdates = $event->getPrimaryKeys(BlogEntriesDefinition::ENTITY_NAME);
        if (\count($blogEntriesUpdates) === 0) {
            return null;
        }

        return new BlogEntriesIndexingMessage(array_values($blogEntriesUpdates), null, $event->getContext());
    }

    public function handle(EntityIndexingMessage $message): void
    {
        $ids = $message->getData();

        $ids = array_unique(array_filter($ids));
        if (empty($ids)) {
            return;
        }

        $this->eventDispatcher->dispatch(new BlogIndexerEvent($ids, $message->getContext(), $message->getSkip()));
    }

    public function iterate(array $offset): ?EntityIndexingMessage
    {
        $iterator = $this->iteratorFactory->createIterator($this->repository->getDefinition(), $offset);

        $ids = $iterator->fetch();

        if (empty($ids)) {
            return null;
        }

        return new BlogEntriesIndexingMessage(array_values($ids), $iterator->getOffset());
    }
}
