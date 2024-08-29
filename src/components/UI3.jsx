import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mic, Square } from 'lucide-react';

const UI3 = ({ assets }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <Button className="w-24 h-24 rounded-full bg-red-500 hover:bg-red-600" onClick={() => {}}>
          <Mic className="w-12 h-12" />
        </Button>
        <Button className="w-24 h-24 rounded-full bg-gray-500 hover:bg-gray-600" onClick={() => navigate('/ui4')}>
          <Square className="w-12 h-12" />
        </Button>
      </div>
    </div>
  );
};

export default UI3;