import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'outline';
}

const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', children, ...props }) => {
  const variants = {
    default: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-red-500/10 text-red-400 border-red-500/20",
    outline: "bg-transparent border-gray-700 text-gray-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
