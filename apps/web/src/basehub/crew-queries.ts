import type {
  CrewComponent,
  CrewComponentGenqlSelection,
  FieldsSelection,
} from '.basehub';

import { basehubClient } from './client';

export const crewFragment = {
  _sys: {
    id: true,
    slug: true,
    title: true,
    createdAt: true,
    lastModifiedAt: true,
    __typename: true,
  },
  title: true,
  description: {
    json: {
      content: true,
    },
  },
  people: {
    items: {
      _sys: {
        id: true,
        slug: true,
        title: true,
        __typename: true,
      },
      bio: true,
      role: true,
      image: {
        url: true,
        alt: true,
      },
      upworkUrl: true,
      twitterUrl: true,
      linkedinUrl: true,
    },
  },
} satisfies CrewComponentGenqlSelection;

export type CrewFragment = FieldsSelection<CrewComponent, typeof crewFragment>;

export async function fetchCrew() {
  'use server';

  const { crew } = await basehubClient.query({
    crew: {
      ...crewFragment,
    },
  });

  return crew;
}
