import type { StaticImageData } from 'next/image';
import type { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import abstractBackgroundImage from '#/images/resources/abstract-background.png';
import discordImage from '#/images/resources/discord.svg';
import figmaImage from '#/images/resources/figma.svg';
import videoPlayerImage from '#/images/resources/video-player.svg';
import { SectionIntro } from '#/ui/section-intro';
import { Container } from '#/ui/shared/container';

interface Resource {
  title: string;
  description: string;
  image: () => ReactElement;
  href: string;
  linkText: string;
}

const resources: Resource[] = [
  {
    title: 'Blog & insights',
    description:
      'We spill the beans on everything we do and why. From our big wins to our hilarious facepalms.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage as StaticImageData} alt="" unoptimized />
        </div>
      );
    },
    href: '/blog',
    linkText: 'Visit blog',
  },
  {
    title: 'Generative blog',
    description:
      "Where AI meets actual intelligence. We're using the tech to smith words that grab eyeballs and don't let go.",
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage as StaticImageData}
            alt=""
            unoptimized
          />
        </div>
      );
    },
    href: '/mdx',
    linkText: 'Read AI blog',
  },
  {
    title: 'Community of professionals',
    description:
      'Our digital campfire where we gather to swap tales, tips, and the occasional dad joke. Safe, moderated, and full of fire.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage as StaticImageData} alt="" unoptimized />
        </div>
      );
    },
    href: '/blog',
    linkText: 'Join community',
  },
];

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        title="Passing on our legos"
        eyebrow="Resources"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We&apos;re a crew that likes to practice radical candor and radical
          transparency. Here are some resources that we&apos;ve put together for
          ya.
        </p>
      </SectionIntro>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 xl:-mx-12 xl:divide-x xl:divide-primary/50">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {resource.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4 flex">
                <Link
                  href={resource.href}
                  aria-label={`Go the sambi resource ${resource.title} in the same window`}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'sm' }),
                  )}
                >
                  {resource.linkText}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
