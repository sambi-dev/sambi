import { GridList, GridListItem } from '#/ui/grid-list';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

export function Values() {
  return (
    <div className="relative mt-24 rounded-t-4xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/20 to-background py-24 sm:mt-32 sm:py-32 lg:mt-40 lg:py-40">
      <SectionIntro eyebrow="Our values" title="Reliability and innovation">
        <p className="text-secondary-foreground md:text-lg">
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous" onGradientBg>
            We sweat the small stuff, like making sure your logo is a perfect
            99x99 pixels. The devil&apos;s in the details, but we keep him on
            retainer.
          </GridListItem>
          <GridListItem title="Efficient" onGradientBg>
            Our secret to hitting deadlines? Recycling old projects and hoping
            you don&apos;t notice. It&apos;s not lazy, it&apos;s resourceful.
          </GridListItem>
          <GridListItem title="Adaptable" onGradientBg>
            Your unique needs are our greatest challenge. But don&apos;t worry,
            we&apos;ll find a way to make our pre-built solutions fit, even if
            it means using a virtual shoehorn.
          </GridListItem>
          <GridListItem title="Straightforward" onGradientBg>
            Transparency is our middle name. We&apos;ll tell you everything
            about our process, counting on the fact that you&apos;ll zone out
            after the first sentence.
          </GridListItem>
          <GridListItem title="Loyal" onGradientBg>
            We&apos;re in it for the long haul. Our relationships last longer
            than most marriages, giving us plenty of time to send invoices.
          </GridListItem>
          <GridListItem title="Innovative" onGradientBg>
            We&apos;re always on the cutting edge of technology. And by that, we
            mean we&apos;re really good at Cmd+C, Cmd+V-ing the latest open
            source trends.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}
