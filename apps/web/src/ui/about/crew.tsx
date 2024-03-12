import Image from 'next/image';

import { people } from '#/content/people';
import CrewSocialIcon from '#/ui/about/crew-social-icon';
import { LinkedInIcon, XIcon } from '#/ui/shared/icons';

export default function Crew() {
  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="font-mono text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
            Meet the crew
          </h2>
          <p className="mt-6 leading-8 text-muted-foreground md:text-lg">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <ul className="-mt-12 space-y-12 divide-y divide-border xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl border object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
                src={person.image.src}
                alt={`A notion styled illustration representing a headshot of ${person.name}`}
              />
              <div className="max-w-xl flex-auto">
                <h3 className="font-mono font-bold tracking-tighter text-foreground md:text-lg">
                  {person.name}
                </h3>
                <p className="font-mono font-bold text-primary md:text-lg">
                  {person.role}
                </p>
                <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base lg:text-lg">
                  {person.bio}
                </p>
                <ul className="mt-6 flex gap-x-6">
                  <li>
                    <CrewSocialIcon
                      url={person.xUrl}
                      icon={<XIcon className="h-6 w-6" aria-hidden="true" />}
                      label={`Follow ${person.name} on Twitter in a new window`}
                    />
                  </li>
                  <li>
                    <CrewSocialIcon
                      url={person.linkedinUrl}
                      icon={
                        <LinkedInIcon className="h-6 w-6" aria-hidden="true" />
                      }
                      label={`Connect with ${person.name} on LinkedIn in a new window`}
                    />
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
