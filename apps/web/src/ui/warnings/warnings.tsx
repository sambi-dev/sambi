import { notFound } from 'next/navigation';

import { RichText } from 'basehub/react-rich-text';

import { UserAvatar } from '@yocxo/ui/user-avatar';

import {
  fetchWarnings,
  fetchWarningsSectionIntro,
} from '#/basehub/warnings-queries';
import { SectionIntro } from '#/ui/section-intro';
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '#/ui/shared/expandable';
import { StarRating } from '#/ui/shared/star-rating';

import RichTextWrapper from '../shared/rich-text-wrapper';

interface Client {
  id: string;
  name: string;
  contact: string;
  role: string;
  initials: string;
  ctaLink?: string;
  ctaText?: string;
}

interface Warning {
  content: string;
  client: Client;
}

interface WarningProps {
  client: Client;
  children: React.ReactNode;
}

function Warning({ client, children }: WarningProps) {
  return (
    <figure className="rounded-4xl border bg-card p-8 shadow-md">
      <div className="my-2 flex text-primary">
        <StarRating size="sm" />
      </div>
      <blockquote>
        <div className="tracking-tight text-muted-foreground">{children}</div>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-primary">
          <UserAvatar
            id={client.id}
            initials={client.initials}
            name={client.contact}
          />
        </div>
        <div className="ml-4">
          <div className="font-mono text-sm font-semibold leading-6 tracking-tight text-foreground after:content-['.']">
            {client.contact} {client.initials}
          </div>
          <p className="line-clamp-1 font-mono text-[0.6rem] font-medium tracking-tight text-muted-foreground">
            {client.role}
            <span className="text-alternate"> :: </span>
            {client.name}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export async function Warnings() {
  const [sectionIntro, warningsData] = await Promise.all([
    fetchWarningsSectionIntro(),
    fetchWarnings(),
  ]);

  if (!sectionIntro || !warningsData) {
    notFound();
  }

  const { items: warnings } = warningsData;

  return (
    <section
      id="warnings"
      aria-labelledby="warnings-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        eyebrow={sectionIntro.eyebrow}
        title={sectionIntro.title}
        centered={sectionIntro.centered}
      >
        <RichText>{sectionIntro.description?.json.content}</RichText>
      </SectionIntro>
      <Expandable className="group mt-16">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          <ExpandableItems limit={6}>
            {warnings.map((warning) => (
              <li key={warning._sys.id} className="mt-8">
                <Warning
                  client={{
                    id: warning.client._sys.id,
                    name: warning.client._sys.title,
                    contact: warning.client.contacts.items[0]!._sys.title,
                    initials: warning.client.contacts.items[0]!.lastInitial,
                    role: warning.client.contacts.items[0]!.role,
                  }}
                >
                  <RichTextWrapper
                    small
                    content={
                      warning.client.contacts.items[0]!.testimonial?.json
                        .content as string
                    }
                  />
                </Warning>
              </li>
            ))}
          </ExpandableItems>
        </ul>
        <ExpandableButton>Read more warnings</ExpandableButton>
      </Expandable>
    </section>
  );
}
