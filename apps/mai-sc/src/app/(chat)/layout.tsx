import { SidebarDesktop } from '#/ui/sidebar-desktop';

interface MaiChatLayoutProps {
  children: React.ReactNode;
}

export default async function MaiChatLayout({ children }: MaiChatLayoutProps) {
  return (
    <div className="no-scrollbar relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      {children}
    </div>
  );
}
