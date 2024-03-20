import type { Faq, FaqGenqlSelection, FieldsSelection } from '.basehub';

import { basehubClient } from './client';

export async function fetchFaqsPageMetadata() {
  'use server';

  const { faqs } = await basehubClient.query({
    faqs: {
      faqsPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
      faqsPageIntro: {
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
    eyebrow: faqs.faqsPageIntro.eyebrow,
    title: faqs.faqsPageIntro.title,
    description: faqs.faqsPageIntro.description,
    centered: faqs.faqsPageIntro.centered,
  };
}

export const faqFragment = {
  _id: true,
  _slug: true,
  _title: true,
  items: {
    _id: true,
    _slug: true,
    _title: true,
    isPriority: true,
    isActive: true,
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
