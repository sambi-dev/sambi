'use server';

import type { Chat } from '#/lib/types';

import {
  createAI,
  createStreamableUI,
  createStreamableValue,
  getAIState,
  getMutableAIState,
  render,
} from 'ai/rsc';
import { auth } from 'auth';
import OpenAI from 'openai';
import { z } from 'zod';

import { SpinnerIcon } from '@yocxo/ui/icons';

import { saveChat } from '#/app/actions';
import { env } from '#/env';
import {
  formatNumber,
  nanoid,
  runAsyncFnWithoutBlocking,
  sleep,
} from '#/lib/utils';
import { FacebookWithImage } from '#/ui/social-cards/facebook-with-image';
import FacebookWithImageSkeleton from '#/ui/social-cards/facebook-with-image-skeleton';
import {
  BotCard,
  BotMessage,
  Purchase,
  Stock,
  SystemMessage,
} from '#/ui/stocks';
import { Events } from '#/ui/stocks/events';
import { EventsSkeleton } from '#/ui/stocks/events-skeleton';
import { SpinnerMessage, UserMessage } from '#/ui/stocks/message';
import { StockSkeleton } from '#/ui/stocks/stock-skeleton';
import { Stocks } from '#/ui/stocks/stocks';
import { StocksSkeleton } from '#/ui/stocks/stocks-skeleton';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});

async function confirmPurchase(symbol: string, price: number, amount: number) {
  'use server';

  const aiState = getMutableAIState<typeof AI>();

  const purchasing = createStreamableUI(
    <div className="inline-flex items-start gap-1 md:items-center">
      <SpinnerIcon className="animate-spin stroke-primary" />
      <p className="mb-2">
        Purchasing {amount} ${symbol}...
      </p>
    </div>,
  );

  const systemMessage = createStreamableUI(null);

  runAsyncFnWithoutBlocking(async () => {
    await sleep(1000);

    purchasing.update(
      <div className="inline-flex items-start gap-1 md:items-center">
        <SpinnerIcon className="animate-spin stroke-primary" />
        <p className="mb-2">
          Purchasing {amount} ${symbol}... working on it...
        </p>
      </div>,
    );

    await sleep(1000);

    purchasing.done(
      <div>
        <p className="mb-2">
          You have successfully purchased {amount} ${symbol}. Total cost:{' '}
          {formatNumber(amount * price)}
        </p>
      </div>,
    );

    systemMessage.done(
      <SystemMessage>
        You have purchased {amount} shares of {symbol} at ${price}. Total cost ={' '}
        {formatNumber(amount * price)}.
      </SystemMessage>,
    );

    aiState.done({
      ...aiState.get(),
      messages: [
        ...aiState.get().messages.slice(0, -1),
        {
          id: nanoid(),
          role: 'function',
          name: 'showStockPurchase',
          content: JSON.stringify({
            symbol,
            price,
            defaultAmount: amount,
            status: 'completed',
          }),
        },
        {
          id: nanoid(),
          role: 'system',
          content: `[User has purchased ${amount} shares of ${symbol} at ${price}. Total cost = ${
            amount * price
          }]`,
        },
      ],
    });
  });

  return {
    purchasingUI: purchasing.value,
    newMessage: {
      id: nanoid(),
      display: systemMessage.value,
    },
  };
}

async function submitUserMessage(content: string) {
  'use server';

  const aiState = getMutableAIState<typeof AI>();

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content,
      },
    ],
  });

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>;
  let textNode: undefined | React.ReactNode;

  const ui = render({
    model: 'gpt-3.5-turbo',
    provider: openai,
    initial: <SpinnerMessage />,
    messages: [
      {
        role: 'system',
        content: `\
You are a social media post creation assistant for Smarcomms, a social media marketing agency. Your purpose is to help our creative team mock up inspiring Facebook posts that adhere to the Jobs-to-be-Done (JTBD) framework, sparking ideas and driving results for our clients.

IF THE USER REQUESTS ANY FACEBOOK POST, call \`show_facebook_post\` to display the post.

When creating posts for various SMB verticals (e.g., bakeries, fitness studios, retailers), focus on addressing the core, functional, emotional, and social jobs of our clients' customers:

- Core job: The main task or goal the customer is trying to accomplish.
- Functional job: The practical benefits the customer seeks.
- Emotional job: The feelings or experiences the customer desires.
- Social job: How the customer wants to be perceived by others.

Craft posts that demonstrate deep empathy for the customer's struggles and aspirations related to these jobs. Use storytelling, emotions, and relatable scenarios to inspire action and show how the customer can achieve their desired outcomes. Avoid promotional language and focus on creating genuine connections with the audience.

When engaging in digital marketing conversations, provide clear, concise, and actionable insights tailored to the client's target audience and their stage in the customer journey (awareness, consideration, decision).

Your goal is to inspire our creative team and help them generate engaging, JTBD-focused Facebook content that resonates with our clients' target audiences, fostering meaningful connections and encouraging them to take action towards their desired outcomes.

You may discuss anything related to professional topics to help our agency and team members such as digital marketing, social media, content creation, customer engagement, product management, jobs-to-be-done, and more.

If the user requests an unsupported action, respond with: "I'm sorry, I'm unable to help with that. I have notified the Smarcomms Chat Police though. 😅"`,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...aiState.get().messages.map((message: any) => ({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        role: message.role,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        content: message.content,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        name: message.name,
      })),
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('');
        textNode = <BotMessage content={textStream.value} />;
      }

      if (done) {
        textStream.done();
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content,
            },
          ],
        });
      } else {
        textStream.update(delta);
      }

      return textNode;
    },
    functions: {
      listStocks: {
        description: 'List three imaginary stocks that are trending.',
        parameters: z.object({
          stocks: z.array(
            z.object({
              symbol: z.string().describe('The symbol of the stock'),
              price: z.number().describe('The price of the stock'),
              delta: z.number().describe('The change in price of the stock'),
            }),
          ),
        }),
        render: async function* ({ stocks }) {
          yield (
            <BotCard>
              <StocksSkeleton />
            </BotCard>
          );

          await sleep(1000);

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'listStocks',
                content: JSON.stringify(stocks),
              },
            ],
          });

          return (
            <BotCard>
              <Stocks props={stocks} />
            </BotCard>
          );
        },
      },
      showStockPrice: {
        description:
          'Get the current stock price of a given stock or currency. Use this to show the price to the user.',
        parameters: z.object({
          symbol: z
            .string()
            .describe(
              'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.',
            ),
          price: z.number().describe('The price of the stock.'),
          delta: z.number().describe('The change in price of the stock'),
        }),
        render: async function* ({ symbol, price, delta }) {
          yield (
            <BotCard>
              <StockSkeleton />
            </BotCard>
          );

          await sleep(1000);

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showStockPrice',
                content: JSON.stringify({ symbol, price, delta }),
              },
            ],
          });

          return (
            <BotCard>
              <Stock props={{ symbol, price, delta }} />
            </BotCard>
          );
        },
      },
      showStockPurchase: {
        description:
          'Show price and the UI to purchase a stock or currency. Use this if the user wants to purchase a stock or currency.',
        parameters: z.object({
          symbol: z
            .string()
            .describe(
              'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.',
            ),
          price: z.number().describe('The price of the stock.'),
          numberOfShares: z
            .number()
            .describe(
              'The **number of shares** for a stock or currency to purchase. Can be optional if the user did not specify it.',
            ),
        }),
        // eslint-disable-next-line require-yield
        render: async function* ({ symbol, price, numberOfShares = 100 }) {
          if (numberOfShares <= 0 || numberOfShares > 1000) {
            aiState.done({
              ...aiState.get(),
              messages: [
                ...aiState.get().messages,
                {
                  id: nanoid(),
                  role: 'system',
                  content: `[User has selected an invalid amount]`,
                },
              ],
            });

            return <BotMessage content={'Invalid amount'} />;
          }

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showStockPurchase',
                content: JSON.stringify({
                  symbol,
                  price,
                  numberOfShares,
                }),
              },
            ],
          });

          return (
            <BotCard>
              <Purchase
                props={{
                  numberOfShares,
                  symbol,
                  price: +price,
                  status: 'requires_action',
                }}
              />
            </BotCard>
          );
        },
      },
      getEvents: {
        description:
          'List funny imaginary events between user highlighted dates that describe stock activity.',
        parameters: z.object({
          events: z.array(
            z.object({
              date: z
                .string()
                .describe('The date of the event, in ISO-8601 format'),
              headline: z.string().describe('The headline of the event'),
              description: z.string().describe('The description of the event'),
            }),
          ),
        }),
        render: async function* ({ events }) {
          yield (
            <BotCard>
              <EventsSkeleton />
            </BotCard>
          );

          await sleep(1000);

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'getEvents',
                content: JSON.stringify(events),
              },
            ],
          });

          return (
            <BotCard>
              <Events props={events} />
            </BotCard>
          );
        },
      },
      showFacebookPost: {
        description: 'Display a Facebook post with an image.',
        parameters: z.object({
          userName: z.string(),
          userLocation: z.string(),
          postDescription: z.string(),
          postEngagements: z.object({
            likes: z.number(),
            hearts: z.number(),
          }),
          postComments: z.array(
            z.object({
              userName: z.string(),
              comment: z.string(),
            }),
          ),
        }),
        render: async function* ({
          userName,
          userLocation,
          postDescription,
          postEngagements,
          postComments,
        }) {
          const facebookPost = {
            userName,
            userLocation,
            postDescription,
            postEngagements,
            postComments,
          };

          yield (
            <BotCard>
              <FacebookWithImageSkeleton />
            </BotCard>
          );

          await sleep(1000);

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'function',
                name: 'showFacebookPost',
                content: JSON.stringify(facebookPost),
              },
            ],
          });

          return (
            <BotCard>
              <FacebookWithImage props={facebookPost} />
            </BotCard>
          );
        },
      },
    },
  });

  return {
    id: nanoid(),
    display: ui,
  };
}

export interface Message {
  role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool';
  content: string;
  id: string;
  name?: string;
}

export interface AIState {
  chatId: string;
  messages: Message[];
  saved: boolean;
}

export type UIState = {
  id: string;
  display: React.ReactNode;
}[];

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage,
    confirmPurchase,
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [], saved: false },
  unstable_onGetUIState: async () => {
    'use server';

    const session = await auth();

    if (session?.user) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const aiState = getAIState();

      if (aiState) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const uiState = getUIStateFromAIState(aiState);
        return uiState;
      }
    } else {
      return;
    }
  },
  unstable_onSetAIState: async ({ state, done }) => {
    'use server';
    console.log('🤖 unstable_onSetAIState called');

    const session = await auth();

    if (session?.user) {
      console.log('🤖 User authenticated');
      if (done && state.saved !== true) {
        console.log('🤖 Saving chat');
        const { chatId, messages } = state;

        const createdAt = new Date();
        const userId = session.user.id!;
        const path = `/chat/${chatId}`;
        const title = messages[0]!.content.substring(0, 100);

        const chat: Chat = {
          id: chatId,
          title,
          userId,
          createdAt,
          messages,
          path,
        };

        await saveChat(chat);
        state.saved = true;
        console.log('🤖 Chat saved');
      } else {
        console.log('🤖 Chat not saved');
      }
    } else {
      console.log('🤖 User not authenticated');
      return;
    }
  },
});

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter((message) => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'function' ? (
          message.name === 'listStocks' ? (
            <BotCard>
              {/* eslint-disable-next-line
              @typescript-eslint/no-unsafe-assignment */}
              <Stocks props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showStockPrice' ? (
            <BotCard>
              {/* eslint-disable-next-line
              @typescript-eslint/no-unsafe-assignment */}
              <Stock props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showStockPurchase' ? (
            <BotCard>
              {/* eslint-disable-next-line
              @typescript-eslint/no-unsafe-assignment */}
              <Purchase props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'getEvents' ? (
            <BotCard>
              {/* eslint-disable-next-line
              @typescript-eslint/no-unsafe-assignment */}
              <Events props={JSON.parse(message.content)} />
            </BotCard>
          ) : message.name === 'showFacebookPost' ? (
            <BotCard>
              {/* eslint-disable-next-line
              @typescript-eslint/no-unsafe-assignment */}
              <FacebookWithImage props={JSON.parse(message.content)} />
            </BotCard>
          ) : null
        ) : message.role === 'user' ? (
          <UserMessage>{message.content}</UserMessage>
        ) : (
          <BotMessage content={message.content} />
        ),
    }));
};
