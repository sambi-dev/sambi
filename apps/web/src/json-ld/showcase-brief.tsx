import type { Article, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';

interface ShowcaseBriefJsonProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  authorName: string;
  authorUrl: string;
  publisherName: string;
  publisherUrl: string;
  datePublished: string;
  dateModified: string;
}

const ShowcaseBriefJson: React.FC<ShowcaseBriefJsonProps> = ({
  slug,
  title,
  description,
  imageUrl,
  authorName,
  authorUrl,
  publisherName,
  publisherUrl,
  datePublished,
  dateModified,
}) => {
  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${siteConfig.url}/showcase/${slug}`,
    },
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherUrl,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ShowcaseBriefJson;

{
  /* Your article content 
<ShowcaseBriefJson
  slug="article-slug"
  title="Article Title"
  description="Article description"
  imageUrl="https://example.com/image.jpg"
  authorName="Author Name"
  authorUrl="https://example.com/author"
  publisherName="Publisher Name"
  publisherUrl="https://example.com/publisher.jpg"
  datePublished="2024-03-25"
  dateModified="2024-03-25"
/>;

*/
}
