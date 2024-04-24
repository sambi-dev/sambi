import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { siteConfig } from '#/config/site';
import { SITE_URL } from '#/lib/constants';

export default async function NewPage() {
  redirect('/research');
}

const title = 'New chat';
const description =
  "If you're able to share this page then we're not doing something right. The new chat page is handled by home.";
const pageUrl = `${SITE_URL}/new`;

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
