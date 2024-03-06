import type { Metadata, Viewport } from 'next';

import { ThemeProvider } from '@sambi/ui/theme';
import { Toaster } from '@sambi/ui/toast';

import { env } from '#/env';

import { fontBricolage } from '../fonts/index';

import '#/styles/tailwind.css';

import { cn } from '@sambi/ui';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://sambi.dev'
      : 'http://localhost:3000',
  ),
  title: {
    template: '%s :: sambi',
    default: 'sambi :: Award-winning studio',
  },
  description: 'Simple monorepo with shared backend for web & mobile apps',
  openGraph: {
    title: 'Create T3 Turbo',
    description: 'Simple monorepo with shared backend for web & mobile apps',
    url: 'https://create-t3-turbo.vercel.app',
    siteName: 'Create T3 Turbo',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jullerino',
    creator: '@jullerino',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fbf9' },
    { media: '(prefers-color-scheme: dark)', color: '#101211' },
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
        fontBricolage.variable,
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
