import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';

const UI4 = ({ assets }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ui5');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="relative w-[1080px] h-[1920px]" 
      style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl text-white text-center mb-4">Generating image...</p>
      </motion.div>
      {assets.video && (
        <motion.video 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[56.25%] h-auto"
          src={assets.video}
          autoPlay
          loop
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
          }}
        />
      )}
    </motion.div>
  );
};

export default UI4;
