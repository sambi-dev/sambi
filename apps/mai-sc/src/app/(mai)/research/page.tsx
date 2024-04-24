import type { Session } from '#/lib/types';
import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { siteConfig } from '#/config/site';
import { SITE_URL } from '#/lib/constants';
import { Chat } from '#/ui/mai/chat';

export const runtime = 'edge';

export default async function ChatPage() {
  const session = (await auth()) as Session;

  if (!session?.user) {
    redirect(`/login`);
  }
  return <Chat />;
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
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
    url: pageUrl,
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
  },
};
