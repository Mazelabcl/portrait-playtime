import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";

const UI4 = ({ assets }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ui5');
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        setShowProgress(true);
        const progressTimer = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress >= 100) {
              clearInterval(progressTimer);
              return 100;
            }
            return prevProgress + 10;
          });
        }, 600);
      };
    }
  }, []);

  return (
    <motion.div 
      className="relative w-[1080px] h-[1920px]" 
      style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {assets.video2 && !showProgress && (
        <motion.video 
          ref={videoRef}
          className="absolute top-[1170px] left-[140px] transform -translate-y-1/2 w-[75%] h-auto"
          src={assets.video2}
          autoPlay
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '24px',
          }}
        />
      )}
      {showProgress && (
        <motion.div 
          className="absolute top-[1170px] left-[140px] transform -translate-y-1/2 w-[75%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Progress value={progress} className="w-full h-8" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default UI4;
