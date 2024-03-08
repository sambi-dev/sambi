import type { Metadata } from 'next';

import { loadArticles } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    "Dive into our Editorial Policy, where words meet wit, and clarity is king. We're serious about content, just not about ourselves.",
};

export default async function EditorialPolicy() {
  const blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <ComingSoon
        eyebrow="Editorial Policy"
        title="This should've been done"
        buttonText="Hmm, alright"
      >
        <p>
          Rebekah asked for an editorial policy page. Sam&apos;s quick fix?
          Label it Coming Soon. Want to see some cool projects now?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="In an era of synthetic noise, we're proudly analog. Crafting content with our bare hands. Call us old fashioned."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
