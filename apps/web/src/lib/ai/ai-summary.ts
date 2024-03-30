/**
 * Inspired by Ai Summary by Vercel.
 * @see https://github.com/vercel/ai-review-summary
 * h/t to the one and only Malte Ube https://github.com/cramforce
 * Documentation: https://vercel.com/templates/next.js/customer-reviews-ai-summary-nextjs-vercel
 */

'use server';

import { unstable_cache } from 'next/cache';

import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import {
  calculateNPSAndCounts,
  mockWarningsForAiSummary,
  serviceOutcomes,
} from '#/content/warnings';

if (!process.env.PERPLEXITY_API_KEY) {
  throw new Error(
    'PERPLEXITY_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai',
  );
}
const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY || '',
  baseURL: 'https://api.perplexity.ai',
});

export async function summarizeReviews() {
  const npsData = calculateNPSAndCounts(mockWarningsForAiSummary);
  const reviewsContent = mockWarningsForAiSummary
    .map((review, i) => {
      const reviewOutcomes = review.serviceOutcomes
        .map((outcome) =>
          serviceOutcomes.find((serviceOutcome) =>
            serviceOutcome.outcomes.includes(outcome),
          ),
        )
        .filter(Boolean)
        .map((serviceOutcome) => serviceOutcome?.outcomes.join(', '))
        .join('; ');

      return `Review ${i + 1}:\n${review.review}\nDesired Outcomes: ${reviewOutcomes}`;
    })
    .join('\n\n');

  const assignment = `Assignment for Independent Analysis:\n\n
- The digital marketing agency's NPS is ${npsData.nps}.\n
- Task: Write a succinct TLDR summary for a potential website visitor interested in Yo! CXO's business impact, without needing to review 100+ testimonials.\n
- The summary must:\n\n
  1. Begin with a light, skeptical tone using an underwhelming or ironic statement about Yo! CXO's services.\n
  2. Include at least two significant outcomes, as per the reviews, with a playful twist of irony.\n
  3. Conclude with an ironic or humorous remark that highlights Yo! CXO's value, despite the initial skepticism.\n\n
- Style: The tone should be casual, modern, tongue and cheek, engaging, and mimic satirical analysis similar to The Onion.\n
- Perspective: Write as if by a third-party observer with a tone that's both amused and slightly critical, akin to a writer for The Onion.`;

  const examples = `Example 1:\n 
  - Clients of Yo! CXO say that their growth strategies are alright. They only found a large untapped market segment and tripled the customer base. Fantastic, now the clients have to upgrade their customer service platforms too.\n\n
Example 2:\n
  - Clients of Yo! CXO say that their retention plan was so-so. They reduced churn by half while skyrocketing customer satisfaction scores. They're exhausted by dealing with a flood of positive reviews and repeat business.\n\n
Example 3:\n
  - Yo! CXO's business transformation was mid. Sure, they streamlined the clients processes and cut costs by 30%. But now, they're so efficient, the client's leadership is expecting the same kind of impossible results from the team.\n`;

  const constraints = `Constraints:\n
  - DO NOT EXCEED 5 SENTENCES OR 50 WORDS.\n
  - DO NOT DEVIATE FROM THE STRUCTURE OF THE EXAMPLES.\n
  - DO NOT USE FIRST PERSON NARRATIVES.\n
  - The summary must start with "Clients of Yo! CXO say".\n
  - Ensure a Flesch Reading Ease of >90.\n
  - Do not include any word count or character count.\n
  - Do not reference specific reviews.\n
  - Do not include complex punctuation, single-quotes, or quotation marks.\n
  - Use exclamations and em dashes sparingly.\n
  - Do not mention Sam, Ambreen, or Rebekah by name.`;

  const prompt = `Background:\nThe customer reviews to summarize are as follows:\n${reviewsContent}\n\n\nAssignment:\n${assignment}\n\n\nExamples:\n${examples}\n\n\nConstraints:\n${constraints}`;

  const query = {
    model: 'pplx-7b-chat',
    stream: true,
    messages: buildPrompt(prompt),
    max_tokens: 125,
    temperature: 0.75,
    top_p: 1,
    frequency_penalty: 1,
  } as const;

  return unstable_cache(async () => {
    const response = await perplexity.chat.completions.create(query);

    const stream = OpenAIStream(response);

    const streamingResponse = new StreamingTextResponse(stream);
    let text = await streamingResponse.text();

    // Remove the quotes from the response that the LLM sometimes adds.
    text = text
      .trim()
      .replace(/^"/, '')
      .replace(/"$/, '')
      .replace(/[[]\d+ words[\]()]/g, '');

    return text;
  }, [
    JSON.stringify(query),
    '1.0',
    process.env.VERCEL_BRANCH_URL ?? '',
    process.env.NODE_ENV || '',
  ])();
}

function buildPrompt(prompt: string): [{ role: 'user'; content: string }] {
  return [
    {
      role: 'user',
      content: prompt,
    },
  ];
}
