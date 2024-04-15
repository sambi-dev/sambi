import type { StaticImageData } from 'next/image';

import image1 from '#/images/1.jpg';
import image2 from '#/images/2.jpg';
import image3 from '#/images/3.jpg';
import image4 from '#/images/4.jpg';
import image5 from '#/images/5.jpg';
import image6 from '#/images/6.jpg';
import image7 from '#/images/7.jpg';
import image8 from '#/images/8.jpg';
import image9 from '#/images/9.jpg';
import image10 from '#/images/10.jpg';
import image11 from '#/images/11.jpg';
import image12 from '#/images/12.jpg';
import image13 from '#/images/13.jpg';
import image16 from '#/images/16.jpg';
import image17 from '#/images/17.jpg';

export interface Screen {
  title: string;
  thumbnail: StaticImageData;
}

export const screens: Screen[] = [
  {
    title: 'Increased engagement',
    thumbnail: image1,
  },
  {
    title: 'Time saved',
    thumbnail: image2,
  },
  {
    title: 'Targeted messaging',
    thumbnail: image3,
  },
  {
    title: 'Credibility built',
    thumbnail: image4,
  },
  {
    title: 'Audiences captivated',
    thumbnail: image5,
  },
  {
    title: 'Strategies optimized',
    thumbnail: image6,
  },
  {
    title: 'Workflow streamlined',
    thumbnail: image17,
  },
  {
    title: 'Conversions boosted',
    thumbnail: image7,
  },
  {
    title: 'ROI maximized',
    thumbnail: image8,
  },
  {
    title: 'Trends capitalized',
    thumbnail: image9,
  },
  {
    title: 'Clients satisfied',
    thumbnail: image10,
  },
  {
    title: 'Goals achieved',
    thumbnail: image16,
  },
  {
    title: 'Needs met',
    thumbnail: image11,
  },
  {
    title: 'Connections formed',
    thumbnail: image12,
  },
  {
    title: 'Briefs nailed',
    thumbnail: image13,
  },
];
