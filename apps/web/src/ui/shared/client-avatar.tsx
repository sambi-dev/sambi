import { Avatar, AvatarFallback, AvatarImage } from '@sambi/ui/avatar';

interface ClientAvatarProps {
  id: string;
  initials: string;
}

export function ClientAvatar({ id, initials }: ClientAvatarProps) {
  return (
    <Avatar>
      <AvatarImage
        src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${id}&backgroundColor=ffca0a`}
        alt={`A fun dicebear avatar with silly faces representing our client, ${id}.`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
