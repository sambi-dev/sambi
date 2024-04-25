import { auth } from 'auth';

import { ChatHistory } from '#/ui/chat-history';
import { Sidebar } from '#/ui/sidebar';

export async function SidebarDesktop() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden min-h-full -translate-x-full border-r bg-muted pt-16 duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      <ChatHistory userId={session.user.id} />
    </Sidebar>
  );
}
