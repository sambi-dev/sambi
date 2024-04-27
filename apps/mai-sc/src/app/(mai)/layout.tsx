interface MaiLayoutProps {
  children: React.ReactNode;
}

export default async function MaiLayout({ children }: MaiLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      {children}
    </div>
  );
}
