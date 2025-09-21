"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section className="py-0 sm:py-24 px-4 sm:px-8">
      {/* Added the explainer text here */}
      <p className="text-center text-lg text-gray-400 mb-12">
        [Not sure how it works? Watch the short explainer.]
      </p>

      <div ref={ref}>
        <motion.div
          className="relative max-w-6xl mx-auto overflow-hidden shadow-lg"
          style={{ borderRadius: "3rem" }}
          initial={false}
          animate={{
            scale: isInView ? 1 : 1.05,
            opacity: isInView ? 1 : 0,
            borderRadius: isInView ? "1.5rem" : "3rem",
            boxShadow: isInView
              ? "0 20px 50px rgba(0,0,0,0.3)"
              : "0 5px 15px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* HTML5 Video Player */}
          <video
            className="w-full aspect-video"
            src="/video.mp4"
            poster="/your-poster-image.jpg"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* "More on YouTube" Button Overlay */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute bottom-5 right-5
              flex items-center gap-2
              bg-black/30 backdrop-blur-md
              rounded-full px-6 py-3
              text-white text-sm font-medium
              hover:bg-black/50
              transition-colors z-10
            "
          >
            More on YouTube
            <span className="bg-green-500 rounded-full p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
