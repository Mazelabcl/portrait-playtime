import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SecretMenu = ({ onUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [buttonImage, setButtonImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        switch (type) {
          case 'background':
            setBackgroundImage(reader.result);
            break;
          case 'button':
            setButtonImage(reader.result);
            break;
          case 'video':
            setVideo(reader.result);
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpload({ backgroundImage, buttonImage, video });
    setIsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 m-4">
      <Button onClick={() => setIsOpen(!isOpen)}>Secret Menu</Button>
      {isOpen && (
        <div className="mt-4 p-4 bg-white rounded shadow-lg">
          <Input type="file" onChange={(e) => handleUpload(e, 'background')} accept="image/*" className="mb-2" />
          <Input type="file" onChange={(e) => handleUpload(e, 'button')} accept="image/*" className="mb-2" />
          <Input type="file" onChange={(e) => handleUpload(e, 'video')} accept="video/*" className="mb-2" />
          <Button onClick={handleSave}>Save</Button>
        </div>
      )}
    </div>
  );
};

export default SecretMenu;