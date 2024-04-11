import React from 'react';

import { cn } from '@yocxo/ui';
import { Badge } from '@yocxo/ui/badge';
import { SearchIcon } from '@yocxo/ui/icons';

interface ToolBadgeProps {
  tool: string;
  children: React.ReactNode;
  className?: string;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({
  tool,
  children,
  className,
}) => {
  const icon: Record<string, React.ReactNode> = {
    search: <SearchIcon />,
  };

  return (
    <Badge
      className={cn('border py-2 text-sm text-muted-foreground', className)}
      variant={'secondary'}
    >
      {icon[tool]}
      <span className="ml-2">{children}</span>
    </Badge>
  );
};
