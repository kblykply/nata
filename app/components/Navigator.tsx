"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiSend, FiX } from "react-icons/fi";

const sections = [
  { id: "hero", label: "Proje Hakkında" },
  { id: "life", label: "Yaşam" },
  { id: "near-locations", label: "Konum" },
  { id: "site-plans", label: "Site Planları" },
  { id: "unit-types", label: "Daire Tipleri" },
  { id: "design", label: "Tasarım" },
  { id: "contact", label: "İletişim" },
  { id: "office", label: "Ofis" },
  { id: "boxes", label: "Daha Fazla" },
];

export default function ExpandableNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

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
      }`}
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
                      ? "bg-white  text-black font-semibold"
                      : "hover:bg-white hover:text-gray-900   hover:font-semibold"
                  }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}

        {/* Center Text Pill */}
        <div
          className={`bg-[#5D4B5E] text-white text-sm px-4 py-2 rounded-full whitespace-nowrap overflow-hidden text-ellipsis ml-4 max-w-[140px]`}
        >
          Ankaranın en gözde projesi Vega Center 2025 yılında tamamlanıyor.
        </div>

        {/* Right Action Button */}
        <div className="relative ml-4">
          <button
            aria-label="Mesaj Gönder"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-600 text-white shadow-md"
          >
            <FiSend size={18} />
          </button>
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-700"></span>
        </div>
      </div>
    </div>
  );
}
