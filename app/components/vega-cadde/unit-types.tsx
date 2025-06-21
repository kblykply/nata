"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";




const unitTypes = [
  {
    id: "1+1",
    image: "/MEGA1453-KATPLANI-01.png",
    details: {
      "Kat Planı ": "1",
    },
  },
  {
    id: "2+1",
    image: "/MEGA1453-KATPLANI-02.png",
    details: {
      "Kat Planı ": "2",
    },
  },
  {
    id: "3+1",
    image: "/MEGA1453-KATPLANI-03.png",
    details: {
      "Kat Planı ": "3",
    },
  },
  
  
];



export default function UnitTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUnit = unitTypes[activeIndex];
  const [showLightbox, setShowLightbox] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? unitTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === unitTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12 pt-40">



{showLightbox && (
  <div
    className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
    onClick={() => setShowLightbox(false)}
  >
    <div
      className="relative w-[90vw] max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowLightbox(false)}
        className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition"
        aria-label="Kapat"
      >
        <FiX size={24} />
      </button>

      <div className="relative w-full h-[70vh]">
        <Image
          src={unitTypes[activeIndex].image}
          alt={`Büyütülmüş Ünite Planı ${unitTypes[activeIndex].id}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
)}



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
        <button
  onClick={() => setShowLightbox(true)}
  className="relative w-[300px] md:w-[500px] aspect-[4/3] rounded overflow-hidden focus:outline-none"
  aria-label="Kat planını büyüt"
>
  <Image
    src={activeUnit.image}
    alt={`Ünite Planı ${activeUnit.id}`}
    fill
    className="object-contain"
  />
</button>


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
