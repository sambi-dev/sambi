import type { ReactElement } from 'react';

import Image from 'next/image';

import aiImage from '#/images/resources/ai.svg';
import blogImage from '#/images/resources/blog.svg';
import discordImage from '#/images/resources/discord.svg';

interface FreeResource {
  title: string;
  description: string;
  image: () => ReactElement;
  href: string;
  linkText: string;
  linkAriaText: string;
  external?: boolean;
}

export const freeResources: FreeResource[] = [
  {
    title: 'Blog & insights',
    description:
      'We spill the beans on everything we do and why. From our big wins to our hilarious facepalms.',
    image: function BlogImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80">
          <Image src={blogImage} alt="" unoptimized />
        </div>
      );
    },
    href: '/blog',
    linkText: 'Visit blog',
    linkAriaText: "Visit sambi.dev's Blog in the same window",
  },
  {
    title: 'Generative blog',
    description:
      "Where AI meets actual intelligence. We're using the tech to smith words that grab eyeballs and don't let go.",
    image: function AiBlogImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80">
          <Image className="relative" src={aiImage} alt="" unoptimized />
        </div>
      );
    },
    href: '/mdx',
    linkText: 'Read AI blog',
    linkAriaText: "Visit sambi.dev's AI Blog in the same window",
  },
  {
    title: 'Community of professionals',
    description:
      'Our digital campfire where we gather to swap tales, tips, and the occasional dad joke. Safe, moderated, and full of fire.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      );
    },
    href: 'https://discord.gg/2Tjpg2kkBW',
    linkText: 'Join community',
    linkAriaText: "Visit sambi.dev's Discord server in a new window",
    external: true,
  },
];
