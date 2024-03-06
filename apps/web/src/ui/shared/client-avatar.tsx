import { useMemo } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@sambi/ui/avatar';

import { randomElement, userColors } from '#/lib/constants';

interface ClientAvatarProps {
  id: string;
  initials: string;
}

export function ClientAvatar({ id, initials }: ClientAvatarProps) {
  const randomColor = useMemo(() => randomElement(userColors), []);

  const backgroundColor = randomColor.replace('#', '');
  return (
    <Avatar>
      <AvatarImage
        src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${id}&backgroundColor=${backgroundColor}`}
        alt={`A fun dicebear avatar representing our client, ${id}.`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
