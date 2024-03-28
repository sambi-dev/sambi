import { StarRating } from '#/ui/shared/star-rating';

export function HeroWarning() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-alternate lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="text-balance text-muted-foreground">
          “Recommend Yo! CXO? No thank you. Listen, just stay away. I depend on
          them too much to share.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        <strong className="font-mono font-semibold tracking-tighter text-muted-foreground before:content-['—_']">
          John G.
        </strong>
      </figcaption>
    </figure>
  );
}
