import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/**
 * TiltCard: 3D interactive tilt with cursor-following radial spotlight glow
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(197, 160, 82, 0.22)',
  style = {},
  onClick
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 260,
    damping: 24
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 260,
    damping: 24
  });

  // Spotlight coordinates (percentage)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = mouseX / rect.width;
    const normY = mouseY / rect.height;

    x.set(normX);
    y.set(normY);

    setSpotlight({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`tilt-card-wrapper ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style
      }}
      animate={{
        scale: isHovered ? 1.018 : 1
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {children}

        {/* Cursor Magnetic Spotlight Glow Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(circle 280px at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 70%)`,
            zIndex: 10
          }}
        />
      </motion.div>
    </motion.div>
  );
}
