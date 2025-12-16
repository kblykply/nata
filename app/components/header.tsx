"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Menu, X, Info, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef, type ReactNode } from "react";
import FavoriteButton from "./FavoriteButton";
import { usePathname } from "next/navigation";
// import { Unbounded } from "next/font/google";
// const unbounded = Unbounded({ subsets: ["latin","latin-ext"], display: "swap", weight: ["400","500","600","700"], fallback: ["system-ui","Segoe UI","Arial"], adjustFontFallback: false });

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

const HEADER_H_MOBILE = 64;
const HEADER_H_DESKTOP = 82;

export default function Header({
  isKampanyalarOpen,
  setIsNewProjectsOpen,
  setIsContactPopupOpen,
  setIsKampanyalarOpen,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringPopup = useRef(false);
  const pathname = usePathname();
  const notificationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    const handleScroll = () => setShowNotifications(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("https://www.salihkaankoc.net/nata-core/web-notifications", {
          next: { revalidate: 60 },
        } as RequestInit);
        const json = await res.json();
        if (Array.isArray(json.data)) {
          const mapped: Notification[] = json.data.map((item: any, index: number) => ({
            id: item.id ?? index,
            type: (item.type as NotificationType) ?? "info",
            message: item.message || item.title || "Yeni bildirim",
            time: item.time || new Date().toISOString(),
          }));
          setNotifications(mapped);
        }
      } catch (error) {
        console.error("Bildirimler alınamadı:", error);
      }
    };
    fetchNotifications();
  }, []);

  const iconMap: Record<NotificationType, ReactNode> = {
    info: <Info size={16} className="text-blue-500 shrink-0" />,
    success: <CheckCircle size={16} className="text-green-500 shrink-0" />,
    alert: <AlertCircle size={16} className="text-red-500 shrink-0" />,
  };

  const handleMenuEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsKampanyalarOpen(true);
  };
  const handleMenuLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      if (!isHoveringPopup.current) setIsKampanyalarOpen(false);
    }, 200);
  };
  const handlePopupEnter = () => {
    isHoveringPopup.current = true;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };
  const handlePopupLeave = () => {
    isHoveringPopup.current = false;
    hoverTimeout.current = setTimeout(() => setIsKampanyalarOpen(false), 200);
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const isHomepage = pathname === "/";
  const headerTone = isHomepage ? "bg-white/98" : "bg-white/95";

  return (
    <>
      <header
        // className={`${unbounded.className} ...`}
        className={`sticky top-0 z-[100] w-full ${headerTone} backdrop-blur border-b border-black/5`}
        suppressHydrationWarning
      >
        {/* Lock height to prevent CLS */}
        <div className="h-16 md:h-[82px]">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-6">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Anasayfa">
                <Image
                  src="/navbarLogo.png"
                  alt="NATA Yaşam Logo"
                  width={160}
                  height={48}
                  priority
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav
              className="hidden md:flex flex-1 justify-center items-center gap-6 text-xs leading-none"
              style={{ fontFamily: "Unbounded, system-ui, sans-serif" }}
            >
              <div
                onMouseEnter={() => {
                  clearTimeout((window as any).yeniProjeTimeout ?? undefined);
                  setIsNewProjectsOpen(true);
                }}
                onMouseLeave={() => {
                  (window as any).yeniProjeTimeout = setTimeout(() => {
                    setIsNewProjectsOpen(false);
                  }, 200);
                }}
                className="relative cursor-pointer font-medium flex items-center"
              >
                Yeni Projeler
              </div>

              <Link className="font-medium flex items-center" href="/about-us">Hakkımızda</Link>

              <Link href="/kampanya" className="font-medium flex items-center">
                <div
                  onMouseEnter={() => {
                    clearTimeout((window as any).kampanyaTimeout ?? undefined);
                    setIsKampanyalarOpen(true);
                  }}
                  onMouseLeave={() => {
                    (window as any).kampanyaTimeout = setTimeout(() => {
                      setIsKampanyalarOpen(false);
                    }, 200);
                  }}
                  className="relative cursor-pointer"
                >
                  Kampanyalar
                </div>
              </Link>

              <Link className="font-medium flex items-center" href="/n-bulten">N-Bülten</Link>

              <Link
                className="font-medium flex items-center"
                href="https://www.nataholding.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nata Holding
              </Link>

              <Link 
                className="font-medium px-3 py-1 rounded-full bg-[#ab1e3b] text-white hover:bg-[#911a33] transition flex items-center" 
                href="/yetkili-satis-agi"
              >
                Yetkili Satış Ağı
              </Link>

              <Link href="/contact-us" className="font-medium flex items-center">
                <div
                  onMouseEnter={() => {
                    clearTimeout((window as any).iletisimTimeout ?? undefined);
                    setIsContactPopupOpen(true);
                  }}
                  onMouseLeave={() => {
                    (window as any).iletisimTimeout = setTimeout(() => {
                      setIsContactPopupOpen(false);
                    }, 200);
                  }}
                  className="relative cursor-pointer"
                >
                  Bize Ulaşın
                </div>
              </Link>
            </nav>

            {/* Right: Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Language */}
              <button className="flex items-center px-3 h-10 rounded-full text-sm bg-gray-100 hover:bg-gray-200">
                <Image
                  src="/turkish-flag.png"
                  alt="Turkish Flag"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                TR
              </button>

              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <button
                  aria-label="Bildirimler"
                  onClick={() => setShowNotifications((s) => !s)}
                  className="w-10 h-10 rounded-full bg-[#ab1e3b] hover:bg-[#911a33] flex items-center justify-center relative"
                >
                  <Bell size={18} className="text-white" />
                  {notifications.length > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>

                {showNotifications && (
                  <div className="md:mt-5 absolute top-full mt-3 w-[90vw] max-w-sm left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 bg-white/96 backdrop-blur rounded-xl shadow-2xl animate-fade-in z-50">
                    <div className="p-4 font-semibold text-gray-800">Bildirimler</div>
                    <ul className="max-h-60 overflow-y-auto">
                      {notifications.map((note) => (
                        <li key={note.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition">
                          {iconMap[note.type]}
                          <div>
                            <p className="text-sm text-gray-700">{note.message}</p>
                            <span className="text-xs text-gray-400">{formatDate(note.time)}</span>
                          </div>
                        </li>
                      ))}
                      {notifications.length === 0 && (
                        <li className="px-4 py-3 text-sm text-gray-500">Henüz bildirim yok.</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Favorites */}
              <FavoriteButton />

              {/* Mobile Menu */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Menüyü Aç/Kapat"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="backdrop-blur bg-white/97 md:hidden absolute top-full left-0 w-full shadow-xl z-50 px-6 py-6 space-y-4 rounded-b-2xl animate-slide-down">
            <Link href="/" className="block font-medium" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
            <Link href="/#aktif-projeler" className="block font-medium" onClick={() => setMenuOpen(false)}>Projeler</Link>
            <Link href="/about-us" className="block font-medium" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
            <Link href="/n-bulten" className="block font-medium" onClick={() => setMenuOpen(false)}>N Bülten</Link>
            <Link href="/blog" className="block font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link 
              href="/yetkili-satis-agi" 
              className="block font-medium px-3 py-1.5 rounded-full bg-[#ab1e3b] text-white hover:bg-[#911a33] transition w-fit" 
              onClick={() => setMenuOpen(false)}
            >
              Yetkili Satış Ağı
            </Link>
            <Link href="/contact-us" className="block font-medium" onClick={() => setMenuOpen(false)}>İletişim</Link>
          </div>
        )}
      </header>

      {/* Put anchor offsets here so the sticky header doesn't cover hash targets */}
      <style jsx global>{`
        html { scroll-padding-top: ${HEADER_H_DESKTOP}px; }
        [id] { scroll-margin-top: ${HEADER_H_DESKTOP}px; }
        @media (max-width: 767px) {
          html { scroll-padding-top: ${HEADER_H_MOBILE}px; }
          [id] { scroll-margin-top: ${HEADER_H_MOBILE}px; }
        }
      `}</style>
    </>
  );
}
