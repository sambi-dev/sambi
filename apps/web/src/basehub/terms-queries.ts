import { basehubClient } from './client';

export async function fetchTermsPageIntro() {
  'use server';

  const { terms } = await basehubClient.query({
    terms: {
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
      keyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
    },
  });

  return {
    eyebrow: terms.pageIntro.eyebrow,
    title: terms.pageIntro.title,
    description: terms.pageIntro.description,
    centered: terms.pageIntro.centered,
    keyword: terms.keyword,
  };
}

export async function fetchTermsPageMetadata() {
  'use server';

  const { terms } = await basehubClient.query({
    terms: {
      meta: {
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
    title: terms.meta.title,
    description: terms.meta.description,
  };
}

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
      isPublished: true,
      body: {
        json: {
          content: true,
        },
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
      meta: {
        _sys: {
          id: true,
          __typename: true,
        },
        title: true,
        description: true,
      },
    },
  });

  return terms;
}
