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
  const session = (await auth()) as Session;
  const missingKeys = await getMissingKeys();

  if (!session?.user) {
    redirect(`/login?next=/chat/${params.id}`);
  }

  const userId = session.user.id;
  const chat = await getChat(params.id, userId);

  if (!chat) {
    redirect('/chat');
  }

  if (chat?.userId !== session?.user?.id) {
    notFound();
  }

  return (
    <AI initialAIState={{ chatId: chat.id, messages: chat.messages }}>
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
