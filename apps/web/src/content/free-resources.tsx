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
      'We spill the beans on everything we do and why. Sometimes we overshare. From our big wins to our hilarious facepalms.',
    image: function BlogImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-card dark:via-primary">
          <Image src={blogImage} alt="" unoptimized />
        </div>
      );
    },
    href: '/blog',
    linkText: 'Visit blog',
    linkAriaText: "Visit Yo CXO's Blog in the same window",
  },
  {
    title: 'Generative blog',
    description:
      'A transparent collaboration with top AI models to generate high-quality content to answer tough questions.',
    image: function AiBlogImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-card dark:via-primary">
          <Image className="relative" src={aiImage} alt="" unoptimized />
        </div>
      );
    },
    href: '/ai-blog',
    linkText: 'Read AI blog',
    linkAriaText: "Visit Yo CXO's AI Blog in the same window",
  },
  {
    title: 'Community of professionals',
    description:
      'Our digital campfire where we gather to swap tales, tips, and the occasional dad joke. Safe, moderated, and full of fire.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-card dark:via-primary">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      );
    },
    href: 'https://discord.gg/2Tjpg2kkBW',
    linkText: 'Join community',
    linkAriaText: "Visit Yo CXO's Discord server in a new window",
    external: true,
  },
];
