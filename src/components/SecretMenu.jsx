import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SecretMenu = ({ onUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [buttonImage, setButtonImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

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
          case 'generated':
            setGeneratedImage(reader.result);
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpload({ backgroundImage, buttonImage, video, generatedImage });
    setIsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 m-4 z-50">
      <Button onClick={() => setIsOpen(!isOpen)}>Secret Menu</Button>
      {isOpen && (
        <div className="mt-4 p-4 bg-white bg-opacity-50 backdrop-blur-md rounded shadow-lg w-64">
          <Label htmlFor="background-upload" className="block mb-1">Background Image</Label>
          <Input id="background-upload" type="file" onChange={(e) => handleUpload(e, 'background')} accept="image/*" className="mb-2" />
          
          <Label htmlFor="button-upload" className="block mb-1">Button Image</Label>
          <Input id="button-upload" type="file" onChange={(e) => handleUpload(e, 'button')} accept="image/*" className="mb-2" />
          
          <Label htmlFor="video-upload" className="block mb-1">Video</Label>
          <Input id="video-upload" type="file" onChange={(e) => handleUpload(e, 'video')} accept="video/*" className="mb-2" />
          
          <Label htmlFor="generated-upload" className="block mb-1">Generated Image</Label>
          <Input id="generated-upload" type="file" onChange={(e) => handleUpload(e, 'generated')} accept="image/*" className="mb-2" />
          
          <Button onClick={handleSave} className="w-full">Save</Button>
        </div>
      )}
    </div>
  );
};

export default SecretMenu;
