import type { FAQPage, Question, WithContext } from 'schema-dts';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';

interface FaqJsonLdProps {
  questions: {
    name: string;
    acceptedAnswer: string;
  }[];
  dateModified: string;
  datePublished: string;
  description: string;
  keyword: string;
}

const FaqJsonLd = ({
  questions,
  dateModified,
  datePublished,
  description,
  keyword,
}: FaqJsonLdProps) => {
  const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    isAccessibleForFree: 'True',
    keywords: keyword,
    mainEntity: questions.map(
      (question): Question => ({
        '@type': 'Question',
        name: question.name,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.acceptedAnswer,
        },
      }),
    ),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/faq`,
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

export default FaqJsonLd;
