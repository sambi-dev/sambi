import type { Session } from '#/lib/types';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { Chat } from '#/ui/mai/chat';

export const runtime = 'edge';

export default async function ChatPage() {
  const session = (await auth()) as Session;

  if (!session?.user) {
    redirect(`/login`);
  }
  return <Chat />;
}
