import Image from 'next/image';

import { LinkedInIcon, UpworkIcon, XIcon } from '@sambi/ui/icons';

import CrewSocialIcon from '#/ui/about/crew-social-icon';
import { FadeIn } from '#/ui/fade-in';

interface Author {
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
  bio: string;
  upworkUrl: string;
  xUrl: string;
  linkedinUrl: string;
}

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <FadeIn className="mx-auto my-10 max-w-3xl items-center rounded-4xl border bg-card p-6 sm:my-16">
      <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
        <ul className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <li
            key={author.name}
            className="flex flex-col gap-10 pt-12 sm:flex-row"
          >
            <Image
              className="h-20 w-20 flex-none rounded-full object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
              src={author.imageUrl}
              alt={author.imageAlt}
              width={96}
              height={96}
              unoptimized
            />
            <div className="max-w-xl flex-auto">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-xl font-semibold tracking-tighter text-foreground">
                  {author.name}
                </h3>
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-tighter text-alternate">
                {author.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{author.bio}</p>
              <ul className="mt-4 flex gap-x-6">
                <li>
                  <CrewSocialIcon
                    url={author.upworkUrl}
                    icon={<UpworkIcon className="h-6 w-6" aria-hidden="true" />}
                    label={`Follow ${author.name} on Twitter in a new window`}
                  />
                </li>
                <li>
                  <CrewSocialIcon
                    url={author.xUrl}
                    icon={<XIcon className="h-6 w-6" aria-hidden="true" />}
                    label={`Follow ${author.name} on Twitter in a new window`}
                  />
                </li>
                <li>
                  <CrewSocialIcon
                    url={author.linkedinUrl}
                    icon={
                      <LinkedInIcon className="h-6 w-6" aria-hidden="true" />
                    }
                    label={`Connect with ${author.name} on LinkedIn in a new window`}
                  />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </figure>
    </FadeIn>
  );
}
