import imageExecute from '#/images/execute.jpg';
import { ImageCredit } from '#/ui/process/image-credit';
import { Section } from '#/ui/process/section';
import { TagList, TagListItem } from '#/ui/tag-list';

export function BuildExecute() {
  return (
    <Section title="Build & execute" image={{ src: imageExecute }}>
      <div className="space-y-6 text-sm text-muted-foreground md:text-base">
        <p>
          Normally, we don&apos;t even make it this far. But when we do, we lean
          in to{' '}
          <strong className="font-semibold text-primary">
            iterations towards outcomes
          </strong>
          . Jumping right into the{' '}
          <strong className="font-semibold text-primary">quick-wins</strong> we
          identified earlier and sometimes{' '}
          <strong className="font-semibold text-primary">quick-fixes</strong>{' '}
          too.
        </p>
        <p>
          After that, we{' '}
          <span className="line-through">start making shit up</span> continue to{' '}
          <strong className="font-semibold text-primary">
            iterate on the plan
          </strong>
          .
        </p>
        <p>
          It&apos;s a deliberate and repetitive process of{' '}
          <strong className="font-semibold text-primary">
            analysis, experimentation, measurement, and improvement
          </strong>
          . It helps us hide the fact that we&apos;re mostly winging it.
        </p>
        <p>
          The whole thing can be a pretty bumpy ride. We always forget things,
          we will no-doubt make{' '}
          <span className="line-through">way too many</span>{' '}
          <strong className="font-semibold text-primary">mistakes</strong>.
        </p>
        <p>
          The cool thing about being{' '}
          <span className="line-through">old AF</span> experienced is that{' '}
          <strong className="font-semibold text-primary">
            we recover faster
          </strong>{' '}
          than you&apos;ll notice.
        </p>
        <p>
          Yep, this is where we&apos;re focused on laying a{' '}
          <strong className="font-semibold text-primary">
            solid foundation of systems
          </strong>{' '}
          across people, process, and technology.
        </p>
      </div>
      <h3 className="mt-12 font-mono text-sm font-medium tracking-tighter text-secondary-foreground md:text-base">
        Just part of the schtick
      </h3>
      <TagList className="mt-4">
        <TagListItem>Over caffeinated brainstorming</TagListItem>
        <TagListItem>Existential questioning</TagListItem>
        <TagListItem>Imposter syndrome</TagListItem>
        <TagListItem>ChatGPT rate limits</TagListItem>
        <TagListItem>Confusing design jargon</TagListItem>
        <TagListItem>Endless revisions</TagListItem>
        <TagListItem>Deadline denial</TagListItem>
      </TagList>
      <ImageCredit
        photographerName="Sarah Kilian"
        photographerUrl="https://unsplash.com/@rojekilian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        photoUrl="https://unsplash.com/photos/brown-ice-cream-cone-52jRtc2S_VE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      />
    </Section>
  );
}
