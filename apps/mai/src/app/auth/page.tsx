import type { Metadata } from 'next';

import { siteConfig } from '#/config/site';
import { SITE_URL } from '#/lib/constants';
import Authentication from '#/ui/auth';

export default async function AuthPage() {
  return (
    <main className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col border-r p-10 lg:flex">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-card to-background" />
        <div className="relative z-20 mb-16 mt-auto">
          <blockquote className="space-y-2">
            <p className="py-2 text-2xl text-secondary-foreground">
              &ldquo;I&apos;m particularly worried that these models could be
              used for large-scale disinformation.&rdquo;
            </p>
            <footer className="text-sm font-medium text-primary">
              Sam Altman
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
        <Authentication />
      </div>
    </main>
  );
}

const title = 'Authentication';
const description =
  'Ready to get some jobs done? Mai will help you get to know your clients faster than you can authenticate.';
const pageUrl = `${SITE_URL}/auth`;

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
