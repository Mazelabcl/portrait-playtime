import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const UI5 = ({ assets }) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = assets.generatedImage || '/placeholder.svg';
    img.onload = () => setIsImageLoaded(true);
  }, [assets.generatedImage]);

  return (
    <div 
      className="w-[1080px] h-[1920px] bg-cover bg-center cursor-pointer relative overflow-hidden" 
      style={{ backgroundImage: `url(${assets.backgroundImage})` }}
      onClick={() => navigate('/')}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isImageLoaded ? 1 : 0, scale: isImageLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={assets.generatedImage || '/placeholder.svg'}
            alt="Generated Image" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default UI5;
