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

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { BurgerMenuIcon, CloseMenuIcon, UpworkIcon } from '@yocxo/ui/icons';
import { Logo, Logomark } from '@yocxo/ui/logo';

import { siteConfig } from '#/config/site';
import { Footer } from '#/ui/layout/footer';
import { Container } from '#/ui/page-container';
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
            className="hidden h-10 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <a
            href={siteConfig.teamLinks.upworkConsult}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a consult with Yo! CXO on Upwork in a new window"
            className={cn(buttonVariants())}
          >
            <UpworkIcon className="mr-2 size-5 flex-none fill-current" />
            Get results
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
                  ? 'text-[#09090B] group-hover:text-[#09090B]/80'
                  : 'text-foreground group-hover:text-foreground/80',
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
    <div className="even:mt-px sm:bg-[#FFC60A]">
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
      className="group relative isolate -mx-6 bg-[#FFC60A] px-6 py-10 text-[#1E1E20] even:mt-px hover:text-[#FBFAF9] dark:hover:text-[#09090B] sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[#09090B]/10 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-primary opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100 dark:bg-primary" />
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="mt-px font-mono text-5xl font-medium tracking-tight">
      <NavigationRow>
        <NavigationItem href="/showcase">Showcase</NavigationItem>
        <NavigationItem href="/about">About</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Process</NavigationItem>
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
          className="relative z-50 overflow-hidden bg-[#FFC60A] pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-expect-error (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-[#09090B]/10">
            <div ref={navRef} className="bg-[#FFC60A] pb-16 pt-14">
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
            <div className="relative bg-[#FFC60A] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#09090B]/10">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div className="sm:border-l sm:border-transparent">
                    <h2 className="font-mono text-sm font-bold tracking-tighter text-[#141414]">
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
