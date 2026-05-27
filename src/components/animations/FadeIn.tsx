import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  distance = 30,
  children, 
  className,
  ...props 
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = { 
    opacity: 0, 
    ...directions[direction] 
  };

  const animate = { 
    opacity: 1, 
    x: 0, 
    y: 0 
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth custom easing
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn };
