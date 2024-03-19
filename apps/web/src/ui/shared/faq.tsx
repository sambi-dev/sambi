import type { FaqFragment } from '#/basehub/faq-queries';

import { FadeIn } from '../fade-in';
import RichTextWrapper from './rich-text-wrapper';

interface FaqsProps {
  faq: FaqFragment;
}

export default function Faqs({ faq }: FaqsProps) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faq.items.map((item) => (
            <FadeIn
              key={item._id}
              className="rounded-xl border bg-card p-6 shadow-md"
            >
              <dt className="font-mono text-lg font-semibold text-secondary-foreground">
                {item._title}
              </dt>
              <dd className="mt-2">
                <RichTextWrapper
                  content={item.answer?.json.content as string}
                  centered
                />
              </dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </div>
  );
}
