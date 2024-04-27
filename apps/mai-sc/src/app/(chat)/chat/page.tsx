import type { Session } from '#/lib/types';
import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { getMissingKeys } from '#/app/actions';
import { siteConfig } from '#/config/site';
import { AI } from '#/lib/chat/actions';
import { nanoid } from '#/lib/utils';
import { Chat } from '#/ui/chat';

export default async function IndexPage() {
  const id = nanoid();
  const session = (await auth()) as Session;
  const missingKeys = await getMissingKeys();

  if (!session?.user) {
    redirect(`/login`);
  }

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} missingKeys={missingKeys} />
    </AI>
  );
}

const title = 'MaiGPT';
const description = siteConfig.description;
const pageUrl = siteConfig.url;

export const metadata: Metadata = {
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
