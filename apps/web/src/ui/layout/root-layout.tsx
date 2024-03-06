'use client';

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { Footer } from '#/ui/layout/footer';
import { Logo, Logomark } from '#/ui/logo';
import { Offices } from '#/ui/offices';
import { Container } from '#/ui/page-container';
import { BurgerMenuIcon, CloseMenuIcon } from '#/ui/shared/icons';
import { SocialMedia } from '#/ui/social-media';

const MainLayoutContext = createContext<{
  logoHovered: boolean;
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string;
  icon: React.ComponentType<{ className?: string }>;
  expanded: boolean;
  onToggle: () => void;
  toggleRef: React.RefObject<HTMLButtonElement>;
  invert?: boolean;
}) {
  const { logoHovered, setLogoHovered } = useContext(MainLayoutContext)!;

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <a
            href="https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a consult with sambi on Upwork in a new window"
            className={cn(buttonVariants({}))}
          >
            Hire us
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={cn(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-primary/40' : 'hover:bg-primary/20',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={cn(
                'h-6 w-6',
                invert
                  ? 'fill-zinc-50 group-hover:fill-zinc-200'
                  : 'fill-foreground group-hover:fill-foreground/80',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px dark:bg-[#182524] sm:bg-[#121117]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
}

function NavigationItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-[#121117] px-6 py-10 even:mt-px dark:bg-[#182524] sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#24232F] sm:even:pl-16 dark:sm:even:border-[#2D2B3B]"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-primary opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100 dark:bg-alternate" />
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="mt-px text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
}

function MainLayoutInner({ children }: { children: React.ReactNode }) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef<React.ElementRef<'button'>>(null);
  const closeRef = useRef<React.ElementRef<'button'>>(null);
  const navRef = useRef<React.ElementRef<'div'>>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false);
      }
    }

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-expect-error (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={BurgerMenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              );
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-[#121117] pt-2 dark:bg-[#182524]"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-expect-error (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-[#24232F] dark:bg-[#2D2B3B]">
            <div
              ref={navRef}
              className="bg-[#121117] pb-16 pt-14 dark:bg-[#182524]"
            >
              <Header
                invert
                panelId={panelId}
                icon={CloseMenuIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  );
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-[#121117] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#24232F] dark:bg-[#182524] dark:before:bg-[#2D2B3B]">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="text-base font-semibold text-white">
                      Working remotely from
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-background pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <MainLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <MainLayoutInner key={pathname}>{children}</MainLayoutInner>
    </MainLayoutContext.Provider>
  );
}
