import type {
  CrewComponent,
  CrewComponentGenqlSelection,
  FieldsSelection,
} from '.basehub';

import { basehubClient } from './client';

export const crewFragment = {
  _id: true,
  _slug: true,
  _title: true,
  title: true,
  description: {
    json: {
      content: true,
    },
  },
  people: {
    items: {
      _id: true,
      _slug: true,
      _title: true,
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
  const { crew } = await basehubClient.query({
    crew: {
      ...crewFragment,
    },
  });

  return crew;
}
