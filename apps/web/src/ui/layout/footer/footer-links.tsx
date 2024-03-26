import { siteConfig } from '#/config/site';

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
        title: 'Yo CXO',
        href: siteConfig.links.upworkAgency,
        external: true,
      },
      {
        title: 'Ambreen',
        href: siteConfig.teamLinks.upworkAmbreen,
        external: true,
      },
      {
        title: 'Rebekah',
        href: siteConfig.teamLinks.upworkRebekah,
        external: true,
      },
      { title: 'Sam', href: siteConfig.teamLinks.upworkSam, external: true },
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
      { title: 'Cookies', href: '/privacy' },
      { title: 'Editorial', href: '/editorial' },
      { title: 'Privacy', href: '/privacy' },
      { title: 'Terms', href: '/terms' },
    ],
  },
];
