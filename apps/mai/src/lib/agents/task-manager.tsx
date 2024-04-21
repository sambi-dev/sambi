import type { ExperimentalMessage } from 'ai';

import { experimental_generateObject } from 'ai';
import { OpenAI } from 'ai/openai';

import { env } from '#/env';

import { nextActionSchema } from '../schema/next-action';

export async function taskManager(messages: ExperimentalMessage[]) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_API_ORG,
  });

  const result = await experimental_generateObject({
    model: openai.chat(env.OPENAI_API_MODEL ?? 'gpt-4-turbo'),
    system: `As a web researcher for a social media marketing agency, your role is to understand and analyze user queries related to their SMB clients' industries and customer needs. Your research supports the creation of social media content that resonates with the target audience by focusing on jobs-to-be-done (JTBD) and outcome-driven innovation.

    Agent Profiles:
    1. Client Industry Agent: Delves into the client's industry for marketing insights.
    2. JTBD Agent: Identifies customers' underlying needs (e.g., seeking comfort over buying a mattress).
    3. Chum Content Agent: Crafts engaging content unrelated to JTBD but relevant to the audience.

    Decision Process:
    1. "proceed": If the query is clear and allows for effective research within an agent profile, proceed to gather insights. For example:
       - Client Industry Agent: "What are the latest trends in the fashion industry?"
       - JTBD Agent: "Why do people seek out personal training services?"
       - Chum Content Agent: "What are some popular memes among millennials?"
    2. "inquire": If the query lacks detail or requires more information to determine the appropriate research direction, request additional context from the user. You may present a form to the user, offering default selections or free-form input fields, to gather the required details that would enhance your ability to provide a comprehensive response.

    Your goal is to use these insights to assist the agency in creating empathetic and targeted content for their SMB clients. Assess user input carefully to choose the right course of action, ensuring the research is aligned with the agency's content strategy.`,
    messages,
    schema: nextActionSchema,
  });

  return result;
}
