import { useCallback, useState } from 'react';

export type LoadMoreFunction<T> = (options?: {
  skip?: number;
  first?: number;
}) => Promise<{
  items: T[];
  totalCount: number;
}>;

export function useLoadMore<T>(
  loadMoreFn: LoadMoreFunction<T>,
  initialItems: T[],
  initialTotalCount: number,
) {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [items, setItems] = useState(initialItems);
  const [totalItems, setTotalItems] = useState(initialTotalCount);

  const loadMore = useCallback(async () => {
    const { items: newItems, totalCount } = await loadMoreFn({
      skip: itemsToShow,
      first: 10,
    });
    setItems((prevItems) => [...prevItems, ...newItems]);
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
    setTotalItems(totalCount);
  }, [itemsToShow, loadMoreFn]);

  return {
    items,
    itemsToShow,
    totalItems,
    loadMore,
  };
}
