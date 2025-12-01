import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: "👨‍💻" },
    { id: "experience", label: "Experience", icon: "📂" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "certificates", label: "Certificates", icon: "📜" },
  ];

  const tabVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="about"
      className="font-ubuntu py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          A passionate Fullstack Developer with expertise in web development, advertising, printing, and cybersecurity. 
          Dedicated to creating innovative solutions and delivering exceptional results.
        </motion.p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-12 relative flex-wrap">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-700"
            }`}
          >
            <motion.span
              animate={
                activeTab === tab.id
                  ? { rotate: [0, -10, 10, 0], scale: 1.2 }
                  : { scale: 1 }
              }
              transition={{ duration: 0.5 }}
            >
              {tab.icon}
            </motion.span>
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-5xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              variants={tabVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Who Am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a Fullstack Developer and a Software Engineering graduate from Adama Science and Technology University. 
                With a strong foundation in web development, I specialize in creating responsive, scalable, and user-friendly applications.
              </p>
              <p className="text-gray-6 00 dark:text-gray-300 mb-4">
                My journey in tech has led me to gain valuable experience in advertising, printing, and cybersecurity as a member of the CSEC Cyber Security Team. 
                I am passionate about leveraging technology to solve real-world problems and drive innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Whether it's building robust backend systems or designing intuitive frontend interfaces, I am committed to delivering high-quality solutions that exceed expectations.
              </p>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="experience"
              variants={tabVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a Fullstack Developer, I have worked in various roles, gaining diverse experience in web development, cybersecurity, and design. 
                My professional journey includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Fullstack Developer (Freelance)</strong>: Developed and deployed web applications for clients, ensuring scalability and responsiveness.
                </li>
                <li>
                  <strong>Qelem Meda Technologies (Internship)</strong>: Worked as a Fullstack Developer intern, contributing to backend and frontend development.
                </li>
                <li>
                  <strong>Graphics Design</strong>: Designed visual content and branding materials for businesses and personal projects.
                </li>
                <li>
                  <strong>ASTU CSEC Cybersecurity</strong>: Collaborated with the CSEC team to identify vulnerabilities and implement security measures.
                </li>
                <li>
                  <strong>Printing and Advertising</strong>: Managed printing services and advertising campaigns for clients, ensuring high-quality deliverables.
                </li>
              </ul>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              variants={tabVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I hold a Bachelor's degree in Software Engineering from Adama Science and Technology University. 
                My academic journey equipped me with a solid foundation in programming, algorithms, and software development principles.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                During my studies, I actively participated in cybersecurity competitions and hackathons, honing my skills in problem-solving and teamwork.
              </p>
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              variants={tabVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Fundamental Of Programming",
                  issuer: "Udacity",
                  date: "2024",
                  desc: "Certified in fundamental programming concepts and problem-solving.",
                },
                {
                  title: "Android Development",
                  issuer: "Udacity",
                  date: "2025",
                  desc: "Certified in building mobile applications using modern technologies like React Native and Kotlin.",
                },
                {
                  title: "Data Analysis Fundamentals",
                  issuer: "Udacity",
                  date: "2025",
                  desc: "Certified in solving complex algorithms and data structure problems using JavaScript.",
                },
              ].map((certificate, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-teal-500"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {certificate.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Issued by: {certificate.issuer} | Date: {certificate.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{certificate.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
