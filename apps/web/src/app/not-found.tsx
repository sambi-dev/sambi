import Link from 'next/link';

import { Container } from '#/ui/shared/container';

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center">
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-foreground ring-1 ring-inset ring-foreground">
          404
        </p>
        <h1 className="mt-6 text-5xl font-extrabold text-foreground sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg tracking-tight text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 text-base font-medium text-primary hover:text-primary/80"
        >
          Go back home <span aria-hidden="true">&rarr;</span>
        </Link>
      </Container>
    </div>
  );
}
