import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      {assets.video && (
        <motion.video 
          className="absolute top-[1200px] left-[140px] transform -translate-y-1/2 w-[75%] h-auto"
          src={assets.video}
          autoPlay
          loop
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '24px',
          }}
        />
      )}
    </motion.div>
  );
};

export default UI4;
