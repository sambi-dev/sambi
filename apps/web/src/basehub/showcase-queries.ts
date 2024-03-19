import type {
  BriefItem,
  BriefItemGenqlSelection,
  FieldsSelection,
  QueryGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchShowcasePageMetadata() {
  const { showcase } = await basehubClient.query({
    showcase: {
      showcasePageMeta: {
        _id: true,
        _slug: true,
        _title: true,
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
  const { showcase } = await basehubClient.query({
    showcase: {
      showcasePageIntro: {
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
  _id: true,
  _slug: true,
  _title: true,
  __typename: true,
  client: {
    _id: true,
    _title: true,
    _slug: true,
    __typename: true,
    contacts: {
      __args: {
        first: 1,
      },
      items: {
        _id: true,
        __typename: true,
        _slug: true,
        _title: true,
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
    isActive: true,
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
  publishedDate: true,
  metaTitle: true,
  metaDescription: true,
  readMoreButtonText: true,
  service: {
    _id: true,
    _title: true,
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

export async function fetchShowcaseBriefs({ first = 10 } = {}) {
  const { showcase } = await basehubClient.query({
    showcase: {
      brief: {
        __args: {
          first,
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

export const getShowcaseBriefBySlugQuery = (slug: string) => {
  return {
    showcase: {
      brief: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: {
          _id: true,
          _slug: true,
          _title: true,
          publishedDate: true,
          content: { json: { content: true } },
          client: {
            _id: true,
            _title: true,
            contacts: {
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
            isActive: true,
            logo: {
              url: true,
              alt: true,
            },
            website: true,
          },
          service: {
            _id: true,
            _title: true,
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
