import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

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
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
        <p className="text-2xl text-white text-center mb-4">Generating image...</p>
        <Progress value={progress} className="w-full" />
      </div>
      {assets.video && (
        <video 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-auto"
          src={assets.video}
          autoPlay
          loop
        />
      )}
    </div>
  );
};

export default UI4;
