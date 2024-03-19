import type {
  BlogPostsItem,
  BlogPostsItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchBlogPageMetadata() {
  const { blog } = await basehubClient.query({
    blog: {
      blogPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
  const { blog } = await basehubClient.query({
    blog: {
      blogPageIntro: {
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
  _id: true,
  _slug: true,
  _title: true,
  author: {
    _id: true,
    _slug: true,
    _title: true,
    image: {
      url: true,
      alt: true,
    },
    role: true,
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
} satisfies BlogPostsItemGenqlSelection;

export type BlogPostFragment = FieldsSelection<
  BlogPostsItem,
  typeof blogPostFragment
>;

export async function fetchBlogPosts({ first = 10 } = {}) {
  const { blog } = await basehubClient.query({
    blog: {
      blogPosts: {
        __args: {
          first,
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
        items: {
          _id: true,
          _slug: true,
          _title: true,
          publishedDate: true,
          content: { json: { content: true } },
          author: {
            _id: true,
            _title: true,
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
