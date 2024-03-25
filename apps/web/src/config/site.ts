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
  image: Image;
  name: string;
  logo: Image;
  url: string;
  links: {
    facebook: string;
    github: string;
    instagram: string;
    linkedIn: string;
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
    'sambi.dev is a premiere Upwork agency. We help founders, startups, and fast-growing businesses turn their ideas into products that people love. 🔥',
  image: {
    url: `${siteUrl}/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left.',
  },
  logo: {
    url: `${siteUrl}/sambi-logo.png`,
    width: 1000,
    height: 1000,
    alt: 'A lowercased logomark spelling sambi in a plain color with a poorly executed drop shadow.',
  },
  name: 'sambi.dev',
  url: siteUrl,
  links: {
    facebook: 'https://www.facebook.com/rebekahradicellc',
    github: 'https://github.com/sambi-dev/sambi',
    instagram: 'https://www.instagram.com/rebekahradice/',
    linkedIn: 'https://www.linkedin.com/in/rebekahradice/',
    twitter: 'https://twitter.com/sambi_dev',
    upworkAgency: 'https://www.upwork.com/agencies/sambi/',
  },
  teamLinks: {
    upworkAmbreen: 'https://www.upwork.com/freelancers/breen',
    upworkConsult:
      'https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704',
    upworkRebekah: 'https://www.upwork.com/freelancers/rebekahrmarketing',
    upworkSam: 'https://www.upwork.com/freelancers/rizvio',
  },
};
