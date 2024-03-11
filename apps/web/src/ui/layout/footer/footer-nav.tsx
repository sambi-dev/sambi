import Link from 'next/link';

import { footerLinks } from './footer-links';

export function FooterNav() {
  return (
    <nav className="w-full">
      <ul className="grid grid-cols-2 gap-16 sm:grid-cols-4">
        {footerLinks.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-mono text-sm font-bold uppercase tracking-widest text-primary">
              {section.title}
            </div>
            <ul className="mt-4 text-sm text-secondary-foreground">
              {section.links.map((link, linkIndex) => {
                const isExternal = link.external;
                return (
                  <li key={linkIndex} className="mt-4">
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.title}'s profile on Upwork in a new window`}
                        className="transition hover:text-primary hover:underline hover:decoration-4 hover:underline-offset-4"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition hover:text-primary hover:underline hover:decoration-4 hover:underline-offset-4"
                        aria-label={`Visit our ${link.title} page in the same window`}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
