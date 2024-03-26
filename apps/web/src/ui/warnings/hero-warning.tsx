import { StarRating } from '#/ui/shared/star-rating';

export function HeroWarning() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-secondary-foreground lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="text-balance text-lg font-medium text-secondary-foreground">
          “Recommend Yo CXO? No thank you. Listen, just stay away. I depend on
          them too much to share.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        <strong className="font-mono tracking-tighter text-primary before:content-['—_']">
          John G.
        </strong>
      </figcaption>
    </figure>
  );
}
