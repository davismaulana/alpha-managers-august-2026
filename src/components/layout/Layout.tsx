import React from 'react';
import { cn } from '../../lib/utils';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen w-full bg-black text-white font-sans selection:bg-gold-500/30", className)}>
      <main className="flex flex-col relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,106,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,219,199,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export { Layout };
