'use client';

import React, { Children, createContext, useContext, useState } from 'react';

import { Button } from '@sambi/ui/button';

import { ArrowDownIcon } from './icons';

const LoadMoreContext = createContext({
  loadMore: undefined as (() => void) | undefined,
  itemsToShow: 10,
  totalItems: 0,
});

export function LoadMore({
  children,
  className,
  totalItems: initialTotalItems,
}: {
  children: React.ReactNode;
  className?: string;
  totalItems: number;
}) {
  const [itemsToShow, setItemsToShow] = useState(10);
  const totalItems = initialTotalItems;

  const loadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
  };

  return (
    <LoadMoreContext.Provider value={{ loadMore, itemsToShow, totalItems }}>
      <div className={className}>{children}</div>
    </LoadMoreContext.Provider>
  );
}

export function LoadMoreItems({ children }: { children: React.ReactNode }) {
  const { itemsToShow } = useContext(LoadMoreContext);

  return <>{Children.toArray(children).slice(0, itemsToShow)}</>;
}

export function LoadMoreButton({ children }: { children: React.ReactNode }) {
  const { loadMore, itemsToShow, totalItems } = useContext(LoadMoreContext);

  if (itemsToShow >= totalItems || !loadMore) {
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
