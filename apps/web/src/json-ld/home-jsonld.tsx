import type { Graph } from 'schema-dts';

import React from 'react';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';

const HomePageJson = () => {
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': siteConfig.url,
        author: {
          '@type': 'Corporation',
          name: siteConfig.company,
          url: siteConfig.companyUrl,
          sameAs: [
            'https://www.linkedin.com/company/brillacx/',
            'https://twitter.com/brillacx',
            'https://github.com/brilla-cx',
          ],
        },
        description: siteConfig.description,
        keywords: siteConfig.keyword,
        inLanguage: 'en-US',
        isAccessibleForFree: 'True',
        name: siteConfig.name,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          sameAs: Object.values(socialConfig.links),
        },
        url: siteConfig.url,
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/#webpage`,
        about: {
          '@id': `${siteConfig.url}/#identity`,
        },
        description: siteConfig.description,
        inLanguage: 'en-US',
        isPartOf: {
          '@id': siteConfig.url,
        },
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default HomePageJson;
