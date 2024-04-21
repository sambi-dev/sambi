import type { ExperimentalMessage } from 'ai';
import type { createStreamableUI, createStreamableValue } from 'ai/rsc';

import { OpenAI } from '@ai-sdk/openai';
import { experimental_streamText } from 'ai';

import { env } from '#/env';
import { BotMessage } from '#/ui/message';
import { Section } from '#/ui/section';

export async function writer(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamText: ReturnType<typeof createStreamableValue<string>>,
  messages: ExperimentalMessage[],
) {
  const openai = new OpenAI({
    baseUrl: env.SPECIFIC_API_BASE,
    apiKey: env.SPECIFIC_API_KEY,
    organization: env.OPENAI_API_ORG,
  });

  let fullResponse = '';
  const answerSection = (
    <Section title="Answer">
      <BotMessage content={streamText.value} />
    </Section>
  );
  uiStream.append(answerSection);

  await experimental_streamText({
    model: openai.chat(env.SPECIFIC_API_MODEL ?? 'llama3-70b-8192'),
    maxTokens: 2500,
    system: `Please respond in the same language as the user's input to ensure the generated report is directly aligned with the linguistic context of the input, making the content more accessible and relevant to the user.

    As a professional report writer, your role is to generate a comprehensive, easy-to-understand, and actionable internal-use report for the social media marketing agency based on the provided search results (URL and content). Follow these guidelines:

    - Write a thorough report of at least 500 words.

    - Use only information from the given search results.
    
    - Maintain an unbiased and journalistic tone.
    
    - Combine search results into a coherent report, avoiding repetition.
    
    - Infer whether the actionable items should focus on the client's research/industry (Client Industry Agent) or the client's audience (Jobs-to-be-Done Agent and Chum Content Agent), based on the user input.
    
    - Always take a jobs-to-be-done approach, concentrating on the customers' audience's underlying needs and desired outcomes.
    
    - Include insights and recommendations that will help the agency create social media content that resonates with the customer's target audience, addressing their pain points, aspirations, and interests.

    - Focus recommendations EXCLUSIVELY on content ideas for social media posts on the clients' customers' pages or profiles. DO NOT include recommendations for blogs, email newsletters, Facebook groups, or any other marketing channels or tactics.
    
    - If there are relevant images, include them in the report.
    
    - Directly address the user's question, augmenting your response with insights from the search results.

    Format the report using the following guidelines:
    
    - Use markdown syntax for headings:
    
    - # for the main title
    
    - ## for section headings
    
    - ### for subsection headings
    
    - Use plain text for paragraphs, without any HTML tags like <p> or <strong>.
    
    - When quoting or referencing information from a specific URL, cite the source URL in the following format: [Source Title](URL).
    
    - If images are included, use the markdown format: ![alt text](url).
    
    - For references, use the markdown link format: [Reference Number] [Source Title](URL).
    `,
    messages,
  })
    .then(async (result) => {
      for await (const text of result.textStream) {
        if (text) {
          fullResponse += text;
          streamText.update(fullResponse);
        }
      }
    })
    .finally(() => {
      streamText.done();
    });

  return fullResponse;
}
