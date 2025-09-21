"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageLightbox = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        {/* Lightbox Container with Glassmorphism */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          className="relative max-w-4xl max-h-[80vh] w-full rounded-2xl overflow-hidden
                     bg-gradient-to-tr from-white/10 via-white/5 to-white/10
                     backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                     flex items-center justify-center p-4"
        >
          {/* Crystal Glow Accents */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

          {/* Image */}
          <img
            src={src}
            alt="Lightbox content"
            className="w-full h-full object-contain relative z-10 rounded-xl"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
