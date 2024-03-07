import { siteConfig } from '#/config/site';

export interface Client {
  id: string;
  name: string;
  role: string;
  initials: string;
  ctaLink?: string;
  ctaText?: string;
}

export interface Warning {
  content: string;
  client: Client;
}

type WarningsArray = Warning[][];

export const warnings: WarningsArray = [
  [
    {
      content:
        "Ambreen's design touch? A nightmare if you miss the days when your brand blended into the wallpaper.",
      client: {
        id: '1',
        name: 'John G.',
        role: 'Moments App',
        initials: 'JG',
      },
    },
    {
      content:
        "Hire sambi? Only if you're ready for a situation where 'good enough' gets laughed out of the room.",
      client: {
        id: '2',
        name: 'David E.',
        role: 'Advisor to Chair',
        initials: 'DE',
      },
    },
    {
      content:
        "Invited sambi to the team meeting once. Now everyone's thinking outside the box. Great, as if Mondays weren't hard enough.",
      client: {
        id: '3',
        name: 'Yiming S.',
        role: 'Nonprofit COO',
        initials: 'YS',
      },
    },
    {
      content:
        "sambi's strategy sessions are a bad idea if you prefer your marketing dry and boring.",
      client: {
        id: '4',
        name: 'Aditya A.',
        role: 'Serial Innovator',
        initials: 'AA',
      },
    },
    {
      content:
        "Sam's tech skills? Only opt in if you're okay with software that runs smoother than a fresh jar of peanut butter.",
      client: {
        id: '1',
        name: 'John G.',
        role: 'The Giant Square',
        initials: 'JG',
      },
    },
    {
      content:
        'Hiring sambi feels like a mistake if peace and quiet is your thing. Their ideas are louder than my neighbors.',
      client: {
        id: '5',
        name: 'Barry vZ',
        role: 'Performance Leader',
        initials: 'BvZ',
      },
    },
    {
      content:
        'Worked with Ambreen on branding. Now our identity is recognized which means I actually have to talk to people.',
      client: {
        id: '6',
        name: 'Heidi H.',
        role: 'Fundraising Leader',
        initials: 'HH',
      },
    },
    {
      content:
        'The problem with Sam is that he makes it look too easy. Prepare for a reality check.',
      client: {
        id: '7',
        name: 'Karen W.',
        role: 'Fintech Leader',
        initials: 'KW',
      },
    },
  ],
  [
    {
      content:
        "Brought Sam in to manage things. Terrible idea. Everything's working now and I don't have stuff to complain about.",
      client: {
        id: '5',
        name: 'Dean W.',
        role: 'Marketing Maverick',
        initials: 'DW',
      },
    },
    {
      content:
        "Beware: exposure to Rebekah may cause symptoms of extreme creativity, uncontrollable brainstorming, and an insatiable desire to conquer every marketing goal you've ever had.",
      client: {
        id: '8',
        name: 'Ross Q.',
        role: 'Creative Director',
        initials: 'RQ',
      },
    },
    {
      content:
        "If you want someone who's cracked the code on monetizing digital marketing, don't work with Rebekah. You can't handle the mind-blowing results.",
      client: {
        id: '9',
        name: 'Sabrina G.',
        role: 'Professional Speaker',
        initials: 'SG',
      },
    },
    {
      content:
        "Rebekah will ruin your expectations forever. She's a tornado of positive energy that'll turn your ho-hum, wishy-washy marketing strategy into a powerhouse growth engine.",
      client: {
        id: '10',
        name: 'Divya J.',
        role: 'Scientist',
        initials: 'DJ',
      },
    },
    {
      content:
        'Working with Rebekah creates an inevitable and irreversible addiction to ROI improvement. Her methods are known to cause severe success in campaign performance.',
      client: {
        id: '11',
        name: 'Debra T.',
        role: 'Business Consultant',
        initials: 'DT',
      },
    },
    {
      content:
        "Rebekah's approach to content marketing is dangerously effective. Prepare to see your engagement rates soar to uncomfortable heights.",
      client: {
        id: '12',
        name: 'Mia V.',
        role: 'Online Business Coach',
        initials: 'MV',
      },
    },
    {
      content:
        'Inviting Rebekah to overhaul your email marketing might cause unexpected spikes in open and conversion rates, making your previous benchmarks look pitifully low.',
      client: {
        id: '13',
        name: 'Diane B.',
        role: 'Mortgage Specialist',
        initials: 'DB',
      },
    },
    {
      content:
        'Collaborating with Rebekah on social media strategy is going to spoil your brand for anything less than viral. Her tactics will embarrassingly elevate your online presence.',
      client: {
        id: '14',
        name: 'Lori M.',
        role: 'Chief Adventure Officer',
        initials: 'LM',
      },
    },
  ],
  [
    {
      content:
        'Letting Rebekah refine your SEO strategy is a risky move. You might find your website traffic increasing to the point where you actually need to upgrade your server.',
      client: {
        id: '15',
        name: 'Anthony K.',
        role: 'Real Estate Wealth Manager',
        initials: 'AK',
      },
    },
    {
      content:
        "Rebekah's talent for digital problem-solving is the unique twist making traditional methods in your team obsolete. She'll thrust you into an era of innovation you might not be ready for.",
      client: {
        id: '16',
        name: 'Larry W.',
        role: 'CTO',
        initials: 'LW',
      },
    },
    {
      content:
        "Don't hire Rebekah if you enjoy a quiet, unnoticed website. She'll turn it into an engagement magnet, clearly not for everyone.",
      client: {
        id: '17',
        name: 'Dr. Erica G.',
        role: 'Ph.D.',
        initials: 'EG',
      },
    },
    {
      content:
        "Avoid Rebekah if you're fond of your brand blending in. She'll make any brand stand out—risky if anonymity is your game.",
      client: {
        id: '18',
        name: 'Laura M.',
        role: 'Global Head of Community',
        initials: 'LM',
      },
    },
    {
      content:
        "Join forces with Rebekah at your own risk. Her digital strategy superpowers will make your previous achievements look like child's play.",
      client: {
        id: '19',
        name: 'Mike A.',
        role: 'CMO',
        initials: 'MA',
      },
    },
    {
      content:
        "Satisfied with being a small fish in a big pond? Watch out. Rebekah's branding smarts will inconveniently turn you into the pond's biggest catch.",
      client: {
        id: '20',
        name: 'Denise W.',
        role: 'Small Business Owner',
        initials: 'DW',
      },
    },
    {
      content:
        "If your idea of a solid content strategy is posting when you remember to, you might not want Rebekah's input. Her approach will turn your entire content engine around.",
      client: {
        id: '21',
        name: 'Chik Q.',
        role: 'Director of Marketing',
        initials: 'CQ',
      },
    },
    {
      content: "Rebekah sucks. Don't work with her.",
      client: {
        id: '22',
        name: 'Dean R.',
        role: 'Skeptical Spouse',
        initials: 'DR',
      },
    },
    {
      content:
        "Ready to get started? Oh boy, don't say we didn't warn ya. Prepare for something epic.",
      client: {
        id: '24',
        name: 'Future You',
        role: 'Cautiously Optimistic',
        initials: 'FY',
        ctaLink: siteConfig.links.upworkConsult,
        ctaText: 'Get results',
      },
    },
  ],
];
