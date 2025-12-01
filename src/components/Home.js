import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from '../studio_7.JPG'; 
import image2 from '../studio_7.JPG'; 

const Home = () => {
  const roles = [
    "Software Engineer",
    "Website Developer",
    "UI/UX Designer",
    "Graphics Designer",
    "Frontend Expert"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentImage, setCurrentImage] = useState(image1); 

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting && currentText === currentRole) {
  
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setCurrentText(currentRole.substring(0, currentText.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleDrag = () => {

    setCurrentImage(currentImage === image1 ? image2 : image1);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full h-screen px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
    
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 opacity-50"></div>
        
  
        <div className="relative p-8 border-4 border-transparent bg-transparent rounded-lg overflow-hidden" style={{
          borderImage: 'linear-gradient(270deg,rgb(209, 209, 209),rgb(218, 218, 218),rgb(157, 157, 157),rgb(255, 255, 255),rgb(236, 236, 236),rgb(255, 255, 255)) 1',
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">Segni Bultossa</span>
              </h1>
              <div className="h-12 mb-8">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  A passionate{' '}
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300"
              >
                Get in Touch
              </motion.a>
              <div className="flex justify-center md:justify-start gap-6 mt-6">
                {/* Social Media Icons */}
                <a href="https://instagram.com/segni_97" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="28" height="28" fill="currentColor" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://linkedin.com/in/segnibultossa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="28" height="28" fill="currentColor" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a href="https://github.com/psegni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="28" height="28" fill="currentColor" className="text-gray-600 dark:text-gray-300 hover:text-black transition" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://www.upwork.com/freelancers/~011d96d8c91106adcb" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                  <svg width="28" height="28" fill="currentColor" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition" viewBox="0 0 24 24"><path d="M21.431 13.238c-1.021 0-1.857.83-1.857 1.852 0 1.021.836 1.852 1.857 1.852 1.021 0 1.857-.831 1.857-1.852 0-1.022-.836-1.852-1.857-1.852zm-7.431-1.238c-1.104 0-2 .896-2 2v2.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2.5c0-1.104-.896-2-2-2s-2 .896-2 2v2.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5c.591-.348 1.27-.5 2-.5 1.104 0 2 .896 2 2v2.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.5c0-1.104.896-2 2-2s2 .896 2 2v2.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.5c0-1.104-.896-2-2-2z"/></svg>
                </a>
              </div>

          
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+25189677723" 
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 text-sm font-medium"
                  >
                    +251 989677723
                  </a>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:segnibultossa97@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                  >
                    segnibultossa97@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

          <motion.div
  className="relative perspective cursor-pointer group w-64 h-64 md:w-80 md:h-80 mx-auto"
>

  <motion.div
    className="absolute inset-0 rounded-full shadow-xl overflow-hidden backface-hidden"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <img
      src={image1}
      alt="Profile Front"
      className="w-full h-full object-cover rounded-full"
    />
  </motion.div>


  <motion.div
    className="absolute inset-0 rounded-full shadow-xl overflow-hidden backface-hidden"
    style={{ transform: "rotateY(180deg)" }}
    whileHover={{ rotateY: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <img
      src={image2}
      alt="Profile Back"
      className="w-full h-full object-cover rounded-full"
    />
  </motion.div>

 
  <motion.div
    className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-2xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
