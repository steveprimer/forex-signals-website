"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// --- DATA (Unchanged) ---
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

// --- CARD COMPONENT ---
// --- CARD COMPONENT (WITH RESPONSIVE DESKTOP FIX) ---
const ServiceCard = ({ card }) => (
  // CHANGE 1: The aspect ratio is now responsive. Tall on mobile, wide on large screens.
  <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-gradient-to-br from-gray-950/10 to-white/5 backdrop-blur-lg overflow-hidden aspect-[9/14] lg:aspect-video">
    {/* CHANGE 2: The layout switches from a single column on mobile to a two-column grid on large screens. */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center h-full justify-center gap-10 relative px-6 pb-6 pt-10 sm:px-8 sm:pb-8 sm:pt-12 lg:px-12 lg:pb-12 lg:pt-16 z-10">
      <div className="w-full space-y-6 text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
          {card.titleLines[0]}
          <br />
          {card.titleLines[1]}
        </h3>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          {card.description}
        </p>
      </div>
      <div className="flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-md aspect-square bg-black rounded-2xl overflow-hidden">
          <video
            src={card.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
);

// --- ANIMATED PARAGRAPH ---
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
      className="text-base md:text-lg text-gray-400 mt-20 max-w-lg mx-auto px-4"
    >
      {lines.map((line, lineIndex) => (
        // BEST PRACTICE: Added key prop to Fragment
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

  // REFACTOR: Animation styles are now generated dynamically based on the number of cards.
  // This makes it easy to add or remove cards without breaking the animation.
  const cardStyles = serviceCards.map((_, index) => {
    if (index === 0) {
      return { y: "0%", zIndex: 10 };
    }
    const totalAnimatedCards = serviceCards.length - 1;
    const progressStep = 1 / totalAnimatedCards;

    const startRange = progressStep * (index - 1);
    const endRange = progressStep * index;

    const y = useTransform(
      scrollYProgress,
      [startRange, endRange],
      ["100%", "0%"]
    );

    return { y, zIndex: (index + 1) * 10 };
  });

  const paragraphLines = [
    "Copytrading is simple. Our team of 7 professional",
    "traders analyzes the market and makes the right",
    "decisions. He shares the exact moves and you copy",
    "his portfolio. Simple, no experience required.",
    "All that – for free.",
  ];

  return (
    <section className="relative bg-black text-white pt-40">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 pb-0">
        <div className="inline-block rounded-full px-4 py-1.5 mb-12 text-sm font-bold text-green-500">
          [ Our Services ]
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter max-w-2xl mx-auto">
          Clear Signals.
          <br className="md:hidden" /> For Every Trader.
          <br className="md:hidden" /> Without Any Cost.
        </h1>
        <AnimatedParagraph lines={paragraphLines} />
      </div>

      <div className="relative -mt-24">
        {/* READABILITY: Added a comment to explain this value controls scroll speed. */}
        {/* Increase this value (e.g., h-[200vh]) to make the scroll animation slower. */}
        <div ref={scrollContainerRef} className="relative h-[150vh]">
          <div className="sticky top-0 h-screen overflow-hidden">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute top-0 left-0 w-full h-full flex items-center md:items-end justify-center px-6 md:px-12 md:pb-16"
                style={cardStyles[index]}
              >
                <ServiceCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
