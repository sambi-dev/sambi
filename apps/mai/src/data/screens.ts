import type { StaticImageData } from 'next/image';

import hero1 from '#/hero-assets/hero1.jpg';
import hero2 from '#/hero-assets/hero2.jpg';
import hero3 from '#/hero-assets/hero3.jpg';
import hero4 from '#/hero-assets/hero4.jpg';
import hero5 from '#/hero-assets/hero5.jpg';
import hero6 from '#/hero-assets/hero6.jpg';
import hero7 from '#/hero-assets/hero7.jpg';
import hero8 from '#/hero-assets/hero8.jpg';
import hero9 from '#/hero-assets/hero9.jpg';
import hero10 from '#/hero-assets/hero10.jpg';
import hero11 from '#/hero-assets/hero11.jpg';
import hero12 from '#/hero-assets/hero12.jpg';
import hero13 from '#/hero-assets/hero13.jpg';
import hero16 from '#/hero-assets/hero16.jpg';
import hero17 from '#/hero-assets/hero17.jpg';

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
