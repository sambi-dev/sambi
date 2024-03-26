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
  name: 'By Yo CXO',
  description:
    'cocoGPT is an experimental wrapper by Yo CXO. Powered by Vercel AI and forked from their Chat repo. We added a little something something of our own. 🍌🍌',
  url: siteUrl,
  image: {
    url: `${siteUrl}/opengraph-image.gif`,
    width: 1200,
    height: 630,
    alt: 'Loading screen animation with pulsing text that spells out "Loading..." with the Yo CXO logo (a silohuette of a French Bulldog and lower case text) in the top left.',
  },
  links: {
    facebook: 'https://www.facebook.com/rebekahradicellc',
    github: 'https://github.com/yocxo/studio',
    instagram: 'https://www.instagram.com/rebekahradice/',
    linkedIn: 'https://www.linkedin.com/in/rebekahradice/',
    twitter: 'https://twitter.com/supyocxo',
    upworkAgency: 'https://www.upwork.com/agencies/yocxo/',
    upworkAmbreen: 'https://www.upwork.com/freelancers/breen',
    upworkConsult:
      'https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704',
    upworkRebekah: 'https://www.upwork.com/freelancers/rebekahrmarketing',
    upworkSam: 'https://www.upwork.com/freelancers/rizvio',
  },
};
