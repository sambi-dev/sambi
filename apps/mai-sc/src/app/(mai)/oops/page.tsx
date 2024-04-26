import type { Metadata, NextPage } from 'next';

import { SITE_URL } from '#/lib/constants';

const OopsPage: NextPage = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24 lg:mt-40">
        <p className="text-base font-semibold uppercase leading-8 text-primary">
          Rate limit reached
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          You&apos;ve reached your limit
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          You know the saying everything has a limit? You&apos;ve reached your
          temporary limit of 5 requests per 60 seconds. Hold on a bit and
          you&apos;ll be good to go.
        </p>
      </div>
    </main>
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
    url: pageUrl,
  },
  twitter: {
    title,
    description,
  },
};
