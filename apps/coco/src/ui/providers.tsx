'use client';

import * as React from 'react';

import { ThemeProvider } from '@sambi/ui/theme';
import { TooltipProvider } from '@sambi/ui/tooltip';

import { SidebarProvider } from '#/lib/hooks/use-sidebar';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
