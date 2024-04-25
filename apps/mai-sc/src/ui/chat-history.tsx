import * as React from 'react';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { PlusIcon } from '@yocxo/ui/icons';

import { SidebarList } from '#/ui/sidebar-list';

interface ChatHistoryProps {
  userId?: string;
}

export async function ChatHistory({ userId }: ChatHistoryProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-2 py-4">
        <h4 className="text-sm font-semibold tracking-tighter">Chat History</h4>
      </div>
      <div className="mb-2 px-2">
        <Link
          href="/new"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'w-full rounded-full bg-primary font-sans tracking-normal text-white shadow-none hover:bg-primary/80 dark:text-black',
          )}
        >
          <PlusIcon className="-translate-x-2 stroke-2 text-white dark:text-black" />
          New
        </Link>
      </div>
      <React.Suspense
        fallback={
          <div className="flex flex-1 flex-col space-y-4 overflow-auto px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-full shrink-0 animate-pulse rounded-md"
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
