import type { Session } from '#/lib/types';
import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { SITE_URL } from '#/lib/constants';
import { MaiChat } from '#/ui/mai/mai-chat';

import { AI } from '../action';

export const runtime = 'edge';

export default async function ChatPage() {
  const session = (await auth()) as Session;

  if (!session?.user) {
    redirect(`/login`);
  }
  return (
    <AI>
      <MaiChat />
    </AI>
  );
}

const title = 'Mai';
const description =
  "I am Mai. I'm here to help you with your research and delight your customers. Thanks to the resolve of Smarcomms' CEO, I'm going to keep getting better.";
const pageUrl = `${SITE_URL}/research`;

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
