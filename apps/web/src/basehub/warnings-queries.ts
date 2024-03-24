import type {
  FieldsSelection,
  WarningItem,
  WarningItemGenqlSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchWarningsSectionIntro() {
  'use server';

  const { warnings } = await basehubClient.query({
    warnings: {
      sectionIntro: {
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
    eyebrow: warnings.sectionIntro.eyebrow,
    title: warnings.sectionIntro.title,
    description: warnings.sectionIntro.description,
    centered: warnings.sectionIntro.centered,
  };
}

export const warningsWarningFragment = {
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
      items: {
        _sys: {
          id: true,
          title: true,
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
  },
} satisfies WarningItemGenqlSelection;

export type WarningFragment = FieldsSelection<
  WarningItem,
  typeof warningsWarningFragment
>;

export async function fetchWarnings() {
  'use server';

  const { warnings } = await basehubClient.query({
    warnings: {
      warning: {
        __args: { orderBy: '_sys_lastModifiedAt__DESC' },
        items: warningsWarningFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: warnings.warning.items,
    totalCount: warnings.warning._meta.totalCount,
  };
}
