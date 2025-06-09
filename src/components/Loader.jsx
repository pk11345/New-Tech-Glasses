// Loader.jsx
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-tr from-purple-900 via-indigo-900 to-black flex items-center justify-center z-[1000]">
      <motion.div
        className="w-24 h-24 rounded-full border-8 border-transparent border-t-yellow-300 border-b-pink-500 shadow-[0_0_20px_rgba(252,211,77,0.7)]"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <motion.p
        className="absolute bottom-20 text-yellow-300 font-bold text-xl tracking-widest select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        Loading New Tech Glasses...
      </motion.p>
    </div>
  );
};

export default Loader;
