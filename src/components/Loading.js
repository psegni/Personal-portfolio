<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import spookyImage from '../sha1.png';
=======
import React , { useEffect } from 'react';
import loadingVideo from '../shaintro.mp4'; 

>>>>>>> 3552ac9 (Added backend and vercel configuration)

const Loading = () => {
  useEffect(() => {
    const videoElement = document.getElementById('loadingVideo');
  }, []);

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative"
      >
        <motion.img
          src={spookyImage}
          alt="Loading..."
          className="w-32 h-32 md:w-40 md:h-40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 text-lg font-semibold"
        >
          Loading...
        </motion.div>
      </motion.div>
=======
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
>>>>>>> 3552ac9 (Added backend and vercel configuration)
    </div>
  );
};

export default Loading; 
