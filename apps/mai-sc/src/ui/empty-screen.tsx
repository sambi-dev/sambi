import { ExternalLink } from '#/ui/external-link';

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-card p-8 text-sm">
        <h1 className="text-lg font-semibold tracking-tighter">
          So, you want to create a ChatGPT wrapper?
        </h1>
        <p className="leading-normal text-muted-foreground">
          You&apos;ve got a game-changing idea. Because the world needs another
          AI app that will{' '}
          <span className="line-through">be outdated in a month</span> solve all
          their problems.
        </p>
        <p className="leading-normal text-muted-foreground">
          Well, for those of you dreamers and believers, this is for you. You
          see, this isn&apos;t your average project. The geniuses at{' '}
          <ExternalLink href="https://vercel.com">Vercel</ExternalLink> built
          something remarkable.
        </p>
        <p className="leading-normal text-muted-foreground">
          We forked it and added that signature{' '}
          <ExternalLink href="https://yocxo.com/showcase/coco-gpt">
            Yo! CXO
          </ExternalLink>{' '}
          touch.
        </p>
      </div>
    </div>
  );
}
