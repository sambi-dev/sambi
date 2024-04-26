import Link from 'next/link';

import { auth } from 'auth';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';

import { ChatHistory } from './chat-history';
import { MaiLogoIcon } from './logo';
import { SidebarMobile } from './sidebar-mobile';
import { SidebarToggle } from './sidebar-toggle';

export async function UserOrLogin() {
  const session = (await auth())!;
  return (
    <div className="flex items-center">
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <>
          <Link
            href="/"
            className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }))}
          >
            <MaiLogoIcon className="size-8" />
          </Link>
        </>
      )}
    </div>
  );
}
