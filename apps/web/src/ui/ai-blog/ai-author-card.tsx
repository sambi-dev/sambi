import Image from 'next/image';

import yoCxoLogo from '#/images/avatars/yocxo-logo-icon.png';
import { FadeIn } from '#/ui/fade-in';

export default function AiAuthorCard() {
  return (
    <FadeIn className="mx-auto my-10 max-w-3xl items-center rounded-4xl border bg-card p-6 sm:my-16">
      <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
        <div className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <div className="flex flex-col gap-10 pt-12 sm:flex-row">
            <Image
              className="h-20 w-20 flex-none rounded-full border bg-primary object-cover p-2 grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
              src={yoCxoLogo}
              alt="A logomark for Yo! CXO that looks like a funnel representing the letter Y"
              width={96}
              height={96}
              unoptimized
            />
            <div className="max-w-xl flex-auto">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-xs font-medium uppercase tracking-tighter text-alternate">
                  AI Blog
                </h3>
              </div>
              <p className="font-mono text-lg font-semibold tracking-tighter text-foreground">
                AI content that hits different
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                ChatGPT wrappers and Twitter bros tell you to game your SEO.
                Don&apos;t fall for that{' '}
                <span className="line-through">shit</span>. Quality matters, and
                you&apos;ll get crushed by Google like they did. Our AI Blog
                transparently explores what humans and AI can achieve together
                to craft high-quality, meaningful content.
              </p>
            </div>
          </div>
        </div>
      </figure>
    </FadeIn>
  );
}
