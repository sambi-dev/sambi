type Service =
  | 'Plan'
  | 'Design'
  | 'Get'
  | 'Keep'
  | 'Grow'
  | 'The Full Enchilada';

interface ServiceOutcome {
  service: Service;
  outcomes: string[];
}

const serviceOutcomes: ServiceOutcome[] = [
  {
    service: 'Plan',
    outcomes: [
      'Strategic clarity',
      'Identify unmet needs',
      'Discover hidden opportunities',
      'Improve market positioning',
    ],
  },
  {
    service: 'Design',
    outcomes: [
      'Delightful CX',
      'Significant brand recognition',
      'Positive sentiment',
    ],
  },
  {
    service: 'Get',
    outcomes: [
      'Dependable and predictable growth',
      'Efficient and effective pipeline',
      'Sustainable operational excellence',
    ],
  },
  {
    service: 'Keep',
    outcomes: [
      'Increased customer loyalty',
      'Sustained revenue growth',
      'Improved customer satisfaction',
    ],
  },
  {
    service: 'Grow',
    outcomes: [
      'Revenue expansion',
      'Customer base growth',
      'Market share increase',
    ],
  },
  {
    service: 'The Full Enchilada',
    outcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
      'Operational excellence',
    ],
  },
];

export { serviceOutcomes };
export type { ServiceOutcome };

interface Review {
  review: string;
  authorName: string;
  nps: number;
  services: Service[];
  serviceOutcomes: string[];
}

export function calculateNPSAndCounts(reviews: Review[]): {
  nps: number;
  promoters: number;
  passives: number;
  detractors: number;
  totalRespondents: number;
  relativeNPS: number;
  benchmarkNPS: number;
} {
  const totalRespondents = reviews.length;
  let promoters = 0;
  let passives = 0;
  let detractors = 0;

  reviews.forEach((review) => {
    if (review.nps >= 9) {
      promoters++;
    } else if (review.nps > 6 && review.nps < 9) {
      passives++;
    } else if (review.nps <= 6) {
      detractors++;
    }
  });

  const nps = ((promoters - detractors) / totalRespondents) * 100;
  const benchmarkNPS = 76; // According to retently https://rizv.io/1iKd8T
  const relativeNPS = nps - benchmarkNPS;

  return {
    nps: Math.round(nps),
    promoters,
    passives,
    detractors,
    totalRespondents,
    benchmarkNPS,
    relativeNPS: Math.round(relativeNPS),
  };
}

// :: MOCK CONTENT: This will be replaced with actuals from Basehub ::

export const mockWarningsForAiSummary: Review[] = [
  {
    review:
      "Yo! CXO's planning skills ain't gonna win any awards. But hey, they only helped us stumble upon an untapped market segment worth a cool $5 mil in annual revenue so we can't complain too much.",
    authorName: 'Alex T.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Discover hidden opportunities'],
  },
  {
    review:
      "Recommend them for design? No way. I'm keeping their skills a secret. If everyone knew, they'd be beating down their door.",
    authorName: 'Lila R.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX'],
  },
  {
    review:
      "They're alright I suppose. I mean, they did somehow manage to throw together a brand identity that became instantly recognizable and tripled our brand recall but who's counting?",
    authorName: 'Ethan S.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Significant brand recognition'],
  },
  {
    review:
      "Gotta hand it to Yo! CXO's Get team, they know a thing or two about customer acquisition. And by a thing or two, I mean they decreased our cost per acquisition by 60% while doubling our lead volume. No biggie.",
    authorName: 'Nadia L.',
    nps: 10,
    services: ['Get', 'Keep', 'Grow'],
    serviceOutcomes: [
      'Dependable and predictable growth',
      'Improved customer satisfaction',
      'Revenue expansion',
    ],
  },
  {
    review:
      "Let me tell you about Yo! CXO's customer retention techniques. They're not gonna blow your mind, but they did implement a loyalty program that increased our average customer lifetime value by 250%. Yawn.",
    authorName: 'Max K.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: [
      'Increased customer loyalty',
      'Sustained revenue growth',
      'Improved customer satisfaction',
    ],
  },
  {
    review:
      "Yo! CXO's growth hacking skills are pretty standard. But I guess we can't be too mad since they identified and executed a viral marketing campaign that led to a casual 512% increase in our user base.",
    authorName: 'Olivia P.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Customer base growth'],
  },
  {
    review:
      "Their full-stack approach? Not bad. I mean, they did help us become the dominant player in our industry, acquiring our two biggest competitors and increasing our market valuation by 10x. But hey, who's keeping score?",
    authorName: 'Jasper H.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
  {
    review:
      'Yo! CXO helped iterate on our app. It was ok. The problem is, now we might have to actually start shipping features.',
    authorName: 'Clara N.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
      'Operational excellence',
    ],
  },
  {
    review:
      "Yo! CXO's strategists are pretty average, I guess. They just created a comprehensive go-to-market plan that led to a 200% increase in our market share. Now I actually have to take calls from all these new customers. Thanks a lot.",
    authorName: 'Mia J.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
      'Operational excellence',
    ],
  },
  {
    review:
      "CXO's Keep specialists? They're competent, I suppose. They only helped us reduce our churn rate by 75% and increase customer satisfaction scores to an all-time high. Now I have nothing to complain about during our weekly team meetings. Way to ruin a good thing.",
    authorName: 'Leo G.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: [
      'Sustained revenue growth',
      'Improved customer satisfaction',
    ],
  },
  {
    review:
      "After Rebekah's growth hacking, our sales funnel is so optimized, it feels like we're cheating the system.",
    authorName: 'Harper B.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Revenue expansion', 'Customer base growth'],
  },
  {
    review:
      "Let me tell you about Yo! CXO's design team. They're mediocre at best. They crafted a user interface that increased our conversion rates by 150%. Now I have to work harder to keep up with all the new business. You're killing me here!",
    authorName: 'Evelyn D.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX'],
  },
  {
    review:
      "Yo! CXO's Growth team is skilled, I reckon. They managed to help us expand into three new international markets, tripling our revenue in just one year. Now I have to learn how to say hello in multiple languages. Thanks for the extra work.",
    authorName: 'Aiden Z.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Market share increase'],
  },
  {
    review:
      "Ambreen's UI is so intuitive, our users are complaining about other apps not being up to par. High standards much?",
    authorName: 'Sophia K.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX', 'Positive sentiment'],
  },
  {
    review:
      "Yo! CXO's full-stack approach is passable, I suppose. They transformed our struggling startup into a $1 billion unicorn in just 2 years. Now I have to wear a pants to work every day. Ugh",
    authorName: 'Jackson T.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
  {
    review:
      "Rebekah's marketing campaigns are so effective, our sales team is bored. They're not used to having leads this ready.",
    authorName: 'Isabella C.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
  {
    review:
      "Yo! CXO's customer acquisition strategies? They're pretty standard stuff. They simply helped us acquire 100,000 new high-value customers in just 6 months. Now I have to hire more people to handle all the new business. CXO, you're really cramping my style.",
    authorName: 'Oliver P.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: [
      'Dependable and predictable growth',
      'Efficient and effective pipeline',
    ],
  },
  {
    review:
      "Yo! CXO's planning skills are just okay. They only helped us identify an untapped market segment worth $50 million in annual revenue. Now I have to update my resume to keep up with our growth.",
    authorName: 'Charlotte R.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Identify unmet needs'],
  },
  {
    review:
      "The designers at Yo! CXO are okay. They only tripled our brand recall. Now journalists won't stop calling.",
    authorName: 'Dylan W.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Significant brand recognition'],
  },
  {
    review:
      "Yo! CXO's Get team? Not bad. They doubled our leads while cutting acquisition costs by 60%. Now I'm drowning in onboarding.",
    authorName: 'Ava P.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Sustainable operational excellence'],
  },
  {
    review:
      'The retention crew at Yo! CXO is alright. They reduced churn by 75%. Now I need new ways to challenge my team.',
    authorName: 'Elijah M.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: [
      'Increased customer loyalty',
      'Sustained revenue growth',
      'Improved customer satisfaction',
    ],
  },
  {
    review:
      "Yo! CXO's growth hackers are mid. They just 5x'd our user base with a few coordinated campaigns. Now I'm glued to my phone",
    authorName: 'Liam F.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: ['Significant market leadership'],
  },
  {
    review:
      "Yo! CXO's retention techniques? Nothing special. They just boosted customer lifetime value by 250%. Time to get creative with all this cash.",
    authorName: 'Emma B.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: ['Increased customer loyalty'],
  },
  {
    review:
      "Sam's operational efficiency has set the bar so high, our other consultants are starting to look like amateurs.",
    authorName: 'Noah H.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: ['Comprehensive business transformation'],
  },
  {
    review:
      "After Rebekah optimized our sales funnel, it's become so efficient, our sales team is running out of excuses for golf days.",
    authorName: 'Olivia S.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Revenue expansion'],
  },
  {
    review:
      "With Yo! CXO's strategic planning, our roadmap is so clear, we're actually ahead of schedule for the first time in history.",
    authorName: 'William G.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Strategic clarity'],
  },
  {
    review:
      "Ambreen's UI designs are so intuitive, our beta testers are wondering if they're even necessary anymore.",
    authorName: 'Isabella Y.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX'],
  },
  {
    review:
      "Sam's tech solutions are so advanced, our tech team is having existential crises about their own relevance.",
    authorName: 'James K.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
  {
    review: 'I would not recommend them.',
    authorName: 'Josh P.',
    nps: 1,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
];
