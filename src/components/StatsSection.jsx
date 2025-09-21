"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedStat({ to, prefix = "", suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const value = parseInt(node.textContent, 10);

      const controls = animate(value, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(
            value
          ).toLocaleString()}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, prefix, suffix]);

  return (
    <div className="text-center">
      <h2
        ref={ref}
        className="text-4xl sm:text-5xl font-bold text-white tracking-tighter"
      >
        0
      </h2>
      <p className="mt-2 text-sm text-gray-400 tracking-wide">{label}</p>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 sm:pt-20 sm:pb-0 px-4">
      <motion.div
        ref={ref}
        className="relative max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-soft-glow overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Crystal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Stats */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="py-8 px-4">
            <AnimatedStat to={78} suffix="%" label="Win rate (rolling 90d)" />
          </div>
          <div className="py-8 px-4">
            <AnimatedStat to={2450} prefix="+" label="Avg monthly pips" />
          </div>
          <div className="py-8 px-4">
            <AnimatedStat to={8200} suffix="+" label="Active members" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
