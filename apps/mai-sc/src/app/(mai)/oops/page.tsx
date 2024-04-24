import type { Metadata, NextPage } from 'next';

import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';
import { SITE_URL } from '#/lib/constants';

const OopsPage: NextPage = () => {
  return (
    <div className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-medium text-primary">Oops</p>
        <h1 className="mt-4 text-3xl font-medium text-foreground">
          Rate limit reached
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
          You&apos;ve reached your fair usage rate limit. It usually resets in a
          couple of minutes. Can&apos;t wait? Choose a plan that&apos;s right
          for you.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="/"
            aria-label="Upgrade plan"
            className={cn(
              buttonVariants(),
              'rounded-full font-sans tracking-normal dark:text-zinc-950',
            )}
          >
            Upgrade?
          </Link>
          <Link
            href={socialConfig.links.support}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'rounded-full font-sans tracking-normal',
            )}
          >
            Contact support
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OopsPage;

const title = 'Rate Limit Reached';
const description =
  "You know the saying everything has a limit? You've reached your temporary limit of 5 requests per 60 seconds. Hold on a bit and you'll be good to go.";
const pageUrl = `${SITE_URL}/oops`;

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
