import type { Metadata, Viewport } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { ThemeProvider } from '@sambi/ui/theme';
import { Toaster } from '@sambi/ui/toast';

import { env } from '#/env';

import '#/styles/tailwind.css';

import { cn } from '@sambi/ui';

import { siteConfig } from '#/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production' ? siteConfig.url : 'http://localhost:3000',
  ),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `${siteConfig.name} :: Award-winning studio`,
  },
  description: siteConfig.description,
  keywords: [
    'Best Upwork Agency',
    'Freelance MVP Studio',
    'Fractional CTO',
    'Fractional CMO',
    'Fractional CPO',
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
    images: [siteConfig.image],
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sambi_dev',
    creator: '@sambi_dev',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image.url,
        alt: siteConfig.image.alt,
      },
    ],
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple',
      url: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      url: '/icons/android-chrome-512x515.png',
      sizes: '512x512',
    },
    {
      rel: 'mask-icon',
      url: '/icons/safari-pinned-tab.svg',
    },
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0e10' },
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
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
