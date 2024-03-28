import type { Graph } from 'schema-dts';

import React from 'react';

import { siteConfig } from '#/config/site';

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
          logo: siteConfig.companyLogo.url,
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
          logo: {
            '@type': 'ImageObject',
            url: siteConfig.logo.url,
          },
          sameAs: Object.values(siteConfig.links),
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
