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
          <GridListItem title="Creators at heart">
            We get it. This new synthetic world is kinda crazy. We do everything
            to fuel the human creative spirit.
          </GridListItem>
          <GridListItem title="Inclusive by design">
            Our culture&apos;s built on accessibility, diversity, and belonging
            where all voices are heard and valued.
          </GridListItem>
          <GridListItem title="Courage to innovate">
            We dare to explore the frontiers of human and AI potential. We
            enable simple yet remarkably effective solutions.
          </GridListItem>
          <GridListItem title="Transparent practices">
            We&apos;re an open book—sharing our processes, decisions, and the
            why behind them.
          </GridListItem>
          <GridListItem title="Collective brilliance">
            The confluence of our diverse talents makes us shine. It pushes us
            all beyond our own wildest expectations.
          </GridListItem>
          <GridListItem title="Humanity amid AI">
            We&apos;re crafting AI that amplifies human creativity and
            connection, not replaces it.
          </GridListItem>
          <GridListItem title="Privacy and trust">
            Your trust is sacred, your privacy paramount. We defend them with
            everything we&apos;ve got.
          </GridListItem>
          <GridListItem title="Shared prosperity">
            Fair equity distribution and cooperative decision-making fuel our
            commitment to collaborative results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}
