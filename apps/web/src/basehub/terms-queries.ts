import { basehubClient } from './client';

export async function fetchTermsPageMetadata() {
  const { terms } = await basehubClient.query({
    terms: {
      termsPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
        title: true,
        description: true,
      },
    },
  });

  return {
    title: terms.termsPageMeta.title,
    description: terms.termsPageMeta.description,
  };
}

export async function fetchTermsPageIntro() {
  const { terms } = await basehubClient.query({
    terms: {
      termsPageIntro: {
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
    eyebrow: terms.termsPageIntro.eyebrow,
    title: terms.termsPageIntro.title,
    description: terms.termsPageIntro.description,
    centered: terms.termsPageIntro.centered,
  };
}

export async function fetchTermsPage() {
  const { terms } = await basehubClient.query({
    terms: {
      _id: true,
      _slug: true,
      _title: true,
      content: {
        json: {
          content: true,
        },
      },
      isPublished: true,
      termsPageIntro: {
        eyebrow: true,
        title: true,
        description: {
          json: {
            content: true,
          },
        },
        centered: true,
      },
      termsPageMeta: {
        _id: true,
        _slug: true,
        _title: true,
        description: true,
      },
    },
  });

  return terms;
}
