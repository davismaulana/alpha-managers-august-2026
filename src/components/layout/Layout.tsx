import React from 'react';
import { cn } from '../../lib/utils';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen w-full bg-black text-white font-sans selection:bg-gold-500/30", className)}>
      <main className="flex flex-col relative overflow-hidden">
        {/* Global background effects could go here */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[120px]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export { Layout };
