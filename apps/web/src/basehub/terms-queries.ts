import { basehubClient } from './client';

export async function fetchTermsPage() {
  'use server';

  const { terms } = await basehubClient.query({
    terms: {
      _sys: {
        id: true,
        slug: true,
        title: true,
        createdAt: true,
        lastModifiedAt: true,
        __typename: true,
      },
      body: {
        json: {
          content: true,
        },
      },
      isPublished: true,
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

  return terms;
}
