import type { CrewFragment } from '#/basehub/crew-queries';

import Image from 'next/image';

import { RichText } from 'basehub/react-rich-text';

import { LinkedInIcon, UpworkIcon, XIcon } from '@yocxo/ui/icons';

import type { BlockRichText } from '.basehub';

import CrewSocialIcon from '#/ui/about/crew-social-icon';

interface CrewProps {
  crew: CrewFragment;
}

export default function Crew({ crew }: CrewProps) {
  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="font-mono text-2xl font-semibold tracking-tighter text-foreground">
            {crew.title}
          </h2>
          <div className="mt-6 leading-8 text-muted-foreground">
            <RichText>
              {crew.description.json?.content as BlockRichText}
            </RichText>
          </div>
        </div>
        <ul className="-mt-12 space-y-12 divide-y divide-border xl:col-span-3">
          {crew.people.items.map((person) => (
            <li
              key={person._sys.id}
              id={person.websiteRelativePath}
              className="group flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <Image
                className="aspect-[4/5] w-44 flex-none rounded-2xl border bg-card object-cover grayscale transition duration-500 group-hover:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] group-hover:from-background group-hover:via-primary/80 group-hover:to-card group-hover:grayscale-0 motion-safe:group-hover:scale-105"
                src={person.image.url}
                alt={
                  person.image.alt ??
                  `A notion styled illustration representing a head shot of ${person._sys.title}`
                }
                width={208}
                height={260}
              />
              <div className="max-w-xl flex-auto">
                <h3
                  id={person._sys.id}
                  className="font-mono font-semibold tracking-tighter text-foreground"
                >
                  {person._sys.title}
                </h3>
                <p className="font-mono text-xs text-alternate">
                  {person.role}
                </p>
                <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
                  {person.bio}
                </p>
                <ul className="mt-6 flex gap-x-4">
                  {person.upworkUrl && (
                    <li>
                      <CrewSocialIcon
                        url={person.upworkUrl}
                        icon={
                          <UpworkIcon className="h-6 w-6" aria-hidden="true" />
                        }
                        label={`Follow ${person._sys.title} on Upwork in a new window`}
                      />
                    </li>
                  )}
                  {person.twitterUrl && (
                    <li>
                      <CrewSocialIcon
                        url={person.twitterUrl}
                        icon={<XIcon className="h-6 w-6" aria-hidden="true" />}
                        label={`Follow ${person._sys.title} on Twitter in a new window`}
                      />
                    </li>
                  )}
                  {person.linkedinUrl && (
                    <li>
                      <CrewSocialIcon
                        url={person.linkedinUrl}
                        icon={
                          <LinkedInIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        }
                        label={`Connect with ${person._sys.title} on LinkedIn in a new window`}
                      />
                    </li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
