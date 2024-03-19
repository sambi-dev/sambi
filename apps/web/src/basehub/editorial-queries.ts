import { basehubClient } from './client';

export async function fetchEditorialPageMetadata() {
  const { editorial } = await basehubClient.query({
    editorial: {
      editorialPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
  const { editorial } = await basehubClient.query({
    editorial: {
      editorialPageIntro: {
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
  const { editorial } = await basehubClient.query({
    editorial: {
      _id: true,
      _slug: true,
      _title: true,
      content: {
        json: {
          content: true,
        },
      },
      isPublished: true,
      editorialPageIntro: {
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
        _id: true,
        _slug: true,
        _title: true,
        description: true,
      },
    },
  });

  return editorial;
}
