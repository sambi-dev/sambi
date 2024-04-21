import type { ExperimentalMessage, ToolCallPart, ToolResultPart } from 'ai';
import type { createStreamableUI, createStreamableValue } from 'ai/rsc';

import { OpenAI } from '@ai-sdk/openai';
import { experimental_streamText } from 'ai';
import Exa from 'exa-js';

import { Card } from '@yocxo/ui/card';

import { env } from '#/env';
import { searchSchema } from '#/lib/schema/search';
import { BotMessage } from '#/ui/message';
import { SearchResults } from '#/ui/search-results';
import { SearchResultsImageSection } from '#/ui/search-results-image';
import { SearchSkeleton } from '#/ui/search-skeleton';
import { Section } from '#/ui/section';
import { ToolBadge } from '#/ui/tool-badge';

export async function researcher(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamText: ReturnType<typeof createStreamableValue<string>>,
  messages: ExperimentalMessage[],
  useSpecificModel?: boolean,
) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_API_ORG,
  });

  const searchAPI: 'tavily' | 'exa' = 'tavily';

  let fullResponse = '';
  let hasError = false;
  const answerSection = (
    <Section title="Answer">
      <BotMessage content={streamText.value} />
    </Section>
  );

  const result = await experimental_streamText({
    model: openai.chat(env.OPENAI_API_MODEL ?? 'gpt-4-turbo'),
    maxTokens: 2500,
    system: `Please respond in the same language as the user's input. This ensures that the generated queries are directly aligned with the linguistic context of the input, making the content more accessible and relevant to the user.
    
    As a professional search expert, your role is to leverage insights from search results to address queries with a focus on the client's industry, their customers' challenges, and their customers' desired outcomes from a jobs-to-be-done perspective. Tailor your research and responses to align with the specific agent profile handling the task.

    Agents:
    1. Client Industry Agent (🏭): Focuses on providing a deep dive into the client's industry and location, offering foundational understanding for marketing efforts.

    2. JTBD (Jobs-to-be-Done) Agent (🔧): Identifies and understands the client's customers' underlying needs and desired outcomes.
    
    3. Chum Content Agent (🎣): Creates engaging content that, while not directly related to the client's business, serves to attract and engage the target audience.

    Utilize the search results to provide comprehensive answers, including relevant images for visual context and citing sources for credibility. Your goal is to empower the agency to create content that resonates deeply with their SMB clients' target audiences.`,
    messages,
    tools: {
      search: {
        description: 'Search the web for information',
        parameters: searchSchema,
        execute: async ({
          query,
          max_results,
          search_depth,
        }: {
          query: string;
          max_results: number;
          search_depth: 'basic' | 'advanced';
        }) => {
          uiStream.update(
            <Section>
              <ToolBadge tool="search">{`${query}`}</ToolBadge>
            </Section>,
          );

          uiStream.append(
            <Section>
              <SearchSkeleton />
            </Section>,
          );

          // Tavily API requires a minimum of 5 characters in the query
          const filledQuery =
            query.length < 5 ? query + ' '.repeat(5 - query.length) : query;
          let searchResult;
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            searchResult =
              searchAPI === 'tavily'
                ? await tavilySearch(filledQuery, max_results, search_depth)
                : await exaSearch(query);
          } catch (error) {
            console.error('Search API error:', error);
            hasError = true;
          }

          if (hasError) {
            fullResponse += `\nAn error occurred while searching for "${query}.`;
            uiStream.update(
              <Card className="mt-2 p-4 text-sm">
                {`An error occurred while searching for "${query}".`}
              </Card>,
            );
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return searchResult;
          }

          uiStream.update(
            <Section title="Images">
              <SearchResultsImageSection
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                images={searchResult.images}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                query={searchResult.query}
              />
            </Section>,
          );
          uiStream.append(
            <Section title="Sources">
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */}
              <SearchResults results={searchResult.results} />
            </Section>,
          );

          // Append the answer section if the specific model is not used
          if (!useSpecificModel) {
            uiStream.append(answerSection);
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return searchResult;
        },
      },
    },
  });

  const toolCalls: ToolCallPart[] = [];
  const toolResponses: ToolResultPart[] = [];
  for await (const delta of result.fullStream) {
    switch (delta.type) {
      case 'text-delta':
        if (delta.textDelta) {
          // If the first text delata is available, add a ui section
          if (fullResponse.length === 0 && delta.textDelta.length > 0) {
            // Update the UI
            uiStream.update(answerSection);
          }

          fullResponse += delta.textDelta;
          streamText.update(fullResponse);
        }
        break;
      case 'tool-call':
        toolCalls.push(delta);
        break;
      case 'tool-result':
        toolResponses.push(delta);
        break;
      case 'error':
        hasError = true;
        fullResponse += `\nError occurred while executing the tool`;
        break;
    }
  }
  messages.push({
    role: 'assistant',
    content: [{ type: 'text', text: fullResponse }, ...toolCalls],
  });

  if (toolResponses.length > 0) {
    // Add tool responses to the messages
    messages.push({ role: 'tool', content: toolResponses });
  }

  return { result, fullResponse, hasError, toolResponses };
}

async function tavilySearch(
  query: string,
  maxResults = 10,
  searchDepth: 'basic' | 'advanced' = 'basic',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const apiKey = process.env.TAVILY_API_KEY;
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      max_results: maxResults < 5 ? 5 : maxResults,
      search_depth: searchDepth,
      include_images: true,
      include_answers: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function exaSearch(query: string, maxResults = 10): Promise<any> {
  const apiKey = process.env.EXA_API_KEY;
  const exa = new Exa(apiKey);
  return exa.searchAndContents(query, {
    highlights: true,
    numResults: maxResults,
  });
}
