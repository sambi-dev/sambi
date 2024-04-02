import { basehubClient } from './client';

export async function fetchEditorialPageIntro() {
  'use server';

  const { editorial } = await basehubClient.query({
    editorial: {
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
    eyebrow: editorial.pageIntro.eyebrow,
    title: editorial.pageIntro.title,
    description: editorial.pageIntro.description,
    centered: editorial.pageIntro.centered,
    keyword: editorial.keyword,
  };
}

export async function fetchEditorialPageMetadata() {
  'use server';

  const { editorial } = await basehubClient.query({
    editorial: {
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
    title: editorial.meta.title,
    description: editorial.meta.description,
  };
}

export async function fetchEditorialPage() {
  'use server';

  const { editorial } = await basehubClient.query({
    editorial: {
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

  return editorial;
}
