"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Data for the service cards.
// --- CHANGE: The order of card data has been reversed. ---
const serviceCards = [
  {
    titleLines: ["Education", "Included"],
    description:
      "You will get access to video courses and ebooks inside our trading community.",
    id: "education",
    videoSrc: "/video4.mp4",
  },
  {
    titleLines: ["Personal Mentor", "Support"],
    description:
      "Available 24/7 your personal mentor will teach you how to read signals, how to place them and answer all your questions.",
    id: "mentor-support",
    videoSrc: "/video3.mp4",
  },
  {
    titleLines: ["What A Signal", "Looks Like"],
    description:
      "We simply tell you what to do. Clear timings when to enter, secure profit and manage risk – all handled by our team.",
    id: "signal-preview",
    videoSrc: "/video2.mp4",
  },
  {
    titleLines: ["No payment. No obligation.", "Absolutely free."],
    description:
      "You can quit whenever you want, without any cost, contracts or head ache.",
    id: "no-payment",
    videoSrc: "/video1.mp4",
  },
];

// Reusable Card Component
const ServiceCard = ({ card, style }) => (
  <motion.div
    style={style}
    className="absolute inset-0 flex items-center justify-center p-6 pt-6"
  >
    <div className="w-full max-w-4xl">
      <div className="relative backdrop-blur-lg bg-[#0A0A0A]/40 border border-white/5 rounded-3xl aspect-[4/3] md:aspect-video overflow-hidden">
        {/* Glassmorphism Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2 w-[450px] h-[450px] bg-cyan-400/50 animate-[pulse_4s_ease-in-out_infinite] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/50 animate-[pulse_4s_ease-in-out_infinite] rounded-full blur-3xl pointer-events-none"></div>

        {/* --- CHANGE: Improved internal padding and vertical alignment. --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full relative p-12 items-center">
          {/* Column 1: Text */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              {card.titleLines[0]}
              <br />
              {card.titleLines[1]}
            </h3>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-4">
              {card.description}
            </p>
          </div>
          {/* Column 2: Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-square bg-black rounded-2xl overflow-hidden">
              <video
                src={card.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- ANIMATION COMPONENT AND VARIANTS ---

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

const AnimatedParagraph = ({ lines }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.p
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-lg md:text-xl text-gray-400 mt-12 max-w-3xl mx-auto"
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordVariants}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </motion.p>
  );
};

// --- MAIN SERVICES COMPONENT ---

const Services = () => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Card Animations
  const scale1 = useTransform(scrollYProgress, [0.05, 0.2], [1.05, 1]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [1.05, 1]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [1.05, 1]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [1.05, 1]);

  const cardStyles = [
    { scale: scale1, zIndex: 10 },
    { y: y2, scale: scale2, zIndex: 20 },
    { y: y3, scale: scale3, zIndex: 30 },
    { y: y4, scale: scale4, zIndex: 40 },
  ];

  // Text for the animated paragraph
  const paragraphLines = [
    "Copytrading is simple, our team of 7 professional traders analyzes the market and",
    "makes the right decisions. He shares the exact moves and you copy his",
    "portfolio. Simple, no previous experience required.",
    "All that – for free.",
  ];

  return (
    <div className="bg-black text-white antialiased">
      {/* SECTION 1: Standard Header Content */}
      <div className="pt-12 py-0 px-6 flex flex-col items-center text-center">
        <div className="inline-block rounded-full px-4 py-1.5 mb-8 text-sm font-bold text-green-500">
          [ Our Services ]
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
          Clear Signals. For every trader. Without Any Cost.
        </h1>
        <AnimatedParagraph lines={paragraphLines} />
      </div>

      {/* SECTION 2: Sticky Animation Container */}
      <div ref={scrollContainerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Animated Cards are mapped here */}
          {serviceCards.map((card, index) => (
            <ServiceCard key={card.id} card={card} style={cardStyles[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
