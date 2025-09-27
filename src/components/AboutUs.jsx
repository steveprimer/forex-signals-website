"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// A small reusable stat card component for the "About Us" section
const StatCard = ({ to, prefix = "", suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(
            value
          ).toLocaleString()}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, prefix, suffix]);

  return (
    <div className="p-4 rounded-xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-white/10 to-white/5">
      <p ref={ref} className="text-2xl sm:text-3xl font-bold text-white">
        {prefix}0{suffix}
      </p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
};

// Animation variants for the paragraph
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 * i },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const AnimatedParagraph = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.p
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-4 text-gray-300 max-w-xl"
    >
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordVariants}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};

const AboutUs = () => {
  const aboutUsText =
    "We're a team of analysts and traders focused on clarity and risk. Our methodology blends market structure with liquidity and session timing, producing high-quality setups with defined invalidation.";

  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="text-center">
        <p className="inline-block rounded-full px-4 py-1.5 mb-12 text-sm font-bold text-green-500">
          [About Us]
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Main Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
              About us
            </h2>
            <AnimatedParagraph text={aboutUsText} />
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm text-gray-400">Founded</p>
              <p className="text-2xl font-bold text-white">2020</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard to={8200} suffix="+" label="Members" />
            <StatCard to={45000} suffix="+" label="Signals sent" />
          </div>
        </div>

        {/* Right Column: Founder Card */}
        <div className="p-6 rounded-2xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              // Placeholder for founder's image
              src="/pfp.png"
              alt="A. Mateo, Founder"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <p className="text-sm font-semibold text-gray-300">
                Founder & Lead Analyst
              </p>
              <h4 className="text-xl font-bold text-white">A. Mateo</h4>
              <p className="text-xs text-gray-400">10+ years in FX • Ex-prop</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            We prioritize repeatability over hype. Expect fewer, higher-quality
            trades with robust management.
          </p>
          <button className="w-full mt-2 p-4 flex items-center justify-between text-white font-semibold rounded-lg border transition-all duration-200 backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/30 shadow-md hover:brightness-125">
            <span>Connect with us</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
