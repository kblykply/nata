"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Menu,
  X,
  Info,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  isKampanyalarOpen: boolean;
  setIsNewProjectsOpen: (open: boolean) => void;
  setIsContactPopupOpen: (open: boolean) => void;
  setIsKampanyalarOpen: (open: boolean) => void;
}

type NotificationType = "info" | "success" | "alert";

interface Notification {
  id: number;
  type: NotificationType;
  message: string;
  time: string;
}

export default function Header({
  isKampanyalarOpen,
  setIsNewProjectsOpen,
  setIsContactPopupOpen,
  setIsKampanyalarOpen,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const isHoveringPopup = useRef(false);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("https://www.salihkaankoc.net/nata-core/web-notifications");
        const json = await res.json();
        if (Array.isArray(json.data)) {
          const mapped: Notification[] = json.data.map((item: any, index: number) => ({
            id: item.id || index,
            type: item.type || "info",
            message: item.message || item.title || "Yeni bildirim",
            time: item.time || "Az önce",
          }));
          setNotifications(mapped);
        }
      } catch (error) {
        console.error("Bildirimler alınamadı:", error);
      }
    };

    fetchNotifications();
  }, []);

  const iconMap = {
    info: <Info size={16} className="text-blue-500" />,
    success: <CheckCircle size={16} className="text-green-500" />,
    alert: <AlertCircle size={16} className="text-red-500" />,
  };

  const handleMenuEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsKampanyalarOpen(true);
  };

  const handleMenuLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      if (!isHoveringPopup.current) {
        setIsKampanyalarOpen(false);
      }
    }, 200);
  };

  const handlePopupEnter = () => {
    isHoveringPopup.current = true;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const handlePopupLeave = () => {
    isHoveringPopup.current = false;
    hoverTimeout.current = setTimeout(() => {
      setIsKampanyalarOpen(false);
    }, 200);
  };

  return (
    <header className="fixed w-full px-10 py-5 bg-white shadow-sm sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and desktop nav */}
        <div className="flex items-center space-x-9 space-y-2">
          <Link href="/">
            <Image
              src="/navbarLogo.png"
              alt="Nata Yaşam Logo"
              width={0}
              height={0}
              sizes="(max-width: 768px) 140px, 180px"
              className="w-36 sm:w-40 md:w-[160px] h-auto"
            />
          </Link>

          <nav
            className="hidden md:flex space-x-6 text-xs"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            <div
              onMouseEnter={() => {
                clearTimeout(window.yeniProjeTimeout ?? undefined);
                setIsNewProjectsOpen(true);
              }}
              onMouseLeave={() => {
                window.yeniProjeTimeout = setTimeout(() => {
                  setIsNewProjectsOpen(false);
                }, 200);
              }}
              className="relative"
            >
              <span className="cursor-pointer text-xs font-medium">
                Yeni Projeler
              </span>
            </div>

            <Link href="/about-us">Hakkımızda</Link>

            <Link href="/kampanya">
              <div
                onMouseEnter={() => {
                  clearTimeout(window.kampanyaTimeout ?? undefined);
                  setIsKampanyalarOpen(true);
                }}
                onMouseLeave={() => {
                  window.kampanyaTimeout = setTimeout(() => {
                    setIsKampanyalarOpen(false);
                  }, 200);
                }}
                className="relative"
              >
                <span className="cursor-pointer text-xs font-medium">
                  Kampanyalar
                </span>
              </div>
            </Link>

            <Link href="/n-bulten">N-Bülten</Link>

            <Link
              href="https://www.nataholding.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nata Holding
            </Link>

            <Link href="/contact-us">
              <div
                onMouseEnter={() => {
                  clearTimeout(window.iletisimTimeout ?? undefined);
                  setIsContactPopupOpen(true);
                }}
                onMouseLeave={() => {
                  window.iletisimTimeout = setTimeout(() => {
                    setIsContactPopupOpen(false);
                  }, 200);
                }}
                className="relative"
              >
                <span className="cursor-pointer font-medium">İletişim</span>
              </div>
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-3 py-3 rounded-full text-sm bg-gray-100 hover:bg-gray-200">
            <Image
              src="/turkish-flag.png"
              alt="Turkish Flag"
              width={20}
              height={20}
              className="mr-2"
            />
            TR
          </button>

          {/* Notification */}
          <div className="relative">
            <button
              aria-label="Bildirimler"
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-[#ab1e3b] hover:bg-gray-200 flex items-center justify-center relative"
            >
              <Bell size={18} className="text-white" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl animate-fade-in z-50">
                <div className="p-4 font-semibold text-gray-800">
                  Bildirimler
                </div>
                <ul className="max-h-60 overflow-y-auto">
                  {notifications.map((note) => (
                    <li
                      key={note.id}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      {iconMap[note.type]}
                      <div>
                        <p className="text-sm text-gray-700">{note.message}</p>
                        <span className="text-xs text-gray-400">
                          {note.time}
                        </span>
                      </div>
                    </li>
                  ))}
                  {notifications.length === 0 && (
                    <li className="px-4 py-3 text-sm text-gray-500">
                      Henüz bildirim yok.
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm">
          <Link href="/" className="block">Ana Sayfa</Link>
          <Link href="/projects" className="block">Projeler</Link>
          <Link href="/about-us" className="block">Hakkımızda</Link>
          <Link href="/contact-us" className="block">İletişim</Link>
          <Link href="/n-bulten" className="block">N Bülten</Link>
          <Link href="/blog" className="block">Blog</Link>
        </div>
      )}
    </header>
  );
}
