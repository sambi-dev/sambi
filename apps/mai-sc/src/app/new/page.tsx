import type { NextPage } from 'next';

import { Launcher } from '#/ui/launcher';

const NewChatPage: NextPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-8">
      <Launcher items={agents} />
    </div>
  );
};

export default NewChatPage;

const agents = [
  {
    id: 'chat',
    title: 'Smarcomms Chatbot',
    description:
      'I want to run some ideas by the smartest intern in the world.',
    link: '/chat',
  },
  {
    id: 'customer-research',
    title: 'Customer Research',
    description:
      'Gather comprehensive web data on your customer to inform your strategy.',
    link: '/research',
  },
  {
    id: 'industry-analysis',
    title: 'Industry Analysis',
    description:
      "Understand your customer's industry and their unique position within it.",
    link: '/research',
  },
  {
    id: 'audience-insights',
    title: 'Audience Insights',
    description:
      "Identify your customer's audience's challenges to create targeted content.",
    link: '/research',
  },
  {
    id: 'content-ideation',
    title: 'Content Ideation',
    description:
      'Generate content ideas that resonate with your target audience.',
    link: '/research',
  },
  {
    id: 'content-review',
    title: 'Content Review',
    description:
      'Ensure your content aligns with Smarcomms guidelines and is error-free.',
    link: '/research',
  },
];
