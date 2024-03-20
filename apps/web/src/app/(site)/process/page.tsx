import type { Metadata } from 'next';

import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { PageIntro } from '#/ui/page-intro';
import { AnalyzeImprove } from '#/ui/process/analyze-improve';
import { BuildExecute } from '#/ui/process/build-execute';
import { DiscoveryAssimilation } from '#/ui/process/discovery-assimilate';
import { PlanningDefinition } from '#/ui/process/planning-definition';
import { Values } from '#/ui/process/values';

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our Secret Formula" title="Innovatively recycled">
        <p>
          At sambi.dev, we&apos;re eco-friendly with our ideas. We relentlessly
          recycle the same projects over and over again. Why explore new
          horizons when you can just repaint the old ones and call it
          groundbreaking.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <DiscoveryAssimilation />
        <PlanningDefinition />
        <BuildExecute />
        <AnalyzeImprove />
      </div>
      <Values />
      <ContactSection />
    </>
  );
}

const title = 'Process';
const description =
  "Discover and be assimilated in our process at sambi.dev. Our secret formula? Stalking, re-purposing, and overcharging for stuff you probably don't need. 🤑";
const imageUrl = '/opengraph-image.gif';
const imageAlt =
  'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left';
const pageUrl = `${SITE_URL}/about`;

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
