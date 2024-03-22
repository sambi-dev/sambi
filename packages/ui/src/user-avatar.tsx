import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface UserAvatarProps {
  id: string;
  initials: string;
  className?: string;
}

export function UserAvatar({ id, initials, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${id}&backgroundColor=ffca0a`}
        alt={`A fun dicebear avatar with silly faces representing our client, ${id}.`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
