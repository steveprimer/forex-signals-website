import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 md:py-32">
      <div className="mb-6">
        {/* Grey text like [sei] */}
        <p className="text-gray-400 text-xl font-medium tracking-wide">
          [James Riston]
        </p>
      </div>

      {/* Heading styled like in your reference */}
      <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-tight max-w-7xl">
        A premium <br /> content agency.
      </h1>

      <p className="mt-8 text-lg text-gray-500 font-light tracking-wide">
        No cost. Real Traders. Verified results.
      </p>

      {/* Button Container */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Button */}
        <a
          href="#"
          className="w-full sm:w-auto backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          Get FREE Access
        </a>

        <a
          href="#"
          className="w-full sm:w-auto backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          Watch How It Works
        </a>
      </div>
    </section>
  );
};

export default Hero;
