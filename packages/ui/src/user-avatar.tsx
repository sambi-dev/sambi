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
        className="bg-[#FFC60A] p-1"
        src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${id}&backgroundColor=FFC60A`}
        alt={`A fun dicebear avatar with silly faces representing our client, ${name}.`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
