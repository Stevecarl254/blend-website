"use client";

import { FaEye, FaBullseye, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VisionGoalsValues() {
  const items = [
    {
      id: 1,
      icon: <FaEye className="w-10 h-10 text-white" />,
      title: "Our Vision",
      description:
        "To be the leading creative agency that crafts unforgettable events and impactful brand experiences across Kenya and beyond.",
      color: "bg-[#FF6600]",
    },
    {
      id: 2,
      icon: <FaBullseye className="w-10 h-10 text-white" />,
      title: "Our Goals",
      description:
        "To deliver excellence in event planning, brand strategy, and creative marketing, exceeding client expectations every time.",
      color: "bg-[#001f3f]",
    },
    {
      id: 3,
      icon: <FaHandsHelping className="w-10 h-10 text-white" />,
      title: "Our Values",
      description:
        "Creativity, professionalism, client satisfaction, innovation, and integrity guide everything we do.",
      color: "bg-[#FF6600]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#FFF8F0]">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#FF6600]/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-[#001f3f]/10 rounded-full animate-ping-slow"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-[#001f3f]">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Who We Are & What Drives Us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base">{item.description}</p>

              {/* Decorative trapezium behind card */}
              <div
                className={`absolute -bottom-6 -left-6 w-24 h-12 transform -skew-x-12 rounded-lg ${item.color} opacity-50 z-0`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
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