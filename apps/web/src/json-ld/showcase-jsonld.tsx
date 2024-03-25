import type { Article, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';

interface ShowcaseBriefJsonProps {
  dateModified: string;
  datePublished: string;
  description: string;
  slug: string;
  title: string;
}

const ShowcaseBriefJson = ({
  dateModified,
  datePublished,
  description,
  slug,
  title,
}: ShowcaseBriefJsonProps) => {
  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Organization',
      name: siteConfig.company,
      url: siteConfig.companyUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.companyLogo.url,
      },
    },
    dateModified: dateModified,
    datePublished: datePublished,
    description: description,
    headline: title,
    image: siteConfig.image.url,
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
