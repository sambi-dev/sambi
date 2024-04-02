import { basehubClient } from './client';

export async function fetchPrivacyPageIntro() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
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
    eyebrow: privacy.pageIntro.eyebrow,
    title: privacy.pageIntro.title,
    description: privacy.pageIntro.description,
    centered: privacy.pageIntro.centered,
    keyword: privacy.keyword,
  };
}

export async function fetchPrivacyPageMetadata() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
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
    title: privacy.meta.title,
    description: privacy.meta.description,
  };
}

export async function fetchPrivacyPage() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
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

  return privacy;
}
