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
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <motion.div
          whileTap={{ scale: 0.9 }}
          animate={isRecording ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1 } } : {}}
        >
          <Button 
            className="w-24 h-24 rounded-full bg-red-500 hover:bg-red-600" 
            onClick={handleRecordClick}
          >
            <Mic className="w-12 h-12" />
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button 
            className="w-24 h-24 rounded-full bg-gray-500 hover:bg-gray-600" 
            onClick={handleStopClick}
          >
            <Square className="w-12 h-12" />
          </Button>
        </motion.div>
      </div>
      {assets.video && (
        <video 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-auto"
          src={assets.video}
          autoPlay
          loop
          muted
        />
      )}
    </div>
  );
};

export default UI3;
