import type { UIState } from '#/lib/chat/actions';
import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { getSharedChat } from '#/app/actions';
import { siteConfig } from '#/config/site';
import { AI, getUIStateFromAIState } from '#/lib/chat/actions';
import { SITE_URL } from '#/lib/constants';
import { formatDate } from '#/lib/utils';
import { ChatList } from '#/ui/chat-list';
import { FooterText } from '#/ui/footer';

export const runtime = 'edge';
export const preferredRegion = 'home';

interface SharePageProps {
  params: {
    id: string;
  };
}

export default async function SharePage({ params }: SharePageProps) {
  const chat = await getSharedChat(params.id);

  if (!chat?.sharePath) {
    notFound();
  }

  const uiState: UIState = getUIStateFromAIState(chat);

  return (
    <>
      <div className="flex-1 space-y-6">
        <div className="border-b bg-background px-4 py-6 md:px-6 md:py-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-1 md:-mx-8">
              <h1 className="font-mono text-2xl font-semibold tracking-tighter">
                {chat.title}
              </h1>
              <div className="text-sm text-muted-foreground">
                {formatDate(chat.createdAt)} · {chat.messages.length} messages
              </div>
            </div>
          </div>
        </div>
        <AI>
          <ChatList messages={uiState} isShared={true} />
        </AI>
      </div>
      <FooterText className="py-8" />
    </>
  );
}

export async function generateMetadata({
  params,
}: SharePageProps): Promise<Metadata> {
  const chat = await getSharedChat(params.id);
  const title =
    chat?.title.slice(0, 50) ?? 'CocoGPT Chat powered by Vercel x Yo! CXO';
  const description = siteConfig.description;
  const pageUrl = `${SITE_URL}/share/${params.id}`;

  return {
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
}
