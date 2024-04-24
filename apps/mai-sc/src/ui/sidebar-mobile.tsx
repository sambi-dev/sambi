'use client';

import { Button } from '@yocxo/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@yocxo/ui/sheet';

import { Sidebar } from '#/ui/sidebar';

import { MaiLogoIcon } from './mai/logo';

interface SidebarMobileProps {
  children: React.ReactNode;
}

export function SidebarMobile({ children }: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="-ml-2 flex p-0 lg:hidden">
          <MaiLogoIcon className="size-8 text-primary" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[300px] flex-col p-0"
      >
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  );
}
