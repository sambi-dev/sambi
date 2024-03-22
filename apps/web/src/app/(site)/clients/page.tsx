import type { Metadata } from 'next';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import { siteConfig } from '#/config/site';
import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export default async function ClientsPage() {
  const { items: blogPosts } = await fetchBlogPosts({
    first: 2,
  });

  const pages = blogPosts.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  return (
    <>
      <ComingSoon
        eyebrow="Clients"
        title="Roasted by the best clients over the years"
        buttonText="Take me there"
      >
        <p>
          Whether direct, with our employers, or via a partner, we&apos;ve
          worked with amazing people, businesses, and companies of all sizes.
          We&apos;ve got the battle scars to prove it.
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="We've taken a page from the Hollywood book. Find every old and overused idea and freshen it up. The Mummy was underrated."
        pages={pages}
      />

      <ContactSection />
    </>
  );
}

const title = 'Clients';
const description =
  "Want to know who sambi.dev's clients are? We've been roasted by the best clients over the years. We have the battle scars to prove it. We've marked work via partners accordingly.";

const pageUrl = `${SITE_URL}/clients`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
    url: pageUrl,
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
  },
};
