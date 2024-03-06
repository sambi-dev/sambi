import { Container } from '#/ui/shared/container';
import { StarRating } from '#/ui/shared/star-rating';

import { ClientAvatar } from '../shared/client-avatar';

export function BigWarning({
  id,
  author,
  children,
}: {
  id: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  children: React.ReactNode;
}) {
  return (
    <aside
      id={id}
      aria-label={`Big Warning from ${author.name}`}
      className="relative bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-card via-primary to-card"
    >
      <Container
        size="xs"
        className="relative scroll-mt-14 py-20 sm:scroll-mt-32"
      >
        <figure>
          <div className="flex text-foreground sm:justify-center">
            <StarRating />
          </div>
          <blockquote className="mt-10 text-4xl font-medium tracking-tight text-secondary-foreground sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-border">
              <ClientAvatar id={id} initials={author.initials} />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-secondary-foreground">
                {author.name}
              </div>
              <div className="text-sm text-foreground">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}
