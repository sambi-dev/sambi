import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';

export function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode;
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </dl>
    </FadeInStagger>
  );
}

export function StatListItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-base text-muted-foreground">{label}</dt>
      <dd className="font-mono text-3xl font-medium tracking-tighter text-foreground sm:text-4xl">
        {value}
      </dd>
    </Border>
  );
}
