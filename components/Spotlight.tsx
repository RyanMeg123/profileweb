'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
  }, [mousePosition, springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(255,255,255,0.06), transparent 40%)`,
      }}
    />
  );
}
