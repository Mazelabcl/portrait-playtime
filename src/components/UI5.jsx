import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const UI5 = ({ assets }) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = assets.generatedImage || '/placeholder.svg';
    img2.src = assets.generatedImage2 || '/placeholder.svg';
    Promise.all([
      new Promise(resolve => img1.onload = resolve),
      new Promise(resolve => img2.onload = resolve)
    ]).then(() => {
      setIsImageLoaded(true);
      setTimeout(() => setShowImage(true), 500);
    });
  }, [assets.generatedImage, assets.generatedImage2]);

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
            key="images"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div 
              className="w-3/4 h-3/4 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-2xl"
                style={{ zIndex: 2 }}
                whileHover={{ scale: 1.05, rotate: 5, zIndex: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div className="absolute inset-0 bg-black opacity-30" />
                <motion.img 
                  src={assets.generatedImage || '/placeholder.svg'}
                  alt="Generated Image 1" 
                  className="w-full h-full object-cover"
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.div 
                className="absolute top-10 left-10 w-full h-full rounded-lg overflow-hidden shadow-2xl"
                style={{ zIndex: 1 }}
                whileHover={{ scale: 1.05, rotate: -5, zIndex: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div className="absolute inset-0 bg-black opacity-30" />
                <motion.img 
                  src={assets.generatedImage2 || '/placeholder.svg'}
                  alt="Generated Image 2" 
                  className="w-full h-full object-cover"
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UI5;
