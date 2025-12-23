"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLayers, FiMic, FiCamera, FiEdit, FiStar } from "react-icons/fi";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Event Planning",
      description:
        "From weddings, private parties, corporate events to concerts and product launches — Blend crafts unforgettable experiences, managing every detail with creativity and professionalism.",
      icon: <FiLayers className="w-8 h-8 text-[#FF6600]" />,
      image: "/event-planning.jpg",
    },
    {
      id: 2,
      title: "Brand Strategy & Creative Marketing",
      description:
        "We help businesses and individuals create strong brand identities and impactful campaigns. Our creative marketing solutions ensure maximum engagement and reach.",
      icon: <FiEdit className="w-8 h-8 text-[#FF6600]" />,
      image: "/brand-strategy.jpg",
    },
    {
      id: 3,
      title: "PA System & Sound Services",
      description:
        "Professional sound engineering for every event. We provide full PA system setup and technical support to ensure crystal-clear audio.",
      icon: <FiMic className="w-8 h-8 text-[#FF6600]" />,
      image: "/pa-system.jpg",
    },
    {
      id: 4,
      title: "Videography & Photography",
      description:
        "Capture every moment perfectly. Our team provides professional photography and videography, delivering high-quality visuals for memories that last a lifetime.",
      icon: <FiCamera className="w-8 h-8 text-[#FF6600]" />,
      image: "/videography.jpg",
    },
    {
      id: 5,
      title: "Graphic Design",
      description:
        "From invitations and flyers to social media posts and branding assets, Blend's graphic design services bring your vision to life with creativity and precision.",
      icon: <FiEdit className="w-8 h-8 text-[#FF6600]" />,
      image: "/graphic-design.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Wanjiku Mwangi",
      rating: 5,
      text: "Blend made our wedding a dream come true! Every detail was perfectly planned and executed.",
    },
    {
      id: 2,
      name: "Kevin Otieno",
      rating: 4,
      text: "Professional, creative, and reliable. Their brand strategy elevated our business identity immensely.",
    },
    {
      id: 3,
      name: "Aisha Hassan",
      rating: 5,
      text: "From marketing campaigns to event management, Blend exceeded our expectations every step of the way.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="font-['Figtree']">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] overflow-hidden px-4">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.jpg"
            alt="Our Services"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white font-semibold">
            Crafting unforgettable experiences & building impactful brands
          </p>
        </motion.div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <motion.section
          key={service.id}
          className={`py-12 sm:py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">

            {/* Image with overlay */}
            <motion.div
              variants={imageVariants}
              className={`flex-1 relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                index % 2 === 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center px-2">
                  {service.title}
                </h3>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={textVariants}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f3f]">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {service.description.split(" ").map((word, i) => {
                  const highlightWords = ["weddings", "concerts", "private", "corporate", "campaigns"];
                  return highlightWords.includes(word.toLowerCase()) ? (
                    <span key={i} className="text-[#FF6600] font-semibold"> {word} </span>
                  ) : (
                    <span key={i}> {word} </span>
                  );
                })}
              </p>
            </motion.div>

          </div>
        </motion.section>
      ))}

{/* Our Work Section */}
<section className="py-12 sm:py-16 bg-white text-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3f] mb-8 sm:mb-12">
    Our Work
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
    {/* Project 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src="/gerizim-sundowner.jpg" // Replace with actual image
          alt="Gerizim Youths Sundowner"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-[#001f3f] mb-2">
          Gerizim Youths Sundowner
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We worked with Gerizim Youths, planning their Sundowner event that was a huge success.
        </p>
      </div>
    </motion.div>

    {/* Project 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src="/parliament-conference.jpg" // Replace with actual image
          alt="Sergeant at Arms Conference"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-[#001f3f] mb-2">
          Sergeant at Arms Conference
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We planned a successful conference for the Sergeant at Arms at the Parliament Buildings.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001f3f] mb-8 sm:mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 sm:w-5 h-4 sm:h-5 ${
                      i < testimonial.rating ? "text-[#FF6600]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#001f3f] font-semibold text-sm sm:text-base">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] text-white text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Ready to Elevate Your Event?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Let Blend craft an unforgettable experience for you — from planning to execution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#001f3f] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}