import React from 'react';
import { motion } from 'framer-motion';

const MovingParticles = () => {
  const particleCount = 20;

  const generateParticles = () => {
    return Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      size: Math.random() * 10 + 5,
      x: Math.random() * 1080,
      y: Math.random() * 1920,
      duration: Math.random() * 20 + 10,
    }));
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {generateParticles().map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white bg-opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default MovingParticles;