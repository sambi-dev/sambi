import type { Metadata, Viewport } from 'next';

import { fontLexend, fontMartian } from '#/fonts/index';

import '#/styles/tailwind.css';

import { cn } from '@yocxo/ui';

import { siteConfig } from '#/config/site';
import { Providers } from '#/ui/providers/providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? siteConfig.url
      : 'http://localhost:3000',
  ),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `${siteConfig.name} :: Top Upwork Agency`,
  },
  description: siteConfig.description,
  keywords: [
    'Top Upwork Agency',
    'Best Upwork Agency',
    'Fractional CTO',
    'Fractional CMO',
    'Fractional COO',
    'Rebekah Radice',
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: 'Rebekah Radice',
  category: 'Upwork Agency',
  robots: {
    follow: false,
    index: false,
  },
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yocxo',
    creator: '@yocxo',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e1f' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full scroll-smooth bg-background text-foreground antialiased',
        fontLexend.variable,
        fontMartian.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
