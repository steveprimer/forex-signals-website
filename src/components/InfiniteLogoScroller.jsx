"use client";

import React from "react";

const InfiniteLogoScroller = () => {
  const logos = [
    { src: "/drop.png", alt: "Dropbox" },
    { src: "/duo.png", alt: "Duolingo" },
    { src: "/git.png", alt: "GitHub" },
    { src: "/micro.png", alt: "Microsoft" },
    { src: "/netflix.png", alt: "Netflix" },
  ];

  return (
    // The main section with a solid dark background
    <section className="w-full py-12">
      <div className="container mx-auto px-4 text-center">
        {/* The title sits on the main background */}
        <h2 className="inline-block rounded-full px-4 py-1.5 mb-12 text-sm font-bold text-green-500">
          [As Seen In Articles]
        </h2>

        {/* --- Glassmorphism Logo Scroller Pane --- */}
        <div
          className="
            relative w-full max-w-5xl mx-auto overflow-hidden p-8
            bg-gradient-to-r from-white/10 via-white/5 to-white/10
            backdrop-blur-sm border border-white/20 rounded-2xl
          "
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Inner track */}
          <div className="flex w-max animate-marquee">
            {/* duplicate logos back-to-back */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 md:w-48 mx-4 md:mx-8 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 md:h-9 object-contain"
                  onError={(e) =>
                    (e.currentTarget.src = `https://placehold.co/200x80/1a1a1a/FFFFFF?text=${logo.alt}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteLogoScroller;
