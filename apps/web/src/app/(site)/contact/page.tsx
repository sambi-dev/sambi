import type { Metadata } from 'next';

import { SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import GetInTouch from '#/ui/contact/get-in-touch';
import Locations from '#/ui/contact/locations';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Drop us a line">
        <p className="text-pretty">
          Ready to work together? Hit us up on Upwork. If you&apos;re already a
          client, use one of the links below to get in touch. We&apos;ll get
          back to you in a jiffy.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GetInTouch />
        <Border className="mt-16 pt-16" />
        <Locations />
      </Container>
    </>
  );
}

const title = 'Contact';
const description =
  "Wanna contact the us at sambi.dev? 😎 Slide into our Upwork DMs if you're new or hit us up on GitHub if you're not. We're totally stoked to hear from you. 🤙";
const imageUrl = '/opengraph-image.gif';
const imageAlt =
  'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left';
const pageUrl = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
    url: pageUrl,
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
};
