import type { Session } from '#/lib/types';

import * as React from 'react';
import Link from 'next/link';

import { auth } from 'auth';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';

import { UserMenu } from '#/ui/user-menu';

import { UserOrLogin } from './user-or-login';

export async function Header() {
  const session = (await auth()) as Session;
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-card px-4 backdrop-blur-xl">
      <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
        <UserOrLogin />
      </React.Suspense>
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
    </header>
  );
}
