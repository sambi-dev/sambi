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
  console.log('Generating unique ID for chat session');
  const id = nanoid();
  console.log('Generated ID:', id);

  console.log('Authenticating user session');
  const session = (await auth()) as Session;
  console.log('Authenticated session details:', session);

  console.log('Fetching missing keys from the session');
  const missingKeys = await getMissingKeys();
  console.log('Missing keys:', missingKeys);

  if (!session?.user) {
    console.log('No user session found, redirecting to welcome page');
    redirect(`/welcome`);
  } else {
    console.log(
      'User session found, proceeding with AI and Chat component setup',
    );
  }

  const initialAIState = { chatId: id, messages: [] };
  console.log('Setting up AI component with initial state:', initialAIState);

  return (
    <AI initialAIState={initialAIState}>
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
