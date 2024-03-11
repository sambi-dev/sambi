import type { Metadata } from 'next';

import { Border } from '#/ui/border';
import GetInTouch from '#/ui/contact/get-in-touch';
import Locations from '#/ui/contact/locations';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Wanna contact the cool kids at sambi.dev? 😎 Slide into our Upwork DMs or fill out our contact form 📝 We're totally stoked to hear from you. 🤙",
};

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Drop us a line">
        <p className="text-pretty">
          Ready to work together? Hit us up on Upwork. If you&apos;re already a
          client, use one of the links below to get in touch. We&apos;ll get
          back to you in a jiffy.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GetInTouch />
        <Border className="mt-16 pt-16" />
        <Locations />
      </Container>
    </>
  );
}
