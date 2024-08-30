import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const UI2 = ({ assets }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ui3');
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
          className="absolute top-[1150px] left-[-260px] transform -translate-y-1/2 w-[75%] h-auto"
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute top-[800px] left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white text-center p-[60px] bg-black bg-opacity-50 rounded-lg max-w-[80%]"
      >
        {assets.transcription1 || "No transcription set"}
      </motion.div>
    </motion.div>
  );
};

export default UI2;
