"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 md:px-12">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: "url('/image 1.jpeg')",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001f3f]/50 backdrop-blur-[1px]"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 font-['Figtree'] text-white leading-snug">
          Crafting Unforgettable{" "}
          <span className="text-[#FF6600]">Events</span> &{" "}
          <span className="text-[#FF6600]">Experiences</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 font-['Figtree'] text-white">
          Blend specializes in <span className="text-[#FF6600]">event planning</span>,{" "}
          <span className="text-[#FF6600]">brand strategy</span>, and{" "}
          <span className="text-[#FF6600]">creative marketing</span> to make your events shine.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <Link href="/contact">
            <button className="bg-[#FF6600] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-lg hover:bg-[#ff8533] transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-white text-[#FF6600] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-md">
              See Our Work
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right-side Slanted Trapeziums */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-center space-y-4 pr-2 sm:pr-6">
        {/* Top trapezium (orange) */}
        <div className="w-20 sm:w-36 h-1/4 sm:h-1/3 bg-[#FF6600] transform -translate-x-6 sm:-translate-x-12 skew-y-[-12deg] opacity-60 sm:opacity-90 shadow-lg"></div>
        {/* Bottom trapezium (navy blue) */}
        <div className="w-16 sm:w-28 h-1/5 sm:h-1/4 bg-[#001f3f] transform -translate-x-4 sm:-translate-x-8 skew-y-[-12deg] opacity-50 sm:opacity-90 shadow-md"></div>
      </div>
    </section>
  );
}