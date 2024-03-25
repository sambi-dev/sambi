import type { Faq, FaqGenqlSelection, FieldsSelection } from '.basehub';

import { basehubClient } from './client';

export async function fetchFaqsPageMetadata() {
  'use server';

  const { faqs } = await basehubClient.query({
    faqs: {
      faqsPageMeta: {
        _sys: {
          id: true,
          __typename: true,
        },
        title: true,
        description: true,
      },
    },
  });

  return {
    title: faqs.faqsPageMeta.title,
    description: faqs.faqsPageMeta.description,
  };
}

export async function fetchFaqsPageIntro() {
  'use server';

  const { faqs } = await basehubClient.query({
    faqs: {
      _sys: {
        id: true,
        title: true,
        slug: true,
        __typename: true,
      },
      faqsPageIntro: {
        _sys: {
          id: true,
          __typename: true,
        },
        eyebrow: true,
        title: true,
        description: {
          json: {
            content: true,
          },
        },
        centered: true,
      },
    },
  });

  return {
    jsonTitle: faqs._sys.title,
    jsonSlug: faqs._sys.slug,
    eyebrow: faqs.faqsPageIntro.eyebrow,
    title: faqs.faqsPageIntro.title,
    description: faqs.faqsPageIntro.description,
    centered: faqs.faqsPageIntro.centered,
  };
}

export const faqFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  items: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
    category: true,
    isPriority: true,
    isPublished: true,
    answer: {
      json: {
        content: true,
      },
    },
  },
} satisfies FaqGenqlSelection;

export type FaqFragment = FieldsSelection<Faq, typeof faqFragment>;

export async function fetchFaqs() {
  'use server';

  const { faqs } = await basehubClient.query({
    faqs: {
      faq: {
        ...faqFragment,
      },
    },
  });

  return faqs.faq;
}
