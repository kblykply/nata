"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFire, FaTrain } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

interface Listing {
  link: string;
  type: "standard" | "featured";
  price: string;
  label?: string;
  metro: string;
  time: string;
  stats?: string[];
  footer?: string;
  image: string;
  imageAlt?: string;
  highlight?: string;
  extra?: {
    icon: string;
    label: string;
  }[];
}


const listings: Listing[] = [

  
  {
    link: "/anteres",
    type: "featured",
    price: "ANTARES KONUTLARI 1. ETAP",
    highlight : "Tamamlandı",
    metro: "Otobüs Durağına ",
    time: "2 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/r-antares-1.jpg",
    imageAlt: "/ANTARES KONUTLARI-ARKA.jpg",
    extra: [
      { icon: "", label: "840 Daire" },
      { icon: "", label: "AVM Yanında" },
      { icon: "", label: "YHT Garı'na 5 dakika uzaklık" },
    ],
  },
  {
    link: "/vega-cadde",
    type: "featured",
    price: "VEGA CADDE",
    highlight : "Tamamlandı",
    metro: "Metro Durağına ",
    time: "8 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/vega-cadde.jpg",
    imageAlt: "/vega-cadde-avm-pin.jpeg",
    extra: [
      { icon: "", label: "161 Adet Konut&Ofis" },
      { icon: "", label: "Vega AVM" },
      { icon: "", label: "Cazip Yatırım Fırsatı" },
    ],
  },
  {
    link: "/tempoint",
    type: "featured",
    price: "TEMPOINT KONUTLARI",
    highlight : "Tamamlandı",
    metro: "Metro Durağına ",
    time: "10 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/tempoint-konutlari.jpg",
    imageAlt: "/tempoint-konutları-pin.jpeg",
    extra: [
      { icon: "", label: "TEM Otoyolu Üzerinde" },
      { icon: "", label: "Vega AVM" },
      { icon: "", label: "Can Alıcı Lokasyon" },
    ],
  },
  {
    link: "/incek",
    type: "featured",
    price: "NATA İNCEK KONUTLARI",
    highlight : "Tamamlandı",
    metro: "Turkent Metro Durağına ",
    time: "1 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/nata-incek-konutlari.jpg",
    imageAlt: "/nata-incek-konutları-pin.jpeg",
    extra: [
      { icon: "", label: "Mogan Gölü Manzarası" },
      { icon: "", label: "12.000 m2 Yeşil Alan" },
      { icon: "", label: "Ferah, Şık ve Kullanışlı" },
    ],
  },
  {
    link: "/vega-konut-kuleleri",
    type: "featured",
    price: "NATA VEGA KONUT KULELERİ",
    highlight : "Tamamlandı",
    metro: "Metro Durağına ",
    time: "3 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/nata-vega-konut-kuleleri.jpg",
    imageAlt: "/nata-incek-konutları-pin.jpeg",
    extra: [
      { icon: "", label: "Nata Vega Outlet" },
      { icon: "", label: "Aquavega Akvaryum" },
      { icon: "", label: "Kusursuz Mimari" },
    ],
  },


  
  
  
];


export default function ProjectListingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

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

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-2xl  text-center    font-semibold mb-10">Tamamlanan<span className="text-[#ab1e3b]"> Projeler</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto relative">

        
        {listings.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const imgSrc = isHovered && showAltImage && item.imageAlt ? item.imageAlt : item.image;
          console.log(imgSrc);

          return (
            <Link href={item.link} key={index} className="block h-full">
              <div
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPopupIndex(null);
                }}
                className={`relative rounded-md overflow-hidden shadow-sm transition cursor-pointer flex flex-col ${
                  item.type === "featured"
                    ? "bg-black text-white min-h-[495px]"
                    : "bg-white"
                }`}
              >
              {item.type === "featured" && (
<>
  <Image
    src={item.image}
    alt="Main Project"
    fill
    className={`object-cover object-center z-0 transition-opacity duration-500 ${
      hoveredIndex === index ? "opacity-0" : "opacity-100"
    }`}
  />
  {item.imageAlt && (
    <Image
      src={item.imageAlt}
      alt="Alt Project"
      fill
      className={`object-cover object-center z-0 absolute inset-0 transition-opacity duration-500 ${
        hoveredIndex === index ? "opacity-100" : "opacity-0"
      }`}
    />
  )}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
</>
)}

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
                    </div>
                  ) : (
                    <>
               <div className="relative w-full aspect-[4/3]">
<Image
  src={item.image}
  alt="Main Project"
  fill
  className={`object-cover object-center transition-opacity duration-500 ${
    hoveredIndex === index ? "opacity-0" : "opacity-100"
  }`}
/>
{item.imageAlt && (
  <Image
    src={item.imageAlt}
    alt="Alt Project"
    fill
    className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${
      hoveredIndex === index ? "opacity-100" : "opacity-0"
    }`}
  />
)}
</div>

                      <div className="p-4 space-y-2">
                        <h3 className="text-xl font-semibold leading-snug text-gray-800">{item.price}</h3>
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
                      </div>
                    </>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}