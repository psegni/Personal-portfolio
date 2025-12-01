import React from "react";
import { motion } from "framer-motion";

// Import images (replace with relevant images for each service)
import webDevImg from "../webdevelopment.jpg";
import uiUxImg from "../ui.jpg";
import mobileAppImg from "../mobileappdev.jpg";
import backendImg from "../backend.jpg";
import graphicsImg from "../graphics.jpg";
import printingImg from "../printing.jpg";
import advertisingImg from "../advertising.jpg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Crafting responsive, scalable, and user-friendly websites tailored to your needs.",
      image: webDevImg,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces for seamless user experiences.",
      image: uiUxImg,
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications for iOS and Android with modern frameworks.",
      image: mobileAppImg,
    },
    {
      title: "Backend Development",
      description:
        "Developing robust and secure backend systems to power your applications.",
      image: backendImg,
    },
    {
      title: "Graphics Design",
      description:
        "Creating stunning visuals, logos, and branding materials that make your brand stand out.",
      image: graphicsImg,
    },
    {
      title: "Printing Services",
      description:
        "High-quality printing solutions for business cards, brochures, banners, and more.",
      image: printingImg,
    },
    {
      title: "Advertising",
      description:
        "Designing and executing effective advertising campaigns to boost your brand's visibility.",
      image: advertisingImg,
    },
  ];

  return (
    <section
      id="services"
      className="font-sans py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Offering a wide range of professional services to bring your ideas to life.
          </p>
        </motion.div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text on Image */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
