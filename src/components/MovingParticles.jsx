import React from 'react';
import { motion } from 'framer-motion';

const MovingParticles = () => {
  const particleCount = 50;

  const generateParticles = () => {
    return Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      size: Math.random() * 20 + 10,
      x: Math.random() * 1080,
      y: Math.random() * 1920,
      duration: Math.random() * 30 + 20,
    }));
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {generateParticles().map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white bg-opacity-10"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
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
