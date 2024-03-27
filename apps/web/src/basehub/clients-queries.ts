import type {
  ClientItem,
  ClientItemGenqlSelection,
  FieldsSelection,
} from '.basehub';

import { basehubClient } from './client';

export async function fetchClientsPageMetadata() {
  'use server';

  const { clients } = await basehubClient.query({
    clients: {
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
    title: clients.meta.title,
    description: clients.meta.description,
  };
}

export async function fetchClientsPageIntro() {
  'use server';

  const { clients } = await basehubClient.query({
    clients: {
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
    },
  });

  return {
    jsonTitle: clients._sys.title,
    jsonSlug: clients._sys.slug,
    eyebrow: clients.pageIntro.eyebrow,
    title: clients.pageIntro.title,
    description: clients.pageIntro.description,
    centered: clients.pageIntro.centered,
  };
}

export const clientListFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  logo: {
    url: true,
    alt: true,
  },
  isPartner: true,
  isPublished: true,
} satisfies ClientItemGenqlSelection;

export type ClientListFragment = FieldsSelection<
  ClientItem,
  typeof clientListFragment
>;

export async function fetchClientList({ skip = 0, first = 10 } = {}) {
  'use server';

  const { clientList } = await basehubClient.query({
    clientList: {
      client: {
        __args: {
          first,
          skip,
          orderBy: '_sys_title__ASC',
        },
        items: clientListFragment,
        _meta: {
          totalCount: true,
        },
      },
    },
  });

  return {
    items: clientList.client.items,
    totalCount: clientList.client._meta.totalCount,
  };
}
