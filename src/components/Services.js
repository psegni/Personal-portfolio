import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and modern websites using the latest technologies.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications using React Native.',
      icon: '📱',
    },
    {
      title: 'Backend Development',
      description: 'Developing robust and scalable backend solutions using Node.js.',
      icon: '⚙️',
    },
    {
      title: 'Graphics Design',
      description: 'Crafting stunning graphics, logos, posters, and book covers using industry-standard tools like Photoshop, Illustrator, and Canva.',
      icon: '🖌️',
    },
    {
      title: 'Video Editing',
      description: 'Editing and producing professional videos, thumbnails, and reels using tools like CapCut and DaVinci Resolve.',
      icon: '🎬',
    },
    {
      title: 'Printing Services',
      description: 'High-quality printing services for business cards, flyers, banners, posters, and other promotional materials with professional finishing.',
      icon: '🖨️',
    },
    {
      title: 'Advertising',
      description: 'Strategic advertising campaigns across digital and traditional media platforms to boost brand visibility and drive customer engagement.',
      icon: '📢',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a wide range of services to help bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
