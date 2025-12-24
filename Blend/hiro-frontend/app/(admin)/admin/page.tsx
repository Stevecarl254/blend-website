"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Info, Bell, Users, Mail, Briefcase } from "lucide-react";

const tipsData = [
  {
    id: 1,
    icon: <Info className="w-5 h-5 text-white" />,
    title: "System Tip",
    message: "Remember to update team members regularly to keep your dashboard accurate.",
    color: "bg-[#001f3f]",
  },
  {
    id: 2,
    icon: <Bell className="w-5 h-5 text-white" />,
    title: "Reminder",
    message: "Check career applications daily to respond to potential hires promptly.",
    color: "bg-[#FF6600]",
  },
  {
    id: 3,
    icon: <Info className="w-5 h-5 text-white" />,
    title: "Quick Tip",
    message: "Respond to client messages in a timely manner to maintain professionalism.",
    color: "bg-[#001f3f]",
  },
];

const quickLinks = [
  {
    title: "Team Members",
    icon: <Users className="w-6 h-6 text-white" />,
    href: "/admin/team",
    color: "from-[#001f3f] to-[#004d7a]",
  },
  {
    title: "Careers",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    href: "/admin/careers",
    color: "from-[#FF6600] to-[#FF8533]",
  },
  {
    title: "Messages",
    icon: <Mail className="w-6 h-6 text-white" />,
    href: "/admin/messages",
    color: "from-[#00b8e6] to-[#004d7a]",
  },
];

export default function AdminLanding() {
  const [adminName, setAdminName] = useState<string | null>(null);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tipsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch admin info from backend
  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setAdminName("Admin");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const fullName = data.user?.name || "Admin";
        setAdminName(fullName.split(" ")[0]);
      } catch (err) {
        console.error("Failed to fetch admin info:", err);
        setAdminName("Admin");
      }
    };

    fetchAdmin();
  }, []);

  const tip = tipsData[currentTip];

  return (
    <main className="relative min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Faded Logo Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/logo.png"
          alt="Blend Logo"
          fill
          className="object-contain opacity-30 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#001f3f] animate-fadeIn">
            Welcome, {adminName ?? "..."}
          </h1>
          <p className="text-gray-700 mt-4 text-lg animate-fadeIn delay-200">
            Manage your Blend team, careers, and client messages
          </p>
        </section>

        {/* Tips / Announcements */}
        <section className="mb-12 w-full max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center space-x-4 transition-all duration-500 animate-fadeSlide">
            <div className={`p-3 rounded-full ${tip.color} flex-shrink-0`}>
              {tip.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-semibold">{tip.title}</p>
              <p className="text-gray-800 mt-1">{tip.message}</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`bg-gradient-to-br ${link.color} shadow-lg rounded-2xl p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="p-3 bg-white/20 rounded-full">{link.icon}</div>
              <p className="text-white font-semibold text-lg">{link.title}</p>
            </a>
          ))}
        </section>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-in-out forwards; }
        .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
        .animate-fadeSlide { animation: fadeSlide 0.6s ease-in-out forwards; }
      `}</style>
    </main>
  );
}