import { cache } from 'react';

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
      <div className="flex items-center justify-between px-2">
        <ThemeToggle flat />
        <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} />
      </div>
    </div>
  );
}
