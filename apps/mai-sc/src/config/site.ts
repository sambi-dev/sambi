import { SITE_URL } from '#/lib/constants';

const siteUrl = SITE_URL;

interface SiteConfig {
  company: string;
  companyUrl: string;
  description: string;
  keyword: string;
  name: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  company: 'BRIL.LA, LLC.',
  companyUrl: 'https://bril.la',
  description:
    'Mai x Smarcomms is an experiment to incorporate AI into our workflow at Smarcomms. It will help us serve our customers better by enabling deeper empathy. #JTBD',
  keyword: 'AI for work',
  name: 'MAI x Smarcomms Beta',
  url: siteUrl,
};
