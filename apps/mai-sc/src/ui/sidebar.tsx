'use client';

import * as React from 'react';

import { cn } from '@yocxo/ui';

import { useSidebar } from '#/lib/hooks/use-sidebar';

export type SidebarProps = React.ComponentProps<'div'>;

export function Sidebar({ className, children }: SidebarProps) {
  const { isSidebarOpen, isLoading } = useSidebar();

  return (
    <div
      data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
      className={cn(className, 'h-full flex-col bg-muted')}
    >
      {children}
    </div>
  );
}
