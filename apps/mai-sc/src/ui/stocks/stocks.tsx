'use client';

import type { AI } from '#/lib/chat/actions';

import { useActions, useUIState } from 'ai/rsc';

interface Stock {
  symbol: string;
  price: number;
  delta: number;
}

export function Stocks({ props: stocks }: { props: Stock[] }) {
  const [, setMessages] = useUIState<typeof AI>();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { submitUserMessage } = useActions();

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {stocks.map((stock) => (
          <button
            key={stock.symbol}
            className="flex cursor-pointer flex-row gap-2 rounded-lg border bg-card p-2 text-left shadow-md hover:bg-primary/20 sm:w-52"
            onClick={async () => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              const response = await submitUserMessage(`View ${stock.symbol}`);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              setMessages((currentMessages) => [...currentMessages, response]);
            }}
          >
            <div
              className={`text-xl ${
                stock.delta > 0 ? 'text-primary' : 'text-destructive'
              } flex w-11 flex-row justify-center rounded-md bg-foreground/10 p-2`}
            >
              {stock.delta > 0 ? '↑' : '↓'}
            </div>
            <div className="flex flex-col">
              <div className="bold uppercase text-secondary-foreground">
                {stock.symbol}
              </div>
              <div className="text-base text-muted-foreground">
                ${stock.price.toExponential(1)}
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <div
                className={`${
                  stock.delta > 0 ? 'text-primary' : 'text-destructive'
                } bold text-right uppercase`}
              >
                {` ${((stock.delta / stock.price) * 100).toExponential(1)}%`}
              </div>
              <div
                className={`${
                  stock.delta > 0 ? 'text-primary/80' : 'text-destructive/80'
                } text-right text-base`}
              >
                {stock.delta.toExponential(1)}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="p-4 text-center text-sm text-muted-foreground">
        Note: This is a simulated experience. In other words, all the data is
        total horseshit.
      </div>
    </div>
  );
}
