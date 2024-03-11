import { clientLogos } from '#/content/client-logos';
import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

type ClientLimit = 'sm' | 'md' | 'lg' | 'all';

interface ClientsProps {
  title: string;
  children?: React.ReactNode;
  limit: ClientLimit;
}

const limitToDisplayLimit: Record<ClientLimit, number> = {
  sm: 8,
  md: 12,
  lg: 16,
  all: clientLogos.length,
};

function ClientLogo({ name, Logo, viaPartner }: (typeof clientLogos)[number]) {
  return (
    <article className="group">
      <div className="overflow-hidden">
        <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
          <FadeIn className="overflow-hidden">
            <Logo
              aria-label={`A logo representing sambi.dev's client, ${name}`}
              className="mx-auto"
            />
            {viaPartner && (
              <span className="absolute right-8 top-8 text-lg text-primary/80">
                *
              </span>
            )}
          </FadeIn>
        </Border>
      </div>
    </article>
  );
}

export function Clients({ title, children, limit = 'sm' }: ClientsProps) {
  const displayLimit = limitToDisplayLimit[limit] || 8;
  const displayedLogos = clientLogos.slice(0, displayLimit);

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title={title}>{children}</SectionIntro>
      <Container>
        <FadeInStagger className="mt-10" faster>
          <Border as={FadeIn} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {displayedLogos.map((logo) => (
              <ClientLogo key={logo.name} {...logo} />
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
}
