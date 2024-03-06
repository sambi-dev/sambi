import type { ImageProps } from 'next/image';

import Image from 'next/image';

import { cn } from '@sambi/ui';

import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode;
  client: { logo: ImageProps['src']; name: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative isolate bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-card via-primary to-card py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative text-3xl font-medium text-foreground sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image src={client.logo} alt={client.name} unoptimized />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}
