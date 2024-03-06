function Office({
  name,
  children,
  invert = false,
}: {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <address className="text-balance text-sm not-italic text-muted-foreground">
      <strong className={invert ? 'text-primary' : 'text-foreground'}>
        {name}
      </strong>
      <br />
      <div
        className={
          invert
            ? 'text-secondary dark:text-secondary-foreground'
            : 'text-muted-foreground'
        }
      >
        {children}
      </div>
    </address>
  );
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul {...props}>
      <li>
        <Office name="Los Angeles" invert={invert}>
          Burbank, Malibu, and Santa Monica
        </Office>
      </li>
      <li>
        <Office name="Karachi" invert={invert}>
          Clifton
        </Office>
      </li>
      <li>
        <Office name="Hong Kong" invert={invert}>
          Central
        </Office>
      </li>
    </ul>
  );
}
