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
  links: {
    facebook: string;
    github: string;
    instagram: string;
    linkedIn: string;
    support: string;
    twitter: string;
    upworkAgency: string;
  };
  teamLinks: {
    upworkAmbreen: string;
    upworkConsult: string;
    upworkRebekah: string;
    upworkSam: string;
  };
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
    'Yo! CXO is a top Upwork agency. We help founders, startups, and fast-growing businesses achieve the outcomes they need to build products that people love.',
  image: {
    url: `${siteUrl}/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with the Yo! CXO logo (a silohuette of a French Bulldog and lower case text) in the top left.',
  },
  keyword: 'top upwork agency',
  logo: {
    url: `${siteUrl}/yocxo.com-logo.png`,
    width: 1000,
    height: 1000,
    alt: 'A lowercased logomark spelling Yo! CXO in an unusual monospaced, plain color font, with a poorly executed drop shadow.',
  },
  name: 'Yo! CXO',
  url: siteUrl,
  links: {
    upworkAgency: 'https://www.upwork.com/agencies/yocxo/',
    github: 'https://github.com/yocxo/studio',
    twitter: 'https://twitter.com/supyocxo',
    instagram: 'https://www.instagram.com/supyocxo/',
    linkedIn: 'https://www.linkedin.com/in/supyocxo/',
    facebook: 'https://www.facebook.com/supyocxo',
    support: 'https://github.com/yocxo/studio/issues/new/choose',
  },
  teamLinks: {
    upworkAmbreen: 'https://www.upwork.com/freelancers/breen',
    upworkConsult:
      'https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704',
    upworkRebekah: 'https://www.upwork.com/freelancers/rebekahrmarketing',
    upworkSam: 'https://www.upwork.com/freelancers/rizvio',
  },
};
