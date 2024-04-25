'use client';

import { useState } from 'react';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@yocxo/ui';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yocxo/ui/card';
import { ArrowRightIcon } from '@yocxo/ui/icons';

export const Launcher = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            What do you want to achieve today?
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the most appropriate agent to help you get the job done.
          </p>
        </div>
        <div
          className={cn(
            'grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3',
            className,
          )}
        >
          {items.map((item, idx) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="group relative  block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 block h-full w-full rounded-3xl bg-primary/80"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className="relative z-20 h-full w-full overflow-hidden rounded-2xl border bg-card shadow-md group-hover:border-primary">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <ArrowRightIcon className="size-6 text-primary" />
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
