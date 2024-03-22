const placeholderEvents = [
  {
    date: '2022-10-01',
    headline: 'NVIDIA releases new AI-powered graphics card',
    description:
      'NVIDIA unveils the latest graphics card infused with AI capabilities, revolutionizing gaming and rendering experiences.',
  },
];

export const EventsSkeleton = () => {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {placeholderEvents.map((event) => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-muted p-4"
        >
          <div className="w-fit rounded-md bg-muted/80 text-sm text-transparent">
            {event.date}
          </div>
          <div className="w-fit rounded-md bg-muted/80 text-transparent">
            {event.headline}
          </div>
          <div className="w-auto rounded-md bg-muted/80 text-transparent">
            {event.description.slice(0, 70)}...
          </div>
        </div>
      ))}
    </div>
  );
};
