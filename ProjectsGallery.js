import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import guzo1 from "../guzo1.png";
import guzo2 from "../guzo2.png";
import guzo3 from "../guzo3.png";
import guzo4 from "../guzo4.png";
import dire1 from "../direbus1.png";
import dire2 from "../direbus2.png";
import dire3 from "../direbus3.png";
import gela1 from "../gela1.png";
import gela2 from "../gela2.png";
import gela3 from "../gela3.png";
import car1 from "../car1.png";
import car2 from "../car2.png";
import car3 from "../car3.png";
const ProjectsGallery = () => {
  const galleries = [
    {
      name: "Guzo Tour and Travel",
      images: [guzo1, guzo2, guzo3, guzo4],
    },
    {
      name: "Dire Bus - Online Ticket Booking System",
      images: [dire1,dire2,dire3],
    },
    {
      name: "Two Person Task Manager",
      images: [gela1, gela2, gela3],
    },
    {
      name: "Travel & Tour Website",
      images: [car1, car2, car3],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % galleries.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-12"
        >
          Projects Gallery
        </motion.h2>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-black/30 text-white px-3 py-2 rounded-full hover:bg-black/50"
          >
            ‹
          </button>

          {/* Main Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5 }}
              className="w-[70%] md:w-[55%] cursor-pointer"
              onClick={() => setExpanded(true)}
            >
              <img
                src={galleries[current].images[0]}
                alt="project preview"
                className="rounded-2xl shadow-xl h-[350px] w-full object-cover"
              />
              <p className="text-center text-lg mt-4 text-gray-900 dark:text-gray-200 font-semibold">
                {galleries[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-black/30 text-white px-3 py-2 rounded-full hover:bg-black/50"
          >
            ›
          </button>
        </div>

        {/* Thumbnails Under Main Image */}
        <div className="flex justify-center gap-4 mt-8">
          {galleries[current].images.map((img, idx) => (
            <motion.img
              key={idx}
              whileHover={{ scale: 1.1 }}
              onClick={() => setExpanded(true)}
              src={img}
              className="h-20 w-32 object-cover rounded-xl shadow cursor-pointer"
            />
          ))}
        </div>

        {/* Expanded Full Gallery View */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
              onClick={() => setExpanded(false)}
            >
              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
              >
                {galleries[current].images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-xl shadow-xl h-[260px] object-cover"
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGallery;
