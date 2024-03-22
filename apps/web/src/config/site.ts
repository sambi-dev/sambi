import { env } from '#/env';
import { SITE_URL } from '#/lib/constants';

const siteUrl = SITE_URL;

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface SiteConfig {
  name: string;
  description: string;
  url: string;
  image: Image;
  links: {
    facebook: string;
    github: string;
    instagram: string;
    linkedIn: string;
    twitter: string;
    upworkAgency: string;
    upworkAmbreen: string;
    upworkConsult: string;
    upworkRebekah: string;
    upworkSam: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'sambi.dev',
  description:
    'sambi.dev is a premiere Upwork agency. We help founders, startups, and fast-growing businesses turn their ideas into products that people love. 🔥',
  url: siteUrl,
  image: {
    url: `${siteUrl}/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left.',
  },
  links: {
    facebook: 'https://www.facebook.com/rebekahradicellc',
    github: 'https://github.com/sambi-dev/sambi',
    instagram: 'https://www.instagram.com/rebekahradice/',
    linkedIn: 'https://www.linkedin.com/in/rebekahradice/',
    twitter: 'https://twitter.com/sambi_dev',
    upworkAgency: 'https://www.upwork.com/agencies/sambi/',
    upworkAmbreen: 'https://www.upwork.com/freelancers/breen',
    upworkConsult:
      'https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704',
    upworkRebekah: 'https://www.upwork.com/freelancers/rebekahrmarketing',
    upworkSam: 'https://www.upwork.com/freelancers/rizvio',
  },
};
