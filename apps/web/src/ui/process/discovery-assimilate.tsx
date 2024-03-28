import imageSquirrel from '#/images/squirrel.jpg';
import { ImageCredit } from '#/ui/process/image-credit';
import { Section } from '#/ui/process/section';
import { TagList, TagListItem } from '#/ui/tag-list';

export function DiscoveryAssimilation() {
  return (
    <Section title="Discovery & assimilation" image={{ src: imageSquirrel }}>
      <div className="space-y-6 text-sm text-muted-foreground md:text-base">
        <p>
          We&apos;ll sneak into{' '}
          <strong className="font-semibold text-primary">
            your digital world
          </strong>{' '}
          like squirrels on a forgotten bird feeder. Enthusiastic, slightly
          messy, and probably leaving with more than we intended.
        </p>
        <p>
          Expect weird questions and some empty smiles too. We&apos;ll use big
          words and a lot of jargon while we{' '}
          <strong className="font-semibold text-primary">
            dig into everything
          </strong>{' '}
          from your website, to support, and fulfillment. Cause snooping is our
          jam.
        </p>
        <p>
          The more you tell us, the better we can hide our confusion. And the
          more creative our excuses sound when things get… interesting. By the
          end? We&apos;ll{' '}
          <strong className="font-semibold text-primary">be onboard</strong> and
          know where the bodies are buried.
        </p>
      </div>
      <h3 className="mt-12 font-mono text-sm font-medium tracking-tighter text-secondary-foreground md:text-base">
        Things that may or may not happen
      </h3>
      <TagList className="mt-4">
        <TagListItem>Deep questionnaires</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Digital stalking</TagListItem>
        <TagListItem>Random site inspections</TagListItem>
        <TagListItem>Awkward silences</TagListItem>
      </TagList>
      <ImageCredit
        photographerName="Transly Translation Agency"
        photographerUrl="https://unsplash.com/@translytranslations?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        photoUrl="https://unsplash.com/photos/brown-squirrel-on-green-leafed-tree-qyt0cPByJjs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      />
    </Section>
  );
}
