import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { upworkConfig } from '#/config/upwork';
import heroImage from '#/images/hero.png';
import { HeroWarning } from '#/ui/warnings/hero-warning';

export function Hero() {
  return (
    <header className="overflow-hidden bg-muted lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="relative z-10 mx-auto flex w-64 md:w-80 lg:w-auto">
            <Image
              className="w-full"
              src={heroImage}
              alt="A collage of Notion styled illustrations of Sam, Ambreen, and Rebekah of Yo! CXO"
              priority
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-card" />
          <HeroWarning />
        </div>
        <div className="pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
            <h1 className="text-pretty font-mono text-3xl font-semibold tracking-tighter text-foreground">
              A much smaller studio than our clients think
            </h1>
            <p className="mt-4 text-muted-foreground lg:text-lg">
              Somehow, our just wing it attitude keeps racking up big wins for
              clients. They come for the tech, awards on our shelf, and the
              promise of glory. Who are we to mess with a good thing.
            </p>
            <p className="mt-4 text-muted-foreground lg:text-lg">
              👇🏽 Got a crazy idea?
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href={upworkConfig.consult}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consult with Yo! CXO on Upwork in a new window"
                className={cn(
                  buttonVariants({ size: 'sm' }),
                  'w-full focus-visible:ring-1 md:w-auto',
                )}
              >
                Pay us to listen
                <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
