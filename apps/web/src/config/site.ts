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
  mailSupport: string;
  links: {
    facebook: string;
    github: string;
    instagram: string;
    linkedIn: string;
    twitter: string;
    upworkAgency: string;
    upworkConsult: string;
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
    alt: 'An animated open graph image that appears to look like a Loading screen with the sambi.dev logo.',
  },
  links: {
    facebook: 'https://www.facebook.com/rebekahradicellc',
    github: 'https://github.com/sambi-dev/sambi',
    instagram: 'https://www.instagram.com/rebekahradice/',
    linkedIn: 'https://www.linkedin.com/in/rebekahradice/',
    twitter: 'https://twitter.com/sambi_dev',
    upworkAgency: 'https://www.upwork.com/agencies/sambi/',
    upworkConsult:
      'https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704',
  },
  mailSupport: env.NEXT_PUBLIC_SAMBI_SUPPORT_EMAIL,
};
