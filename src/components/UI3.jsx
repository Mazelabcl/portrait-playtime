import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mic, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const UI3 = ({ assets }) => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordClick = () => {
    setIsRecording(true);
  };

  const handleStopClick = () => {
    setIsRecording(false);
    navigate('/ui4');
  };

  return (
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded-lg"
        >
          {assets.pregunta || "No question set"}
        </motion.div>
        <div className="flex space-x-8">
          <motion.div
            whileTap={{ scale: 0.9 }}
            animate={isRecording ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1 } } : {}}
          >
            <Button 
              className="w-24 h-24 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl" 
              onClick={handleRecordClick}
              style={{
                boxShadow: isRecording ? '0 0 15px rgba(255, 0, 0, 0.7)' : 'none',
              }}
            >
              <Mic className="w-12 h-12" />
            </Button>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              className="w-24 h-24 rounded-full bg-gray-500 hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl" 
              onClick={handleStopClick}
            >
              <Square className="w-12 h-12" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UI3;
