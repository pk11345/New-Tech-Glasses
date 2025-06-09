import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className=" flex flex-col items-center justify-center px-6 py-20 text-center 
    bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white"
      id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-xl w-full space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-black bg-opacity-40 text-white focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-black bg-opacity-40 text-white focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 rounded-lg bg-black bg-opacity-40 text-white focus:ring-2 focus:ring-yellow-300 outline-none"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full py-4 bg-yellow-300 text-black font-bold rounded-lg shadow-lg"
        >
          Send Message
        </motion.button>
      </div>
    </section>
  );
};

export default Contact;
