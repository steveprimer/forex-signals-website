"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLightbox from "@/components/ImageLightbox";
import InfiniteLogoScroller from "@/components/InfiniteLogoScroller";

// --- Reusable Testimonial Card Component (for Client Results) ---
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
    <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 text-left flex flex-col gap-4 shadow-soft-glow">
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
        <div className="backdrop-blur-md bg-black/50 border border-white/30 rounded-full py-2 text-center text-white">
          Before: <span className="font-semibold">£{before}</span>
        </div>
        <div className="backdrop-blur-md bg-white border border-white/20 rounded-full py-2 text-center text-black">
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

// --- Reusable Review Card Component (for Trustpilot Reviews) ---
const ReviewCard = ({ avatar, name, stars, reviewText }) => {
  return (
    <div className="p-4 rounded-xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-xs text-gray-400">Verified customer</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < stars ? "text-green-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.817-2.042a1 1 0 00-1.176 0l-2.817 2.042c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-300">{reviewText}</p>
    </div>
  );
};

// --- Component to manage the shared background element ---
const ClientResultsGrid = ({ testimonials }) => {
  return (
    <div className="relative h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll overflow-x-hidden p-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      {/* The static glow effect now lives here */}
      <div className="bottom-glow-effect" />

      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} {...testimonial} />
      ))}
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

const reviewsData = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder image
    name: "Arman L.",
    stars: 5,
    reviewText:
      "Clear entries and fast updates. Up 9.2% this month risking 0.5–1%. Support team is on point.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder image
    name: "Sofia R.",
    stars: 4,
    reviewText:
      "Great risk focus. Even on red days, drawdown is controlled. Exactly what I needed.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/29.jpg", // Placeholder image
    name: "Mark T.",
    stars: 5,
    reviewText:
      "Consistent gains and easy to follow. Highly recommend for anyone serious about trading.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/12.jpg", // Placeholder image
    name: "Jessica P.",
    stars: 5,
    reviewText:
      "The community is fantastic, and the signals are top-notch. Transformed my trading.",
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
      <div className="h-full overflow-y-scroll rounded-xl p-1 pr-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewsData.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    ),
    lightboxImage: null,
  },
  clientResults: {
    title: "Clients Results",
    content: <ClientResultsGrid testimonials={testimonials} />,
    lightboxImage: null,
  },
};

// --- Main WhyChooseUs component ---
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

        <InfiniteLogoScroller />

        {/* --- Single Glassmorphic Container --- */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-6 rounded-2xl backdrop-blur-md border border-white/30 bg-gradient-to-bl from-white/20 to-white/5">
          {/* Left Column (now col-span-2) */}
          <div className="flex flex-col gap-4 lg:sticky top-24 lg:col-span-2">
            {/* Title and Description */}
            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-300">DUMMY TEXT</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                lorem ipsum dolor sit amet, consectetur.
              </h3>
            </div>

            {/* Button Row */}
            <div className="flex items-center gap-3 w-full">
              <motion.button className="w-full p-3 text-sm font-semibold text-center text-white rounded-lg border transition-all duration-200 backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/30 shadow-md">
                Get Free Trial
              </motion.button>
              <motion.button className="w-full p-3 text-sm text-center text-white rounded-lg border border-transparent hover:border-white/30 hover:bg-white/5 transition-all duration-200">
                Learn More
              </motion.button>
            </div>

            {/* Separator */}
            <div className="border-b border-white/10 my-2"></div>

            {/* Feature Selection Buttons */}
            {Object.keys(features).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`w-full p-3 text-center rounded-lg border transition-all duration-200 
                  ${
                    activeFeature === key
                      ? "backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/30 shadow-md"
                      : "border-transparent hover:border-white/30 hover:bg-white/5"
                  }`}
                layout
                transition={{ layout: { duration: 0.15, ease: "easeOut" } }}
              >
                <span className="relative z-10 text-base font-bold text-white">
                  {features[key].title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Column (now col-span-3) */}
          <div className="relative h-[350px] lg:h-[420px] lg:col-span-3">
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
