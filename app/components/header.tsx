"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Menu, X, Info, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";


type NotificationType = "info" | "success" | "alert";



interface Notification {
  id: number;
  type: NotificationType;
  message: string;
  time: string;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications: Notification[] = [
    { id: 1, type: "info", message: "Yeni proje eklendi: Vega Center", time: "2dk önce" },
    { id: 2, type: "success", message: "Goat Villas teslim aşamasında", time: "1 saat önce" },
    { id: 3, type: "alert", message: "AI Asistanınız güncellendi!", time: "Dün" },
  ];

  const iconMap = {
    info: <Info size={16} className="text-blue-500" />,
    success: <CheckCircle size={16} className="text-green-500" />,
    alert: <AlertCircle size={16} className="text-red-500" />,
  };

  return (
    <header className="w-full px-10 py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo & Menu */}
        <div className="flex items-center space-x-9 space-y-2">
          <Link href="/">
            <Image src="/navbarLogo.png" alt="Nata Yaşam Logo" width={160} height={0} />
          </Link>

          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <Link href="#">Ana Sayfa</Link>
            <Link href="#">Projeler</Link>
            <Link href="#">Hakkımızda</Link>
            <Link href="#">İletişim</Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-100 hover:bg-gray-200">
            <span className="text-red-600 font-bold mr-1">🇹🇷</span> TR
          </button>

          <button
  className="bg-gradient-to-r from-[#9F1C33] to-[#6B0F1A] text-white px-4 py-1 text-xs rounded-lg relative
             md:px-4 md:py-1.5 md:text-sm md:rounded-xl"
  style={{ fontFamily: "var(--font-heading)" }}
>
  NAT-AI
</button>

          {/* Notification */}
          <div className="relative">
            <button
              aria-label="Bildirimler"
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center relative"
            >
              <Bell size={18} className="text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl    animate-fade-in z-50">
                <div className="p-4  font-semibold text-gray-800">Bildirimler</div>
                <ul className="max-h-60 overflow-y-auto">
                  {notifications.map((note) => (
                    <li key={note.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition">
                      {iconMap[note.type]}
                      <div>
                        <p className="text-sm text-gray-700">{note.message}</p>
                        <span className="text-xs text-gray-400">{note.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
               
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm">
          <Link href="#" className="block">Ana Sayfa</Link>
          <Link href="#" className="block">Projeler</Link>
          <Link href="#" className="block">Hakkımızda</Link>
          <Link href="#" className="block">İletişim</Link>
        </div>
      )}
    </header>
  );
}
