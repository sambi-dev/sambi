import type { StreamableValue } from 'ai/rsc';

import React, { useEffect, useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { useStreamableValue } from 'ai/rsc';

import { cn } from '@yocxo/ui';
import { Button } from '@yocxo/ui/button';
import { ChevronDownIcon } from '@yocxo/ui/icons';
import { Separator } from '@yocxo/ui/separator';

interface CollapsibleMessageProps {
  message: {
    id: number;
    isCollapsed?: StreamableValue<boolean>;
    component: React.ReactNode;
  };
  isLastMessage?: boolean;
}

export const CollapsibleMessage: React.FC<CollapsibleMessageProps> = ({
  message,
  isLastMessage = false,
}) => {
  const [data] = useStreamableValue(message.isCollapsed);
  const isCollapsed = data ?? false;
  const [open, setOpen] = useState(isLastMessage);

  useEffect(() => {
    setOpen(isLastMessage);
  }, [isCollapsed, isLastMessage]);

  // if not collapsed, return the component
  if (!isCollapsed) {
    return message.component;
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <CollapsibleTrigger asChild>
        <div
          className={cn(
            'flex w-full justify-end',
            !isCollapsed ? 'hidden' : '',
          )}
        >
          <Button
            variant="ghost"
            size={'icon'}
            className={cn('-mt-3 rounded-full')}
          >
            <ChevronDownIcon
              className={cn(
                open ? 'rotate-180' : 'rotate-0',
                'size-6 transition-all',
              )}
            />
            <span className="sr-only">collapse</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>{message.component}</CollapsibleContent>
      {!open && <Separator className="my-2 bg-primary/50" />}
    </Collapsible>
  );
};
