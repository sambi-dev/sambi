import { basehubClient } from './client';

export async function fetchAccessibilityPageMetadata() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      accessibilityPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
        title: true,
        description: true,
      },
    },
  });

  return {
    title: accessibility.accessibilityPageMeta.title,
    description: accessibility.accessibilityPageMeta.description,
  };
}

export async function fetchAccessibilityPageIntro() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      accessibilityPageIntro: {
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
    eyebrow: accessibility.accessibilityPageIntro.eyebrow,
    title: accessibility.accessibilityPageIntro.title,
    description: accessibility.accessibilityPageIntro.description,
    centered: accessibility.accessibilityPageIntro.centered,
  };
}

export async function fetchAccessibilityPage() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      _id: true,
      _slug: true,
      _title: true,
      content: {
        json: {
          content: true,
        },
      },
      isPublished: true,
      accessibilityPageIntro: {
        eyebrow: true,
        title: true,
        description: {
          json: {
            content: true,
          },
        },
        centered: true,
      },
      accessibilityPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
        description: true,
      },
    },
  });

  return accessibility;
}
