"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaEnvelope,
  FaBriefcase,
  FaFileAlt,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import { useRouter } from "next/navigation";

interface AdminLayoutProps {
  children: ReactNode;
}

interface Message {
  _id: string;
}

const API_BASE = "http://localhost:5000";

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newMessagesCount, setNewMessagesCount] = useState(0);
  const [adminName, setAdminName] = useState<string>("Admin");

  const socketRef = useRef<Socket | null>(null);
  const isMountedRef = useRef(false);
  const router = useRouter();

  /* =========================
     LOCAL STORAGE HELPERS
  ========================= */
  const getReadMessages = (): string[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("readMessages") || "[]");
  };

  /* =========================
     FETCH ADMIN INFO
  ========================= */
  const fetchAdminName = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      handleLogout();
      return;
    }

    try {
      const res = await axios.get(`${API_BASE}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fullName = res.data.user?.name || "Admin";
      setAdminName(fullName.split(" ")[0]);
    } catch (err) {
      console.error("Failed to fetch admin info:", err);
      handleLogout();
    }
  };

  /* =========================
     INITIAL FETCH (ONCE)
  ========================= */
  const fetchInitialCounts = async () => {
    try {
      const messagesRes = await axios.get(`${API_BASE}/api/messages`);
      const messages: Message[] = messagesRes.data.data || [];
      const unreadMessages = messages.filter((m) => !getReadMessages().includes(m._id));
      setNewMessagesCount(unreadMessages.length);
    } catch (err) {
      console.error("Initial fetch error:", err);
    }
  };

  /* =========================
     SOCKET SETUP (ONCE)
  ========================= */
  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;

    fetchAdminName();
    fetchInitialCounts();

    const socket = io(API_BASE, { transports: ["websocket"], reconnection: true });
    socketRef.current = socket;

    socket.on("newMessage", (msg: Message) => {
      if (!getReadMessages().includes(msg._id)) {
        setNewMessagesCount((prev) => prev + 1);
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  /* =========================
     LOGOUT FUNCTION
  ========================= */
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  /* =========================
     MENU CONFIG (BLEND)
  ========================= */
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, href: "/admin" },
    { name: "Team Members", icon: <FaUsers />, href: "/admin/team" },
    { name: "Careers", icon: <FaBriefcase />, href: "/admin/careers" },
    { name: "Resumes", icon: <FaFileAlt />, href: "/admin/resumes" },
    { name: "Messages", icon: <FaEnvelope />, href: "/admin/messages", badge: newMessagesCount },
  ];

  /* =========================
     UI
  ========================= */
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-[#001f3f] text-white flex flex-col transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b border-orange-500">
          <span className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>Blend Admin</span>
          <button className="p-1 hover:bg-orange-500 rounded" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
        </div>

        <nav className="flex-1 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-orange-600 ${!isSidebarOpen ? "justify-center" : ""} relative`}
            >
              {item.icon}
              {isSidebarOpen && <span>{item.name}</span>}
              {item.badge && item.badge > 0 && (
                <span className="absolute top-2 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow">
          <h1 className="text-xl font-semibold text-[#001f3f]">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">{adminName}</span>
            <img src="/avatar.png" alt="Admin" className="w-10 h-10 rounded-full" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}