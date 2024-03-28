import { basehubClient } from './client';

export async function fetchTermsPageMetadata() {
  'use server';

  const { terms } = await basehubClient.query({
    terms: {
      termsPageMeta: {
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
    title: terms.termsPageMeta.title,
    description: terms.termsPageMeta.description,
  };
}

export async function fetchTermsPageIntro() {
  'use server';

  const { terms } = await basehubClient.query({
    terms: {
      termsPageIntro: {
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
      termsPageKeyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
    },
  });

  return {
    eyebrow: terms.termsPageIntro.eyebrow,
    title: terms.termsPageIntro.title,
    description: terms.termsPageIntro.description,
    centered: terms.termsPageIntro.centered,
    keyword: terms.termsPageKeyword,
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
      termsContent: {
        json: {
          content: true,
        },
      },
      termsPageIntro: {
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
      termsPageMeta: {
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
