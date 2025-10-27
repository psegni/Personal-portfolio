import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter, Globe } from "lucide-react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: null, error: data.error || "Failed to send message" });
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setStatus({ loading: false, success: null, error: "Could not connect to the server." });
    }
  };

  const socialLinks = [
    { url: "https://github.com/psegni", icon: <Github className="w-5 h-5" /> },
    { url: "https://linkedin.com/in/segni-bultossa", icon: <Linkedin className="w-5 h-5" /> },
    { url: "https://instagram.com/segni_97", icon: <Instagram className="w-5 h-5" /> },
  ];

  const contactInfo = [
    { label: "Email", value: "segnibultossa97@gmail.com", icon: <Mail className="w-5 h-5 text-teal-500" /> },
    { label: "Phone", value: "+251 989677723", icon: <Phone className="w-5 h-5 text-teal-500" /> },
    { label: "Location", value: "Addis Ababa, Ethiopia", icon: <MapPin className="w-5 h-5 text-teal-500" /> },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let’s collaborate on something amazing. You can reach out via the form or directly through my social links.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {status.success && (
              <p className="text-green-600 bg-green-100 p-2 rounded-md text-center">
                ✅ {status.success}
              </p>
            )}
            {status.error && (
              <p className="text-red-600 bg-red-100 p-2 rounded-md text-center">
                ❌ {status.error}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status.loading}
              className={`w-full bg-teal-600 text-white py-3 rounded-md font-semibold ${
                status.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-700"
              }`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

   
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className="mr-4">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
              >
                <span className="text-2xl">📧</span>
                <span>segnibultossa97@gmail.com</span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
              >
                <span className="text-2xl">📱</span>
                <span>+251 989677723</span>
              </motion.div>
            </div>

      
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition-all duration-300"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Contact; 
=======
export default Contact;
>>>>>>> 3552ac9 (Added backend and vercel configuration)
