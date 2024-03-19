'use client';

import { Children, createContext, useContext, useState } from 'react';

import { Button } from '@sambi/ui/button';

import { ArrowDownIcon } from '#/ui/shared/icons';

const ExpandableContext = createContext({
  isExpanded: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  expand: () => {},
});

export function Expandable(props: React.ComponentPropsWithoutRef<'div'>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true);
        },
      }}
    >
      <div {...props} data-expanded={isExpanded ? '' : undefined} />
    </ExpandableContext.Provider>
  );
}

export function ExpandableItems({
  children,
  limit = 2,
}: {
  children: React.ReactNode;
  limit?: number;
}) {
  const { isExpanded } = useContext(ExpandableContext);

  return Children.toArray(children).slice(0, isExpanded ? undefined : limit);
}

export function ExpandableButton({ children }: { children: React.ReactNode }) {
  const { isExpanded, expand } = useContext(ExpandableContext);

  return (
    !isExpanded && (
      <div className="mt-10 flex justify-center">
        <Button size="lg" variant="secondary" onClick={expand}>
          {children}
          <ArrowDownIcon className="ml-2 h-3 w-3" />
        </Button>
      </div>
    )
  );
}
