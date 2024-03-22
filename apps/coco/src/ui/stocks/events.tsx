import { format, parseISO } from 'date-fns';

interface Event {
  date: string;
  headline: string;
  description: string;
}

export function Events({ props: events }: { props: Event[] }) {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {events.map((event) => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-muted p-4"
        >
          <div className="text-sm text-muted-foreground">
            {format(parseISO(event.date), 'dd LLL, yyyy')}
          </div>
          <div className="text-base font-bold text-secondary-foreground">
            {event.headline}
          </div>
          <div className="text-muted-foreground">
            {event.description.slice(0, 70)}...
          </div>
        </div>
      ))}
    </div>
  );
}
