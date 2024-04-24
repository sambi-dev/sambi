'use client';

import React from 'react';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { ThemeToggle } from '@yocxo/ui/theme';

import { MaiLogoIcon } from '#/ui/mai/logo';

export const Header: React.FC = () => {
  return (
    <header className="fixed z-10 flex w-full bg-background/80 p-0 backdrop-blur md:bg-transparent md:p-2 md:backdrop-blur-none">
      <div className="flex w-full flex-row items-center justify-between px-4 py-2 lg:px-8">
        <Link href="/">
          <MaiLogoIcon className={cn('size-10')} />
          <span className="sr-only">Mai</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
