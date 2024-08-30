import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';

const UI4 = ({ assets }) => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(timer);
          navigate('/ui5');
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl text-white text-center mb-4">Generating image...</p>
        <Progress value={progress} className="w-full" />
      </motion.div>
      {assets.video && (
        <motion.video 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-auto"
          src={assets.video}
          autoPlay
          loop
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        />
      )}
    </motion.div>
  );
};

export default UI4;
