"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const unitTypes = [
  {
    id: "1",
    image: "/rams-kat-plan-01.png",
    details: {
     
        "Kat Planları": "1  ",
  
      
    },
  },
  {
    id: "2",
    image: "/rams-kat-plan-02.png",
    details: {
     
    },
  },
  {
    id: "3",
    image: "/rams-kat-plan-03.png",
    details: {
     
    },
  },
  {
    id: "4",
    image: "/rams-kat-plan-04.png",
    details: {
     
    },
  },
  {
    id: "5",
    image: "/rams-kat-plan-05.png",
    details: {
     
    },
  },
  {
    id: "6",
    image: "/rams-kat-plan-06.png",
    details: {
     
    },
  },
  {
    id: "7",
    image: "/rams-kat-plan-07.png",
    details: {
     
    },
  },
  {
    id: "8",
    image: "/rams-kat-plan-08.png",
    details: {
     
    },
  },
  {
    id: "9",
    image: "/rams-kat-plan-09.png",
    details: {
     
    },
  },
  {
    id: "10",
    image: "/rams-kat-plan-10.png",
    details: {
     
    },
  },
  {
    id: "11",
    image: "/rams-kat-plan-11.png",
    details: {
     
    },
  },
  {
    id: "12",
    image: "/rams-kat-plan-12.png",
    details: {
     
    },
  },
  {
    id: "13",
    image: "/rams-kat-plan-13.png",
    details: {
     
    },
  },
  {
    id: "14",
    image: "/rams-kat-plan-14.png",
    details: {
     
    },
  },
  {
    id: "15",
    image: "/rams-kat-plan-15.png",
    details: {
     
    },
  },
  {
    id: "16",
    image: "/rams-kat-plan-16.png",
    details: {
     
    },
  },
  {
    id: "17",
    image: "/rams-kat-plan-17.png",
    details: {
     
    },
  },
  {
    id: "18",
    image: "/rams-kat-plan-18.png",
    details: {
     
    },
  },
  {
    id: "19",
    image: "/rams-kat-plan-19.png",
    details: {
     
    },
  },
  {
    id: "20",
    image: "/rams-kat-plan-20.png",
    details: {
     
    },
  },
  {
    id: "21",
    image: "/rams-kat-plan-21.png",
    details: {
     
    },
  },
  {
    id: "22",
    image: "/rams-kat-plan-22.png",
    details: {
     
    },
  },
  {
    id: "23",
    image: "/rams-kat-plan-23.png",
    details: {
     
    },
  },
  {
    id: "24",
    image: "/rams-kat-plan-24.png",
    details: {
     
    },
  },
  {
    id: "25",
    image: "/rams-kat-plan-25.png",
    details: {
     
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
      {unitTypes.slice(0, 5).map((unit, index) => (
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

  {unitTypes.length > 5 && (
    <button
      onClick={() => setActiveIndex(5)}  // Set to first hidden tab or toggle something
      className="w-10 h-10 rounded-full border bg-white text-gray-700 border-gray-300 flex items-center justify-center text-sm font-medium"
    >
      +{unitTypes.length - 5}
    </button>
  )}
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
