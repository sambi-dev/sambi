import { basehubClient } from './client';

export async function fetchPrivacyPageMetadata() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
      privacyPageMeta: {
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
    title: privacy.privacyPageMeta.title,
    description: privacy.privacyPageMeta.description,
  };
}

export async function fetchPrivacyPageIntro() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
      privacyPageIntro: {
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
    eyebrow: privacy.privacyPageIntro.eyebrow,
    title: privacy.privacyPageIntro.title,
    description: privacy.privacyPageIntro.description,
    centered: privacy.privacyPageIntro.centered,
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
      content: {
        json: {
          content: true,
        },
      },
      isPublished: true,
      privacyPageIntro: {
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
      privacyPageMeta: {
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
