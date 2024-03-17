import { siteConfig } from '#/config/site';
import imageAmbreen from '#/images/team/ambreen.jpg';
import imageRebekah from '#/images/team/rebekah.jpg';
import imageSam from '#/images/team/sam.jpg';

interface Person {
  id: string;
  name: string;
  role: string;
  image: { src: string };
  bio: string;
  upworkUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
}

export const people: Person[] = [
  {
    id: 'sam',
    name: 'Sam Rizvi',
    role: 'Cat Herder',
    image: { src: imageSam },
    bio: "After 25 years in consulting and tech, I retired. Then my wife, Ambreen, and our bestie Rebekah roped me back in. I'm your go-to for turning visions into reality. Big on beer, basketball, tacos, and, of course, my dogs.",
    upworkUrl: siteConfig.links.upworkSam,
    xUrl: 'https://twitter.com/ivzirs',
    linkedinUrl: 'https://www.linkedin.com/in/rizvio/',
  },
  {
    id: 'ambreen',
    name: 'Ambreen Dar',
    role: 'Creative',
    image: { src: imageAmbreen },
    bio: "From classrooms to boardrooms, my love for design has guided me through the digital marketing maze. I blend art with strategy for results that delight. Also, I'm a devoted dog mom to four adorable fur babies.",
    upworkUrl: siteConfig.links.upworkAmbreen,
    xUrl: 'https://twitter.com/breenzy',
    linkedinUrl: 'https://www.linkedin.com/in/ambreen-dar-b3bb006/',
  },
  {
    id: 'rebekah',
    name: 'Rebekah Radice',
    role: 'Growth',
    image: { src: imageRebekah },
    bio: 'Two decades in global branding have equipped me with the skills to turn insights into impact. I leverage this experience to provide you with actionable growth strategies that matter. Off the clock, I hone my culinary skills with Italian cuisine.',
    upworkUrl: siteConfig.links.upworkRebekah,
    xUrl: 'https://twitter.com/RebekahRadice',
    linkedinUrl: 'https://www.linkedin.com/in/rebekahradice/',
  },
];
