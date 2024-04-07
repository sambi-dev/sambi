import { socialConfig } from '#/config/social';
import { upworkConfig } from '#/config/upwork';

interface Link {
  title: string;
  href: string;
  external?: boolean;
}

interface Section {
  title: string;
  links: Link[];
}

export const footerLinks: Section[] = [
  {
    title: 'Resources',
    links: [
      { title: 'Showcase', href: '/showcase' },
      { title: 'Blog', href: '/blog' },
      { title: 'AI Blog', href: '/ai-blog' },
      { title: 'Stack', href: '/stack' },
      { title: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Retain',
    links: [
      {
        title: 'Yo! CXO',
        href: socialConfig.links.upworkAgency,
        external: true,
      },
      {
        title: 'Ambreen',
        href: upworkConfig.ambreen,
        external: true,
      },
      {
        title: 'Rebekah',
        href: upworkConfig.rebekah,
        external: true,
      },
      { title: 'Sam', href: upworkConfig.sam, external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Accessibility', href: '/accessibility' },
      { title: 'Editorial', href: '/editorial' },
      { title: 'Privacy', href: '/privacy' },
      { title: 'Terms', href: '/terms' },
    ],
  },
];
