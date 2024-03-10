import type { Metadata } from 'next';

import { loadBlogPosts } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    "Dive into our Terms of Service, where words meet wit, and clarity is king. We're serious about content, just not about ourselves.",
};

export default async function TermsOfService() {
  const blogPosts = (await loadBlogPosts()).slice(0, 2);

  return (
    <>
      <ComingSoon
        eyebrow="Terms of Service"
        title="Our lawyers hate us right now"
        buttonText="I guess"
      >
        <p>
          The legal eagles handed us a script so long that even ChatGPT
          can&apos;t handle it. We&apos;re plugging away. Project showcase
          anyone?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="In a world dominated by generative noise and Twitter philosophers, our blog smells like a hand-crafted doppio amongst a sea of instant coffee."
        pages={blogPosts}
      />

      <ContactSection />
    </>
  );
}
