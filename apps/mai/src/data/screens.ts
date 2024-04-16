import type { StaticImageData } from 'next/image';

import hero1 from '#/assets/1.jpg';
import hero2 from '#/assets/2.jpg';
import hero3 from '#/assets/3.jpg';
import hero4 from '#/assets/4.jpg';
import hero5 from '#/assets/5.jpg';
import hero6 from '#/assets/6.jpg';
import hero7 from '#/assets/7.jpg';
import hero8 from '#/assets/8.jpg';
import hero9 from '#/assets/9.jpg';
import hero10 from '#/assets/10.jpg';
import hero11 from '#/assets/11.jpg';
import hero12 from '#/assets/12.jpg';
import hero13 from '#/assets/13.jpg';
import hero16 from '#/assets/16.jpg';
import hero17 from '#/assets/17.jpg';

export interface Screen {
  title: string;
  thumbnail: StaticImageData;
}

export const screens: Screen[] = [
  {
    title: 'Increased engagement',
    thumbnail: hero1,
  },
  {
    title: 'Time saved',
    thumbnail: hero2,
  },
  {
    title: 'Targeted messaging',
    thumbnail: hero3,
  },
  {
    title: 'Credibility built',
    thumbnail: hero4,
  },
  {
    title: 'Audiences captivated',
    thumbnail: hero5,
  },
  {
    title: 'Strategies optimized',
    thumbnail: hero6,
  },
  {
    title: 'Workflow streamlined',
    thumbnail: hero17,
  },
  {
    title: 'Conversions boosted',
    thumbnail: hero7,
  },
  {
    title: 'ROI maximized',
    thumbnail: hero8,
  },
  {
    title: 'Trends capitalized',
    thumbnail: hero9,
  },
  {
    title: 'Clients satisfied',
    thumbnail: hero10,
  },
  {
    title: 'Goals achieved',
    thumbnail: hero16,
  },
  {
    title: 'Needs met',
    thumbnail: hero11,
  },
  {
    title: 'Connections formed',
    thumbnail: hero12,
  },
  {
    title: 'Briefs nailed',
    thumbnail: hero13,
  },
];
