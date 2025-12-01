import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("Your Message is well sent thank you!");
      setStatus({ loading: false, success: "✅ Message sent successfully!", error: null });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        loading: false,
        success: null,
        error: "❌ Failed to send message. Please try again later.",
      });
    }
  };

  const socialLinks = [
    { url: "https://linkedin.com/in/segnibultossa", icon: <Linkedin className="w-5 h-5" /> },
    { url: "https://github.com/psegni", icon: <Github className="w-5 h-5" /> },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, inquiries, or just to say hello. 
            I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={form}
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
                name="from_name"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {status.success && <p className="text-green-600 bg-green-100 p-2 rounded-md text-center">{status.success}</p>}
            {status.error && <p className="text-red-600 bg-red-100 p-2 rounded-md text-center">{status.error}</p>}

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

          {/* Contact Info and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
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
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
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

export default Contact;

