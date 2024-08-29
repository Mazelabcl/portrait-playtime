import React from 'react';
import { useNavigate } from 'react-router-dom';

const UI5 = ({ assets }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-[1080px] h-[1920px] bg-cover bg-center cursor-pointer" 
      style={{ backgroundImage: `url(${assets.backgroundImage})` }}
      onClick={() => navigate('/')}
    >
      <img 
        src="/placeholder.svg" 
        alt="Generated Image" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default UI5;