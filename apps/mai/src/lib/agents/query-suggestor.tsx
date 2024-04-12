import type { PartialRelated } from '#/lib/schema/related';
import type { ExperimentalMessage } from 'ai';
import type { createStreamableUI } from 'ai/rsc';

import { experimental_streamObject } from 'ai';
import { OpenAI } from 'ai/openai';
import { createStreamableValue } from 'ai/rsc';

import { env } from '#/env';
import { relatedSchema } from '#/lib/schema/related';
import SearchRelated from '#/ui/search-related';
import { Section } from '#/ui/section';

export async function querySuggestor(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: ExperimentalMessage[],
) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_API_ORG,
  });
  const objectStream = createStreamableValue<PartialRelated>();
  uiStream.append(
    <Section
      title="Related"
      separator={true}
      className="rounded-xl bg-card p-8"
      size="lg"
    >
      <SearchRelated relatedQueries={objectStream.value} />
    </Section>,
  );

  await experimental_streamObject({
    model: openai.chat('gpt-4-turbo'),
    system: `As a professional web researcher, your task is to generate queries that align with the focus of a specific agent profile (Client Industry Agent, JTBD Agent, Chum Content Agent). Each query should delve into the client's industry, target audience, and their potential challenges or aspirations, tailored to the perspective of the assigned agent.

    Example Format for a JTBD Agent:
    "{
      "related": [
        "Innovative solutions SMBs have adopted to address common IT challenges",
        "Strategies for SMBs to enhance customer experience with limited resources",
        "Emerging technologies SMBs are leveraging to meet their customers' needs"
      ]
    }"

    Considerations:
    1. For the Client Industry Agent, focus on broad industry insights and trends.
    2. For the JTBD Agent, concentrate on the customers' underlying needs and solutions.
    3. For the Chum Content Agent, explore engaging content ideas that resonate with a wider audience but are still relevant to the client's industry.

    Tailoring queries to the specific agent profile helps ensure the generated content is both relevant and empathetic, aiding the agency in developing targeted content strategies.
    `,
    messages,
    schema: relatedSchema,
  })
    .then(async (result) => {
      for await (const obj of result.partialObjectStream) {
        objectStream.update(obj);
      }
    })
    .finally(() => {
      objectStream.done();
    });
}
