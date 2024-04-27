import { auth } from 'auth';

import { ChatHistory } from './chat-history';
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
      ) : null}
    </div>
  );
}
