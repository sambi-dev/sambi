import { ArrowUpRightIcon } from '@sambi/ui/icons';

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex flex-1 justify-center gap-1 leading-4 hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ArrowUpRightIcon className="-mx-0.5 size-2 text-primary" />
    </a>
  );
}
