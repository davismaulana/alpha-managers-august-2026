import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  children: React.ReactNode;
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({ 
  staggerDelay = 0.1, 
  children, 
  className,
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { StaggerContainer };
