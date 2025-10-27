import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const galleryWorks = [
  { src: process.env.PUBLIC_URL + '/bookcover2(mockup).png', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/bookcover3(mockup).png', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/freshLemon.png', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/Airforce 1 poster.png', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/nike red shoe poster.png', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/nike teal poster.png', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/puma futurez teal poster.png', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/coffeeposter.png', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/classiccoffeeposter.png', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/carsellposter.png', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/princelogo.png', category: 'logo design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design brooklyn.png', category: 'thumbnail design' },


];

const DesignGalleryPreview = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const carouselRef = useRef(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % galleryWorks.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? galleryWorks.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 relative">
 
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Some of My Designs
          </h2>
          <div className="w-16 h-1 bg-teal-600 mt-2"></div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-teal-100 hover:bg-teal-200 text-teal-800 flex items-center justify-center shadow transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 flex items-center justify-center shadow transition"
          >
            →
          </button>
        </div>
      </div>

    
      <div className="overflow-hidden relative">
        <motion.div
          ref={carouselRef}
          className="flex gap-8"
          animate={{ x: `-${index * 320}px` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {galleryWorks.concat(galleryWorks).map((work, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
              onClick={() => openModal(work.src)}
            >
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {work.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

 
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-lg"
              onClick={closeModal}
            >
              ✕
            </button>
            {modalImg && (
              <img
                src={modalImg}
                alt="Design Work"
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGalleryPreview;
