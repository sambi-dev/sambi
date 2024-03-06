import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import sambiLogo from '#/images/avatars/sambi-logo.png';

export function Tldr() {
  return (
    <section
      id="tldr"
      aria-labelledby="tldr-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-card pt-px">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-muted md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={sambiLogo}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <div
              id="tldr-title"
              className="mb-6 block text-base font-semibold uppercase tracking-widest text-primary"
            >
              TLDR
            </div>
            <p className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              <span className="block text-primary">Your scroll ends here</span>
              Partner with us and join the ranks of why did we wait so long?
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              From the digital trenches of design, tech, and growth, we&apos;ve
              been where you are. Staring at a screen, wondering if it gets
              better. It does.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our principal-only team has a combined experience of +75 years. We
              have an NPS score of 92, serving over 100 clients, and
              there&apos;s only one who won&apos;t talk to us anymore.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When you&apos;re tired of being the best-kept secret, we&apos;re
              the ones to shine a light on it.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to crush it? Thought so.
            </p>

            <p className="mt-8">
              <Link
                href="https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consult with sambi on Upwork in a new window"
                className={cn(buttonVariants(), 'w-full md:w-auto')}
              >
                Let&apos;s talk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
