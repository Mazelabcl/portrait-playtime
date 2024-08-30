import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const UI5 = ({ assets }) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = assets.generatedImage || '/placeholder.svg';
    img.onload = () => {
      setIsImageLoaded(true);
      setTimeout(() => setShowImage(true), 500);
    };
  }, [assets.generatedImage]);

  const handleClick = () => {
    setShowImage(false);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <motion.div 
      className="w-[1080px] h-[1920px] bg-cover bg-center cursor-pointer relative overflow-hidden" 
      style={{ backgroundImage: `url(${assets.backgroundImage})` }}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {showImage && (
          <motion.div
            key="image"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              rotate: 10, 
              filter: 'blur(20px)',
              transition: { duration: 1, ease: "easeInOut" }
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div 
              className="w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={assets.generatedImage || '/placeholder.svg'}
                alt="Generated Image" 
                className="w-full h-full object-cover"
                initial={{ filter: 'blur(10px)' }}
                animate={{ filter: 'blur(0px)' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UI5;
