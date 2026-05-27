import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  isLoading, 
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black shadow-lg shadow-gold-900/20 border-0",
    outline: "border border-gold-600/30 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
    white: "bg-white text-black hover:bg-gray-100",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-full px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
