import type {
  AiBlogPostsItemGenqlSelection,
  BlogPostsItem,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchAiBlogPageMetadata() {
  'use server';

  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      _sys: {
        id: true,
        title: true,
        slug: true,
        __typename: true,
      },
      aiBlogPageMeta: {
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
    title: aiBlog.aiBlogPageMeta.title,
    description: aiBlog.aiBlogPageMeta.description,
  };
}

export async function fetchAiBlogPageIntro() {
  'use server';

  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      _sys: {
        id: true,
        title: true,
        slug: true,
        __typename: true,
      },
      aiBlogPageIntro: {
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
      aiBlogPageKeyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
    },
  });

  return {
    jsonTitle: aiBlog._sys.title,
    jsonSlug: aiBlog._sys.slug,
    eyebrow: aiBlog.aiBlogPageIntro.eyebrow,
    title: aiBlog.aiBlogPageIntro.title,
    description: aiBlog.aiBlogPageIntro.description,
    centered: aiBlog.aiBlogPageIntro.centered,
    keyword: aiBlog.aiBlogPageKeyword,
  };
}

export const aiBlogPostFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  company: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
    image: {
      url: true,
      alt: true,
    },
    model: true,
    version: true,
  },
  category: {
    _sys: {
      id: true,
      slug: true,
      title: true,
      __typename: true,
    },
    description: true,
    isPublished: true,
  },
  image: {
    url: true,
    alt: true,
  },
  imageAttribution: { json: { content: true } },
  content: {
    json: {
      content: true,
    },
  },
  isPublished: true,
  keywords: {
    _id: true,
    _slug: true,
    _title: true,
  },
  metaTitle: true,
  metaDescription: true,
  readMoreButtonText: true,
  tldr: {
    json: {
      content: true,
    },
  },
} satisfies AiBlogPostsItemGenqlSelection;

export type AiBlogPostFragment = FieldsSelection<
  BlogPostsItem,
  typeof aiBlogPostFragment
>;

export async function fetchAiBlogPosts({ skip = 0, first = 10 } = {}) {
  'use server';

  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      aiBlogPosts: {
        __args: {
          skip,
          first,
          orderBy: '_sys_createdAt__DESC',
        },
        items: aiBlogPostFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: aiBlog.aiBlogPosts.items,
    totalCount: aiBlog.aiBlogPosts._meta.totalCount,
  };
}

export const getAiPostBySlugQuery = (slug: string) => {
  return {
    aiBlog: {
      aiBlogPosts: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: aiBlogPostFragment,
      },
    },
  } satisfies QueryGenqlSelection;
};
