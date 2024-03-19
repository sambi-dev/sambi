import type { Client } from '#/content/warnings';

import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { warnings } from '#/content/warnings';
import { SectionIntro } from '#/ui/section-intro';
import { ClientAvatar } from '#/ui/shared/client-avatar';
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '#/ui/shared/expandable';
import { ArrowRightIcon } from '#/ui/shared/icons';

import { StarRating } from '../shared/star-rating';

interface WarningProps {
  client: Client;
  children: React.ReactNode;
}

function Warning({ client, children }: WarningProps) {
  return (
    <figure className="rounded-4xl border bg-card p-8 shadow-md">
      <div className="my-2 flex text-primary">
        <StarRating />
      </div>
      <blockquote>
        <p className="tracking-tight text-muted-foreground before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-primary">
          <ClientAvatar id={client.id} initials={client.initials} />
        </div>
        <div className="ml-4">
          <div className="font-mono text-base font-semibold leading-6 tracking-tight text-foreground">
            {client.name}
          </div>
          {client.ctaLink && client.ctaText ? (
            <div className="mt-2">
              <Link
                href={client.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consult with sambi on Upwork in a new window"
                className={cn(buttonVariants({ size: 'sm' }))}
              >
                {client.ctaText}
                <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
              </Link>
            </div>
          ) : (
            <div className="mt-1 font-mono text-sm font-medium tracking-tight text-muted-foreground">
              {client.role}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

export function Warnings() {
  return (
    <section
      id="warnings"
      aria-labelledby="warnings-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        title="Check for warning signs they say..."
        id="warnings-title"
        eyebrow="Warnings"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Read at your own risk. Being roasted by some of the most{' '}
          <span className="line-through">demanding</span> inspiring clients
          helps us build resiliency.
        </p>
      </SectionIntro>
      <Expandable className="group mt-16">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {warnings
            .map((column) => column[0])
            .map((warning, warningIndex) => (
              <li key={warningIndex} className="lg:hidden">
                {warning && (
                  <Warning client={warning.client}>{warning.content}</Warning>
                )}
              </li>
            ))}
          {warnings.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul>
                <ExpandableItems>
                  {column.map((warning, warningIndex) => (
                    <li
                      key={warningIndex}
                      className={cn(
                        warningIndex === 0 && 'hidden lg:list-item',
                        warningIndex === 1 && 'lg:mt-8',
                        warningIndex > 1 && 'mt-8',
                      )}
                    >
                      <Warning client={warning.client}>
                        {warning.content}
                      </Warning>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more warnings</ExpandableButton>
      </Expandable>
    </section>
  );
}
