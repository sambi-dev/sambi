import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { Container } from '#/ui/shared/container';

import { CheckIcon } from '../shared/icons';

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-muted-foreground">
        <p className="text-5xl font-bold tracking-tight text-foreground">
          Ambreen swoons, Rebekah approves, and Sam? He&apos;s never happy but
          that&apos;s our thing
        </p>
        <p className="mt-4 text-2xl font-semibold text-primary">
          Ever have a shower thought so good, it makes the soap sing?
        </p>
        <p className="mt-4">
          This is how many of our client engagements begin. Go figure.
        </p>
        <p className="mt-4">
          When we onboard new clients, we like to give the impression that we
          got the whole process down. We overuse buzzwords, allude to allusive
          algorithms, and refer to Venn diagrams too.
        </p>
        <p className="mt-4">
          For the climax, we hit them up with a{' '}
          <span className="line-through">recycled</span> discovery survey that
          keeps them busy for a while.
        </p>
        <p className="mt-4">
          Then it&apos;s their turn to ask tough questions:
        </p>
        <ul className="mt-8 space-y-3">
          {[
            'How can I fake it until I make it? ',
            'Can I use Pobox Rd for my address?',
            'Will anyone notice if my brand is just a cool looking font?',
            'Is making it look legit just about finding the right filter?',
            'What if Twitter, I mean X, asks me to verify my account?',
            'Can I get all this done with promo codes and free trials?',
          ].map((question) => (
            <li key={question} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-alternate" />
              <span className="ml-4">{question}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Every now and then, we get to chalk off a small win{' '}
          <span className="line-through">for our sanity</span> by convincing
          them to give up.
        </p>
        <p className="mt-4">
          Sometimes, they keep coming for more. Then we have to dig up the
          latest trending framework on LinkedIn and rely heavily on ChatGPT to
          explain it to us.
        </p>
        <p className="mt-4">
          The whole point of this phase? Trying hard to crash and burn on paper
          so we don&apos;t look like complete schmucks failing in the real
          world. That cat stays in the bag.
        </p>
        <p className="mt-4">
          Smaller hiccups now tend to minimize waste later. We call that
          eco-friendly project management. It&apos;s all our serial-minded
          clients tend to remember, they even thank us and they might hit us up
          for more when the next big idea comes to them.
        </p>
        <p className="mt-4">
          You didn&apos;t think we&apos;d share a case study on retention
          tactics this early on did ya?
        </p>
        <p className="mt-4">
          If they&apos;re still insistent on going through with it after all
          that? Well, then we put on the charm and start working. We&apos;ll
          restart the Figma subscription and{' '}
          <span className="line-through">copy-paste</span> write a few lines of
          Typescript.
        </p>
        <p className="mt-4">
          We lean in heavily to repeat an obsolete but still effective
          catch-phrase{' '}
          <span className="font-semibold text-primary">
            If you&apos;re not embarrassed by your first iteration, you took too
            long to release it
          </span>
          . It helps us manage expectations and soften the blow.
        </p>
        <p className="mt-4">
          Ready to take a leap with a team that&apos;s as surprised by our
          success as you are?
        </p>
        <p className="mt-4">No seriously...</p>
        <div className="mt-10">
          <a
            href="https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a consult with sambi on Upwork in a new window"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'secondary' }),
              'w-full md:w-auto',
            )}
          >
            Let&apos;s do this
          </a>
        </div>
      </Container>
    </section>
  );
}
