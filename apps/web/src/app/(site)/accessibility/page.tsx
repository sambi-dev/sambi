import type { Metadata } from 'next';

import { loadArticles } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'We do our best to ensure digital access for all. Dive into our accessibility guide to learn more about our ongoing efforts to improve access for everyone.',
};

export default async function Accessibility() {
  const blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <ComingSoon
        eyebrow="Accessibility"
        title="Kind of ironic isn't it?"
        buttonText="OK, sure..."
      >
        <p>
          Ambreen wanted an accessibility page. Sam&apos;s solution? A footer
          link. It&apos;s a work in progress. Explore our showcase until then?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="In a world of recycled ideas, we're hitting differently. Think of us as the thrift shop of digital content. Vintage, but cool."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
