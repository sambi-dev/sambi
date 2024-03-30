import { notFound } from 'next/navigation';

import { RichText } from 'basehub/react-rich-text';

import type { ClientItem } from '.basehub';

import {
  fetchWarnings,
  fetchWarningsSectionIntro,
} from '#/basehub/warnings-queries';
import { AIReviewSummary } from '#/ui/ai/ai-review-summary';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { SectionIntro } from '#/ui/section-intro';
import RichTextWrapper from '#/ui/shared/rich-text-wrapper';

import { Warning } from './warning';

type WarningColumn = Warning[];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
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

  const columnLimits = [4, 2, 2, 4];
  const warningColumns: WarningColumn[] = [[], [], [], []];

  let currentColumn = 0;
  for (
    let i = 0, totalAdded = 0;
    i < warnings.length && currentColumn < warningColumns.length;
    i++
  ) {
    const warningWithTypeAssertion: Warning = {
      ...warnings[i],
      client: warnings[i]!.client as ClientItem,
    };

    warningColumns[currentColumn]!.push(warningWithTypeAssertion);
    totalAdded++;

    if (
      totalAdded === columnLimits[currentColumn] ||
      totalAdded === warnings.length
    ) {
      currentColumn++;
      totalAdded = 0;
    }
  }

  return (
    <section
      id="warnings"
      aria-labelledby="warnings-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="relative pb-32 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={sectionIntro.eyebrow}
            title={sectionIntro.title}
            centered={sectionIntro.centered}
          >
            <RichText>{sectionIntro.description?.json.content}</RichText>
          </SectionIntro>
          <FadeIn className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <AIReviewSummary />
            {warningColumns.map((columnWarnings, columnIndex) => (
              <div
                key={`${columnIndex}-${Math.random()}`}
                className={classNames(
                  columnIndex === 0 || columnIndex === warningColumns.length - 1
                    ? 'xl:row-span-2'
                    : 'xl:row-start-1',
                  'space-y-8',
                )}
              >
                <FadeInStagger className="space-y-8">
                  {columnWarnings.map((warning) => (
                    <FadeIn key={`${warning.client._id}-${Math.random()}`}>
                      <Warning
                        client={{
                          id: warning.client._sys.id,
                          name: warning.client._sys.title,
                          contact: warning.client.contacts.items[0]!._sys.title,
                          initials:
                            warning.client.contacts.items[0]!.lastInitial,
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
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
