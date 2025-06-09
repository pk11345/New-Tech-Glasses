import React from "react";
import { motion } from "framer-motion";
import { FaCut, FaTable, FaLightbulb, FaRegGem } from "react-icons/fa";

const services = [
  {
    icon: <FaCut className="text-yellow-300 text-5xl mb-4" />,
    title: "Glass Cutting",
    desc: "Precision glass cutting for custom designs and sizes.",
  },
  {
    icon: <FaRegGem className="text-yellow-300 text-5xl mb-4" />,
    title: "Fancy Mirrors",
    desc: "Elegant mirrors for homes, offices, and designer spaces.",
  },
  {
    icon: <FaTable className="text-yellow-300 text-5xl mb-4" />,
    title: "Glass Tables",
    desc: "Modern and sturdy glass tables to enhance any interior.",
  },
  {
    icon: <FaLightbulb className="text-yellow-300 text-5xl mb-4" />,
    title: "Mirrors with Lights",
    desc: "Backlit mirrors with integrated LED lighting.",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center
     bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white"
       id="services">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-40 rounded-xl p-8 shadow-lg hover:scale-105 hover:bg-opacity-60 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {service.icon}
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-lg text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
