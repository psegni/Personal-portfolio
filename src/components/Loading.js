import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import spookyImage from '../sha1.png';
import loadingVideo from '../shaintro.mp4';

const Loading = () => {
  useEffect(() => {
    const videoElement = document.getElementById('loadingVideo');
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        id="loadingVideo"
        src={loadingVideo}
        autoPlay
        loop={false}
        muted
        className="h-2/4 w-2/4 object-cover absolute inset-0"
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="relative z-10 flex flex-col items-center"
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
            repeatType: 'reverse',
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-blue-400 text-lg font-semibold mt-4"
        >
          Loading...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
