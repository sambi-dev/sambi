import type { Metadata } from 'next';

import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { PageIntro } from '#/ui/page-intro';
import { AnalyzeImprove } from '#/ui/process/analyze-improve';
import { BuildExecute } from '#/ui/process/build-execute';
import { DiscoveryAssimilation } from '#/ui/process/discovery-assimilate';
import { PlanningDefinition } from '#/ui/process/planning-definition';
import { Values } from '#/ui/process/values';

export default function ProcessPage() {
  return (
    <>
      <PageIntro eyebrow="Our Secret Formula" title="Innovatively recycled">
        <p>
          At Yo! CXO, we&apos;re eco-friendly with our ideas. We relentlessly
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
      <PageJson
        pageSlug="process"
        pageName={`${title} :: ${siteConfig.name}`}
        keyword="fractional coo"
      />
    </>
  );
}

const title = 'The Process';
const description =
  "Discover and be assimilated in our process at Yo! CXO. Our secret formula? Stalking, re-purposing, and overcharging for stuff you probably don't need. 🤑";

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
