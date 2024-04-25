import type { Session } from '#/lib/types';

import React from 'react';
import Link from 'next/link';

import { auth } from 'auth';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';

import { MaiLogoIcon } from './mai/logo';
import { UserMenu } from './user-menu';
import { UserOrLogin } from './user-or-login';

const navigation = [
  { name: 'New', href: '/new' },
  { name: 'Research', href: '/research' },
  { name: 'Chat', href: '/chat' },
];

export async function Header() {
  const session = (await auth()) as Session;
  return (
    <header className="fixed z-50 h-16 w-full bg-card px-4">
      <nav
        className="mx-auto flex items-center justify-between py-4"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center">
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserOrLogin />
          </React.Suspense>
          <div className="ml-12 hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-secondary-foreground transition-colors hover:text-muted-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/">
          <MaiLogoIcon className="size-10 text-foreground" />
        </Link>
        <div className="flex flex-1 justify-end">
          {session?.user ? (
            <>
              <div className="flex items-center justify-end">
                <UserMenu user={session.user} />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-end">
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ size: 'sm', variant: 'primary' }),
                  'font-sans text-xs tracking-normal shadow-none dark:text-zinc-950',
                )}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
