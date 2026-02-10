"use client";

import { useFavorites } from "@/app/contexts/FavoritesContext";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { FaFire, FaMapMarkerAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface Listing {
  id: string;
  title: string;
  price: string;
  currency?: string;
  location?: string;
  type: "standard" | "featured";
  specs?: string[];
  metro?: string;
  time?: string;
  footer?: string;
  image: string;
  imageAlt?: string;
  label?: string;
  highlight?: string;
  stats?: string[];

  extra?: {
    icon: string;
    label: string;
  }[];
  link: string;
  
}

	  const allListings: Listing[] = [
    // İkinci El Listings (IDs 1–8) 
    {
       id: "1",
      title: "Koru Konfor",
      price: "Etimesgut'ta Villa",
      currency: " ",
      location: "Etimesgut/Ankara",
      type: "standard",
      specs: ["Villa", "350 m²", "3 Katlı"],
      image: "/korubirincikat.jpg",
      imageAlt: "/koru-map.png",
      link: "/koru-konfor-20"
    },
    {
             id: "2",

      title: "Natura İncek",
      price: "Ankara Gölbaşı'nda 2+1 Daire",
      currency: "",
      location: "Gölbaşı/Ankara",
      type: "standard",
      specs: ["2+1", "90 m²", "Fransız Balkon"],
      image: "/siteplans/naturaikiartibir.png",
      imageAlt: "/natura-map.png",
      link: "/natura-20"
    },
    {
             id: "3",
      title: "Prime Oran",
      price: "Çankaya'da 2+1 Daire",
      currency: "",
      location: "Çankaya/Ankara",
      type: "standard",
      specs: ["2+1", "117 m²", "31. Kat"],
      image: "/siteplans/primeoranikiartibir.png",
      imageAlt: "/prime-map.png",
      link: "/prime-oran-21"
    },
      {
       id: "4",
      title: "Koru Konfor",
      price: "Etimesgut'ta Villa",
      currency: " ",
      location: "Etimesgut/Ankara",
      type: "standard",
      specs: ["Villa", "350 m²", "3 Katlı"],
      image: "/korubirincikat.jpg",
      imageAlt: "/koru-map.png",
      link: "/koru-konfor-21"
    },
    {
             id: "5",

      title: "Natura İncek",
      price: "Gölbaşı'nda 2+1 Daire",
      currency: "",
      location: "Gölbaşı/Ankara",
      type: "standard",
      specs: ["2+1", "90 m²", "Dubleks"],
      image: "/siteplans/naturaikiartibirdublex.png",
      imageAlt: "/natura-map.png",
      link: "/natura-21"
    },
    
   
    {
             id: "8",

      title: "Prime Oran",
      price: "Çankaya'da 3+1 Daire",
      currency: "",
      location: "Çankaya/Ankara",
      type: "standard",
      specs: ["3+1", "144 m²", "TIP B8"],
      image: "/siteplans/primeoranucartibir.png",
      imageAlt: "/prime-map.png",
      link: "/prime-oran-20"
    },
    // Tamamlanan Projeler Listings (IDs 9–16)
  {
    id: "9",
    title: "RAMS GARDEN BAHÇELİEVLER",
    link: "/rams-garden",
    type: "standard",
    price: "RAMS GARDEN",
    label: "Hemen Teslim",
    metro: "Haznedar Metro",
    time: "9 dakika mesafede",
    stats: ["8.815 m²", "796 daire"],
    footer: "Bahçelievler",
    image: "/RAMS GARDEN - ON.jpg",
    imageAlt: "/RAMS GARDEN - ARKA.jpg",
  },
  {
    id: "10",
    title: "VEGA CENTER",
    link: "/vega-center",
    type: "featured",
    price: "VEGA CENTER",
    highlight: "2025 Teslim",
    metro: "Bilkent Metro",
    time: "5 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/VEGA CENTER - ON.jpg",
    imageAlt: "/VEGA CENTER - MAP.jpg",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Açık Avm Konsepti" },
      { icon: "", label: "Business Class" },
    ],
  },
  {
    id: "11",
    title: "GOAT VILLAS Bilkent",
    link: "/goat-villas",
    type: "standard",
    price: "GOAT VILLAS\nBilkent",
    metro: "Bahçe Konutları",
    time: "5 dakikada mesafede",
    image: "/GOAT VILLAS BİLKENT-ON.jpg",
    imageAlt: "/GOAT VILLAS BİLKENT-ARKA.jpg",
    label: "2025 Teslim",
    footer: "Bilkent",
    stats: ["3. Çeyrek 2025", "Villa Projesi"],
  },
  {
    id: "12",
    title: "VEGA OTONOMI",
    link: "/vega-otonomi",
    type: "standard",
    price: "VEGA OTONOMI",
    label: "Hemen Teslim",
    metro: "Fatih Metro",
    time: "4 dakika mesafede",
    stats: ["490m² ye kadar", "207 bölüm"],
    footer: "Plevne",
    image: "/otonomiMainRender2.jpg",
    imageAlt: "/OTONOMI - ARKA.jpg",
  },
  {
    id: "13",
    title: "MEGA 1453",
    link: "/mega-1453",
    type: "featured",
    price: "MEGA 1453",
    metro: "Hastane Metro",
    time: "11 dakika mesafede",
    stats: ["70.000 m²", "715 konut"],
    footer: "Yenimahalle",
    image: "/MEGA 1453 - ON.jpg",
    imageAlt: "/MEGA 1453 - MAP.jpg",
    highlight: "2026 Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Rezidans Projesi" },
      { icon: "", label: "Ulaşım Imkanları" },
    ],
  },
  {
    id: "14",
    title: "ANTARES KONUTLARI",
    link: "/anteres",
    type: "standard",
    price: "ANTARES KONUTLARI",
    metro: "Yenimahalle Metro",
    time: "11 dakika mesafede",
    image: "/ANTARES KONUTLARI-ON.jpg",
    footer: "Bilkent",
    imageAlt: "/ANTARES KONUTLARI-ARKA.jpg",
    highlight: "Hemen Teslim",
    label: "Hemen Teslim",
    extra: [
      { icon: "", label: "90 Konut" },
      { icon: "", label: "52.515 ₺ / ay" },
      { icon: "", label: "İş & Yaşam" },
    ],
    stats: ["3. Çeyrek 2025", "Villa Projesi"],
  },
  {
    id: "15",
    title: "HİTYENİBATI",
    link: "/hityenibati",
    type: "standard",
    price: "HİTYENİBATI",
    metro: "İstanbul Yolu Metro",
    time: "8 dakika mesafede",
    image: "/HİTYENİBATI-ON.jpg",
    imageAlt: "/HİTYENİBATI-ARKA.jpg",
    footer: "Bilkent",
    stats: ["1+1 ve 2,5+1 daireler", "190 adet konut"],
    label: "2025 Teslim",
  },
  {
    id: "16",
    title: "MEGA ŞAŞMAZ",
    link: "/mega-sasmaz",
    type: "featured",
    price: "MEGA ŞAŞMAZ",
    label: "Hemen Teslim",
    metro: "Ümitköy Metro",
    time: "8 dakika mesafede",
    stats: ["160.000 m²", "700 bölüm"],
    footer: "Şaşmaz",
    image: "/MEGA SASMAZ - ON.jpg",
    imageAlt: "/MEGA SASMAZ - MAP.jpg",
    highlight: "Hemen Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Sanayi Bölgesi" },
      { icon: "", label: "Business Class" },
    ],
  }
    ];
export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<"ikinci-el" | "tamamlanan">("ikinci-el");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const t = useTranslations("favorites");

  const filteredFavorites = allListings.filter((item) => {
    const isInTab =
      (activeTab === "ikinci-el" && parseInt(item.id) <= 8) ||
      (activeTab === "tamamlanan" && parseInt(item.id) > 8);
    return isInTab && favorites.includes(item.id);
  });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    setHoveredIndex(index);
    setShowAltImage(x > bounds.width / 2);
  };

  const handlePlusClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupIndex(index);
  };

  return (
    <section className="bg-white py-12 px-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("ikinci-el")}
          className={`px-5 py-2 rounded-full border ${
            activeTab === "ikinci-el"
              ? "bg-black text-white"
              : "text-black border-gray-300"
          }`}
        >
          {t("secondHand")}
        </button>
        <button
          onClick={() => setActiveTab("tamamlanan")}
          className={`px-5 py-2 rounded-full border ${
            activeTab === "tamamlanan"
              ? "bg-black text-white"
              : "text-black border-gray-300"
          }`}
        >
          {t("completedProjects")}
        </button>
      </div>

      {filteredFavorites.length === 0 ? (
        <p className="text-gray-500">{t("noFavorites")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredFavorites.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const imgSrc =
              isHovered && showAltImage && item.imageAlt
                ? item.imageAlt
                : item.image;

            return activeTab === "ikinci-el" ? (
              <a
                href={item.link}
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white shadow-md rounded-xl overflow-hidden relative transition duration-300"
              >
                <span className="absolute top-4 right-4 bg-[#ab1e3b] text-white text-xs px-4 py-1 rounded-full z-20">
                  {item.label || item.type}
                </span>

                <div className="p-4 space-y-1 z-20 relative">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-md font-medium text-gray-800">{item.price}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-xs text-gray-500" />
                    {item.footer}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {item.stats?.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 border px-3 py-1 rounded-full text-gray-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-70 relative">
                  <Image
                    src={item.image}
                    alt={item.title || ""}
                    fill
                    className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <Image
                    src={item.imageAlt || item.image}
                    alt={`${item.title || "image"} map`}
                    fill
                    className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-3 right-3 z-20">
                  <button
  onClick={(e) => {
    e.preventDefault();
    toggleFavorite(item.id);
  }}
  className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center relative shadow"
  title={isFavorite(item.id) ? t("removeFromFavorites") : t("addToFavorites")}
>
  {/* Ping animation */}
  {isFavorite(item.id) && (
    <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75 animate-ping"></span>
  )}

  {/* Icon */}
  <Image
    src="/favori icon.png"
    alt="Favori"
    width={20}
    height={20}
    className="z-10"
  />
</button>

                </div>
              </a>
            ) : (
              // Original style for Tamamlanan Projeler
              <Link
                href={item.link}
                key={item.id}
                className="block relative group"
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPopupIndex(null);
                }}
              >
                <div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  className={`rounded-md overflow-hidden shadow transition flex flex-col ${
                    item.type === "featured"
                      ? "bg-black text-white min-h-[480px]"
                      : "bg-white"
                  }`}
                >
                  {/* Featured Hover Images */}
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt="Main"
                      fill
                      className={`object-cover transition-opacity duration-500 ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {item.imageAlt && (
                      <Image
                        src={item.imageAlt}
                        alt="Alt"
                        fill
                        className={`object-cover absolute inset-0 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                  </div>

                  <div className="relative z-20 p-4 h-60 flex bg-white text-gray-900 flex-col justify-between flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">{item.price}</h3>
                    <button
  onClick={(e) => {
    e.preventDefault();
    toggleFavorite(item.id);
  }}
  className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center relative shadow"
  title={isFavorite(item.id) ? t("removeFromFavorites") : t("addToFavorites")}
>
  {/* Ping animation */}
  {isFavorite(item.id) && (
    <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75 animate-ping"></span>
  )}

  {/* Icon */}
  <Image
    src="/favori icon.png"
    alt="Favori"
    width={20}
    height={20}
    className="z-10"
  />
</button>

                    </div>

                    {item.label && (
                      <span className="text-xs bg-[#ab1e3b] text-white px-3 py-1 rounded-full inline-block mt-2 w-30">
                        {item.label}
                      </span>
                    )}

                    {item.metro && item.time && (
                      <p className="text-sm mt-2 flex items-center gap-2">
                        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">M</span>
                        {item.metro} • {item.time}
                      </p>
                    )}

                    {item.stats && (
                      <div className="flex gap-2 flex-wrap mt-3 text-xs text-gray-600">
                        {item.stats.map((stat, i) => (
                          <span key={i} className="border px-2 py-1 rounded-full">
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.footer && (
                      <div className="text-sm mt-2 text-gray-500">{item.footer}</div>
                    )}

                    {item.type === "featured" && (
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {item.highlight && (
                          <div className="bg-[#ab1e3b] text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <FaFire className="text-xs" />
                            {item.highlight}
                          </div>
                        )}
                        <div
                          className="bg-[#ab1e3b] text-white text-sm px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer"
                          onClick={(e) => handlePlusClick(e, index)}
                        >
                          +3 <FiPlus />
                        </div>
                      </div>
                    )}

                    {item.type === "featured" && popupIndex === index && item.extra && (
                      <div className="absolute right-4 bottom-14 w-64 bg-[#4A4A4A] text-white rounded-2xl shadow-xl p-4 z-30 space-y-2">
                        {item.extra.map((info, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            {info.icon && <span>{info.icon}</span>}
                            <span>{info.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
