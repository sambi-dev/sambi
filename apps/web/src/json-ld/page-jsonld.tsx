import type { Graph } from 'schema-dts';

import React from 'react';

import { siteConfig } from '#/config/site';

interface PageJsonProps {
  pageName: string;
  pageSlug: string;
  keyword: string;
}

const PageJson = ({ pageName, pageSlug, keyword }: PageJsonProps) => {
  const siteId = `${siteConfig.url}/#site`;
  const pageId = `${siteConfig.url}/${pageSlug}/#page`;
  const organizationId = `${siteConfig.url}/#organization`;
  const corporationId = `${siteConfig.url}/#corporation`;

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Corporation',
        '@id': corporationId,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.companyLogo.url,
        },
        name: siteConfig.company,
        sameAs: [
          'https://www.linkedin.com/company/brillacx/',
          'https://twitter.com/brillacx',
          'https://github.com/brilla-cx',
        ],
        url: siteConfig.companyUrl,
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        description: siteConfig.description,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.logo.url,
        },
        name: siteConfig.name,
        sameAs: Object.values(siteConfig.links),
        url: siteConfig.url,
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        description: siteConfig.description,
        inLanguage: 'en-US',
        isAccessibleForFree: 'True',
        name: siteConfig.name,
        publisher: { '@id': organizationId },
        sourceOrganization: { '@id': corporationId },
        url: siteConfig.url,
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        about: { '@id': organizationId },
        inLanguage: 'en-US',
        isPartOf: { '@id': siteId },
        mainEntity: { '@id': organizationId },
        name: pageName,
        url: `${siteConfig.url}/${pageSlug}`,
        keywords: keyword,
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

export default PageJson;
