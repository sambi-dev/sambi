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
  companyLogo: Image;
  companyUrl: string;
  description: string;
  keyword: string;
  image: Image;
  name: string;
  logo: Image;
  url: string;
}

export const siteConfig: SiteConfig = {
  company: 'BRIL.LA, LLC.',
  companyLogo: {
    url: `${siteUrl}/brilla-logo.png`,
    width: 1639,
    height: 821,
    alt: "A lowercased logomark spelling brilla (rhymes with see ya) in a plain color with an icon consistent of a colon and two forward slashes representing the i and l's in the name.",
  },
  companyUrl: 'https://bril.la',
  description:
    "Mai by Yo! CXO is an exploration in generative UI interfaces with a Perplexity AI like UX. It's AI for business that helps get work done. A fork of morphic.sh.",
  image: {
    url: `${siteUrl}/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with an M icon in the shape of a cute dog face in the top left and the Yo! CXO logo in the top right.',
  },
  keyword: 'AI for work',
  logo: {
    url: `${siteUrl}/icon.png`,
    width: 1000,
    height: 1000,
    alt: 'A representation of an M with a cute little nose, shaped to look like a negative spaced dog.',
  },
  name: 'I AM MAI',
  url: siteUrl,
};
