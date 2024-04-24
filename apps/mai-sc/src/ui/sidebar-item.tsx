'use client';

import type { Chat } from '#/lib/types';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { MessageIcon, UsersIcon } from '@yocxo/ui/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@yocxo/ui/tooltip';

import { useLocalStorage } from '#/lib/hooks/use-local-storage';

interface SidebarItemProps {
  index: number;
  chat: Chat;
  children: React.ReactNode;
}

export function SidebarItem({ index, chat, children }: SidebarItemProps) {
  const pathname = usePathname();

  const isActive = pathname === chat.path;
  const [newChatId, setNewChatId] = useLocalStorage('newChatId', null);
  const shouldAnimate = index === 0 && isActive && newChatId;

  if (!chat?.id) return null;

  return (
    <motion.div
      className="relative h-8"
      variants={{
        initial: {
          height: 0,
          opacity: 0,
        },
        animate: {
          height: 'auto',
          opacity: 1,
        },
      }}
      initial={shouldAnimate ? 'initial' : undefined}
      animate={shouldAnimate ? 'animate' : undefined}
      transition={{
        duration: 0.25,
        ease: 'easeIn',
      }}
    >
      <div className="absolute left-2 top-1 flex size-6 items-center justify-center">
        {chat.sharePath ? (
          <Tooltip delayDuration={1000}>
            <TooltipTrigger
              tabIndex={-1}
              className="focus:bg-muted focus:ring-1 focus:ring-ring"
            >
              <UsersIcon className="mr-2 mt-1 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>This is a shared chat.</TooltipContent>
          </Tooltip>
        ) : (
          <MessageIcon className="mr-2 mt-1 text-muted-foreground" />
        )}
      </div>
      <Link
        href={chat.path}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'group w-full px-10 font-sans text-xs tracking-normal text-muted-foreground transition-colors hover:bg-primary/20',
          isActive &&
            'border-r-4 border-primary bg-background pr-16 font-medium text-foreground',
        )}
      >
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
          title={chat.title}
        >
          <span className="whitespace-nowrap">
            {shouldAnimate ? (
              chat.title.split('').map((character, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -100,
                    },
                    animate: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial={shouldAnimate ? 'initial' : undefined}
                  animate={shouldAnimate ? 'animate' : undefined}
                  transition={{
                    duration: 0.25,
                    ease: 'easeIn',
                    delay: index * 0.05,
                    staggerChildren: 0.05,
                  }}
                  onAnimationComplete={() => {
                    if (index === chat.title.length - 1) {
                      setNewChatId(null);
                    }
                  }}
                >
                  {character}
                </motion.span>
              ))
            ) : (
              <span>{chat.title}</span>
            )}
          </span>
        </div>
      </Link>
      {isActive && <div className="absolute right-2 top-1">{children}</div>}
    </motion.div>
  );
}
