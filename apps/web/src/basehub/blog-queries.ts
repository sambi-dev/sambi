import type {
  FieldsSelection,
  PostsItem,
  PostsItemGenqlSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchBlogPageIntro() {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
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
    jsonTitle: blog._sys.title,
    jsonSlug: blog._sys.slug,
    eyebrow: blog.pageIntro.eyebrow,
    title: blog.pageIntro.title,
    description: blog.pageIntro.description,
    centered: blog.pageIntro.centered,
    keyword: blog.keyword,
  };
}

export async function fetchBlogPageMetadata() {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
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
    title: blog.meta.title,
    description: blog.meta.description,
  };
}

export const postFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  author: {
    _sys: {
      id: true,
      slug: true,
      title: true,
      __typename: true,
    },
    bio: true,
    image: {
      url: true,
      alt: true,
    },
    role: true,
    websiteRelativePath: true,
    upworkUrl: true,
    twitterUrl: true,
    linkedinUrl: true,
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
  tldr: {
    json: {
      content: true,
    },
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
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
  },
  metaTitle: true,
  metaDescription: true,
  readMoreButtonText: true,
} satisfies PostsItemGenqlSelection;

export type BlogPostFragment = FieldsSelection<PostsItem, typeof postFragment>;

export async function fetchBlogPosts({ skip = 0, first = 10 } = {}) {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
      posts: {
        __args: {
          skip,
          first,
          orderBy: '_sys_createdAt__DESC',
        },
        items: postFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: blog.posts.items,
    totalCount: blog.posts._meta.totalCount,
  };
}

export const getPostBySlugQuery = (slug: string) => {
  return {
    blog: {
      posts: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: postFragment,
      },
    },
  } satisfies QueryGenqlSelection;
};
