'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from '@yocxo/ui/theme';
import { Toaster } from '@yocxo/ui/toast';

import { ToolbarProvider } from '#/ui/providers/toolbar-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <Toaster />
      <ToolbarProvider />
    </ThemeProvider>
  );
}
