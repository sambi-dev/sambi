import { basehubClient } from './client';

export async function fetchPrivacyPageMetadata() {
  'use server';

  const { privacy } = await basehubClient.query({
    privacy: {
      privacyPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
      _id: true,
      _slug: true,
      _title: true,
      content: {
        json: {
          content: true,
        },
      },
      isPublished: true,
      privacyPageIntro: {
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
        _id: true,
        _slug: true,
        _title: true,
        description: true,
      },
    },
  });

  return privacy;
}
