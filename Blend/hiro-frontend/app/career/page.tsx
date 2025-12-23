"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiBriefcase, FiUsers, FiStar } from "react-icons/fi";

export default function CareerPage() {
  return (
    <main className="font-['Figtree']">

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/career-hero.jpg"
            alt="Join Blend Team"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Blend Team
          </h1>
          <p className="text-lg md:text-xl text-white font-semibold">
            Be part of a team shaping experiences and building impactful brands
          </p>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-6">
            Why Work With Us
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            At Blend, we believe in creativity, collaboration, and growth. We foster a culture where professionals from diverse backgrounds come together to craft extraordinary experiences and impactful brand solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[
              { icon: <FiStar size={32} className="text-[#FF6600]" />, title: "Creativity", desc: "Bring fresh ideas and make every project unique." },
              { icon: <FiUsers size={32} className="text-[#FF6600]" />, title: "Collaboration", desc: "Work with talented professionals from different fields." },
              { icon: <FiBriefcase size={32} className="text-[#FF6600]" />, title: "Growth", desc: "Opportunities to learn and advance your career." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-500"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#001f3f] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-6">
            Open Positions
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            We currently have no open positions. Please check back soon for new opportunities to join our growing team.
          </p>
          <p className="text-gray-500 text-sm">
            Stay updated by visiting this page regularly.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Joining Blend?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Even if there’s no current opening, you can send us your resume. We’ll keep it on file and reach out when opportunities arise.
          </p>
          <a
            href="mailto:careers@blend.com"
            className="inline-block bg-white text-[#001f3f] px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Send Resume
          </a>
        </div>
      </section>
    </main>
  );
}