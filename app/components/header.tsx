"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo & Menu */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-4">
              <Image
                src="/navbarLogo.png"
                alt="Nata Yaşam Logo"
                width={160}
                height={160}
              />
           
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <Link href="#">Projeler</Link>
            <Link href="#">Hakkımızda</Link>
            <Link href="#">Kampanyalar</Link>
            <Link href="#">N-Bülten</Link>
            <Link href="#">Nata Holding</Link>
            <Link href="#">İletişim</Link>
          </nav>
        </div>

        {/* Right - Language, AI, Notification */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <button className="flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-100 hover:bg-gray-200">
            <span className="text-red-600 font-bold mr-1">🇹🇷</span> TR
          </button>

          {/* AI Button */}
          <button className="bg-gradient-to-r from-[#9F1C33] to-[#6B0F1A] text-white px-4 py-1.5 text-sm rounded-xl font-mono relative">
            N<span className="tracking-widest">AT-AI</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
          </button>

          {/* Notification Icon */}
          <button aria-label="Notifications" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <Bell size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
