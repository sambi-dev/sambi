'use client';

import { useEffect } from 'react';

import { motion, stagger, useAnimate } from 'framer-motion';

import { cn } from '@yocxo/ui';

export const TextGenerateEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = text.split(' ');
  useEffect(() => {
    void animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      },
    );
  });

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-muted-foreground opacity-0"
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn('mt-4 font-sans', className)}>{renderWords()}</div>;
};

export const HeadingGenerateEffect = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = heading.split(' ');
  useEffect(() => {
    void animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.1),
      },
    );
  });

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-foreground opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn('mt-4 font-sans', className)}>{renderWords()}</div>;
};
