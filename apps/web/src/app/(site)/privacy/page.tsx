import type { Metadata } from 'next';

import { loadArticles } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Our Privacy Policy, crafted by lawyers who never met a word they didn't like. It's thorough, it's dense, and it's easy to read if that's your thing.",
};

export default async function PrivacyPolicy() {
  const blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <ComingSoon
        eyebrow="Privacy Policy"
        title="Don't tell our lawyers"
        buttonText="Wait, really?"
      >
        <p>
          You were looking for our privacy policy? It&apos;s not here yet. This
          is actually a page designed to demonstrate ineffective bait and switch
          tactics. So visit our showcase instead?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Amidst the digital echo chamber, we're the ones still using typewriters. Check out our blog to read recently upcycled content"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
