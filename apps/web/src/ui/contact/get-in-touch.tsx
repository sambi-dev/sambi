import { ArrowRightIcon } from '@yocxo/ui/icons';

import { contactMethods } from '#/content/contact-methods';
import { Border } from '#/ui/border';
import { FadeIn } from '#/ui/fade-in';
import { SocialMedia } from '#/ui/social-media';

export default function GetInTouch() {
  return (
    <FadeIn className="mx-auto max-w-2xl space-y-16 divide-y divide-border lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div>
          <h2 className="font-mono text-xl font-semibold tracking-tighter text-foreground">
            Get in touch
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          {contactMethods.map(
            ({
              title,
              description,
              screenReaderLabel,
              ariaLabel,
              linkHref,
              linkText,
            }) => (
              <div
                key={title}
                className="rounded-2xl border bg-card p-10 shadow-md"
              >
                <Border position="left" className="pl-8">
                  <h3 className="font-mono text-lg font-semibold tracking-tighter text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                  <dl className="mt-4 space-y-1 leading-6 text-muted-foreground">
                    <div>
                      <dt className="sr-only">{screenReaderLabel}</dt>
                      <dd>
                        <a
                          className="font-mono text-xs font-semibold tracking-tighter text-primary hover:underline hover:decoration-2 hover:underline-offset-4"
                          href={linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={ariaLabel}
                        >
                          <span className="flex flex-row items-center">
                            {linkText}
                            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
                          </span>
                        </a>
                      </dd>
                    </div>
                  </dl>
                </Border>
              </div>
            ),
          )}
          <div className="rounded-2xl border bg-card p-10 shadow-md">
            <h3 className="font-mono text-lg font-semibold tracking-tighter text-foreground">
              Connect with us
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow our progress and facepalms on social media.
            </p>
            <dl className="mt-3 space-y-1 leading-6 text-muted-foreground">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <SocialMedia className="mt-4 gap-6" />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
