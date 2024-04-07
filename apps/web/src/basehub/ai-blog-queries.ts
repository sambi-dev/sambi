import type {
  AiPostsItem,
  AiPostsItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

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
      blocks: {
        on_TweetComponent: {
          __typename: true,
          _id: true,
          tweetId: true,
        },
        on_BlockquoteComponent: {
          __typename: true,
          _id: true,
          author: true,
          role: true,
          quote: true,
        },
        on_ToptipComponent: {
          __typename: true,
          _id: true,
          tip: true,
        },
        on_GotchaComponent: {
          __typename: true,
          _id: true,
          gotcha: true,
        },
      },
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

export async function fetchAiBlogPage({ skip = 0, first = 10 } = {}) {
  'use server';

  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      _sys: {
        id: true,
        title: true,
        slug: true,
        __typename: true,
      },
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
      keyword: {
        _sys: {
          id: true,
          title: true,
          __typename: true,
        },
      },
      meta: {
        _sys: {
          id: true,
          __typename: true,
        },
        title: true,
        description: true,
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
    },
  });

  return aiBlog;
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
