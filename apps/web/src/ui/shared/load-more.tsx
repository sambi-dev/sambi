'use client';

import React, { Children, createContext, useContext, useState } from 'react';

import { Button } from '@sambi/ui/button';

import { ArrowDownIcon } from './icons';

const LoadMoreContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadMore: () => {},
  itemsToShow: 10,
});

export function LoadMore(props: React.ComponentPropsWithoutRef<'div'>) {
  const [itemsToShow, setItemsToShow] = useState(10);

  const loadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
  };

  return (
    <LoadMoreContext.Provider value={{ loadMore, itemsToShow }}>
      <div {...props} />
    </LoadMoreContext.Provider>
  );
}

export function LoadMoreItems({ children }: { children: React.ReactNode }) {
  const { itemsToShow } = useContext(LoadMoreContext);

  return <>{Children.toArray(children).slice(0, itemsToShow)}</>;
}

export function LoadMoreButton({ children }: { children: React.ReactNode }) {
  const { loadMore } = useContext(LoadMoreContext);

  return (
    <div className="mt-10 flex justify-center">
      <Button size="lg" variant="secondary" onClick={loadMore}>
        {children}
        <ArrowDownIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
