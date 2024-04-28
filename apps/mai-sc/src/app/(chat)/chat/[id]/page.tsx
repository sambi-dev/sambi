import type { Session } from '#/lib/types';
import type { Metadata } from 'next';

import { notFound, redirect } from 'next/navigation';

import { auth } from 'auth';

import { getChat, getMissingKeys } from '#/app/actions';
import { siteConfig } from '#/config/site';
import { AI } from '#/lib/chat/actions';
import { SITE_URL } from '#/lib/constants';
import { Chat } from '#/ui/chat';

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  console.log(`[Chat ID: ${params.id}] Authenticating user session`);
  const session = (await auth()) as Session;
  console.log(
    `[Chat ID: ${params.id}] Authenticated session details:`,
    session,
  );

  if (!session?.user) {
    console.log(
      `[Chat ID: ${params.id}] No user session found, redirecting to login page`,
    );
    redirect(`/login?next=/chat/${params.id}`);
    return;
  }

  console.log(`[Chat ID: ${params.id}] Fetching chat details`);
  const chat = await getChat(params.id, session.user.id);
  console.log(`[Chat ID: ${params.id}] Fetched chat details:`, chat);

  if (!chat) {
    console.log(
      `[Chat ID: ${params.id}] No chat found, redirecting to home page`,
    );
    redirect('/');
    return;
  }

  if (chat?.userId !== session?.user?.id) {
    console.log(
      `[Chat ID: ${params.id}] User ID mismatch, raising not found error`,
    );
    notFound();
    return;
  }

  console.log(`[Chat ID: ${params.id}] Fetching missing keys from the session`);
  const missingKeys = await getMissingKeys();
  console.log(`[Chat ID: ${params.id}] Missing keys:`, missingKeys);

  const initialAIState = { chatId: chat.id, messages: chat.messages };
  console.log(
    `[Chat ID: ${params.id}] Setting up AI component with initial state:`,
    initialAIState,
  );

  return (
    <AI initialAIState={initialAIState}>
      <Chat
        id={chat.id}
        session={session}
        initialMessages={chat.messages}
        missingKeys={missingKeys}
      />
    </AI>
  );
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const session = await auth();

  if (!session?.user) {
    return {};
  }

  if (!params.id || !session.user.id) {
    return {
      title: siteConfig.name,
      description: siteConfig.description,
      openGraph: {
        type: 'website',
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
      },
      twitter: {
        title: siteConfig.name,
        description: siteConfig.description,
      },
    };
  }

  const chat = await getChat(params.id, session.user.id);
  const title = chat?.title?.toString().slice(0, 50) ?? 'MaiGPT x Smarcomms';
  const description = siteConfig.description;
  const pageUrl = `${SITE_URL}/chat/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: pageUrl,
    },
    twitter: {
      title,
      description,
    },
  };
}
