import type { Article, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';

interface ShowcaseBriefJsonProps {
  dateModified: string;
  datePublished: string;
  description: string;
  keyword: string;
  slug: string;
  title: string;
  imageUrl: string;
}

const ShowcaseBriefJson = ({
  dateModified,
  datePublished,
  description,
  keyword,
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
    keywords: keyword,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/showcase/${slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: Object.values(socialConfig.links),
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
