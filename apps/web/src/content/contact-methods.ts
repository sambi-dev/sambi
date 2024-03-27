import { siteConfig } from '#/config/site';
import { env } from '#/env';

interface ContactMethod {
  title: string;
  description: string;
  screenReaderLabel: string;
  ariaLabel: string;
  linkHref: string;
  linkText: string;
}

const SUPPORT_EMAIL = env.NEXT_PUBLIC_YOCXO_SUPPORT_EMAIL;

const buyUsMailtoLink = `mailto:${SUPPORT_EMAIL}?subject=We%20want%20to%20buy%20your%20company%20for%20a%20lot%20of%20dough&body=Sup%2C%20Yo%20CXO!%3F%20we%20think%20you're%20awesome.%20We%20got%20%F0%9F%92%B0%2C%20let's%20talk!`;

const writeAboutUsMailtoLink = `mailto:${SUPPORT_EMAIL}?subject=We%20want%20to%20sing%20your%20praises&body=Sup%2C%20Yo%20CXO!%3F%20we'd%20%E2%9D%A4%EF%B8%8F%20to%20tell%20your%20story.`;

export const contactMethods: ContactMethod[] = [
  {
    title: 'Grow like crazy',
    description: 'Create a Client account on Upwork then send us a message.',
    screenReaderLabel: 'Hire on Upwork',
    ariaLabel: 'Hire Yo CXO on Upwork in a new window',
    linkHref: siteConfig.teamLinks.upworkSam,
    linkText: 'Start getting results',
  },
  {
    title: 'Buy us',
    description: "We're flattered. We get offers for acqui-hire all the time.",
    screenReaderLabel: 'Email us about buying the company',
    ariaLabel: 'Send us an email with your offer to buy our company',
    linkHref: buyUsMailtoLink,
    linkText: 'Impress us with yours',
  },
  {
    title: 'Write about us',
    description:
      "Rebekah's all over the web. Tap in to her social capital for your story.",
    screenReaderLabel: 'Email us to write about our company',
    ariaLabel: 'Send us an email to write about our company',
    linkHref: writeAboutUsMailtoLink,
    linkText: 'Tell our story',
  },
];
