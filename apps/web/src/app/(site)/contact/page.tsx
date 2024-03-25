import type { Metadata } from 'next';

import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import GetInTouch from '#/ui/contact/get-in-touch';
import Locations from '#/ui/contact/locations';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';

export default function ContactPage() {
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
      <PageJson
        pageSlug="contact"
        pageName={`${title} :: ${siteConfig.name}`}
      />
    </>
  );
}

const title = 'Contact us';
const description =
  "Wanna contact us at sambi.dev? 😎 Slide into our Upwork DMs if you're new or hit us up on GitHub if you're not. We're totally stoked to hear from you. 🤙";

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
