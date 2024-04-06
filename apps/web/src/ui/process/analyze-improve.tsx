import imageAnalyze from '#/images/analyze.jpg';
import { List, ListItem } from '#/ui/list';
import { Section } from '#/ui/process/section';

import { ImageCredit } from './image-credit';

export function AnalyzeImprove() {
  return (
    <Section
      title="Analyze, improve, & scale"
      image={{ src: imageAnalyze, flipped: true }}
    >
      <div className="space-y-6 text-sm text-muted-foreground md:text-base">
        <p>
          Now that we have our repeatable systems in place, it&apos;s time to{' '}
          <strong className="font-semibold text-primary">
            put them to the test
          </strong>
          .
        </p>
        <p>
          We&apos;ll work towards clearly defined{' '}
          <strong className="font-semibold text-primary">
            economies of scale
          </strong>
          . That means you&apos;ll get a huge invoice from us.
        </p>
        <p>
          Remember the{' '}
          <strong className="font-semibold text-primary">
            experiments we ran
          </strong>{' '}
          in the previous phase? We&apos;ll start{' '}
          <strong className="font-semibold text-primary">
            increasing their scope
          </strong>{' '}
          and{' '}
          <strong className="font-semibold text-primary">
            improving their velocity
          </strong>
          .
        </p>
        <p>
          As Sam likes to say, velocity isn&apos;t about speed, it&apos;s about
          reaching levels of{' '}
          <strong className="font-semibold text-primary">
            dependable and predictable performance
          </strong>
          .
        </p>
        <p>When we have that, the sky&apos;s the limit. </p>
      </div>

      <h3 className="mt-12 font-mono text-xs font-medium tracking-tighter text-secondary-foreground md:text-base">
        Hyperbole delivered in this round
      </h3>
      <List className="mt-8">
        <ListItem title="Data Diving">
          We plunge into the data ocean with a snorkel, hoping not to drown in
          analytics.
        </ListItem>
        <ListItem title="Error Guessing">
          Our error guessing game is strong. We call it strategic forecasting.
        </ListItem>
        <ListItem title="Improvisation">
          Our middle name. If there&apos;s a way to wing it, we&apos;ve already
          taken flight.
        </ListItem>
        <ListItem title="Feedback Loops">
          We love feedback loops. They&apos;re like echo chambers but with more
          nodding.
        </ListItem>
        <ListItem title="Optimization Theatre">
          We perform optimization rituals. Effectiveness may vary.
        </ListItem>
      </List>
      <ImageCredit
        photographerName="GVZ 42"
        photographerUrl="https://unsplash.com/@gvz42?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        photoUrl="https://unsplash.com/photos/a-close-up-of-a-table-with-a-glass-of-water-z47okydJjGs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      />
    </Section>
  );
}
