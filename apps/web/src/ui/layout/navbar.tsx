'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Popover } from '@headlessui/react';

import { cn } from '@sambi/ui';

import { MenuIcon } from '#/ui/shared/icons';

const sections = [
  {
    id: 'showcase',
    title: (
      <>
        <span className="hidden lg:inline">Showcase</span>
        <span className="lg:hidden">Showcase</span>
      </>
    ),
  },
  { id: 'process', title: 'Process' },
  { id: 'resources', title: 'Resources' },
  { id: 'warnings', title: 'Warnings' },
  { id: 'tldr', title: 'TL;DR' },
];

export function NavBar() {
  const navBarRef = useRef<React.ElementRef<'div'>>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mobileActiveIndex = activeIndex ?? 0;

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return;
      }

      let newActiveIndex = null;
      const elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      const bodyRect = document.body.getBoundingClientRect();
      const offset = bodyRect.top + navBarRef.current.offsetHeight + 1;

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1);
        return;
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index]!.getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index;
        } else {
          break;
        }
      }

      setActiveIndex(newActiveIndex);
    }

    updateActiveIndex();

    window.addEventListener('resize', updateActiveIndex);
    window.addEventListener('scroll', updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener('resize', updateActiveIndex);
      window.removeEventListener('scroll', updateActiveIndex);
    };
  }, []);

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={cn(
                'relative flex items-center px-4 py-3',
                !open &&
                  'bg-background shadow-sm [@supports(backdrop-filter:blur(0))]:bg-secondary [@supports(backdrop-filter:blur(0))]:backdrop-blur',
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="text-sm font-bold text-primary"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-foreground">
                    {sections[mobileActiveIndex]?.title}
                  </span>
                </>
              )}
              <Popover.Button
                className={cn(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10',
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-primary" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-background py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-secondary [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as="a"
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-primary"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-foreground">
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-background" />
          </>
        )}
      </Popover>
      <div className="sm:background hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:[@supports(backdrop-filter:blur(0))]:bg-secondary sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-foreground/80 [counter-reset:section]">
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <Link
                href={`#${section.id}`}
                className={cn(
                  'before:text-md flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-bold before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-primary bg-primary/20 font-semibold text-foreground before:text-primary'
                    : 'border-transparent before:text-primary/80 hover:bg-primary/20 hover:before:text-foreground',
                )}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
