"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-gray-300 font-['Figtree'] pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo 1.png"  
              alt="Blend Events Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Crafting unforgettable events and experiences — from weddings and corporate launches to private celebrations. Expertise in event planning, brand strategy, and creative marketing.
          </p>

          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="p-2 rounded-full bg-[#FF6600]/10 hover:bg-[#FF6600]/20 transition"
              aria-label="Facebook"
            >
              <Facebook className="text-[#FF6600]" size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#FF6600]/10 hover:bg-[#FF6600]/20 transition"
              aria-label="Instagram"
            >
              <Instagram className="text-[#FF6600]" size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Gallery",
              "Get Quote",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#FF6600] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#FF6600]" />
              <span>+254 796 273 218</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#FF6600]" />
              <span>info@blendevents.co.ke</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FF6600]" />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-[#FF6600]" />
              <span>Mon - Sat: 8am - 6pm</span>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="w-full">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get our latest events, offers, and updates.
          </p>
          <form className="flex flex-col sm:flex-row w-full gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6600] w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF6600] text-white rounded-md hover:bg-[#e65c00] transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-2 px-4">
        <span>© {new Date().getFullYear()} Blend Events. All rights reserved.</span>
        <span className="flex items-center gap-1">
          <Heart size={14} className="text-[#FF6600]" />
          <span>Crafted by Blend Sites</span>
        </span>
      </div>
    </footer>
  );
}