import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { Container } from '@yocxo/ui/container';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { env } from '#/env';

export function Cta() {
  const mailtoLink = `mailto:${env.NEXT_PUBLIC_YOCXO_SUPPORT_EMAIL}?subject=Website%3A%20Brain%20buster%20inquiry&body=Sup%2C%20Yo%20CXO!%3F%20I%20have%20a%20brain%20buster%20for%20you%2C%20here%20it%20is%20%F0%9F%91%87%3A%20`;
  return (
    <section
      id="cta"
      aria-label="Ask us a question about anything digital that ChatGPT could answer. Seriously though, ask us anything."
      className="scroll-mt-14 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-background dark:via-primary/60 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
        >
          <div className="max-w-xl">
            <h2 className="font-mono text-4xl font-semibold tracking-tighter text-foreground sm:w-3/4 sm:text-5xl md:w-3/4 lg:w-auto">
              Got a brain buster?
            </h2>
            <p className="mt-4 text-lg tracking-tight text-secondary-foreground">
              We&apos;re not the know-it-alls we sound like. But we&apos;re
              pretty good at finding solutions. Drop us a line, challenge
              accepted.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-end gap-4 lg:pl-16">
            <a
              href={mailtoLink}
              aria-label="Send the Yo! CXO team an email with your brain busting question"
              className={cn(buttonVariants(), 'w-full md:w-auto')}
            >
              Get answers
              <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
