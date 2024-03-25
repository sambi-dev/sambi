import type { BlogPosting, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';

interface BlogPostJsonProps {
  authorBio: string;
  authorImageUrl: string;
  authorLinkedinUrl: string;
  authorName: string;
  authorRole: string;
  authorTwitterUrl: string;
  authorUpworkUrl: string;
  dateModified: string;
  datePublished: string;
  description: string;
  imageUrl: string;
  slug: string;
  title: string;
}

const BlogPostJson = ({
  authorBio,
  authorImageUrl,
  authorLinkedinUrl,
  authorName,
  authorRole,
  authorTwitterUrl,
  authorUpworkUrl,
  dateModified,
  datePublished,
  description,
  imageUrl,
  slug,
  title,
}: BlogPostJsonProps) => {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}`,
    },
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: authorRole,
      image: {
        '@type': 'ImageObject',
        url: authorImageUrl,
      },
      description: authorBio,
      sameAs: [authorUpworkUrl, authorTwitterUrl, authorLinkedinUrl].filter(
        Boolean,
      ),
    },
    dateModified: dateModified,
    datePublished: datePublished,
    description: description,
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logo.url,
    },
    sourceOrganization: {
      '@type': 'Organization',
      name: siteConfig.company,
      logo: siteConfig.companyLogo.url,
      sameAs: [
        'https://www.linkedin.com/company/brillacx/',
        'https://twitter.com/brillacx',
        'https://github.com/brilla-cx',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default BlogPostJson;
