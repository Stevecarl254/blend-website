"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const reasons = [
  "Tailored event planning for concerts, weddings, launches, and corporate events",
  "Creative brand strategy to elevate your presence",
  "Innovative marketing that captivates your audience",
  "Professional and experienced team",
  "Delivering unforgettable experiences every time",
];

export default function WhyBlendSection() {
  return (
    <section className="relative py-24 font-['Figtree'] bg-gradient-to-br from-[#FFF8F0] to-[#FFF3E6] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#FF6600]/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#001f3f]/10 rounded-full animate-ping-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3f] mb-6 sm:mb-8">
            Why Choose <span className="text-[#FF6600]">Blend</span>
          </h2>

          <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-800">
            {reasons.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex items-start sm:items-center gap-3 sm:gap-4"
              >
                <FiCheck className="text-[#FF6600] flex-shrink-0 mt-1 sm:mt-0" size={20} />
                <span>{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/why blend.jpg"
            alt="Why Blend"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        .animate-pulse-slow { animation: pulseSlow 6s infinite; }
        .animate-ping-slow { animation: pingSlow 7s infinite; }
      `}</style>
    </section>
  );
}