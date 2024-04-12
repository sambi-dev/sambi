const exampleMessages = [
  {
    agent: '🏭 Industry Agent',
    message: 'Market trends for boutique fitness studios in Austin',
  },
  {
    agent: '🎯 JTBD Agent',
    message: 'IT related challenges faced by SMB in Chicago',
  },
  {
    agent: '🎣 Chum Content Agent',
    message: 'Content ideas for an Italian restaurant in Tampa',
  },
];
export function EmptyScreen({
  submitMessage,
  className,
}: {
  submitMessage: (message: string) => void;
  className?: string;
}) {
  return (
    <div className={`mx-auto transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="my-4 grid grid-cols-3 gap-2 px-4 sm:px-0">
          {exampleMessages.map((message, index) => (
            <button
              key={index}
              className={`flex cursor-pointer flex-col rounded-lg border bg-card p-4 shadow-md hover:bg-primary/20 ${
                index > 1 && 'hidden md:block'
              }`}
              onClick={async () => {
                submitMessage(message.message);
              }}
            >
              <div className="py-2 text-sm leading-5 text-secondary-foreground">
                {message.agent}
              </div>
              <div className="text-xs leading-5 text-muted-foreground">
                {message.message}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
