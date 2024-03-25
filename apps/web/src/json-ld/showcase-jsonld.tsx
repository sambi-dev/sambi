import type { Article, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';

interface ShowcaseBriefJsonProps {
  dateModified: string;
  datePublished: string;
  description: string;
  slug: string;
  title: string;
  imageUrl: string;
}

const ShowcaseBriefJson = ({
  dateModified,
  datePublished,
  description,
  slug,
  title,
  imageUrl,
}: ShowcaseBriefJsonProps) => {
  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Corporation',
      name: siteConfig.company,
      url: siteConfig.companyUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.companyLogo.url,
      },
      sameAs: [
        'https://www.linkedin.com/company/brillacx/',
        'https://twitter.com/brillacx',
        'https://github.com/brilla-cx',
      ],
    },
    dateModified: dateModified,
    datePublished: datePublished,
    description: description,
    headline: title,
    image: imageUrl,
    isAccessibleForFree: 'True',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/showcase/${slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo.url,
      },
      sameAs: Object.values(siteConfig.links),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ShowcaseBriefJson;
