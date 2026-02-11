"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FiMenu, FiSend, FiX } from "react-icons/fi";

const sections = [
  { id: "proje-hakkinda", key: "aboutProject" },
  { id: "ozellikler", key: "features" },
  { id: "konum", key: "location" },
  { id: "genel-plan", key: "masterPlan" },
  { id: "mimarlik", key: "architecture" },
  { id: "iyilestirme", key: "improvement" },
  { id: "daha-fazlasi", key: "more" },
];

export default function ExpandableNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const tNav = useTranslations("navigator");

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "w-[90%] max-w-7xl" : "w-72"
      }`}
    >
      <div
        className={`flex items-center bg-gray-700 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "px-6 py-3 justify-between" : "px-3 py-2 justify-center"
        }`}
      >
        {/* Left Side */}
        <div className={`flex items-center ${isOpen ? "space-x-6" : "space-x-3"}`}>
          {isOpen ? (
            <>
              {/* Navigation Links */}
              <div className="flex space-x-6 text-white text-sm">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="hover:underline"
                  >
                    {tNav(section.key)}
                  </a>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label={tNav("closeMenu")}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white"
              >
                <FiX size={16} />
              </button>
            </>
          ) : (
            <>
              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label={tNav("openMenu")}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white text-white"
              >
                <FiMenu size={18} />
              </button>
            </>
          )}
        </div>

        {/* Center Text Pill */}
        <div
          className={`bg-[#5D4B5E] text-white text-sm ${
            isOpen ? "px-6" : "px-3"
          } py-2 rounded-full whitespace-nowrap overflow-hidden text-ellipsis ${
            isOpen ? "max-w-md" : "max-w-[100px]"
          } ml-4`}
        >
          {tNav("tagline")}
        </div>

        {/* Right Action Button */}
        <div className="relative ml-4">
          <button
            aria-label={tNav("sendMessage")}
            className={`${
              isOpen ? "w-11 h-11" : "w-9 h-9"
            } flex items-center justify-center rounded-full bg-gray-700 text-white shadow-md`}
          >
            <FiSend size={18} />
          </button>
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
}
