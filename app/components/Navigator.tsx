"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiSend, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const sections = [
  { id: "hero", label: "Proje Hakkında" },
  { id: "life", label: "Yaşam" },
  { id: "near-locations", label: "Konum" },
  { id: "unit-types", label: "Daire Tipleri" },
  { id: "design", label: "Galeri" },
  { id: "contact", label: "İletişim" },
  { id: "boxes", label: "Daha Fazla" },
];



const sectionLinks: Record<string, { path: string; mapUrl: string }> = {
  "vega-center": {
    path: "/vega-center",
    mapUrl: "https://www.google.com/maps/place/Vega+Center/@39.913981,32.7625316,17z/data=!3m1!4b1!4m6!3m5!1s0x14d3495a37d70cfb:0x54e3fc397d53b890!8m2!3d39.913977!4d32.767145!16s%2Fg%2F11tx5y1533?hl=tr-TR&entry=ttu",
  },
  "goat-villas": {
    path: "/goat-villas",
    mapUrl: "https://www.google.com/maps/place/Goat+Villas+Bilkent/@39.8525461,32.7545929,17z/data=!3m1!4b1!4m6!3m5!1s0x14d347717a01b1a5:0xfc13ce5bdda407d2!8m2!3d39.852542!4d32.7571678!16s%2Fg%2F11vt60qlp2?entry=ttu",
  },
  "mega-1453": {
    path: "/mega-1453",
    mapUrl: "https://www.google.com/maps/place/Mega+1453/@39.9472702,32.7705083,17z/data=!3m1!4b1!4m6!3m5!1s0x14d349c72f27b857:0x9205b1baf4d62064!8m2!3d39.9472661!4d32.7730832!16s%2Fg%2F11y98xmm55?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  },
  "rams-garden": {
    path: "/rams-garden",
    mapUrl:
      "https://www.google.com/maps/place/RAMS+Garden+Bah%C3%A7elievler/@41.0065839,28.8782956,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb30f4023e7b:0xf5f3f7cfbc589890!8m2!3d41.0065799!4d28.8808705!16s%2Fg%2F11s5wmry88?hl=tr-TR&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  "anteres": {
    path: "/anteres",
    mapUrl:
      "https://www.google.com/maps/place/Antares+Konutlar%C4%B1/@39.9711085,32.8190775,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14d34c1c6792ff31:0x8b5302ae1c674e58!8m2!3d39.9711085!4d32.8190775!16s%2Fg%2F11b7q9jf5y?hl=tr-TR&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  "vega-otonomi": {
    path: "/vega-otonomi",
    mapUrl: "https://www.google.com/maps/place/Vega+Otonomi/@39.9724471,32.5965763,17z/data=!3m1!4b1!4m5!3m4!1s0x14d331ff0a9f2d6b:0xccbdf1fcb9489667!8m2!3d39.9726816!4d32.5987786?hl=tr-TR",
  },
  "mega-sasmaz": {
    path: "/mega-sasmaz",
    mapUrl: "https://www.google.com/maps/place/Mega+%C5%9Ea%C5%9Fmaz/@39.9286341,32.7198958,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14d347ee37df85e5:0x41d15ac7bb58e9b!8m2!3d39.9286341!4d32.7198958!16s%2Fg%2F11s6wssnp_?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  "hityenibati": {
    path: "/hityenibati",
    mapUrl: "https://www.google.com/maps/place/H%C4%B0TYEN%C4%B0BATI/@39.9840952,32.6562482,17z/data=!3m1!4b1!4m6!3m5!1s0x14d3374b4e835305:0xe0b0fbf1e5cad35d!8m2!3d39.9840911!4d32.6588231!16s%2Fg%2F11vlsf8psz?hl=tr-TR&entry=ttu",
  },
  "vega-cadde": {
    path: "/vega-cadde",
    mapUrl: "https://www.google.com/maps/place/Vega+Cadde+AVM/@39.9458897,32.7133349,17z/data=!3m1!4b1!4m5!3m4!1s0x14d337f74b3df793:0xee0fdaaae05638ec!8m2!3d39.9458856!4d32.7155236?hl=tr-TR",
  },
  "tempoint-konutlari": {
    path: "/tempoint",
    mapUrl: "https://www.google.com/maps/place/Tempoint+Konutlar%C4%B1/@41.0927611,28.9011686,790m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cab1aa0a102605:0x3535c72ca94f964f!8m2!3d41.0927571!4d28.9037435!16s%2Fg%2F11g6wb7_q2?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  "incek": {
    path: "/incek",
    // Based on Yandex coordinates (39.820070, 32.771799):
    mapUrl:
      "https://www.google.com/maps/place/Nata+%C4%B0ncek+Konutlar%C4%B1/@39.8203951,32.7712204,403m/data=!3m1!1e3!4m14!1m7!3m6!1s0x14d341228b217a1b:0x24f86bfeee2276bc!2sNata+%C4%B0ncek+Konutlar%C4%B1!8m2!3d39.820393!4d32.7725079!16s%2Fg%2F11c1xhc1qm!3m5!1s0x14d341228b217a1b:0x24f86bfeee2276bc!8m2!3d39.820393!4d32.7725079!16s%2Fg%2F11c1xhc1qm?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  "vega-konut-kuleleri": {
    path: "/vega-konut-kuleleri",
    // Transit info confirms its location in Mamak, Ankara:
    mapUrl:
      "https://www.google.com/maps/place/Nata+Vega+Konut+Kuleleri/@39.8904937,32.9312976,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14d35051be4f25db:0xf931f0881a15c496!8m2!3d39.8904896!4d32.9338725!16s%2Fg%2F11c0vy_395?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
};






export default function ExpandableNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname(); // e.g. "/rams-garden"
const slug = pathname.replace("/", "").split("?")[0]; // clean slug like "rams-garden"
const mapUrl = sectionLinks[slug]?.mapUrl || "#";     // default fallback "#"

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
  <div
  className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
    isOpen ? "w-[90%] max-w-7xl" : "w-72"
  } hidden sm:block`}
>
      <div
        className={`flex items-center bg-gray-700 rounded-full shadow-lg transition-all duration-300 ease-in-out px-4 py-2`}
      >
        {/* Left Side */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white text-white"
        >
          {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        {/* Navigation Links (Only When Open) */}
        {isOpen && (
          <div className="flex space-x-4 text-gray-200 text-sm ml-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center px-3 py-1 rounded-full transition-all duration-200
                  ${
                    activeSection === section.id
                      ? "bg-white  text-black "
                      : "hover:bg-white hover:text-gray-900 "
                  }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}

        {/* Center Text Pill */}
       <div
  className={`bg-[#5D4B5E] text-white text-sm px-4 py-2 rounded-full ml-4 transition-all duration-300 ${
    isOpen
      ? 'max-w-none whitespace-normal'
      : 'max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis'
  }`}
>
  NATA Yaşam, yaşamın kalbinde, konforun zirvesinde.
</div>

      {/* Right Action Button */}
<div className="relative ml-4">
  <a
    href={mapUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Haritada Gör"
  >
    <button
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-600 text-white shadow-md"
    >
      <FiSend size={18} />
    </button>
  </a>
  <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-700"></span>
</div>



      </div>
    </div>
  );
}
