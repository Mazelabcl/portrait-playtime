import React from 'react';
import { motion } from 'framer-motion';

const MovingParticles = () => {
  const particleCount = 100;

  const generateParticles = () => {
    return Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      size: Math.random() * 30 + 5,
      x: Math.random() * 1080,
      y: Math.random() * 1920,
      duration: Math.random() * 40 + 10,
    }));
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {generateParticles().map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [0, Math.random() * 600 - 300],
            y: [0, Math.random() * 600 - 300],
            scale: [1, 2, 0.5, 1.5, 1],
            opacity: [0.1, 0.5, 0.1, 0.8, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default MovingParticles;
