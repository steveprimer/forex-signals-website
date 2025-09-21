"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const activeLink = "Work with us";
  const navLinks = ["Services", "Community", "Work with us"];

  return (
    <motion.header
      className="fixed top-0 w-full flex justify-center py-8 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* CHANGED THIS CLASS BELOW */}
      <nav
        className="
    bg-black/20 backdrop-blur-lg rounded-full border border-white/10 
    shadow-[0_10px_20px_-5px_rgba(0,0,0,0.8)] /* drop shadow below only */
    transition-all duration-300
  "
      >
        <ul className="flex items-center space-x-1 p-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm font-medium px-4 py-1 rounded-full transition-all duration-300 ${
                  activeLink === link
                    ? "text-white hover:text-gray-400"
                    : "text-white hover:text-gray-400"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
