import type {
  AiPostsItem,
  AiPostsItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

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
    jsonTitle: aiBlog._sys.title,
    jsonSlug: aiBlog._sys.slug,
    eyebrow: aiBlog.pageIntro.eyebrow,
    title: aiBlog.pageIntro.title,
    description: aiBlog.pageIntro.description,
    centered: aiBlog.pageIntro.centered,
    keyword: aiBlog.keyword,
  };
}

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
    title: aiBlog.meta.title,
    description: aiBlog.meta.description,
  };
}

export const aiPostFragment = {
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
  featuredImage: {
    url: true,
    alt: true,
  },
  featuredImageAttribution: { json: { content: true } },
  body: {
    json: {
      content: true,
    },
  },
  isPublished: true,
  keyword: {
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
} satisfies AiPostsItemGenqlSelection;

export type AiPostFragment = FieldsSelection<
  AiPostsItem,
  typeof aiPostFragment
>;

export async function fetchAiBlogPosts({ skip = 0, first = 10 } = {}) {
  'use server';

  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      aiPosts: {
        __args: {
          skip,
          first,
          orderBy: '_sys_createdAt__DESC',
        },
        items: aiPostFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: aiBlog.aiPosts.items,
    totalCount: aiBlog.aiPosts._meta.totalCount,
  };
}

export const getAiPostBySlugQuery = (slug: string) => {
  return {
    aiBlog: {
      aiPosts: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: aiPostFragment,
      },
    },
  } satisfies QueryGenqlSelection;
};
