import type {
  BriefItem,
  BriefItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchShowcasePageMetadata() {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
      showcasePageMeta: {
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
    title: showcase.showcasePageMeta.title,
    description: showcase.showcasePageMeta.description,
  };
}

export async function fetchShowcasePageIntro() {
  'use server';

  const { showcase } = await basehubClient.query({
    showcase: {
      showcasePageIntro: {
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
    eyebrow: showcase.showcasePageIntro.eyebrow,
    title: showcase.showcasePageIntro.title,
    description: showcase.showcasePageIntro.description,
    centered: showcase.showcasePageIntro.centered,
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
  client: {
    _sys: {
      id: true,
      title: true,
      __typename: true,
    },
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
        firstName: true,
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
  content: {
    json: {
      content: true,
    },
  },
  image: {
    url: true,
    alt: true,
  },
  isPartner: true,
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
          orderBy: '_sys_createdAt__DESC',
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
          orderBy: '_sys_createdAt__DESC',
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
        items: {
          _sys: {
            id: true,
            slug: true,
            title: true,
            createdAt: true,
            lastModifiedAt: true,
            __typename: true,
          },
          content: { json: { content: true } },
          client: {
            _sys: {
              id: true,
              title: true,
              __typename: true,
            },
            contacts: {
              _sys: {
                id: true,
                title: true,
                __typename: true,
              },
              __args: {
                first: 1,
              },
              _id: true,
              _title: true,
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
          service: {
            _sys: {
              id: true,
              title: true,
              slug: true,
              __typename: true,
            },
          },
          status: true,
          image: {
            url: true,
            alt: true,
          },
          isPartner: true,
          metaTitle: true,
          metaDescription: true,
        },
      },
    },
  } satisfies QueryGenqlSelection;
};
