import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface UserAvatarProps {
  id: string;
  name: string;
  initials: string;
  className?: string;
}

export function UserAvatar({ id, initials, className, name }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        className="bg-[#fed7aa]"
        src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${id}&backgroundColor=fed7aa&radius=50`}
        alt={`A fun dicebear avatar with silly faces representing our client, ${name}.`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
