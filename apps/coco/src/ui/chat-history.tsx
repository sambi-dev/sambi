import * as React from 'react';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';
import { PlusIcon } from '@sambi/ui/icons';

import { SidebarList } from '#/ui/sidebar-list';

interface ChatHistoryProps {
  userId?: string;
}

export async function ChatHistory({ userId }: ChatHistoryProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between p-4">
        <h4 className="font-mono text-sm font-semibold tracking-tighter">
          Chat History
        </h4>
      </div>
      <div className="mb-2 px-2">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'h-10 w-full justify-start bg-border px-4 shadow-none hover:bg-primary/20',
          )}
        >
          <PlusIcon className="-translate-x-2 stroke-2 text-primary" />
          New Chat
        </Link>
      </div>
      <React.Suspense
        fallback={
          <div className="flex flex-1 flex-col space-y-4 overflow-auto px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-full shrink-0 animate-pulse rounded-md bg-muted"
              />
            ))}
          </div>
        }
      >
        <SidebarList userId={userId} />
      </React.Suspense>
    </div>
  );
}
