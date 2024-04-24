import { fontLexend } from '#/fonts/index';

import '#/app/globals.css';

import type { Metadata, Viewport } from 'next';

import { cn } from '@yocxo/ui';
import { Toaster } from '@yocxo/ui/toast';

import { siteConfig } from '#/config/site';
import { Header } from '#/ui/header';
import Footer from '#/ui/mai/footer';
import { Providers } from '#/ui/providers';
import { SidebarDesktop } from '#/ui/sidebar-desktop';

import { AI } from './(mai)/action';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? siteConfig.url
      : 'http://localhost:3010',
  ),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `${siteConfig.name} :: AI that works`,
  },
  description: siteConfig.description,
  keywords: [],
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
    site: '@supyocxo',
    creator: '@supyocxo',
    title: siteConfig.name,
    description: siteConfig.description,
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
      url: '/icons/android-chrome-512x512.png',
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
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
    { media: '(prefers-color-scheme: dark)', color: '#151A1E' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  colorScheme: 'dark light',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full scroll-smooth bg-background text-foreground antialiased',
        fontLexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Toaster position="top-center" />
        <Providers>
          <Header />
          <SidebarDesktop />
          <main className="flex flex-1 flex-col">
            <AI>{children}</AI>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
