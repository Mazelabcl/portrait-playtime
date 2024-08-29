import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SecretMenu from './SecretMenu';

const UI1 = ({ assets, setAssets }) => {
  const navigate = useNavigate();

  const handleUpload = (newAssets) => {
    setAssets(newAssets);
  };

  return (
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <SecretMenu onUpload={handleUpload} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button onClick={() => navigate('/ui2')} style={{ backgroundImage: `url(${assets.buttonImage})`, backgroundSize: 'cover', width: '200px', height: '200px' }}>
        </Button>
      </div>
    </div>
  );
};

export default UI1;