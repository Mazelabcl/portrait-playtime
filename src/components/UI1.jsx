import React from 'react';
import { useNavigate } from 'react-router-dom';
import SecretMenu from './SecretMenu';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const UI1 = ({ assets, setAssets }) => {
  const navigate = useNavigate();

  const handleUpload = (newAssets) => {
    setAssets(newAssets);
  };

  return (
    <motion.div 
      className="relative w-[1080px] h-[1920px]" 
      style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SecretMenu onUpload={handleUpload} />
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: ['0px 0px 0px 0px rgba(255,255,255,0.7)', '0px 0px 20px 10px rgba(255,255,255,0)', '0px 0px 0px 0px rgba(255,255,255,0.7)'],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="rounded-full overflow-hidden"
        >
          <Button
            onClick={() => navigate('/ui2')}
            className="w-[400px] h-[200px] text-4xl font-bold text-blue-900 bg-white hover:bg-blue-100 transition-colors duration-300"
          >
            INICIAR
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UI1;
