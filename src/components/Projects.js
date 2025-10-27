import React from 'react';
import { motion } from 'framer-motion';
import image from '../project-1.png'; 
import taskmanagementapp from '../taskmanagementapp.png';
import weatherapp from '../weatherapp.png';
import furnitureapp from '../furniture.png';
import jobportal from '../jobportal.png';
import apartment from '../apartment.png';
const Projects = () => {
  const projects = [
    {
      title: 'TeachTrack ',
      description: 'A Teachers Management, recruitment and circulation built with React, Node.js, and Express js.',
      image: image,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://public.teachtrack.birukmaedot.com/',
      githubLink: 'https://github.com/Biruk-ak/teachtrack',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: taskmanagementapp,
      technologies: ['React', 'Figma', 'Tailwind CSS', 'mysql'],
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data.',
      image: weatherapp,
      technologies: ['Vuejs', 'OpenWeather API', 'Chart.js', 'mysql'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: furnitureapp,
      technologies: ['React', 'Node.js', 'MongoDB', 'tailwind CSS'],
   
    },
    {
      title: 'Real Estate Listing App',
      description: 'A Vue.js application for browsing and managing real estate listings with advanced filtering and search capabilities.',
      image: apartment,
      technologies: ['Vue.js', 'Vuex', 'Vue Router', 'Axios'],
  
    },
    {
      title: 'JobPost Pro',
      description: 'A comprehensive job posting and recruitment platform built with Laravel, featuring job listings, applications, and employer dashboard.',
      image: jobportal,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project is a unique challenge that helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 