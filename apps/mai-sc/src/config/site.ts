import { SITE_URL } from '#/lib/constants';

const siteUrl = SITE_URL;

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface SiteConfig {
  company: string;
  companyUrl: string;
  description: string;
  keyword: string;
  image: Image;
  name: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  company: 'BRIL.LA, LLC.',
  companyUrl: 'https://bril.la',
  description:
    "Mai by Yo! CXO is an exploration in generative UI interfaces with a Perplexity AI like UX. It's AI for business that helps get work done. A fork of morphic.sh.",
  image: {
    url: `/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with an M icon in the shape of a cute dog face in the top left and the Yo! CXO logo in the top right.',
  },
  keyword: 'AI for work',
  name: 'MAI x Smarcomms Beta',
  url: siteUrl,
};
