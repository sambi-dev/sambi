import type {
  BriefItem,
  BriefItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchShowcasePageIntro() {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
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
    jsonTitle: showcase._sys.title,
    jsonSlug: showcase._sys.slug,
    eyebrow: showcase.pageIntro.eyebrow,
    title: showcase.pageIntro.title,
    description: showcase.pageIntro.description,
    centered: showcase.pageIntro.centered,
    keyword: showcase.keyword,
  };
}

export async function fetchShowcasePageMetadata() {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
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
    title: showcase.meta.title,
    description: showcase.meta.description,
  };
}

export const showcaseBriefFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  keyword: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
  },
  client: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
    isPartner: true,
    contacts: {
      _sys: {
        id: true,
        title: true,
        __typename: true,
      },
      __args: {
        first: 1,
      },
      items: {
        _sys: {
          id: true,
          title: true,
          slug: true,
          __typename: true,
        },
        lastInitial: true,
        role: true,
        testimonial: {
          json: {
            content: true,
          },
        },
      },
    },
    icon: {
      url: true,
      alt: true,
    },
    isPublished: true,
    logo: {
      url: true,
      alt: true,
    },
    website: true,
  },
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
  featuredImage: {
    url: true,
    alt: true,
  },
  isPublished: true,
  metaTitle: true,
  metaDescription: true,
  readMoreButtonText: true,
  service: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
  },
  status: true,
  summary: {
    json: {
      content: true,
    },
  },
} satisfies BriefItemGenqlSelection;

export type ShowcaseBriefFragment = FieldsSelection<
  BriefItem,
  typeof showcaseBriefFragment
>;

export async function fetchShowcaseBriefs({ skip = 0, first = 10 } = {}) {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
      brief: {
        __args: {
          first,
          skip,
          orderBy: 'serviceDate__DESC',
        },
        items: showcaseBriefFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: showcase.brief.items,
    totalCount: showcase.brief._meta.totalCount,
  };
}

export async function fetchRecentShowcaseBriefs() {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
      brief: {
        __args: {
          first: 3,
          orderBy: 'serviceDate__DESC',
        },
        items: showcaseBriefFragment,
      },
    },
  });

  return showcase.brief.items;
}

export const getShowcaseBriefBySlugQuery = (slug: string) => {
  return {
    showcase: {
      brief: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: showcaseBriefFragment,
      },
    },
  } satisfies QueryGenqlSelection;
};
