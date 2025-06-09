import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [1, 2, 3];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center
     pt-36 relative bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white
      overflow-hidden "   id="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-8"
      >
        Explore Our <span className="text-yellow-300">Glass Creations</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl mx-auto mb-16"
      >
        Glass Cutting • Fancy Mirrors • Glass Tables • Mirrors with Lights
      </motion.p>

      {/* Stacked Images */}
   <div className="relative flex justify-center items-center w-full max-w-4xl h-[320px] md:h-[450px] mx-auto group">
  {images.map((num, index) => {
    // Smaller translateX for mobile, bigger for md+
    const baseTransforms = [
      "rotate-[-10deg] translate-x-[-60px] md:translate-x-[-100px]",
      "rotate-[0deg] translate-x-[0px]",
      "rotate-[10deg] translate-x-[60px] md:translate-x-[100px]",
    ];

    const isHovered = hoveredIndex === index;
    const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

    return (
      <motion.img
        key={num}
        src={`/glass${num}.jpeg`}
        alt={`Glass ${num}`}
        className={`
          absolute rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md object-cover
          w-[150px] h-[210px] md:w-[300px] md:h-[400px]
          transition-all duration-500 ease-in-out cursor-pointer
          ${baseTransforms[index]}
          ${isHovered ? "z-50 scale-110 rotate-0 translate-x-0" : ""}
          ${!isHovered && !isOtherHovered ? "z-10" : ""}
          ${!isHovered && isOtherHovered ? "z-0 opacity-50 scale-95" : ""}
        `}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{ pointerEvents: "auto" }}
      />
    );
  })}
</div>


      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-12 px-8 py-3 bg-yellow-300 text-black font-semibold rounded-full shadow-lg"
      >
        Discover More
      </motion.button>
    </section>
  );
};

export default Hero;
