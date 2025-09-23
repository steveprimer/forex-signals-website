"use client";

import React from "react";

// --- Logo data ---
// Using a mix of local and placeholder images as per your example.
const logos = [
  {
    src: "/drop.png",
    alt: "Dropbox",
  },
  {
    src: "/duo.png",
    alt: "Duolingo",
  },
  {
    src: "/git.png",
    alt: "GitHub",
  },
  {
    src: "/micro.png",
    alt: "Microsoft",
  },
  {
    src: "/netflix.png",
    alt: "Netflix",
  },
];

const InfiniteLogoScroller = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-customgray">
      <div
        className="relative w-full max-w-5xl mx-auto"
        // This CSS mask creates a smooth fade effect on the left and right edges
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* The scrolling container */}
        <div className="flex animate-infinite-scroll">
          {/* We render the logos twice to create a seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              // Responsive classes for mobile-first optimization
              className="flex-shrink-0 w-36 md:w-48 mx-4 md:mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                // Logos are smaller on mobile and scale up on medium screens
                className="h-7 md:h-9 object-contain"
                // Add a fallback for broken image links
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/200x80/1a1a1a/FFFFFF?text=${logo.alt}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroller;
