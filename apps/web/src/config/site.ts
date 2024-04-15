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
    'Yo! CXO is a top Upwork agency. We help founders, startups, and fast-growing businesses achieve the outcomes they need to build products that people love.',
  image: {
    url: `/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with the Yo! CXO logo (a silhouette of a French Bulldog and lower case text) in the top left.',
  },
  keyword: 'top upwork agency',
  name: 'Yo! CXO',
  url: siteUrl,
};
