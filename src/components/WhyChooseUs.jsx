"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLightbox from "@/components/ImageLightbox";

// --- Reusable Testimonial Card Component ---
const TestimonialCard = ({
  name,
  age,
  location,
  avatar,
  before,
  now,
  memberFor,
  dailyEffort,
}) => {
  return (
    <div className="bg-card-bg/5 border border-white/10 rounded-2xl p-5 text-left flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
        />
        <div>
          <h4 className="font-bold text-lg text-white">
            {name}, {age}
          </h4>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white/10 rounded-full py-2 text-center text-white">
          Before: <span className="font-semibold">£{before}</span>
        </div>
        <div className="bg-white/10 rounded-full py-2 text-center text-white">
          Now: <span className="font-semibold">£{now}</span>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-400 pt-2">
        <span>Member for: {memberFor}</span>
        <span>Daily effort: {dailyEffort}</span>
      </div>
    </div>
  );
};

// --- Data for all features ---

const testimonials = [
  {
    name: "Jameson",
    age: 27,
    location: "United Kingdom",
    avatar: "/image.png",
    before: 500,
    now: 1400,
    memberFor: "1.5 months",
    dailyEffort: "45 minutes",
  },
  {
    name: "Sofia",
    age: 31,
    location: "Canada",
    avatar: "/image.png",
    before: 1200,
    now: 3100,
    memberFor: "3 months",
    dailyEffort: "30 minutes",
  },
  {
    name: "Liam",
    age: 24,
    location: "Australia",
    avatar: "/image.png",
    before: 800,
    now: 2200,
    memberFor: "2 months",
    dailyEffort: "1 hour",
  },
  {
    name: "Chloe",
    age: 29,
    location: "United States",
    avatar: "/image.png",
    before: 2000,
    now: 5500,
    memberFor: "4.5 months",
    dailyEffort: "40 minutes",
  },
  {
    name: "Ava",
    age: 33,
    location: "New Zealand",
    avatar: "/image.png",
    before: 1500,
    now: 3800,
    memberFor: "4 months",
    dailyEffort: "25 minutes",
  },
  {
    name: "Noah",
    age: 26,
    location: "Ireland",
    avatar: "/image.png",
    before: 950,
    now: 2500,
    memberFor: "2.5 months",
    dailyEffort: "50 minutes",
  },
];

const features = {
  liveAccounts: {
    title: "Live Accounts, No Demos",
    content: (
      <img
        src="/result-img1.png"
        alt="Live account proof"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    lightboxImage: "/result-img1.png",
  },
  myfxbook: {
    title: "Verified Myfxbook",
    content: (
      <img
        src="/result-img2.png"
        alt="Myfxbook verification"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    lightboxImage: "/result-img2.png",
  },
  reviews: {
    title: "5 Star Trustpilot Reviews",
    content: (
      <div className="h-full overflow-y-scroll rounded-xl p-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <img
          src="/result-img3.png"
          alt="Trustpilot reviews"
          className="w-full"
        />
      </div>
    ),
    lightboxImage: null,
  },
  clientResults: {
    title: "Clients Results",
    content: (
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll p-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    ),
    lightboxImage: null,
  },
};

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState("liveAccounts");
  const [lightboxImage, setLightboxImage] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="py-20 sm:py-24 px-4">
        <div className="text-center">
          <p className="text-lg text-green-400 mb-4">[Why Choose Us]</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
            Results & Performance.
          </h2>
        </div>
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Made sticky only on large screens */}
          <div className="flex flex-col gap-4 lg:sticky top-24 lg:col-span-1">
            {Object.keys(features).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`relative w-full p-4 text-left rounded-xl transition-colors duration-300 overflow-hidden ${
                  activeFeature === key
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-transparent hover:bg-white/10"
                }`}
                layout
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/70 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
                               {" "}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/70 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
                <span className="relative z-10 text-base font-bold text-white">
                  {features[key].title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Column: Adjusted height for mobile */}
          <div className="relative h-[500px] lg:h-[650px] bg-black/20 rounded-2xl p-4 border border-white/10 overflow-hidden lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full"
              >
                <div
                  onClick={() =>
                    features[activeFeature].lightboxImage &&
                    setLightboxImage(features[activeFeature].lightboxImage)
                  }
                  className={
                    features[activeFeature].lightboxImage
                      ? "cursor-pointer w-full h-full"
                      : "w-full h-full"
                  }
                >
                  {features[activeFeature].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <ImageLightbox
        src={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default WhyChooseUs;
