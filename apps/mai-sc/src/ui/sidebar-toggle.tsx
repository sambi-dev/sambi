'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@yocxo/ui/button';
import { SidebarIcon } from '@yocxo/ui/icons';

import { useSidebar } from '#/lib/hooks/use-sidebar';

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  if (!(pathname === '/' || pathname.startsWith('/chat'))) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="-ml-2 hidden p-0 lg:flex"
        onClick={() => {
          toggleSidebar();
        }}
      >
        <SidebarIcon className="size-6 text-secondary-foreground sm:mr-6" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  );
}
