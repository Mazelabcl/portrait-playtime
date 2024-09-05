import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mic, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const UI3 = ({ assets }) => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  let [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);

  const handleRecordClick = async () => {
    if (!navigator.mediaDevices) {
      alert("Your browser does not support audio recording.");
      return;
    }
    /*
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => audioChunks.current.push(e.data);
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      alert("An error occurred while accessing the microphone: " + error.message);
    }*/
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        audioChunks.current = [];
  
        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.current.push(event.data);
        });
  
        mediaRecorder.addEventListener("stop", handleStopClick);
  
        mediaRecorder.start();
      })
      .catch(console.error);
  };

  const handleStopClick = async () => {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(track => track.stop());
    const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
    const formData = new FormData();
    formData.append('file', audioBlob);

    // Enviar el audio al servidor
    const response = await fetch('http://50.17.88.250/api/upload-audio', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    if (response.ok) {
      console.log('Image URL:', data.image_url);
      navigate('/ui4', { state: { imageUrl: data.image_url } });
      // Procesa la URL de la imagen aquí, por ejemplo, mostrándola en la interfaz de usuario
    } else {
      alert("No se pudo generar la imagen, inténtelo mas tarde")
      console.error('Error processing audio:', data);
    }

    setIsRecording(false);
  };

  return (
    <div className="relative w-[1080px] h-[1920px]" style={{ backgroundImage: `url(${assets.backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center p-[60px] bg-black bg-opacity-50 rounded-lg max-w-[80%]"
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
