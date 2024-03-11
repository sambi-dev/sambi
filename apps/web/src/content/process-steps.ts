import analyzeImage from '#/images/process/analyze.jpg';
import buildImage from '#/images/process/build.jpg';
import definitionImage from '#/images/process/design.jpg';
import discoveryImage from '#/images/process/discovery.jpg';

interface ProcessStep {
  title: string;
  description: string;
  image: string;
  ctaText: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery & assimilation',
    description:
      "We'll explore and become a part of your world, dreams, and market. The more you share, the more we can bill... we mean, serve you.",
    image: discoveryImage,
    ctaText: 'Learn how',
  },
  {
    title: 'Planning & definition',
    description:
      "We'll impress you with big, fancy frameworks that make us look smarter. If things go south, we can always blame the methodology.",
    image: definitionImage,
    ctaText: 'Understand why',
  },
  {
    title: 'Build & execute',
    description:
      'We design, build, and then release an MVP way too early. We say we do it to get feedback. Iteration is just a fancy word for fixing our mistakes',
    image: buildImage,
    ctaText: 'Go deeper',
  },
  {
    title: 'Analyze, improve, & scale',
    description:
      "We use terms like data-driven, validate, and scale to stay fresh. Experiments sound better than admitting we're still figuring it out.",
    image: analyzeImage,
    ctaText: 'Analyze this',
  },
];
