'use server';

import { basehubClient } from './client';

export async function fetchAccessibilityPageIntro() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
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
    eyebrow: accessibility.pageIntro.eyebrow,
    title: accessibility.pageIntro.title,
    description: accessibility.pageIntro.description,
    centered: accessibility.pageIntro.centered,
    keyword: accessibility.keyword,
  };
}

export async function fetchAccessibilityPageMetadata() {
  const { accessibility } = await basehubClient.query({
    accessibility: {
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
    title: accessibility.meta.title,
    description: accessibility.meta.description,
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

  return accessibility;
}
