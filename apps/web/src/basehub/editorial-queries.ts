import { basehubClient } from './client';

export async function fetchEditorialPageMetadata() {
  'use server';

  const { editorial } = await basehubClient.query({
    editorial: {
      editorialPageMeta: {
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
    title: editorial.editorialPageMeta.title,
    description: editorial.editorialPageMeta.description,
  };
}

export async function fetchEditorialPageIntro() {
  'use server';

  const { editorial } = await basehubClient.query({
    editorial: {
      editorialPageIntro: {
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
    eyebrow: editorial.editorialPageIntro.eyebrow,
    title: editorial.editorialPageIntro.title,
    description: editorial.editorialPageIntro.description,
    centered: editorial.editorialPageIntro.centered,
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
      editorialContent: {
        json: {
          content: true,
        },
      },
      editorialPageIntro: {
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
      editorialPageMeta: {
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
