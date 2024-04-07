import type { FaqItem, FaqItemGenqlSelection, FieldsSelection } from '.basehub';

import { basehubClient } from './client';

export const faqFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
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
} satisfies FaqItemGenqlSelection;

export type FaqFragment = FieldsSelection<FaqItem, typeof faqFragment>;

export async function fetchFaqsPage() {
  'use server';

  const { faqs } = await basehubClient.query({
    faqs: {
      _sys: {
        id: true,
        title: true,
        slug: true,
        __typename: true,
      },
      faq: {
        __args: {
          orderBy: 'isPriority__DESC',
        },
        items: faqFragment,
        _meta: {
          totalCount: true,
        },
      },
      keyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
      meta: {
        _sys: {
          id: true,
          __typename: true,
        },
        title: true,
        description: true,
      },
      pageIntro: {
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

  return faqs;
}
