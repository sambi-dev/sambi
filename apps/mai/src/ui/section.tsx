'use client';

import React from 'react';

import { cn } from '@yocxo/ui';
import {
  ChatBubbleTypingIcon,
  FileCheckIcon,
  FileTextIcon,
  PhotoIcon,
  RepeatSquareIcon,
  SearchIcon,
} from '@yocxo/ui/icons';
import { Separator } from '@yocxo/ui/separator';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  separator?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  size = 'md',
  title,
  separator = false,
}) => {
  let icon: React.ReactNode;
  switch (title) {
    case 'Images':
      icon = <PhotoIcon className="mr-2 text-muted-foreground" />;
      break;
    case 'Sources':
      icon = <FileTextIcon className="mr-2 text-muted-foreground" />;
      break;
    case 'Answer':
      icon = <FileCheckIcon className="mr-2 text-muted-foreground" />;
      break;
    case 'Related':
      icon = <RepeatSquareIcon className="mr-2 text-muted-foreground" />;
      break;
    case 'Follow-up':
      icon = <ChatBubbleTypingIcon className="mr-2 text-muted-foreground" />;
      break;
    default:
      icon = <SearchIcon className="mr-2 text-muted-foreground" />;
  }

  return (
    <>
      {separator && <Separator className="my-16 bg-primary/50" />}
      <section
        className={cn(
          ` ${size === 'sm' ? 'py-1' : size === 'lg' ? 'py-8' : 'py-4'}`,
          className,
        )}
      >
        {title && (
          <h2 className="flex items-center py-2 font-medium leading-none">
            {icon}
            {title}
          </h2>
        )}
        {children}
      </section>
    </>
  );
};
