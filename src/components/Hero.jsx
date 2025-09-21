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
      transition: { staggerChildren: 0.07, delayChildren: 0.08 * i },
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
        <p className="text-gray-400 text-opacity-80 text-xl sm:text-2xl font-medium tracking-wide">
          [James Riston]
        </p>
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        className="text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-tight max-w-7xl"
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
        className="mt-10 w-full flex flex-row items-center justify-center gap-2 sm:gap-4"
        variants={buttonVariants}
      >
        {/* Glow Button 1 */}
        <a
          href="#"
          // Buttons now use flex-1 to expand equally on mobile and revert on larger screens
          className="relative flex-1 sm:flex-initial sm:w-auto backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold px-4 sm:px-8 py-3 rounded-[12px] hover:bg-white/20 transition-colors duration-300 overflow-hidden text-sm sm:text-base"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-cyan-400/20 rounded-full blur-2xl" />
          <div className="absolute top-1/V2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/20 rounded-full blur-2xl" />
          <span className="relative z-10">Get FREE Access</span>
        </a>

        {/* Glow Button 2 */}
        <a
          href="#"
          // Buttons now use flex-1 to expand equally on mobile and revert on larger screens
          className="relative flex-1 sm:flex-initial sm:w-auto backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold px-4 sm:px-8 py-3 rounded-[12px] hover:bg-white/20 transition-colors duration-300 overflow-hidden text-sm sm:text-base"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-cyan-400/20 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/20 rounded-full blur-2xl" />
          <span className="relative z-10">Watch How It Works</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
