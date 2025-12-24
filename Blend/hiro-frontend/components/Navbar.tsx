"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);
  const mobileProfileRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userName");
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUserName(storedUser.split(" ")[0]);
    }
  }, []);

  // Close profile dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (mobileProfileRef.current && !mobileProfileRef.current.contains(e.target as Node)) {
        setMobileProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    router.push("/login");
  };

  // Handle nav link click
  const handleLinkClick = (title: string) => {
    setActive(title);
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  // Update active link based on pathname
  useEffect(() => {
    const matchedItem = navItems.find((item) =>
      item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
    );
    setActive(matchedItem ? matchedItem.name : "");
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-200/40 backdrop-blur-lg shadow-sm border-b border-white/30"
          : "bg-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 font-['Figtree']">
        {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <img
            src="/blendicon.png"
            alt="Blend Logo"
            className="h-14 w-auto object-contain scale-180"
          />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              <span className="text-[#000000]">Blend</span> <span className="text-primary text-[#FF6600]">TM</span>
            </span>
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`relative font-medium text-[#001f3f] transition-colors hover:text-[#FF6600] ${
                active === item.name ? "text-[#FF6600]" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#FF6600] transition-all duration-300 ${
                  active === item.name ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                className="px-5 py-2 border border-[#001f3f] text-[#001f3f] rounded-md hover:bg-[#001f3f] hover:text-white transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 bg-[#001f3f] text-white rounded-md hover:bg-[#005f99] transition-all"
              >
                Register
              </Link>
            </>
          )}

          {isLoggedIn && (
            <div className="flex items-center space-x-3" ref={profileRef}>
              <span className="text-[#001f3f] font-medium">Welcome, {userName}</span>
              <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)}>
                  <UserCircleIcon className="w-8 h-8 text-[#001f3f] hover:text-[#005f99] transition" />
                </button>
                <div
                  className={`absolute right-0 mt-3 w-36 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-300 ${
                    profileOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {isLoggedIn && (
            <div className="relative" ref={mobileProfileRef}>
              <button onClick={() => setMobileProfileOpen(!mobileProfileOpen)}>
                <UserCircleIcon className="w-8 h-8 text-[#001f3f] hover:text-[#005f99] transition" />
              </button>
              {mobileProfileOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`block text-[#001f3f] font-medium hover:text-[#FF6600] ${
                active === item.name ? "text-[#FF6600]" : "text-[#001f3f]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                className="block bg-white border border-[#001f3f] text-[#001f3f] px-5 py-2 rounded-md mt-3 text-center"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block bg-[#001f3f] text-white px-5 py-2 rounded-md mt-2 text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;