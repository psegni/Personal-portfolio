import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Teachtrack",
      description:
        "An educational platform designed to streamline course management and student tracking for teachers and institutions.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for organizing tasks, setting deadlines, and tracking progress with a user-friendly interface.",
      technologies: ["Vue.js", "tailwind css", "node js", "mysql"],
    },
    {
      title: "JobPost Pro",
      description:
        "A professional job posting platform connecting employers with job seekers, featuring advanced search and filtering options.",
      technologies: ["laravel", "php", "mysql"],
    },
    {
      title: "Guzo Tour and Travel",
      description:
        "A travel booking website offering seamless tour packages, hotel reservations, and itinerary planning.",
      technologies: ["Angular", "Django", "MySQL", "Bootstrap"],
    },
    {
      title: "Hotel Management System",
      description:
        "A comprehensive system for managing hotel operations, including reservations, check-ins, and billing.",
      technologies: ["React", "tailwind css", "node js", "express js", "mysql"],
    },
    {
      title: "Two People Task Manager",
      description:
        "A collaborative task management app designed for couples or small teams to manage shared tasks efficiently.",
      technologies: ["Flutter", "Node.js", "Firebase"],
    },
    {
      title: "Gela Cosmetics Website",
      description:
        "An e-commerce platform for Gela Cosmetics, showcasing products, managing orders, and providing secure payments.",
      technologies: ["React", "Tailwind CSS", "Node js", "Express js", "MongoDB"],
    },
    {
      title: "Hirko General Trading P.L.C Website",
      description:
        "A corporate website for Hirko General Trading P.L.C, highlighting services, projects, and contact information.",
      technologies: ["React", "Tailwind CSS", "Node js", "mysql"], 
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects & Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore some of the projects I've worked on. From web applications to mobile apps, I've contributed to diverse solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
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
              <div className="relative h-48 bg-gradient-to-br from-teal-500 to-teal-700">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title}
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
