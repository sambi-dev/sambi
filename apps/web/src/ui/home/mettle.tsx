import { Clients } from '#/ui/clients';

export function Mettle() {
  return (
    <section
      id="mettle"
      aria-labelledby="mettle-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Clients title="Namedrop much?" limit="sm">
        <p>
          Here&apos;s a bunch of well known clients we&apos;ve worked with or
          for via a partner
          <span className="text-alternate">*</span>. We put this here to impress
          you so you&apos;ll keep reading. It&apos;s{' '}
          <span className="line-through">foolproof.</span> called social proof
          or something.
        </p>
      </Clients>
    </section>
  );
}
