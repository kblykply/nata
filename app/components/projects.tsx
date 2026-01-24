"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { FaFire, FaTrain, FaWhatsapp } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { SlidersHorizontal, X } from "lucide-react";

interface Listing {
  id: string; 
    title?: string;
  price: string;
  currency?: string;
  location?: string;
  type: "standard" | "featured";
  specs?: string[];
  stats?: string[];
  metro?: string;
  time?: string;
  footer?: string;
  image: string;
  imageAlt?: string;
  label?: string;
  highlight?: string;
  extra?: {
    icon: string;
    label: string;
  }[];
  link: string;
  progress?: number; // percentage from 0 to 100
}

const allListings: Listing[] = [
    
  {
    id: "10",
    link: "/vega-center",
    type: "standard",
    price: "VEGA CENTER",
    label: "Hemen Teslim Hemen Tapu",
    metro: "Bilkent Metro",
    time: "5 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm ve Ofis Konsepti"],
    footer: "Çankaya",
    image: "/vega-center/DJI_0380.webp",
    imageAlt: "/vega-center/DJI_0380.webp",
    progress: 100 
   
  },
  
  {
       id: "22",

    link: "/rams-garden",
    type: "featured",
price: "RAMS GARDEN\nBAHÇELİEVLER",
    highlight: "Hemen Teslim ve Tapu",
    metro: "Haznedar Metro",
    time: "9 dakika mesafede",
    stats: ["8.815 m²", "796 daire"],
    footer: "Bahçelievler",
    image: "/RamsPArkBAhcelievler.webp",
    imageAlt: "/RamsPArkBAhcelievler.webp",

     extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Ticari Alanlar" },
      { icon: "", label: "Premium Hayat " },
    ],
        progress: 100

  },
  
  
  {
    id: "11",
    link: "/goat-villas",
    type: "standard",
    price: "GOAT VILLAS\nBilkent",
    metro: "Bilkent Metro",
    time: "9 dakikada mesafede",
    image: "/GOAT VILLAS BİLKENT-ON.jpg",
    imageAlt: "/GOAT VILLAS BİLKENT-ON.jpg",
    label: "2026 3. Çeyrek Teslim",
    footer: "Bilkent",
    stats: [ "Villa Projesi"],
    progress: 95
  },
  {
    id: "12",
    link: "/vega-otonomi",
    type: "standard",
    price: "VEGA OTONOMİ",
    label: "Hemen Teslim ve Tapu",
    metro: "Fatih Metro",
    time: "4 dakika mesafede",
    stats: ["490m² ye kadar", "207 bölüm"],
    footer: "Plevne",
    image: "/otonomiMainRender2.jpg",
    imageAlt: "/otonomiMainRender2.jpg",
    progress: 100
  },
  {
    id: "13",
    link: "/mega-1453",
    type: "featured",
    price: "MEGA 1453",
    metro: "Hastane Metro",
    time: "11 dakika mesafede",
    stats: ["70.000 m²", "715 konut"],
    footer: "Yenimahalle",
    image: "/MEGA 1453 - ON.jpg",
    imageAlt: "/MEGA 1453 - ON.jpg",
    highlight: "2027 1. Çeyrek Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Rezidans Projesi" },
      { icon: "", label: "Ulaşım Imkanları" },
    ],
    progress: 50
  },

  {
    id: "9",
    link: "/hityenibatiplus",
    type: "standard",
    price: "YENİ BATI PLUS",
    label: "Hemen Teslim ve Tapu",
    metro: "Haznedar Metro",
    time: "10 dakika mesafede",
    stats: ["43.500 m²", "405 konut + 5 Ticari Alan "],
    footer: "Yeni Batı Mahallesi",
    image: "/yenibatıplusdikeygörsel.jpg",
    imageAlt: "/yenibatıplusdikeygörsel.jpg",
     progress: 100 
  },
  {
    id: "15",
    link: "/hityenibati",
    type: "standard",
    price: "HİTYENİBATI",
    metro: "İstanbul Yolu Metro",
    time: "8 dakika mesafede",
    image: "/HİTYENİBATI-ON.jpg",
    imageAlt: "/HİTYENİBATI-ON.jpg",
    footer: "Yeni Batı Mahallesi",
    stats: ["1+1 ve 2,5+1 daireler", "190 adet konut"],
    label: "Hemen Teslim ve Tapu",
    progress: 100
  },
  {
    id: "16",
    link: "/mega-sasmaz",
    type: "featured",
    price: "MEGA ŞAŞMAZ",
    label: "Hemen Teslim ve Tapu",
    metro: "Ümitköy Metro",
    time: "8 dakika mesafede",
    stats: ["160.000 m²", "700 bölüm"],
    footer: "Şaşmaz",
    image: "/MEGA SASMAZ - ON.jpg",
    imageAlt: "/MEGA SASMAZ - ON.jpg",
    highlight: "Hemen Teslim ve Tapu",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Sanayi Bölgesi" },
      { icon: "", label: "Business Class" },
    ],

    progress: 100
  },  {
    id: "14",
    link: "/anteres",
    type: "standard",
    price: "ANTARES KONUTLARI 2. ETAP",
    metro: "Yenimahalle Metro",
    time: "11 dakika mesafede",
    image: "/ANTARES KONUTLARI-ON.jpg",
    footer: "Yenimahalle",
    imageAlt: "/ANTARES KONUTLARI-ON.jpg",
    highlight: "Hemen Teslim ve Tapu",
    label: "Hemen Teslim ve Tapu",
    extra: [
      { icon: "", label: "90 Konut" },
      { icon: "", label: "52.515 ₺ / ay" },
      { icon: "", label: "İş & Yaşam" },
    ],
    stats: ["3. Çeyrek 2025", "Konut ve Ticari Alan"],


    progress: 100 
  },
    
    
    
  ];

export default function ProjectListingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const router = useRouter();
  const [compareSelection, setCompareSelection] = useState<
    [Listing | null, Listing | null]
  >([null, null]);
  const [selectedProject, setSelectedProject] = useState("Tümü");
  const [selectedLocation, setSelectedLocation] = useState("Tümü");
  const [showAllFilters, setShowAllFilters] = useState(false);

  const formatOptionLabel = (value?: string) =>
    value ? value.replace(/\n/g, " ") : "";

  const locationOptions = [
    "Tümü",
    ...Array.from(
      new Set(allListings.map((item) => item.footer).filter(Boolean))
    ),
  ];
  const projectOptions = [
    "Tümü",
    ...Array.from(new Set(allListings.map((item) => item.price).filter(Boolean))),
  ];

  const resetFilters = () => {
    setSelectedProject("Tümü");
    setSelectedLocation("Tümü");
  };

  const filteredListings = allListings.filter((item) => {
    const projectMatch =
      selectedProject === "Tümü" || item.price === selectedProject;
    const locationMatch =
      selectedLocation === "Tümü" || item.footer === selectedLocation;

    return projectMatch && locationMatch;
  });
  const isCompared = (item: Listing) =>
    compareSelection.some((selected) => selected?.id === item.id);
  const compareCount = compareSelection.filter(Boolean).length;
  const hasCompareSelection = compareSelection.some(Boolean);
  const shouldHideOthers = compareCount === 2;
  const visibleListings = shouldHideOthers
    ? filteredListings.filter((item) => isCompared(item))
    : filteredListings;
  const compareLeft = shouldHideOthers ? visibleListings[0] : null;
  const compareRight = shouldHideOthers ? visibleListings[1] : null;
  const formatLine = (value?: string) =>
    value ? value.replace(/\n/g, " ") : "-";
  const formatArray = (value?: string[]) =>
    value && value.length > 0 ? value.join(", ") : "-";
  const formatExtra = (value?: { label: string }[]) =>
    value && value.length > 0 ? value.map((item) => item.label).join(", ") : "-";
  const comparisonRows =
    compareLeft && compareRight
      ? [
          {
            label: "Proje",
            left: formatLine(compareLeft.price),
            right: formatLine(compareRight.price),
          },
          {
            label: "Teslim",
            left: formatLine(compareLeft.label || compareLeft.highlight),
            right: formatLine(compareRight.label || compareRight.highlight),
          },
          {
            label: "Metro",
            left: formatLine(compareLeft.metro),
            right: formatLine(compareRight.metro),
          },
          {
            label: "Mesafe",
            left: formatLine(compareLeft.time),
            right: formatLine(compareRight.time),
          },
          {
            label: "Özellikler",
            left: formatArray(compareLeft.stats),
            right: formatArray(compareRight.stats),
          },
          {
            label: "Lokasyon",
            left: formatLine(compareLeft.footer),
            right: formatLine(compareRight.footer),
          },
          {
            label: "İlerleme",
            left:
              compareLeft.progress !== undefined
                ? `%${compareLeft.progress}`
                : "-",
            right:
              compareRight.progress !== undefined
                ? `%${compareRight.progress}`
                : "-",
          },
          {
            label: "Ekstra",
            left: formatExtra(compareLeft.extra),
            right: formatExtra(compareRight.extra),
          },
        ]
      : [];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const isRight = x > bounds.width / 2;
    setHoveredIndex(index);
    setShowAltImage(isRight);
  };

  const handlePlusClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupIndex(index);
  };

  const handleCompareToggle = (
    e: React.MouseEvent,
    item: Listing
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCompareSelection(([first, second]) => {
      const isFirst = first?.id === item.id;
      const isSecond = second?.id === item.id;

      if (isFirst) {
        return [second ?? null, null];
      }

      if (isSecond) {
        return [first ?? null, null];
      }

      if (!first) {
        return [item, second ?? null];
      }

      if (!second) {
        return [first, item];
      }

      return [first, item];
    });
  };


  return (
    <section id="aktif-projeler" className="bg-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto mb-6">
        <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            {projectOptions.map((item) => (
              <option key={item} value={item}>
                {formatOptionLabel(item)}
              </option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            {locationOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowAllFilters(true)}
            className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-[#ab1e3b] font-medium"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Tüm Filtreler
          </button>
          {hasCompareSelection && (
            <button
              onClick={() => setCompareSelection([null, null])}
              className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
            >
              Karşılaştırmayı temizle
            </button>
          )}
        </div>

        {showAllFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-6 rounded-xl relative">
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={() => setShowAllFilters(false)}
                aria-label="Filtreleri kapat"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold mb-4">Tüm Filtreler</h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Proje
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {projectOptions.map((project) => (
                      <option key={project} value={project}>
                        {formatOptionLabel(project)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Lokasyon
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setShowAllFilters(false)}
                  className="w-full mt-4 py-2 rounded-lg bg-[#ab1e3b] text-white text-sm font-medium"
                >
                  Uygula
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center text-sm mt-2">
          <button
            onClick={resetFilters}
            className="text-gray-500 hover:underline"
          >
            Tüm filtreleri temizle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto relative">
        {visibleListings.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const imgSrc = isHovered && showAltImage && item.imageAlt ? item.imageAlt : item.image;
          const compared = isCompared(item);
          return (
            <Fragment key={item.id}>
              {shouldHideOthers && comparisonRows.length > 0 && index === 1 && (
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm h-fit">
                  <div className="space-y-3 text-xs text-gray-700">
                    {comparisonRows.map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-2 items-start">
                        <div className="text-right text-gray-800">{row.left}</div>
                        <div className="text-center text-gray-500 font-semibold">
                          {row.label}
                        </div>
                        <div className="text-left text-gray-800">{row.right}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div
                key={item.id}
              role="link"
              tabIndex={0}
              onClick={() => router.push(item.link)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(item.link);
                }
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setPopupIndex(null);
              }}
              className={`block h-full relative rounded-md overflow-hidden shadow-sm transition cursor-pointer flex flex-col ${
                item.type === "featured"
                  ? "bg-black text-white min-h-[540px]"
                  : "bg-white"
              }`}
            >
                {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={(e) => handleCompareToggle(e, item)}
            className={`px-3 py-1 rounded-full text-[10px] font-medium transition ${
              compared
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {compared ? "Seçildi" : "Karşılaştır"}
          </button>
        </div>
        <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2 items-end">
          <Link
                    href="/contact-us"
                    onClick={(e) => e.stopPropagation()}
                    className="w-11 h-11 bg-[#ab1e3b] rounded-full flex items-center justify-center text-[10px] text-white hover:bg-[#961a33] transition"
                    title="Fiyat Al"
                  >
                    Fiyat Al
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=905017111818&text=${encodeURIComponent(
                      `Merhaba, ${item.price.replace(/\n/g, " ")} projesi hakkında detaylı bilgi almak istiyorum.`
                    )}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>


                {/* Image */}

                {item.type === "featured" ? (
                  <>
                    <Image
                      src={item.image}
                      alt="Main Project"
                      fill
                      className={`object-cover object-center z-0 transition-opacity duration-500 ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {item.imageAlt && (
                      <Image
                        src={item.imageAlt}
                        alt="Alt Project"
                        fill
                        className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
                  </>
                ) : (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt="Main Project"
                      fill
                      className={`object-cover object-center transition-opacity duration-500 ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {item.imageAlt && (
                      <Image
                        src={item.imageAlt}
                        alt="Alt Project"
                        fill
                        className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className={`relative z-20 p-4 flex flex-col justify-between flex-grow ${
                  item.type === "featured" ? "" : "p-0"
                }`}>
                  {item.type === "featured" ? (
                    <div>
                      {item.price.split("\n").map((line, idx) => (
                        <h3 key={idx} className="text-lg font-semibold leading-tight">
                          {line}
                        </h3>
                      ))}
                      <p className="flex items-center gap-1 mt-2 text-sm">
                        <span className="bg-green-500 px-2 py-0.5 rounded-full">M</span>
                        {item.metro} · {item.time}
                      </p>

                    {item.progress !== undefined && (
  <div className="mt-3 px-2 py-2 rounded-md bg-white/40 backdrop-blur-sm w-fit">
    <div className="flex flex-col items-start">
      <p className="text-[10px] text-gray-800 mb-1">İnşaat ilerleme Oranı</p>
      <div className="w-45 h-1.5 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="bg-green-600 h-full transition-all"
          style={{ width: `${item.progress}%` }}
        />
      </div>
      <p className="text-[10px] mt-1 text-gray-800">{item.progress}%</p>
    </div>
  </div>
)}


                    </div>
                  ) : (
                    <div className="p-4 space-y-2">
                      <h3 className="text-l font-semibold leading-snug text-gray-800">{item.price}</h3>
                      {item.label && (
                        <span className="text-xs bg-[#ab1e3b] text-white px-3 py-1 rounded-full inline-block">
                          {item.label}
                        </span>
                      )}
                      <p className="text-sm flex items-center gap-2 text-gray-700">
                        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">M</span>
                        <span>{item.metro}</span>
                        <FaTrain className="text-gray-400" />
                        <span>{item.time}</span>
                      </p>
                      <div className="flex gap-2 text-xs text-gray-600">
                        {item.stats?.map((stat, idx) => (
                          <span key={idx} className="px-2 py-0.5 border rounded-full">
                            {stat}
                          </span>
                        ))}
                      </div>
                      {item.footer && (
                        <div className="text-sm mt-2 text-gray-500">{item.footer}</div>
                      )}


{item.progress !== undefined && (
  <div className="mt-2 flex flex-col items-start">
    <p className="text-[10px] text-gray-500 mb-1">İnşaat İlerleme Oranı</p>
    <div className="w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="bg-green-600 h-full transition-all"
        style={{ width: `${item.progress}%` }}
      />
    </div>
    <p className="text-[10px] mt-1 text-gray-500">{item.progress}%</p>
  </div>
)}





                    </div>
                  )}



                  {item.type === "featured" && (
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {item.highlight && (
                        <div className="inline-flex bg-[#ab1e3b] text-white font-normal text-sm px-3 py-1 rounded-full items-center gap-1">
                          <FaFire className="text-xs" />
                          {item.highlight}
                        </div>
                      )}
                      <div
                        className="inline-flex bg-[#ab1e3b] text-white text-sm px-3 py-1 rounded-full items-center gap-1 cursor-pointer"
                        onClick={(e) => handlePlusClick(e, index)}
                      >
                        <span>+3</span>
                        <span className="ml-2">
                          <FiPlus />
                        </span>
                      </div>
                    </div>
                  )}

                  

                  {item.type === "featured" && popupIndex === index && (
                    <div className="absolute right-4 bottom-12 w-64 bg-[#4A4A4A] text-white rounded-2xl shadow-xl p-4 z-30 space-y-2">
                      {item.extra?.map((info, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 g-[#5C5C5C] px-3 py-1.5 rounded-full text-sm"
                        >
                          <span>{info.icon}</span>
                          <span className="whitespace-nowrap">{info.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
