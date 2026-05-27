import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, hoverEffect = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm border border-white/5",
        hoverEffect && "transition-all duration-300 hover:border-gold-500/30 hover:shadow-[0_0_30px_-10px_rgba(201,160,95,0.1)] group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export { Card };
