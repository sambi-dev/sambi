import { siteConfig } from '#/config/site';

const Footer = () => {
  return (
    <footer className="z-50 border-t bg-card dark:bg-zinc-950">
      <div className="mx-auto w-full p-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center space-x-6 md:order-2">
          <p className="text-center text-xs text-secondary-foreground/80">
            You&apos;re using the I AM MAI early beta. Stuff might break.
          </p>
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs text-secondary-foreground/80">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
