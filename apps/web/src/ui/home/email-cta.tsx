import { Button } from '@sambi/ui/button';

import { Container } from '#/ui/shared/container';
import { Pattern } from '#/ui/shared/pattern';

export function EmailCta() {
  return (
    <section
      id="email-cta"
      aria-label="Subscribe to our infrequent but awesome email newsletter"
      className="scroll-mt-14 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary to-background sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-24 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Got a brain-buster? Try us
            </h2>
            <p className="mt-4 text-lg tracking-tight text-secondary-foreground">
              We&apos;re not the know-it-alls we sound like. But we&apos;re
              pretty good at finding solutions. Drop us a line, challenge
              accepted.
            </p>
          </div>

          <form className="lg:pl-16">
            <h3 className="text-sm font-medium tracking-tight text-foreground/80">
              We won&apos;t spam you.{' '}
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-foreground placeholder:text-secondary-foreground/80 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-secondary-foreground/50 peer-focus:border-primary peer-focus:bg-card peer-focus:ring-4 peer-focus:ring-ring sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get answers
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
}
