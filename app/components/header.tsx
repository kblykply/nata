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
import FavoriteButton from './FavoriteButton';
import { usePathname } from "next/navigation";





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
  const pathname = usePathname();
const isHomepage = pathname === "/";
const notificationRef = useRef<HTMLDivElement | null>(null);

  // Fetch notifications
      useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setShowNotifications(false);
    }
  };

  const handleScroll = () => {
    setShowNotifications(false);
  };

  document.addEventListener("mousedown", handleClickOutside);
  window.addEventListener("scroll", handleScroll);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



    // Fetch notifications from the API 
   // Fetch notifications function
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

// Call it in a top-level useEffect
useEffect(() => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };




  

  return (
<header className={`fixed top-0 z-[100] w-full shadow-sm transition-all duration-300 backdrop-blur   py-3 md:py-3  
  ${isHomepage ? " bg-white/98  " : "fixed w-full  bg-white shadow-sm sticky top-0 z-[100] bg-white/95"}
`}>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6  ">

      {/* Left: Logo */}
  <div className="flex-shrink-0">
    <Link href="/">
      <Image
        src="/navbarLogo.png"
        alt="NATA Yaşam Logo"
        width={50}
        height={50}
        sizes="(max-width: 768px) 140px, 180px"
        className="w-25 sm:w-48 md:w-[160px] h-auto pb-2"
      />
    </Link>
  </div>

  {/* Center: Navigation */}
  <nav
    className="hidden md:flex flex-1 justify-center space-x-6 text-xs"
    style={{ fontFamily: "Unbounded, sans-serif" }}
  >
    {/* nav items here, unchanged */}
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
        <span className="cursor-pointer font-medium">Bize Ulaşın</span>
      </div>
    </Link>
  </nav>

  {/* Right: Buttons */}
  <div className="flex items-center space-x-2  flex-shrink-0">
    {/* Language */}
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

    {/* Notifications */}
  <div className="relative" ref={notificationRef}>
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
    <div className="backdrop-blur bg-white/96 md:mt-5 absolute top-full mt-3 w-[90vw] max-w-sm left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 bg-white rounded-xl shadow-2xl animate-fade-in z-50">
      <div className="p-4 font-semibold text-gray-800">Bildirimler</div>
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
                {formatDate(note.time)}
              </span>
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
      className="md:hidden w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  </div>
</div>


      {/* Mobile Menu */}
 {menuOpen && (
  <div className="backdrop-blur bg-white/97 md:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50 px-6 py-6 space-y-4 rounded-b-2xl animate-slide-down ">
    <Link href="/" className="block font-medium" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
    <Link href="/projects" className="block font-medium" onClick={() => setMenuOpen(false)}>Projeler</Link>
    <Link href="/about-us" className="block font-medium" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
    <Link href="/contact-us" className="block font-medium" onClick={() => setMenuOpen(false)}>İletişim</Link>
    <Link href="/n-bulten" className="block font-medium" onClick={() => setMenuOpen(false)}>N Bülten</Link>
    <Link href="/blog" className="block font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
  </div>
)}



      
    </header>
  );
}
