import { MainLayout } from '#/ui/layout/root-layout';

interface InnerPagesLayoutProps {
  children: React.ReactNode;
}

export default function InnerPagesLayout({ children }: InnerPagesLayoutProps) {
  return (
    <div className="h-full">
      <main className="flex min-h-full flex-col bg-[#121117] dark:bg-[#182524]">
        <MainLayout>{children}</MainLayout>
      </main>
    </div>
  );
}
