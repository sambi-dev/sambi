import { UserAvatar } from '@yocxo/ui/user-avatar';

import type { ClientItem } from '.basehub';

import { StarRating } from '#/ui/shared/star-rating';

export interface Warning {
  client: ClientItem;
}

export interface Client {
  id: string;
  name: string;
  contact: string;
  initials: string;
  role: string;
}

export interface WarningProps {
  client: Client;
  children: React.ReactElement | string;
}

export function Warning({ client, children }: WarningProps) {
  const { id, contact, initials, role } = client;

  return (
    <figure className="rounded-4xl border bg-card p-8 shadow-md">
      <div className="my-2 flex text-primary">
        <StarRating size="sm" />
      </div>
      <blockquote>
        <div className="tracking-tight text-muted-foreground">{children}</div>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-primary">
          <UserAvatar
            className="size-8"
            id={id}
            initials={initials}
            name={contact}
          />
        </div>
        <div className="ml-4">
          <div className="font-mono text-sm font-semibold leading-6 tracking-tight text-foreground after:content-['.']">
            {contact} {initials}
          </div>
          <p className="line-clamp-1 font-mono text-[0.6rem] font-medium tracking-tight text-muted-foreground">
            {role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
