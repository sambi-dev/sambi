'use client';

import type { StaticImageData } from 'next/image';

import React from 'react';
import Link from 'next/link';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';

import { heroText } from '#/data/hero';

import { Screenshot } from './screenshot';
import {
  HeadingGenerateEffect,
  TextGenerateEffect,
} from './text-generate-effect';

export const HeroParallax = ({
  screens,
}: {
  screens: {
    title: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = screens.slice(0, 5);
  const secondRow = screens.slice(5, 10);
  const thirdRow = screens.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[225vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((screen) => (
            <Screenshot
              screen={screen}
              translate={translateX}
              key={screen.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20 ">
          {secondRow.map((screen) => (
            <Screenshot
              screen={screen}
              translate={translateXReverse}
              key={screen.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((screen) => (
            <Screenshot
              screen={screen}
              translate={translateX}
              key={screen.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 z-50 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1>
        <HeadingGenerateEffect
          heading="From outputs to outcomes"
          className="text-5xl font-medium text-foreground"
        />
      </h1>
      <div className="mt-8 max-w-2xl text-pretty">
        <TextGenerateEffect text={heroText} className="text-lg font-medium" />
      </div>
      <Link
        href="#user-auth-form"
        aria-label="Create free account"
        className={cn(
          buttonVariants({ size: 'lg' }),
          'mt-6 rounded-full font-sans tracking-normal dark:text-zinc-950',
        )}
      >
        Try for free
      </Link>
    </div>
  );
};
