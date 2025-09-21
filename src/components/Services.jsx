"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Data for the service cards. Order dictates stacking (bottom to top).
const serviceCards = [
  {
    titleLines: ["No payment. No obligation.", "Absolutely free."],
    description:
      "You can quit whenever you want, without any cost, contracts or head ache.",
    visualText: "Free Service Visual",
    id: "no-payment",
  },
  {
    titleLines: ["What A Signal", "Looks Like"],
    description:
      "We simply tell you what to do. Clear timings when to enter, secure profit and manage risk – all handled by our team.",
    visualText: "Picture/video placeholder",
    id: "signal-preview",
  },
  {
    titleLines: ["Personal Mentor", "Support"],
    description:
      "Available 24/7 your personal mentor will teach you how to read signals, how to place them and answer all your questions.",
    visualText: "Mentor Support Visual",
    id: "mentor-support",
  },
  {
    titleLines: ["Education", "Included"],
    description:
      "You will get access to video courses and ebooks inside our trading community.",
    visualText: "Education Visual",
    id: "education",
  },
];

// Reusable Card Component
const ServiceCard = ({ card, style }) => (
  <motion.div
    style={style}
    className="absolute inset-0 flex items-center justify-center p-6"
  >
    <div className="w-full max-w-4xl">
      <div className="backdrop-blur-lg bg-[#1C1C1C]/60 border border-white/10 rounded-3xl aspect-[4/3] md:aspect-video">
        {/* CHANGE 3: Increased padding for more internal space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full p-12 relative">
          <div className="space-y-4 text-center lg:text-left">
            {/* CHANGE 2: Made the heading text significantly larger and bolder */}
            <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              {card.titleLines[0]}
              <br />
              {card.titleLines[1]}
            </h3>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
              {card.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* CHANGE 1: Made the visual placeholder a large square */}
            <div className="w-full max-w-sm aspect-square bg-gray-800/50 rounded-2xl border border-white/10 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">
                {card.visualText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Animation for the Header Text
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);

  // Card Animations
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0.05, 0.2], [1.05, 1]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [1.05, 1]);

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [1.05, 1]);

  const opacity4 = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [1.05, 1]);

  const cardStyles = [
    { opacity: opacity1, scale: scale1, zIndex: 10 },
    { opacity: opacity2, y: y2, scale: scale2, zIndex: 20 },
    { opacity: opacity3, y: y3, scale: scale3, zIndex: 30 },
    { opacity: opacity4, y: y4, scale: scale4, zIndex: 40 },
  ];

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-[500vh] text-white antialiased"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header Text */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-50"
        >
          <div className="inline-block rounded-full px-4 py-1.5 mb-8 text-sm font-bold text-green-500">
            [ Our Services ]
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
            Clear Signals. For every trader. Without Any Cost.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
            Copytrading is simple, our team of 7 professional traders analyzes
            the market and make the right decisions. He shares the exact moves
            and your copy his portfolio. Simple, no previous experience
            required. All that – for free.
          </p>
        </motion.div>

        {/* Animated Cards */}
        {serviceCards.map((card, index) => (
          <ServiceCard key={card.id} card={card} style={cardStyles[index]} />
        ))}
      </div>
    </div>
  );
};

export default Services;
