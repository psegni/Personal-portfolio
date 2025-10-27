import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [previewCert, setPreviewCert] = useState(null);

  const tabs = [
    { id: "education", label: "Education", icon: "🎓" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "certificates", label: "Certificates", icon: "📜" },
  ];

  const certificates = [
    {
      title: "Fundamental Of Programming",
      org: "udacity ",
      img: "https://www.udacity.com/certificate/e/9c06f234-07d8-11f0-b20b-ebc3c9db59eb",
    },
    {
      title: "Front-End Developer Certification",
      org: "FreeCodeCamp",
      img: "https://i.imgur.com/bK0dBhE.png",
    },
    {
      title: "Cybersecurity Fundamentals",
      org: "IBM SkillsBuild",
      img: "https://i.imgur.com/ZXGHJ5A.png",
    },
  ];

  const tabVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
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
          I’m a creative web developer and graphic designer passionate about
          building digital experiences that balance functionality with elegant
          design. I thrive on turning ideas into meaningful interfaces.
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


      <div className="max-w-5xl mx-auto px-6">
        <AnimatePresence mode="wait">
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adam Science and Technology University
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Graduated with strong skills in software development, algorithms,
                and full-stack web technologies.
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
              className="space-y-6"
            >
              {[
                {
                  title: "Website Development",
                  desc: "Built and deployed full-stack web applications using React, Node.js, and modern frameworks.",
                },
                {
                  title: "Graphics Design",
                  desc: "Created visually appealing assets and brand identities using Photoshop, Illustrator, and Canva.",
                },
                {
                  title: "Cybersecurity Club Member (CSEC-ASTU)",
                  desc: "Developed awareness programs and training campaigns for cyber hygiene and threat prevention.",
                },
                {
                  title: "Advertising & Printing Service (Co-founder & CEO)",
                  desc: "Managed end-to-end creative projects ensuring impactful campaigns and precise color production.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.desc}</p>
                </motion.div>
              ))}
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
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPreviewCert(cert.img)}
                  className="cursor-pointer bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.org}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     
      <AnimatePresence>
        {previewCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg max-w-3xl w-full"
            >
              <button
                onClick={() => setPreviewCert(null)}
                className="absolute top-2 right-3 text-gray-700 dark:text-gray-300 text-2xl hover:text-red-500"
              >
                ✕
              </button>
              <img
                src={previewCert}
                alt="Certificate"
                className="rounded-lg w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
