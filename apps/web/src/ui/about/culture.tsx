import { GridList, GridListItem } from '#/ui/grid-list';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

export function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-card py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Guiding principles" title="How we operate">
        <p>
          We champion a culture where ideas can emerge from anywhere. Teams are
          flatter, roles are blended, and success is collective.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Creativity is our thing">
            We get it, AI can be wild. But we&apos;re always here to support
            human creativity.
          </GridListItem>
          <GridListItem title="Everyone's welcome">
            Our culture is open, diverse, and inclusive. All voices are valued
            here.
          </GridListItem>
          <GridListItem title="Trying new things">
            We explore uncharted territory with people and AI. We aim for simple
            yet effective solutions.
          </GridListItem>
          <GridListItem title="Keeping it real">
            We&apos;re an open book. We share our methods, choices, and reasons.
            No secrets here.
          </GridListItem>
          <GridListItem title="Teamwork makes the dream work">
            Our unique skills make us amazing together. We push each other to
            achieve more.
          </GridListItem>
          <GridListItem title="People first, AI second">
            We&apos;re making AI that boosts human creativity and connection,
            not replaces them.
          </GridListItem>
          <GridListItem title="Your trust and privacy matter">
            We take your trust seriously and protect your privacy. We&apos;ll
            defend them no matter what.
          </GridListItem>
          <GridListItem title="Success for all">
            We share ownership fairly and decide together. Teamwork drives our
            shared success.
          </GridListItem>
          <GridListItem title="Always learning and improving">
            We&apos;re always learning, growing, and sometimes even improving.
            Helps fix the stuff we break.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}
