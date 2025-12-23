"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

const teamMembers = [
  {
    name: "Stephen Otwabe",
    role: "Founder & CEO",
    bio: "Leads Blend’s vision and strategy, guiding the team to deliver innovative events and impactful brand solutions.",
    photo: "/team/stephen.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Abel Mogambi",
    role: "Co-Founder & Operations",
    bio: "Oversees operations, ensuring smooth execution of all projects and delivering excellence in every event.",
    photo: "/team/abel.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Owen Geke",
    role: "Creative Director",
    bio: "Leads the creative vision, crafting design and branding strategies that make every project unique.",
    photo: "/team/owen.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Isaac Onchiri",
    role: "Event Planner",
    bio: "Plans and coordinates events meticulously, ensuring every detail contributes to unforgettable experiences.",
    photo: "/team/isaac.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Viola Kerubo",
    role: "Marketing Strategist",
    bio: "Develops campaigns that engage audiences and amplify the Blend brand across multiple platforms.",
    photo: "/team/viola.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Vivian Kerubo",
    role: "Content & Communication",
    bio: "Manages storytelling, content strategy, and communications to connect Blend with its audience effectively.",
    photo: "/team/vivian.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Ivy N.",
    role: "Host & Presenter",
    bio: "Engages audiences as the face of Blend’s events, hosting and presenting with professionalism and charisma.",
    photo: "/team/ivy.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
  {
    name: "Stephanie Nyanchama",
    role: "Graphic Designer",
    bio: "Creates visually compelling graphics that communicate ideas effectively and elevate the Blend brand.",
    photo: "/team/stephanie.jpg",
    socials: { linkedin: "#", facebook: "#", instagram: "#", tiktok: "#" },
  },
];

const teamValues = [
  { icon: "💡", title: "Creativity", description: "Fresh ideas to make experiences unique." },
  { icon: "🤝", title: "Collaboration", description: "Working together to deliver exceptional results." },
  { icon: "🌱", title: "Sustainability", description: "Eco-friendly solutions and responsible planning." },
  { icon: "🎯", title: "Excellence", description: "Striving for perfection in every detail." },
];

export default function TeamPage() {
  return (
    <main className="font-['Figtree']">

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] overflow-hidden px-4">
        <div className="text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the Blend Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-base sm:text-lg md:text-xl text-white font-semibold">
            Professionals from diverse fields, united by creativity, collaboration, and excellence.
          </motion.p>
        </div>
      </section>

      {/* Core Team Members - Responsive Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f3f] mb-10 sm:mb-12">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col"
              >
                <div className="relative w-full h-56 sm:h-64 md:h-64">
                  <Image src={member.photo} alt={member.name} fill style={{ objectFit: "cover" }} className="rounded-t-2xl"/>
                </div>
                <div className="p-4 sm:p-6 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#001f3f]">{member.name}</h3>
                    <p className="text-[#FF6600] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-700 text-sm sm:text-sm mb-4">{member.bio}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 text-[#FF6600] mt-2">
                    {member.socials.linkedin && <a href={member.socials.linkedin}><FiLinkedin size={20} /></a>}
                    {member.socials.facebook && <a href={member.socials.facebook}><FiFacebook size={20} /></a>}
                    {member.socials.instagram && <a href={member.socials.instagram}><FiInstagram size={20} /></a>}
                    {member.socials.tiktok && <a href={member.socials.tiktok}><SiTiktok size={20} /></a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001f3f] mb-10">What Drives Us</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
            {teamValues.map((value, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 min-w-[200px] max-w-[300px] bg-gray-50 p-5 sm:p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-500">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#001f3f] mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Brings Us Together */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#001f3f] via-[#004d7a] to-[#00b8e6] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What Brings Us Together</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Our diverse team comes together through a shared passion for creativity, collaboration, and excellence. We combine our skills to craft extraordinary experiences and impactful brand solutions for every client.
          </p>
        </div>
      </section>
    </main>
  );
}