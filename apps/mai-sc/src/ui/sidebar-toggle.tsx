'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@yocxo/ui/button';

import { useSidebar } from '#/lib/hooks/use-sidebar';

import { MaiLogoIcon } from './mai/logo';

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  if (pathname === '/') {
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
        <MaiLogoIcon className="size-8 text-primary" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  );
}
