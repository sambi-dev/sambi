'use client';

import * as React from 'react';

import { ThemeProvider } from '@yocxo/ui/theme';
import { TooltipProvider } from '@yocxo/ui/tooltip';

import { SidebarProvider } from '#/lib/hooks/use-sidebar';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
