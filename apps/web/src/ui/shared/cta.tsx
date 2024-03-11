import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { env } from '#/env';
import { Container } from '#/ui/shared/container';

export function Cta() {
  const mailtoLink = `mailto:${env.NEXT_PUBLIC_SAMBI_SUPPORT_EMAIL}?subject=Website%3A%20Brain%20buster%20inquiry&body=Hey%20sambi.dev%20team%2C%20I%20have%20a%20brain%20buster%20for%20you%2C%20here%20it%20is%20%F0%9F%91%87%3A%20`;
  return (
    <section
      id="cta"
      aria-label="Ask us a question about anything digital that ChatGPT could answer. Seriously though, ask us anything."
      className="scroll-mt-14 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-background dark:via-primary sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-center gap-y-12 py-24 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <div>
            <h2 className="font-mono text-4xl font-medium tracking-tighter text-foreground sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Got a brain-buster?
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
              aria-label="Send the sambi.dev team an email with your brain busting question"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full md:w-auto')}
            >
              Get answers
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
