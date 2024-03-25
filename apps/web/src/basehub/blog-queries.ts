import type {
  BlogPostsItem,
  BlogPostsItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchBlogPageMetadata() {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
      blogPageMeta: {
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
    title: blog.blogPageMeta.title,
    description: blog.blogPageMeta.description,
  };
}

export async function fetchBlogPageIntro() {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
      blogPageIntro: {
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
    eyebrow: blog.blogPageIntro.eyebrow,
    title: blog.blogPageIntro.title,
    description: blog.blogPageIntro.description,
    centered: blog.blogPageIntro.centered,
  };
}

export const blogPostFragment = {
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
} satisfies BlogPostsItemGenqlSelection;

export type BlogPostFragment = FieldsSelection<
  BlogPostsItem,
  typeof blogPostFragment
>;

export async function fetchBlogPosts({ skip = 0, first = 10 } = {}) {
  'use server';

  const { blog } = await basehubClient.query({
    blog: {
      blogPosts: {
        __args: {
          skip,
          first,
          orderBy: '_sys_createdAt__DESC',
        },
        items: blogPostFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: blog.blogPosts.items,
    totalCount: blog.blogPosts._meta.totalCount,
  };
}

export const getPostBySlugQuery = (slug: string) => {
  return {
    blog: {
      blogPosts: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: blogPostFragment,
      },
    },
  } satisfies QueryGenqlSelection;
};
