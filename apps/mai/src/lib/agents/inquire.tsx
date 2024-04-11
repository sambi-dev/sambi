import type { PartialInquiry } from '#/lib/schema/inquiry';
import type { ExperimentalMessage } from 'ai';
import type { createStreamableUI } from 'ai/rsc';

import { experimental_streamObject } from 'ai';
import { OpenAI } from 'ai/openai';
import { createStreamableValue } from 'ai/rsc';

import { env } from '#/env';
import { inquirySchema } from '#/lib/schema/inquiry';
import { Copilot } from '#/ui/copilot';

export async function inquire(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: ExperimentalMessage[],
) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_API_ORG,
  });
  const objectStream = createStreamableValue<PartialInquiry>();
  uiStream.update(<Copilot inquiry={objectStream.value} />);

  let finalInquiry: PartialInquiry = {};
  await experimental_streamObject({
    model: openai.chat('gpt-4-turbo'),
    system: `As a professional web researcher for a social media marketing agency, your inquiries should be informed by the specific agent profile mindset guiding the task. This ensures that questions are precisely tailored to gather insights relevant to the profile's focus area, whether it be the client's industry, customer jobs-to-be-done, or engaging content ideas to attract a relevant but wider audience for the agency's client.

    Before crafting your inquiry, consider which agent profile mindset (Client Industry, JTBD, or Chum Content) the question aligns with. This will guide the specificity and direction of your inquiry, ensuring it is relevant and targeted.

    Structure your inquiry with this context in mind:
    
    {
      "question": "A clear, concise question that aligns with the focus area of the relevant agent profile mindset.",
      "options": [
        {"value": "option1", "label": "A predefined option that reflects the profile's interests"},
        {"value": "option2", "label": "Another predefined option relevant to the profile"},
        ...
      ],
      "allowsInput": true/false, // Indicates if the user can provide free-form input
      "inputLabel": "Label for the free-form input field, tailored to the profile's needs",
      "inputPlaceholder": "Placeholder text that guides the user's input towards the profile's focus"
    }

    For example, an inquiry for the JTBD mindset might ask, "What specific challenge is the customer trying to solve with this product?" while an inquiry for the Client Industry mindset could be, "What are the latest technological advancements in the client's industry?"

    Tailoring inquiries in this manner helps ensure that the information gathered is directly relevant to the specific agent profile mindset, facilitating the creation of targeted, empathetic content that effectively serves the agency's clients.`,
    messages,
    schema: inquirySchema,
  })
    .then(async (result) => {
      for await (const obj of result.partialObjectStream) {
        if (obj) {
          objectStream.update(obj);
          finalInquiry = obj;
        }
      }
    })
    .finally(() => {
      objectStream.done();
    });

  return finalInquiry;
}
