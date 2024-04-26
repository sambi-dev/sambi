import { cache } from 'react';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { PlusIcon } from '@yocxo/ui/icons';
import { ThemeToggle } from '@yocxo/ui/theme';

import { clearChats, getChats } from '#/app/actions';
import { ClearHistory } from '#/ui/clear-history';
import { SidebarItems } from '#/ui/sidebar-items';

interface SidebarListProps {
  userId?: string;
  children?: React.ReactNode;
}

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId);
});

export async function SidebarList({ userId }: SidebarListProps) {
  const chats = await loadChats(userId);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-2 pl-2">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="mb-2 px-2 sm:hidden">
        <Link
          href="/new"
          className={cn(
            buttonVariants(),
            'w-full rounded-full font-sans tracking-normal text-white dark:text-black',
          )}
        >
          <PlusIcon className="-translate-x-2 stroke-2 text-white dark:text-black" />
          New
        </Link>
      </div>
      <div className="flex items-center justify-between px-2 py-4 sm:py-2">
        <ThemeToggle flat />
        <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} />
      </div>
    </div>
  );
}
