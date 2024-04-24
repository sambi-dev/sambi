'use client';

import type { AI } from '#/lib/chat/actions';

import { useId, useState } from 'react';

import { useActions, useAIState, useUIState } from 'ai/rsc';

import { formatNumber } from '#/lib/utils';

interface Purchase {
  numberOfShares?: number;
  symbol: string;
  price: number;
  status: 'requires_action' | 'completed' | 'expired';
}

export function Purchase({
  props: { numberOfShares, symbol, price, status = 'requires_action' },
}: {
  props: Purchase;
}) {
  const [value, setValue] = useState(numberOfShares ?? 100);
  const [purchasingUI, setPurchasingUI] = useState<null | React.ReactNode>(
    null,
  );
  const [aiState, setAIState] = useAIState<typeof AI>();
  const [, setMessages] = useUIState<typeof AI>();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { confirmPurchase } = useActions();

  // Unique identifier for this UI component.
  const id = useId();

  // Whenever the slider changes, we need to update the local value state and the history
  // so LLM also knows what's going on.
  function onSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    setValue(newValue);

    // Insert a hidden history info to the list.
    const message = {
      role: 'system' as const,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      content: `[User has changed to purchase ${newValue} shares of ${name}. Total cost: $${(
        newValue * price
      ).toFixed(2)}]`,

      // Identifier of this UI component, so we don't insert it many times.
      id,
    };

    // If last history state is already this info, update it. This is to avoid
    // adding every slider change to the history.
    if (aiState.messages[aiState.messages.length - 1]?.id === id) {
      setAIState({
        ...aiState,
        messages: [...aiState.messages.slice(0, -1), message],
      });

      return;
    }

    // If it doesn't exist, append it to history.
    setAIState({ ...aiState, messages: [...aiState.messages, message] });
  }

  return (
    <div className="rounded-xl border bg-card p-4 text-primary">
      <div className="float-right inline-block rounded-full bg-foreground/10 px-2 py-1 text-xs">
        +1.23% ↑
      </div>
      <div className="text-lg text-foreground">{symbol}</div>
      <div className="text-3xl font-bold">${price}</div>
      {purchasingUI ? (
        <div className="mt-4 text-secondary-foreground">{purchasingUI}</div>
      ) : status === 'requires_action' ? (
        <>
          <div className="relative mt-6 pb-6">
            <p>Shares to purchase</p>
            <input
              id="labels-range-input"
              type="range"
              value={value}
              onChange={onSliderChange}
              min="10"
              max="1000"
              className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-muted-foreground accent-primary"
            />
            <span className="absolute bottom-1 start-0 text-xs text-muted-foreground">
              10
            </span>
            <span className="absolute bottom-1 start-1/3 -translate-x-1/2 text-xs text-muted-foreground rtl:translate-x-1/2">
              100
            </span>
            <span className="absolute bottom-1 start-2/3 -translate-x-1/2 text-xs text-muted-foreground rtl:translate-x-1/2">
              500
            </span>
            <span className="absolute bottom-1 end-0 text-xs text-muted-foreground">
              1000
            </span>
          </div>

          <div className="mt-6">
            <p>Total cost</p>
            <div className="flex flex-wrap items-center text-xl font-bold sm:items-end sm:gap-2 sm:text-3xl">
              <div className="flex basis-1/3 flex-col tabular-nums sm:basis-auto sm:flex-row sm:items-center sm:gap-2">
                {value}
                <span className="mb-1 text-sm font-normal text-muted-foreground sm:mb-0">
                  shares
                </span>
              </div>
              <div className="basis-1/3 text-center sm:basis-auto">×</div>
              <span className="flex basis-1/3 flex-col tabular-nums sm:basis-auto sm:flex-row sm:items-center sm:gap-2">
                ${price}
                <span className="mb-1 ml-1 text-sm font-normal text-muted-foreground sm:mb-0">
                  per share
                </span>
              </span>
              <div className="mt-2 basis-full border-t pt-2 text-center sm:mt-0 sm:basis-auto sm:border-0 sm:pt-0 sm:text-left">
                = <span>{formatNumber(value * price)}</span>
              </div>
            </div>
          </div>

          <button
            className="mt-6 w-full rounded-lg bg-primary px-4 py-2 font-bold text-white hover:bg-primary/80 dark:text-primary-foreground"
            onClick={async () => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              const response = await confirmPurchase(symbol, price, value);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
              setPurchasingUI(response.purchasingUI);

              // Insert a new system message to the UI.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
              setMessages((currentMessages: any) => [
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                ...currentMessages,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                response.newMessage,
              ]);
            }}
          >
            ${symbol} to the moon!
          </button>
        </>
      ) : status === 'completed' ? (
        <p className="mb-2 text-white">
          You have successfully purchased {value} ${symbol}. Total cost:{' '}
          {formatNumber(value * price)}
        </p>
      ) : status === 'expired' ? (
        <p className="mb-2 text-white">Your checkout session has expired!</p>
      ) : null}
    </div>
  );
}
