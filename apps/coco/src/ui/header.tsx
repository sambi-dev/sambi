import type { Session } from '#/lib/types';

import * as React from 'react';
import Link from 'next/link';

import { auth } from 'auth';

import { cn } from '@yocxo/ui';
import { Button, buttonVariants } from '@yocxo/ui/button';
import { UpworkIcon } from '@yocxo/ui/icons';
import { Logomark } from '@yocxo/ui/logo';
import { Separator } from '@yocxo/ui/separator';

import { siteConfig } from '#/config/site';
import { UserMenu } from '#/ui/user-menu';

import { ChatHistory } from './chat-history';
import { SidebarMobile } from './sidebar-mobile';
import { SidebarToggle } from './sidebar-toggle';

async function UserOrLogin() {
  const session = (await auth()) as Session;
  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/new" rel="nofollow">
          <Logomark className="mr-2 size-8" />
        </Link>
      )}
      <div className="flex items-center">
        <Separator className="mx-6 h-6 bg-primary" orientation="vertical" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="link" asChild className="-ml-2">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'text-xs shadow-none',
              )}
            >
              Login
            </Link>
          </Button>
        )}
      </div>
    </>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-card px-4 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2 text-foreground">
        <a
          href={siteConfig.links.upworkAgency}
          target="_blank"
          className={cn(buttonVariants({ size: 'sm' }), 'text-xs')}
          rel="noopener noreferrer"
          aria-label="Hire us on Upwork to build your AI powered chatbot today. Opens in a new window."
        >
          <UpworkIcon className="mr-2" />
          <span className="hidden sm:block">Build yours</span>
          <span className="sm:hidden">Hire us</span>
        </a>
      </div>
    </header>
  );
}
