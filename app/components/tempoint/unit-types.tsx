"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const unitTypes = [
  {
    id: "1+1",
    image: "/tempoint-kat/1+1_71 m┬▓.png",
    details: {
      "Kat Planı ": "1",
    },
  },
  {
    id: "2+1",
    image: "/tempoint-kat/2+1_101 m┬▓.png",
    details: {
      "Kat Planı ": "2",
    },
  },
   {
    id: "2+1-a",
    image: "/tempoint-kat/2+1_115 m┬▓.png",
    details: {
      "Kat Planı ": "3",
    },
  },
  {
    id: "3+1",
    image: "/tempoint-kat/3+1_169 m┬▓.png",
    details: {
      "Kat Planı ": "4",
    },
  },
  {
    id: "4+1",
    image: "/tempoint-kat/4+1_202 m┬▓.png",
    details: {
      "Kat Planı ": "4",
    },
  },
  
  
];



export default function UnitTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUnit = unitTypes[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? unitTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === unitTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12">
      {/* Tabs & Currency Selector */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        {unitTypes.map((unit, index) => (
          <button
            key={unit.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ünite Tipi ${unit.id}`}
            className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition ${
              activeIndex === index
                ? "bg-[#4B3B4E] text-white border-[#4B3B4E]"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {unit.id}
          </button>
        ))}

        {/* Divider */}
        <span className="w-px h-6 bg-gray-300"></span>

        {/* Currency Selector (Optional, can remove if not needed) */}
        <button
          aria-label="Para Birimi Seçici"
          className="flex items-center px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700"
        >
          Daire <span className="ml-1 text-xs text-gray-400">Tipleri</span>
        </button>
      </div>

      {/* Dynamic m² Info */}
      <div className="text-center mb-10 space-y-2">
        {Object.entries(activeUnit.details).map(([key, value]) => (
          <p key={key} className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">{key}:</span> {value}
          </p>
        ))}
      </div>

      {/* Image + Arrows */}
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Önceki Plan"
          className="absolute left-4 md:left-20 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Plan Image */}
        <div className="relative w-200 h-100">
          <Image
            src={activeUnit.image}
            alt={`Ünite Planı ${activeUnit.id}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Sonraki Plan"
          className="absolute right-4 md:right-20 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
