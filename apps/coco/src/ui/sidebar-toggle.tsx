'use client';

import * as React from 'react';

import { Button } from '@yocxo/ui/button';
import { SidebarIcon } from '@yocxo/ui/icons';

import { useSidebar } from '#/lib/hooks/use-sidebar';

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 lg:flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <SidebarIcon className="size-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
