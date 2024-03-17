import imageExecute from '#/images/execute.jpg';
import { ImageCredit } from '#/ui/process/image-credit';
import { Section } from '#/ui/process/section';
import { TagList, TagListItem } from '#/ui/tag-list';

export function BuildExecute() {
  return (
    <Section title="Build & execute" image={{ src: imageExecute }}>
      <div className="space-y-6 text-sm text-muted-foreground md:text-base">
        <p>
          We&apos;ll roll up our sleeves and get to work (after figuring out
          which sleeves even have buttons). You&apos;ll likely see frantic
          keyboard tapping and panicked searches for &quot;how to fix [insert
          disastrous mishap].&quot;
        </p>
        <p>
          If you&apos;re lucky, you&apos;ll even catch the occasional muttered
          curse word as things go sideways.
        </p>
        <p>
          Think of us as slightly less-competent construction workers trying to
          build a house entirely from IKEA instructions... while the
          instructions are in Swedish.
        </p>
        <p>
          Sure, it might be a bumpy ride, but we&apos;re committed to getting
          you something that sorta makes you smile. (and doesn&apos;t completely
          collapse when you look at it too hard)
        </p>
      </div>
      <h3 className="mt-12 font-mono text-sm font-medium tracking-tighter text-secondary-foreground md:text-base">
        Stuff that happens
      </h3>
      <TagList className="mt-4">
        <TagListItem>Overcaffeinated brainstorming</TagListItem>
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
