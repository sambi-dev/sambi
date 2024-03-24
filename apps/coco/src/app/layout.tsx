import { fontLexend, fontMartian } from '#/fonts/index';

import '#/app/globals.css';

import { cn } from '@sambi/ui';
import { ThemeToggle } from '@sambi/ui/theme';
import { Toaster } from '@sambi/ui/toast';

import { siteConfig } from '#/config/site';
import { env } from '#/env';
import { Header } from '#/ui/header';
import { Providers } from '#/ui/providers';

export const metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production' ? siteConfig.url : 'http://localhost:3003',
  ),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `CocoGPT :: By sambi.dev`,
  },
  description: siteConfig.description,
  keywords: [
    'ChatGPT Template',
    'Best ChatGPT Wrapper',
    'Upwork AI',
    'AI Development Studio',
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
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/favicon-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
    },
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e1f' },
  ],
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
        fontMartian.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Toaster position="top-center" />
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <div className="fixed bottom-6 right-6 hidden sm:block">
            <ThemeToggle />
          </div>
        </Providers>
      </body>
    </html>
  );
}
