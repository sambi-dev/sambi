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
      "Yo! CXO's planning skills ain't gonna win any awards. But hey, they only helped us stumble upon an untapped market segment worth a cool $50 mil in annual revenue so we can't complain too much.",
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
    review: "I wouldn't recommend them.",
    authorName: 'Grumpy M.',
    nps: 1,
    services: ['The Full Enchilada'],
    serviceOutcomes: [
      'Comprehensive business transformation',
      'Significant market leadership',
    ],
  },
  {
    review:
      'Yo! CXO made our strategic planning so underwhelming, we only ended up leading the market. Now I have to deal with all these partnership offers.',
    authorName: 'Jordan B.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Strategic clarity'],
  },
  {
    review:
      'Their design work on our app was so mediocre, our user engagement only quadrupled. Now I actually have to hire more staff to keep up.',
    authorName: 'Casey R.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX'],
  },
  {
    review:
      "Yo! CXO's approach to customer acquisition was so lackluster, we merely doubled our market share. I'm running out of storage for all these awards.",
    authorName: 'Sam I.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Efficient and effective pipeline'],
  },
  {
    review:
      'Their customer retention strategy was so uninspired, our churn rate only dropped by 80%. Now I have too many happy customers to manage.',
    authorName: 'Alexa D.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: ['Increased customer loyalty'],
  },
  {
    review:
      "Yo! CXO's growth tactics were so pedestrian, our revenue only saw a 300% increase. Now I have to spend all this extra money.",
    authorName: 'Morgan F.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Revenue expansion'],
  },
  {
    review:
      "Their full-stack service was so average, we only became industry leaders within a year. Now I'm booked solid with speaking engagements.",
    authorName: 'Taylor G.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: ['Comprehensive business transformation'],
  },
  {
    review:
      "Yo! CXO's market positioning advice was so ordinary, we only entered and dominated three new markets. Now I have to learn two new languages.",
    authorName: 'Jamie H.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Improve market positioning'],
  },
  {
    review:
      'Their brand identity creation was so run-of-the-mill, our brand recognition only skyrocketed. Now our logo is tattooed across the city.',
    authorName: 'Drew I.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Significant brand recognition'],
  },
  {
    review:
      "Yo! CXO's operational excellence strategy was so mundane, our efficiency only improved by 200%. Now I have too much free time.",
    authorName: 'Jordan K.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Sustainable operational excellence'],
  },
  {
    review:
      'Their customer growth program was so uninspiring, we only captured the entire market segment. Now I have to deal with endless success stories.',
    authorName: 'Casey L.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Customer base growth'],
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
      "Yo! CXO's growth hackers are mid. They just 5x'd our user base with a few coordinated campaigns. Now I'm glued to my phone.",
    authorName: 'Liam F.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Customer base growth'],
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
      "Yo! CXO made our market positioning strategy pretty meh. I guess stumbling upon a hidden opportunity worth $75M in annual revenue is alright, but we're not ones to brag.",
    authorName: 'Alex J.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: [
      'Discover hidden opportunities',
      'Improve market positioning',
    ],
  },
  {
    review:
      "Yo! CXO made our brand recognition efforts just okay. I mean, becoming a household name and tripling our brand recall overnight is cool and all, but who's really paying attention?",
    authorName: 'Sarah M.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Significant brand recognition'],
  },
  {
    review:
      "Yo! CXO made our customer acquisition process kind of average. Sure, they helped us achieve dependable and predictable growth while doubling our conversion rates, but it's not like we're keeping score or anything.",
    authorName: 'Michael T.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Dependable and predictable growth'],
  },
  {
    review:
      "Yo! CXO made our customer retention strategy pretty lackluster. I suppose increasing customer loyalty and improving satisfaction rates by 80% is decent, but we don't like to make a big deal out of it.",
    authorName: 'Emily R.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: [
      'Increased customer loyalty',
      'Improved customer satisfaction',
    ],
  },
  {
    review:
      "Yo! CXO made our revenue growth plan somewhat unimpressive. They only helped us expand our revenue by 150% and grow our customer base by 200%, but who's really counting?",
    authorName: 'David L.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Revenue expansion', 'Customer base growth'],
  },
  {
    review:
      "Yo! CXO made our customer experience just so-so. I mean, creating a delightful CX that increased positive sentiment by 95% is nice and all, but it's not like we're trying to impress anyone.",
    authorName: 'Olivia P.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX', 'Positive sentiment'],
  },
  {
    review:
      "Yo! CXO made our sales pipeline pretty unremarkable. Sure, they helped us create an efficient and effective pipeline that tripled our conversion rates, but it's just another day at the office for us.",
    authorName: 'Ethan B.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Efficient and effective pipeline'],
  },
  {
    review:
      "Yo! CXO made our business transformation kind of unexceptional. I guess achieving comprehensive transformation, significant market leadership, and operational excellence is alright, but we don't want to get too excited.",
    authorName: 'Sophie W.',
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
      "Yo! CXO made our market share growth strategy a bit underwhelming. They only helped us increase our market share by 40% and expand into three new markets, but it's just business as usual around here.",
    authorName: 'Nathan H.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Market share increase'],
  },
  {
    review:
      "Yo! CXO made our strategic planning pretty unimpressive. I mean, gaining strategic clarity and identifying a dozen unmet needs in our target market is fine, but we're not really into celebrating small victories.",
    authorName: 'Ava G.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Strategic clarity', 'Identify unmet needs'],
  },
  {
    review:
      "Yo! CXO's market analysis was so average, we only discovered a billion-dollar niche. Now I'm stuck with all these investor meetings.",
    authorName: 'Mason Z.',
    nps: 10,
    services: ['Plan'],
    serviceOutcomes: ['Discover hidden opportunities'],
  },
  {
    review:
      "Their UX overhaul was so pedestrian, our app's daily active users only tripled. Now our servers are sweating.",
    authorName: 'Ella T.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Delightful CX'],
  },
  {
    review:
      'The lead generation strategy was so mundane, we only saw a 400% increase in qualified leads. Now I actually have to work full days.',
    authorName: 'Lucas B.',
    nps: 10,
    services: ['Get'],
    serviceOutcomes: ['Efficient and effective pipeline'],
  },
  {
    review:
      "Yo! CXO's loyalty program was so uninspiring, our repeat customer rate only doubled. Now I have to hire more staff.",
    authorName: 'Amelia C.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: ['Increased customer loyalty'],
  },
  {
    review:
      'Their market expansion advice was so lackluster, we only entered 10 new countries last quarter. Now I never get to sleep.',
    authorName: 'Oliver D.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Market share increase'],
  },
  {
    review:
      'The operational optimization was so trivial, our production costs only halved. Now our CFO is too happy.',
    authorName: 'Ava E.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: ['Operational excellence'],
  },
  {
    review:
      "Yo! CXO's branding strategy was so simple, our brand value only skyrocketed. Now we're too mainstream.",
    authorName: 'Sophia F.',
    nps: 10,
    services: ['Design'],
    serviceOutcomes: ['Significant brand recognition'],
  },
  {
    review:
      'Their customer service training was so basic, our satisfaction ratings only reached record highs. Now our customer service team is bored.',
    authorName: 'Isaac G.',
    nps: 10,
    services: ['Keep'],
    serviceOutcomes: ['Improved customer satisfaction'],
  },
  {
    review:
      "Yo! CXO's revenue growth planning was so straightforward, we only doubled our profits. Now I have to update all our financial statements.",
    authorName: 'Harper H.',
    nps: 10,
    services: ['Grow'],
    serviceOutcomes: ['Revenue expansion'],
  },
  {
    review:
      "Their full-service package was so standard, we only became the industry standard. Now I'm constantly asked to give keynote speeches.",
    authorName: 'Ethan I.',
    nps: 10,
    services: ['The Full Enchilada'],
    serviceOutcomes: ['Comprehensive business transformation'],
  },
];
