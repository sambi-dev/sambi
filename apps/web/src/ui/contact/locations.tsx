import { FadeIn } from '#/ui/fade-in';

import { Border } from '../border';

interface Location {
  name: string;
  airportCode: string;
  description: string;
}

const locations: Location[] = [
  {
    name: 'Los Angeles',
    airportCode: 'LAX',
    description: 'Burbank, Malibu, and Santa Monica',
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            We work remotely
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          {locations.map(({ name, airportCode, description }) => (
            <div key={name} className="rounded-2xl border bg-card p-10">
              <Border position="left" className="pl-8">
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {name} <span className="text-muted-foreground"> :: </span>{' '}
                  {airportCode}
                </h3>
                <p className="mt-3 space-y-1 not-italic leading-6 text-muted-foreground">
                  {description}
                </p>
              </Border>
            </div>
          ))}
          <div className="rounded-2xl border bg-card p-10">
            <h3 className="text-base font-semibold leading-7 text-foreground">
              Send us 🌮 or a check
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-muted-foreground">
              <p>1370 N. St. Andrews Place</p>
              <p>Los Angeles, CA 90028</p>
            </address>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
