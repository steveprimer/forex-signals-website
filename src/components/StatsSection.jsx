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
    <div className="flex-1 text-center min-w-0">
      <h2
        ref={ref}
        className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
      >
        0
      </h2>
      <p className="mt-1 text-xs xs:text-sm text-gray-400 tracking-wide truncate">
        {label}
      </p>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-8 sm:pt-16 sm:pb-0 px-2 sm:px-4 mt-20 sm:mt-10">
      <motion.div
        ref={ref}
        className="relative max-w-full sm:max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl shadow-soft-glow overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Stats Row */}
        <div className="flex divide-x divide-white/10">
          <div className="flex-1 py-6 px-2 sm:py-8 sm:px-4">
            <AnimatedStat to={78} suffix="%" label="Win rate (90d)" />
          </div>
          <div className="flex-1 py-6 px-2 sm:py-8 sm:px-4">
            <AnimatedStat to={2450} prefix="+" label="Avg monthly pips" />
          </div>
          <div className="flex-1 py-6 px-2 sm:py-8 sm:px-4">
            <AnimatedStat to={8200} suffix="+" label="Active members" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
