import React , { useEffect } from 'react';
import loadingVideo from '../shaintro.mp4'; 


const Loading = () => {
  useEffect(() => {
    const videoElement = document.getElementById('loadingVideo');
  }, []);

  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        id="loadingVideo"
        src={loadingVideo}
        autoPlay
        loop={false} 
        muted
        className="h-2/4 w-2/4 object-cover" 
        style={{ position: 'relative' }} 
      />
    </div>
  );
};

export default Loading; 
