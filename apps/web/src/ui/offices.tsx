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
      <strong className={invert ? 'text-[#1E1E20]' : 'text-foreground'}>
        {name}
      </strong>
      <br />
      <div className={invert ? 'text-[#28282A]' : 'text-muted-foreground'}>
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
        <Office name="Los Angeles :: LAX" invert={invert}>
          Burbank, Malibu, and Santa Monica
        </Office>
      </li>
      <li>
        <Office name="Karachi :: KHI" invert={invert}>
          Clifton
        </Office>
      </li>
      <li>
        <Office name="Hong Kong :: HKG" invert={invert}>
          Central
        </Office>
      </li>
    </ul>
  );
}
