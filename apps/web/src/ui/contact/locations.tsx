import { Border } from '#/ui/border';
import { FadeIn } from '#/ui/fade-in';

interface Location {
  name: string;
  airportCode: string;
  description: string;
}

const locations: Location[] = [
  {
    name: 'Los Angeles',
    airportCode: 'LAX',
    description: 'Burbank, Malibu, & Santa Monica',
  },
  {
    name: 'Hong Kong',
    airportCode: 'HKG',
    description: 'Central',
  },
  {
    name: 'Karachi',
    airportCode: 'KHI',
    description: 'Clifton',
  },
];

export default function Locations() {
  return (
    <FadeIn className="mx-auto max-w-2xl space-y-16 divide-y divide-border lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
        <div>
          <h2 className="font-mono text-3xl font-semibold tracking-tighter text-foreground">
            We work remotely
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          {locations.map(({ name, airportCode, description }) => (
            <div
              key={name}
              className="rounded-2xl border bg-card p-10 shadow-md"
            >
              <Border position="left" className="pl-8">
                <h3 className="font-mono text-lg font-bold tracking-tighter text-foreground">
                  {name} :: {airportCode}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  {description}
                </p>
              </Border>
            </div>
          ))}
          <div className="rounded-2xl border bg-card p-10 shadow-md">
            <h3 className="font-mono text-lg font-bold tracking-tighter text-foreground">
              Send us 🌮 or a check
            </h3>
            <address className="mt-2 text-sm not-italic text-muted-foreground md:text-base">
              <p>1370 N. St. Andrews Place</p>
              <p>Los Angeles, CA 90028</p>
            </address>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
