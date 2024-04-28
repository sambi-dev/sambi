import type { NextPage } from 'next';

import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import {
  ArrowLeftIcon,
  ChatBubbleTypingIcon,
  ChevronRightIcon,
  FileTextIcon,
} from '@yocxo/ui/icons';

const links = [
  {
    name: 'Want to talk about social media marketing?',
    href: '/chat',
    description: 'Start a chat with me.',
    icon: ChatBubbleTypingIcon,
  },
  {
    name: "Need to understand a customer's industry?",
    href: '/research',
    description: 'Let me do that for you lickety split.',
    icon: FileTextIcon,
  },
  {
    name: "Want to know more about our customers's audience?",
    href: '/research',
    description: 'No problem, I can help you gain deep insights.',
    icon: FileTextIcon,
  },
  {
    name: 'Stuck on content ideas?',
    href: '/research',
    description: "I thought you'd never ask. I'll get your ideas brewing.",
    icon: FileTextIcon,
  },
];

const NotFoundPage: NextPage = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24 lg:mt-40">
        <p className="text-base font-semibold leading-8 text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          Whoops, that page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          I&apos;m sorry, but I couldn&apos;t find the page you&apos;re looking
          for.
        </p>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">Popular pages</h2>
        <ul className="-mt-6 divide-y divide-foreground/5 border-b border-foreground/5">
          {links.map((link, linkIdx) => (
            <li key={linkIdx} className="relative flex gap-x-6 py-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border bg-card shadow-sm">
                <link.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  <a href={link.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {link.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <div className="flex-none self-center">
                <ChevronRightIcon
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-row justify-center">
          <Link
            href="/research"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'font-sans text-sm tracking-normal text-primary',
            )}
          >
            <ArrowLeftIcon className="mr-2" />
            Back to Research
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
