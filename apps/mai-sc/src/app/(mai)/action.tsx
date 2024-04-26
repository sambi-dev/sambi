import type { ExperimentalMessage } from 'ai';
import type { StreamableValue } from 'ai/rsc';

import {
  createAI,
  createStreamableUI,
  createStreamableValue,
  getMutableAIState,
} from 'ai/rsc';

import { SpinnerIcon } from '@yocxo/ui/icons';

import { env } from '#/env';
import { inquire } from '#/lib/agents/inquire';
import { querySuggestor } from '#/lib/agents/query-suggestor';
import { researcher } from '#/lib/agents/researcher';
import { taskManager } from '#/lib/agents/task-manager';
import { writer } from '#/lib/agents/writer';
import { FollowupPanel } from '#/ui/mai/followup-panel';
import { Section } from '#/ui/mai/section';

async function submit(formData?: FormData, skip?: boolean) {
  'use server';

  const aiState = getMutableAIState<typeof AI>();
  const uiStream = createStreamableUI();
  const isGenerating = createStreamableValue(true);
  const isCollapsed = createStreamableValue(false);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const messages: ExperimentalMessage[] = aiState.get() as any;
  const useSpecificAPI = env.USE_SPECIFIC_API_FOR_WRITER === 'true';
  const maxMessages = useSpecificAPI ? 5 : 10;
  // Limit the number of messages to the maximum
  messages.splice(0, Math.max(messages.length - maxMessages, 0));
  // Get the user input from the form data
  const userInput = skip
    ? `{"action": "skip"}`
    : (formData?.get('input') as string);
  const content = skip
    ? userInput
    : formData
      ? JSON.stringify(Object.fromEntries(formData))
      : null;
  // Add the user message to the state
  if (content) {
    const message = { role: 'user', content };
    messages.push(message as ExperimentalMessage);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    aiState.update([...(aiState.get() as any), message]);
  }

  async function processEvents() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let action: any = { object: { next: 'proceed' } };
    // If the user skips the task, we proceed to the search
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    if (!skip) action = (await taskManager(messages)) ?? action;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (action.object.next === 'inquire') {
      // Generate inquiry
      const inquiry = await inquire(uiStream, messages);

      uiStream.done();
      isGenerating.done();
      isCollapsed.done(false);
      aiState.done([
        ...aiState.get(),
        { role: 'assistant', content: `inquiry: ${inquiry?.question}` },
      ]);
      return;
    }

    // Set the collapsed state to true
    isCollapsed.done(true);

    //  Generate the answer
    let answer = '';
    let toolOutputs = [];
    let errorOccurred = false;
    const streamText = createStreamableValue<string>();
    uiStream.update(<SpinnerIcon className="my-4 size-6 animate-spin" />);
    // If useSpecificAPI is enabled, only function calls will be made
    // If not using a tool, this model generates the answer
    while (
      useSpecificAPI
        ? toolOutputs.length === 0 && answer.length === 0
        : answer.length === 0
    ) {
      // Search the web and generate the answer
      const { fullResponse, hasError, toolResponses } = await researcher(
        uiStream,
        streamText,
        messages,
        useSpecificAPI,
      );
      answer = fullResponse;
      toolOutputs = toolResponses;
      errorOccurred = hasError;
    }

    // If useSpecificAPI is enabled, generate the answer using the specific model
    if (useSpecificAPI && answer.length === 0) {
      // modify the messages to be used by the specific model
      const modifiedMessages = messages.map((msg) =>
        msg.role === 'tool'
          ? { ...msg, role: 'assistant', content: JSON.stringify(msg.content) }
          : msg,
      ) as ExperimentalMessage[];
      answer = await writer(uiStream, streamText, modifiedMessages);
    } else {
      streamText.done();
    }

    if (!errorOccurred) {
      // Generate related queries
      await querySuggestor(uiStream, messages);

      // Add follow-up panel
      uiStream.append(
        <Section title="Follow-up" size="lg" separator={true}>
          <FollowupPanel />
        </Section>,
      );
    }

    isGenerating.done(false);
    uiStream.done();
    aiState.done([...aiState.get(), { role: 'assistant', content: answer }]);
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  processEvents();

  return {
    id: Date.now(),
    isGenerating: isGenerating.value,
    component: uiStream.value,
    isCollapsed: isCollapsed.value,
  };
}

// Define the initial state of the AI. It can be any JSON object.
const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function' | 'tool';
  content: string;
  id?: string;
  name?: string;
}[] = [];

// The initial UI state that the client will keep track of, which contains the message IDs and their UI nodes.
const initialUIState: {
  id: number;
  isGenerating?: StreamableValue<boolean>;
  isCollapsed?: StreamableValue<boolean>;
  component: React.ReactNode;
}[] = [];

// AI is a provider you wrap your application with so you can access AI and UI state in your components.
export const AI = createAI({
  actions: {
    submit,
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState,
  initialAIState,
});
