'use client';

import type { LoadMoreFunction } from '#/hooks/use-load-more';

import React, { createContext, useContext } from 'react';

import { Button } from '@yocxo/ui/button';
import { ArrowDownIcon } from '@yocxo/ui/icons';

import { useLoadMore } from '#/hooks/use-load-more';

interface LoadMoreContextValue<T> {
  items: T[];
  loadMore: () => void;
  itemsToShow: number;
  totalItems: number;
}

const LoadMoreContext = createContext<LoadMoreContextValue<unknown>>({
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadMore: () => {},
  itemsToShow: 10,
  totalItems: 0,
});

export function LoadMore<T>({
  children,
  className,
  totalItems: initialTotalItems,
  initialItems,
  loadMoreFn,
}: {
  children: React.ReactNode;
  className?: string;
  totalItems: number;
  initialItems: T[];
  loadMoreFn: LoadMoreFunction<T>;
}) {
  const { items, itemsToShow, totalItems, loadMore } = useLoadMore(
    loadMoreFn,
    initialItems,
    initialTotalItems,
  );

  const handleLoadMore = () => {
    void loadMore();
  };

  return (
    <LoadMoreContext.Provider
      value={{ items, loadMore: handleLoadMore, itemsToShow, totalItems }}
    >
      <div className={className}>{children}</div>
    </LoadMoreContext.Provider>
  );
}

export function LoadMoreItems({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function LoadMoreButton({ children }: { children: React.ReactNode }) {
  const { loadMore, itemsToShow, totalItems } = useContext(LoadMoreContext);

  if (itemsToShow >= totalItems) {
    return null;
  }

  return (
    <div className="mt-10 flex justify-center">
      <Button size="lg" variant="secondary" onClick={loadMore}>
        {children}
        <ArrowDownIcon className="ml-2 h-3 w-3" />
      </Button>
    </div>
  );
}
