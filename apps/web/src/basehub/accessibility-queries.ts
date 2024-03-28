'use server';

import { basehubClient } from './client';

export async function fetchAccessibilityPageMetadata() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      accessibilityPageMeta: {
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
    title: accessibility.accessibilityPageMeta.title,
    description: accessibility.accessibilityPageMeta.description,
  };
}

export async function fetchAccessibilityPageIntro() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      accessibilityPageIntro: {
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
      accessibilityPageKeyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
    },
  });

  return {
    eyebrow: accessibility.accessibilityPageIntro.eyebrow,
    title: accessibility.accessibilityPageIntro.title,
    description: accessibility.accessibilityPageIntro.description,
    centered: accessibility.accessibilityPageIntro.centered,
    keyword: accessibility.accessibilityPageKeyword,
  };
}

export async function fetchAccessibilityPage() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
      _sys: {
        id: true,
        slug: true,
        title: true,
        createdAt: true,
        lastModifiedAt: true,
        __typename: true,
      },
      isPublished: true,
      accessibilityContent: {
        json: {
          content: true,
        },
      },
      accessibilityPageIntro: {
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
      accessibilityPageMeta: {
        _sys: {
          id: true,
          __typename: true,
        },
        title: true,
        description: true,
      },
    },
  });

  return accessibility;
}
