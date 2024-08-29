import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UI2 = ({ assets }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate('/ui3');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white">
        {countdown}
      </div>
    </div>
  );
};

export default UI2;