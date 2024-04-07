import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { Container } from '@yocxo/ui/container';
import { ArrowRightIcon, CheckIcon } from '@yocxo/ui/icons';

import { upworkConfig } from '#/config/upwork';
import { FadeIn } from '#/ui/fade-in';

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="py-16 sm:py-20 lg:py-32"
    >
      <Container className="text-pretty text-lg text-muted-foreground">
        <FadeIn>
          <p className="font-mono text-2xl font-semibold tracking-tighter text-foreground">
            Ambreen gushes. Rebekah agrees. Sam? He&apos;s never happy.
            That&apos;s our thing.
          </p>
          <p className="mt-4 font-mono text-xl font-semibold tracking-tighter text-primary">
            Ever have a shower thought so good, it makes the soap sing?
          </p>
          <p className="mt-4">
            That&apos;s how most of our client engagements begin. Yo! CXO,
            let&apos;s do this. Go figure.
          </p>
          <p className="mt-4">
            Our new clients expect us to know our{' '}
            <span className="line-through">shit</span> stuff. When we onboard
            them, we make sure to overwhelm them with buzzwords, allude to
            allusive algorithms, and show them fancy Venn diagrams.
          </p>
          <p className="mt-4">
            Then, we hit them up with a series of{' '}
            <span className="line-through">recycled</span> discovery exercises
            that keep them busy for a while. It helps us so catch-up on other
            projects we&apos;re{' '}
            <span className="line-through">way overdue</span> working on.
          </p>
          <p className="mt-4">
            After that, it&apos;s their turn to ask tough questions:
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Can I use Pobox Rd for my address?',
              'Will anyone notice if my brand is just a cool looking font?',
              'Is making it look legit just about finding the right filter?',
              'Can I get all this done with promo codes and free trials?',
            ].map((question) => (
              <li key={question} className="flex">
                <CheckIcon className="h-8 flex-none text-primary" />
                <span className="ml-4">{question}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            Every now and then, we get to chalk off a small win{' '}
            <span className="line-through">for our sanity</span> by convincing
            them to give up before we begin.
          </p>
          <p className="mt-4">
            Most of the time though, they&apos;re relentless. So we have to dig
            up the latest trending framework on LinkedIn and rely heavily on
            ChatGPT to explain it to us.
          </p>
          <p className="mt-4">
            The whole point of this phase? Trying hard to crash and burn on
            paper so we don&apos;t look like complete{' '}
            <span className="line-through">idiots</span> boneheads in the real
            world.
          </p>
          <p className="mt-4">
            You see, failure now minimizes waste later. We call that
            eco-friendly project management.
          </p>
          <p className="mt-4">
            It&apos;s all our serial-minded clients tend to remember.
            Occasionally, they thank us and they hit us up for more when the
            next big idea comes to them.
          </p>
          <p className="mt-4">
            You didn&apos;t think we&apos;d share a case study on retention
            tactics this early on, did ya?
          </p>
          <p className="mt-4">
            If they&apos;re still ready to go through with it, we put on the
            charm and get to it. We&apos;ll fire up the Figma subscription,
            check out the templates on sale on Creative Market, and maybe{' '}
            <span className="line-through">copy-paste</span> write a few lines
            of Typescript.
          </p>
          <p className="mt-4">
            Oh, to cover our <span className="line-through">asses</span> bases
            we repeat an overused but still effective catch-phrase often...
          </p>
          <p className="mt-4 font-semibold text-primary">
            If you&apos;re not embarrassed by your first iteration, you took too
            long to release it.
          </p>
          <p className="mt-4">
            Ready to take a leap with a team that&apos;s as surprised by our
            success as you are?
          </p>
          <p className="mt-4">No seriously...</p>
          <div className="mt-10">
            <a
              href={upworkConfig.consult}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a consult with Yo! CXO on Upwork in a new window"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'secondary' }),
                'w-full md:w-auto',
              )}
            >
              Let&apos;s do this
              <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
