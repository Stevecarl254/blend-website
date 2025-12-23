"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Event Planning",
    description:
      "Expertly planning music concerts, product launches, weddings, private parties, and corporate events — ensuring every detail is perfectly executed.",
  },
  {
    id: 2,
    title: "Brand Strategy",
    description:
      "Crafting compelling brand strategies to elevate your business presence and create memorable connections with your audience.",
  },
  {
    id: 3,
    title: "Creative Marketing",
    description:
      "Designing innovative marketing campaigns and experiences that engage, inspire, and deliver measurable results.",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-['Figtree']">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3f] mb-12"
        >
          Our Featured Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid gap-8 sm:gap-10 md:grid-cols-3 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer transform transition-transform duration-500 hover:-translate-y-2"
              variants={cardVariants}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-[#FF6600] to-[#001f3f]"
                    : "bg-gradient-to-br from-[#001f3f] to-[#FF6600]"
                } opacity-80 group-hover:opacity-100 transition-all duration-500`}
              ></div>

              {/* Card content */}
              <div className="relative p-6 sm:p-8 text-white flex flex-col h-full justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-bold mb-2 inline-block">{`0${service.id}`}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <Link href="/services">
                    <button className="bg-white text-[#001f3f] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#001f3f] hover:text-white transition-all duration-300 shadow-md">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <div className="mt-12 md:mt-16">
          <Link href="/services">
            <button className="bg-[#001f3f] text-white px-10 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#FF6600] hover:text-white transition-all duration-300 shadow-lg">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}