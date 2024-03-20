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
      aiBlogPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
      aiBlogPageIntro: {
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
    eyebrow: aiBlog.aiBlogPageIntro.eyebrow,
    title: aiBlog.aiBlogPageIntro.title,
    description: aiBlog.aiBlogPageIntro.description,
    centered: aiBlog.aiBlogPageIntro.centered,
  };
}

export const aiBlogPostFragment = {
  _id: true,
  _slug: true,
  _title: true,
  company: {
    _id: true,
    _title: true,
    image: {
      url: true,
      alt: true,
    },
    model: true,
    version: true,
  },
  category: {
    __typename: true,
    _id: true,
    _slug: true,
    _title: true,
    description: true,
    isActive: true,
  },
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
  publishedDate: true,
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
        items: {
          _id: true,
          _slug: true,
          _title: true,
          publishedDate: true,
          content: { json: { content: true } },
          company: {
            _id: true,
            _title: true,
            model: true,
            version: true,
            image: {
              url: true,
              alt: true,
            },
          },
          category: {
            _id: true,
            _title: true,
          },
          image: {
            url: true,
            alt: true,
          },
          metaTitle: true,
          metaDescription: true,
        },
      },
    },
  } satisfies QueryGenqlSelection;
};
