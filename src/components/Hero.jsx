"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const headingLines = ["Premium", "forex signals."];

  // Container animation (staggered reveal)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.08 * i },
    }),
  };

  // Word animation (fade + slight blur removal)
  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Button + Subtitle animation (fade + slight slide up)
  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      // Added horizontal padding for mobile to prevent text from touching screen edges
      className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 sm:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Reserved space for [James Riston] to prevent layout shift */}
      <motion.div
        className="mb-6 mt-20 min-h-[2.5rem]"
        variants={buttonVariants}
      >
        <p className="text-gray-400 text-opacity-80 text-xl sm:text-2xl font-medium tracking-wide mt-10 md:mt-0">
          [James Riston]
        </p>
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        className="text-white font-bold text-4xl md:text-7xl lg:text-8xl leading-tight max-w-7xl mt-5 md:mt-0"
        variants={containerVariants}
      >
        {headingLines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordVariants}
                // Reduced margin between words for better mobile layout
                style={{ display: "inline-block", marginRight: "0.5rem" }}
              >
                {word}
              </motion.span>
            ))}
            {lineIndex < headingLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-8 text-md md:text-lg text-gray-400 font-medium text-opacity-80"
        variants={buttonVariants}
      >
        No cost. Real Traders. Verified results.
      </motion.p>

      {/* Button Container - Now always a row, with adjusted gap for mobile */}
      <motion.div
        className="mt-20 md:mt-6 w-full flex flex-row items-center justify-center gap-7 sm:gap-4 px-5 sm:px-9 md:px-2"
        variants={buttonVariants}
      >
        {/* Button 1 (Primary) */}
        <a
          href="#"
          className="relative flex-1 sm:flex-initial sm:w-auto backdrop-blur-md text-white font-semibold 
               px-3 sm:px-6 py-3 sm:py-3 rounded-lg sm:rounded-[12px] text-xs sm:text-base 
               transition-all duration-300 overflow-hidden text-center 
               border border-white/30 bg-gradient-to-br from-white/20 to-white/5 hover:border-white/30 active:scale-95"
        >
          <span className="relative z-10">Get FREE Access</span>
        </a>

        {/* Button 2 (Secondary) */}
        <a
          href="#"
          className="relative flex-1 sm:flex-initial sm:w-auto backdrop-blur-md text-white font-semibold 
               px-3 sm:px-6 py-3 sm:py-3 rounded-lg sm:rounded-[12px] text-xs sm:text-base 
               transition-all duration-300 overflow-hidden text-center
               border border-white/20 bg-gradient-to-bl from-white/20 to-white/5 hover:border-white/30 active:scale-95"
        >
          <span className="relative z-10">Watch How It Works</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
