"use client";

import Image from "next/image";
import { FaLeaf, FaHandshake, FaLightbulb, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="font-['Figtree'] relative">

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#FF6600]/70 via-[#FF8533]/50 to-[#FF6600]/70 overflow-hidden px-4 sm:px-6">
        {/* Background shapes */}
        <div className="absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#ffffff20] rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#ffffff20] rounded-full filter blur-3xl animate-ping-slow"></div>

        <Image
          src="/about-hero.jpg"
          alt="Blend Events Hero"
          fill
          className="object-cover object-center absolute inset-0 -z-10"
        />
        <div className="text-center px-4 sm:px-6 md:px-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            About Blend
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto drop-shadow"
          >
            Crafting unforgettable events, building brands, and creating experiences that leave a lasting impact.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-16 -right-16 w-56 sm:w-72 h-56 sm:h-72 bg-[#FF6600]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-64 sm:w-80 h-64 sm:h-80 bg-[#FF8533]/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#001f3f] mb-4 sm:mb-6">Our Story</h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-3 sm:mb-4">
              Blend was founded with the vision to transform the event planning and creative marketing landscape in Kenya. From humble beginnings to becoming a trusted partner for unforgettable events, we specialize in crafting experiences that connect people, build brands, and inspire creativity.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
              With every event we plan, every strategy we build, and every campaign we create, we put passion, precision, and creativity at the heart of everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/our-story.jpg"
              alt="Our Story"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Sustainability & Impact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-32 -left-32 w-64 sm:w-80 h-64 sm:h-80 bg-[#FF6600]/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 sm:w-80 h-64 sm:h-80 bg-[#FF8533]/10 rounded-full filter blur-3xl animate-ping-slow"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#001f3f] mb-3 sm:mb-4">Sustainability & Impact</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Blend, we believe in responsible event planning and marketing. We aim to reduce environmental impact, support local communities, and ensure our operations contribute positively to society. Every decision we make, from materials to partnerships, aligns with our commitment to sustainability and meaningful impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: <FaLeaf size={30} />, title: "Eco-Friendly Practices", description: "Using sustainable materials and minimizing waste in every event." },
            { icon: <FaHandshake size={30} />, title: "Community Support", description: "Partnering with local businesses and giving back to communities." },
            { icon: <FaLightbulb size={30} />, title: "Innovative Solutions", description: "Creative approaches that leave lasting impressions while staying sustainable." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 text-center"
            >
              <div className="text-[#FF6600] mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#001f3f] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Are Creating Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-32 -right-32 w-56 sm:w-72 h-56 sm:h-72 bg-[#FF6600]/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-56 sm:w-72 h-56 sm:h-72 bg-[#FF8533]/10 rounded-full filter blur-3xl animate-ping-slow"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#001f3f] mb-3 sm:mb-4">What We Are Creating</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-3xl mx-auto leading-relaxed">
            Blend is more than an events company; we are creators of experiences. Through our event planning, brand strategy, and creative marketing, we build moments that inspire, connect, and elevate your brand and personal celebrations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: <FaStar size={30} />, title: "Memorable Experiences" },
            { icon: <FaLeaf size={30} />, title: "Sustainable Impact" },
            { icon: <FaLightbulb size={30} />, title: "Creative Branding" },
            { icon: <FaHandshake size={30} />, title: "Community Connections" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center"
            >
              <div className="text-[#FF6600] mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#001f3f]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulseSlow 6s infinite; }
        .animate-ping-slow { animation: pingSlow 7s infinite; }
      `}</style>
    </main>
  );
}