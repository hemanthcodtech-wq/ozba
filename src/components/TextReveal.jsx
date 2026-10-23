import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up', // 'up' | 'down' | 'left' | 'right'
  className = '',
  inline = false,
  once = false
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  const offset = {
    up: { y: '100%', x: 0 },
    down: { y: '-100%', x: 0 },
    left: { x: '100%', y: 0 },
    right: { x: '-100%', y: 0 }
  }[direction] || { y: '100%', x: 0 };

  const WrapperTag = inline ? 'span' : 'div';

  return (
    <WrapperTag
      ref={ref}
      className={`unreveal-mask ${className}`}
      style={{
        overflow: 'hidden',
        display: inline ? 'inline-block' : 'block',
        verticalAlign: 'bottom',
        position: 'relative'
      }}
    >
      <motion.span
        initial={{ opacity: 0, x: offset.x, y: offset.y }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] // Luxury cubic bezier ease
        }}
        style={{ display: inline ? 'inline-block' : 'block', width: '100%' }}
      >
        {children}
      </motion.span>
    </WrapperTag>
  );
}
