"use client";

import { FaCalendarAlt, FaBullhorn, FaLightbulb } from "react-icons/fa";

export default function HowBlendWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaCalendarAlt className="w-8 h-8 text-white" />,
      title: "Plan Your Event",
      description:
        "We start by understanding your vision and goals, whether it's a wedding, concert, launch event, or corporate gathering.",
      color: "bg-[#FF6600]",
    },
    {
      id: 2,
      icon: <FaBullhorn className="w-8 h-8 text-white" />,
      title: "Brand Strategy",
      description:
        "We craft a tailored strategy to amplify your brand, ensuring every element of your event communicates your message clearly.",
      color: "bg-[#001f3f]",
    },
    {
      id: 3,
      icon: <FaLightbulb className="w-8 h-8 text-white" />,
      title: "Creative Marketing",
      description:
        "We execute innovative marketing campaigns and creative concepts that engage your audience and make your event unforgettable.",
      color: "bg-[#FF6600]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f]">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FF6600]/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FF6600]/15 rounded-full animate-ping-slow"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          How <span className="text-[#FF6600]">Blend</span> Works
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          We guide you from planning your event to building your brand and marketing creatively to make your event unforgettable.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-16">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FF6600]"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex-1 flex flex-col items-center md:items-start">
              
              {/* Slanted trapezium accent */}
              <div
                className={`absolute top-0 -left-6 md:-left-12 w-32 h-16 md:w-40 md:h-20 transform -skew-x-12 z-0 ${
                  index % 2 === 0 ? "bg-[#FF6600]" : "bg-[#001f3f]"
                } opacity-70 md:opacity-100 rounded-lg`}
              ></div>

              {/* Step icon */}
              <div
                className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.color} shadow-lg z-10`}
              >
                {step.icon}
              </div>

              {/* Step content */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg flex flex-col gap-2 text-center md:text-left z-10">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-200 text-sm md:text-base">{step.description}</p>
              </div>

              {/* Horizontal connector for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-1 bg-[#FF6600] h-12 mx-auto"></div>
              )}
            </div>
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
          0% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.15; }
        }
        .animate-pulse-slow { animation: pulseSlow 6s infinite; }
        .animate-ping-slow { animation: pingSlow 7s infinite; }
      `}</style>
    </section>
  );
}