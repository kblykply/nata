"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const unitTypes = [
 {
  id: "1",
  image: "/rams-kat-plan-01.png",
  details: {
    "Kat Planı": "2+1 B Daire Planı",
    "Toplam Bölge": "136,55 m²",
    "Koridor 1": "5,16 m²",
    "Yatak Odası 1": "10,62 m²",
    "Ebeveyn Banyo": "4,25 m²",
    "Mutfak": "10,33 m²",
    "Salon": "24,03 m²",
    "Antre": "6,66 m²",
    "Ebeveyn Yatak Odası": "17,34 m²",
    "Genel Banyo 1": "4,08 m²",
    "Teras": "17,66 m²",
    "Bahçe": "35,45 m²",
    "Çamaşır Nişi": "2,18 m²"
  }
}
,
  {
  id: "2",
  image: "/rams-kat-plan-02.png",
  details: {
    "Kat Planı": "2+1 C Daire Planı",
    "Toplam Bölge": "134,57 m²",
    "Koridor 1": "3,36 m²",
    "Yatak Odası 1": "11,16 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "10,77 m²",
    "Salon": "25,20 m²",
    "Antre": "6,30 m²",
    "Ebeveyn Yatak Odası": "17,68 m²",
    "Genel Banyo 1": "4,73 m²",
    "Teras": "35,33 m²",
    "Bahçe": "72,86 m²"
  }
}
,
 {
  id: "3",
  image: "/rams-kat-plan-03.png",
  details: {
    "Kat Planı": "2+1 C1 Daire Planı",
    "Toplam Bölge": "131,21 m²",
    "Koridor 1": "3,36 m²",
    "Yatak Odası 1": "11,16 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "10,77 m²",
    "Salon": "25,20 m²",
    "Balkon": "4,48 m²",
    "Antre": "6,30 m²",
    "Ebeveyn Yatak Odası": "17,68 m²",
    "Genel Banyo 1": "4,73 m²"
  }
}
,
  {
  id: "4",
  image: "/rams-kat-plan-04.png",
  details: {
    "Kat Planı": "2+1 C2 Daire Planı",
    "Toplam Bölge": "133,81 m²",
    "Koridor 1": "3,36 m²",
    "Yatak Odası 1": "11,16 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "10,77 m²",
    "Salon": "25,20 m²",
    "Balkon": "6,21 m²",
    "Antre": "6,30 m²",
    "Ebeveyn Yatak Odası": "17,68 m²",
    "Genel Banyo 1": "4,73 m²"
  }
}
,
  {
  id: "5",
  image: "/rams-kat-plan-05.png",
  details: {
    "Kat Planı": "2+1 D Daire Planı",
    "Toplam Bölge": "120,12 m²",
    "Koridor 1": "3,24 m²",
    "Yatak Odası 1": "11,16 m²",
    "Ebeveyn Banyo": "4,5 m²",
    "Balkon": "6,17 m²",
    "Salon + Mutfak": "26,4 m²",
    "Antre": "6 m²",
    "Ebeveyn Yatak Odası": "18,46 m²",
    "Genel Banyo 1": "4,55 m²"
  }
}
,
 {
  id: "6",
  image: "/rams-kat-plan-06.png",
  details: {
    "Kat Planı": "2+1 E2 Daire Planı",
    "Toplam Bölge": "111,51 m²",
    "Koridor 1": "5,22 m²",
    "Yatak Odası 1": "10,36 m²",
    "Ebeveyn Banyo": "4,18 m²",
    "Balkon": "4,55 m²",
    "Salon + Mutfak": "25,09 m²",
    "Antre": "3,54 m²",
    "Ebeveyn Yatak Odası": "17 m²",
    "Genel Banyo 1": "4,05 m²",
    "Çamaşır Nişi": "0,71 m²"
  }
}
,
 {
  id: "7",
  image: "/rams-kat-plan-07.png",
  details: {
    "Kat Planı": "2+1 F1 Daire Planı",
    "Toplam Bölge": "145,13 m²",
    "Koridor 1": "7,14 m²",
    "Yatak Odası 1": "10,28 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "9,52 m²",
    "Salon": "28,2 m²",
    "Balkon 1": "7,30 m²",
    "Antre": "4,21 m²",
    "Ebeveyn Yatak Odası": "16,5 m²",
    "Genel Banyo 1": "4,32 m²",
    "Balkon 2": "3,35 m²",
    "Çamaşır Nişi": "2,18 m²"
  }
}
,
  {
  id: "8",
  image: "/rams-kat-plan-08.png",
  details: {
    "Kat Planı": "2+1 F2 Daire Planı",
    "Toplam Bölge": "143,24 m²",
    "Koridor 1": "7,14 m²",
    "Yatak Odası 1": "10,28 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "9,52 m²",
    "Salon": "28,2 m²",
    "Balkon 1": "7,30 m²",
    "Antre": "4,21 m²",
    "Ebeveyn Yatak Odası": "16,5 m²",
    "Genel Banyo 1": "4,32 m²",
    "Balkon 2": "2,08 m²",
    "Çamaşır Nişi": "2,18 m²"
  }
}
,
  {
  id: "9",
  image: "/rams-kat-plan-09.png",
  details: {
    "Kat Planı": "2+1 F3 Daire Planı",
    "Toplam Bölge": "140,13 m²",
    "Koridor 1": "7,14 m²",
    "Yatak Odası 1": "10,28 m²",
    "Ebeveyn Banyo": "4,23 m²",
    "Mutfak": "9,52 m²",
    "Salon": "28,2 m²",
    "Balkon": "7,30 m²",
    "Antre": "4,21 m²",
    "Ebeveyn Yatak Odası": "16,5 m²",
    "Genel Banyo 1": "4,32 m²",
    "Çamaşır Nişi": "2,18 m²"
  }
}
,
 {
  id: "10",
  image: "/rams-kat-plan-10.png",
  details: {
    "Kat Planı": "2+1 G Daire Planı",
    "Toplam Bölge": "151,92 m²",
    "Koridor 1": "4,45 m²",
    "Yatak Odası 1": "10,26 m²",
    "Ebeveyn Banyo": "4,32 m²",
    "Mutfak": "12,81 m²",
    "Salon": "29,31 m²",
    "Antre": "7,7 m²",
    "Ebeveyn Yatak Odası": "20,84 m²",
    "Genel Banyo 1": "4,50 m²",
    "Teras": "41,49 m²",
    "Bahçe": "69,24 m²"
  }
}
,
 {
  id: "11",
  image: "/rams-kat-plan-11.png",
  details: {
    "Kat Planı": "2+1 H1 Daire Planı",
    "Toplam Bölge": "144,76 m²",
    "Koridor 1": "5,52 m²",
    "Yatak Odası 1": "11,56 m²",
    "Ebeveyn Banyo": "4,5 m²",
    "Mutfak": "10,68 m²",
    "Salon": "27,72 m²",
    "Balkon 1": "6,78 m²",
    "Antre": "5,88 m²",
    "Ebeveyn Yatak Odası": "15,74 m²",
    "Genel Banyo 1": "4,5 m²",
    "Balkon 2": "1,91 m²",
    "Çamaşır Nişi": "2,18 m²"
  }
}
,
  {
  id: "12",
  image: "/rams-kat-plan-12.png",
  details: {
    "Kat Planı": "3+1 B Daire Planı",
    "Toplam Bölge": "187,94 m²",
    "Koridor 1": "7,56 m²",
    "Yatak Odası 1": "11,16 m²",
    "Yatak Odası 2": "13,26 m²",
    "Ebeveyn Banyo": "4,56 m²",
    "Mutfak": "10,77 m²",
    "Salon": "25,2 m²",
    "Antre": "6,37 m²",
    "Ebeveyn Yatak Odası": "28,37 m²",
    "Genel Banyo 1": "4,73 m²",
    "Teras": "39,72 m²",
    "Bahçe": "84,07 m²",
    "Çamaşır Nişi": "4,53 m²"
  }
}
,
 {
  id: "13",
  image: "/rams-kat-plan-13.png",
  details: {
    "Kat Planı": "3+1 C Daire Planı",
    "Toplam Bölge": "140,55 m²",
    "Koridor 1": "8,55 m²",
    "Yatak Odası 1": "10,02 m²",
    "Yatak Odası 2": "10,02 m²",
    "Ebeveyn Banyo": "4,08 m²",
    "Salon + Mutfak": "28,54 m²",
    "Antre": "6,63 m²",
    "Ebeveyn Yatak Odası": "16,17 m²",
    "Genel Banyo 1": "3,68 m²",
    "Teras": "13,79 m²",
    "Bahçe": "14,76 m²"
  }
}
,
  {
  id: "14",
  image: "/rams-kat-plan-14.png",
  details: {
    "Kat Planı": "3+1 C1 – 1. Kat Daire Planı",
    "Tip": "3+1 C1",
    "Toplam Bölge": "149,24 m²",
    "Koridor 1": "8,55 m²",
    "Yatak Odası 1": "10,02 m²",
    "Yatak Odası 2": "10,02 m²",
    "Ebeveyn Banyo": "4,08 m²",
    "Balkon": "13,15 m²",
    "Salon + Mutfak": "28,54 m²",
    "Antre": "6,63 m²",
    "Ebeveyn Yatak Odası": "16,17 m²",
    "Genel Banyo 1": "3,68 m²"
  }
}
,
  {
  id: "15",
  image: "/rams-kat-plan-15.png",
  details: {
    "Kat Planı": "3+1 C1 Daire Planı",
    "Numara": "74",
    "Toplam Bölge": "151,13 m²",
    "Koridor 1": "8,55 m²",
    "Yatak Odası 1": "10,02 m²",
    "Yatak Odası 2": "10,02 m²",
    "Ebeveyn Banyo": "4,08 m²",
    "Balkon": "13,15 m²",
    "Salon + Mutfak": "28,54 m²",
    "Antre": "6,63 m²",
    "Ebeveyn Yatak Odası": "16,17 m²",
    "Genel Banyo 1": "3,68 m²"
  }
}
,
  {
  id: "16",
  image: "/rams-kat-plan-16.png",
  details: {
    "Kat Planı": "3+1 D Daire Planı",
    "Toplam Bölge": "184,53 m²",
    "Koridor 1": "9,6 m²",
    "Yatak Odası 1": "11,46 m²",
    "Yatak Odası 2": "10,8 m²",
    "Ebeveyn Banyo": "4 m²",
    "Mutfak": "13,87 m²",
    "Salon": "29,92 m²",
    "Antre": "5,61 m²",
    "Ebeveyn Yatak Odası": "22,7 m²",
    "Genel Banyo 1": "4,32 m²",
    "Teras": "23,54 m²",
    "Bahçe": "35,07 m²",
    "Çamaşır Nişi": "2,13 m²"
  }
}
,
 {
  id: "17",
  image: "/rams-kat-plan-17.png",
  details: {
    "Kat Planı": "3+1 D1 Daire Planı",
    "Toplam Bölge": "179,27 m²",
    "Koridor 1": "9,6 m²",
    "Yatak Odası 1": "11,46 m²",
    "Yatak Odası 2": "10,8 m²",
    "Ebeveyn Banyo": "4 m²",
    "Mutfak": "13,87 m²",
    "Salon": "29,92 m²",
    "Balkon 1": "5,80 m²",
    "Antre": "5,61 m²",
    "Ebeveyn Yatak Odası": "20,66 m²",
    "Genel Banyo 1": "4,32 m²",
    "Balkon 2": "1,94 m²",
    "Çamaşır Nişi": "2,13 m²"
  }
}
,
 {
  id: "18",
  image: "/rams-kat-plan-18.png",
  details: {
    "Kat Planı": "3+1 D2 Daire Planı",
    "Toplam Bölge": "179,43 m²",
    "Koridor 1": "9,6 m²",
    "Yatak Odası 1": "11,46 m²",
    "Yatak Odası 2": "10,8 m²",
    "Ebeveyn Banyo": "4 m²",
    "Mutfak": "13,87 m²",
    "Salon": "29,92 m²",
    "Balkon": "5,80 m²",
    "Antre": "5,61 m²",
    "Ebeveyn Yatak Odası": "22,7 m²",
    "Genel Banyo 1": "4,32 m²",
    "Çamaşır Nişi": "2,13 m²"
  }
}
,
  {
  id: "19",
  image: "/rams-kat-plan-19.png",
  details: {
    "Kat Planı": "3+1 E Daire Planı",
    "Toplam Bölge": "173,02 m²",
    "Koridor 1": "7,09 m²",
    "Yatak Odası 1": "10,26 m²",
    "Yatak Odası 2": "11 m²",
    "Ebeveyn Banyo": "4,68 m²",
    "Mutfak": "12,81 m²",
    "Salon": "29,31 m²",
    "Antre": "7,7 m²",
    "Ebeveyn Yatak Odası": "17,34 m²",
    "Genel Banyo 1": "4,86 m²",
    "Teras": "41,49 m²",
    "Bahçe": "76,08 m²",
    "Çamaşır Nişi": "2,22 m²"
  }
}
,
  {
  id: "20",
  image: "/rams-kat-plan-20.png",
  details: {
    "Kat Planı": "3+1 F Daire Planı",
    "Toplam Bölge": "189,31 m²",
    "Koridor 1": "7,08 m²",
    "Yatak Odası 1": "10,53 m²",
    "Yatak Odası 2": "11,3 m²",
    "Ebeveyn Banyo": "4,59 m²",
    "Mutfak": "12,81 m²",
    "Salon": "30,17 m²",
    "Balkon 1": "11,96 m²",
    "Antre": "9,79 m²",
    "Ebeveyn Yatak Odası": "17,94 m²",
    "Genel Banyo 1": "4,86 m²",
    "Balkon 2": "3,57 m²",
    "Çamaşır Nişi": "2,22 m²"
  }
}
,
  {
  id: "21",
  image: "/rams-kat-plan-21.png",
  details: {
    "Kat Planı": "3+1 G Daire Planı",
    "Toplam Bölge": "143,48 m²",
    "Koridor 1": "7,08 m²",
    "Yatak Odası 1": "10,77 m²",
    "Yatak Odası 2": "10,92 m²",
    "Ebeveyn Banyo": "4,77 m²",
    "Balkon": "5,87 m²",
    "Salon + Mutfak": "27,84 m²",
    "Antre": "3,92 m²",
    "Ebeveyn Yatak Odası": "17,16 m²",
    "Genel Banyo 1": "4,86 m²",
    "Çamaşır Nişi": "2,93 m²"
  }
}
,
  {
  id: "22",
  image: "/rams-kat-plan-22.png",
  details: {
    "Kat Planı": "3+1 G1 Daire Planı",
    "Toplam Bölge": "143,24 m²",
    "Koridor 1": "7,08 m²",
    "Yatak Odası 1": "10,77 m²",
    "Yatak Odası 2": "10,92 m²",
    "Ebeveyn Banyo": "4,77 m²",
    "Balkon 1": "5,87 m²",
    "Salon + Mutfak": "27,84 m²",
    "Antre": "3,92 m²",
    "Ebeveyn Yatak Odası": "15,18 m²",
    "Genel Banyo 1": "4,86 m²",
    "Balkon 2": "1,81 m²",
    "Çamaşır Nişi": "2,93 m²"
  }
}
,
 {
  id: "23",
  image: "/rams-kat-plan-23.png",
  details: {
    "Kat Planı": "3+1 /1 Daire Planı",
    "Toplam Bölge": "190,19 m²",
    "Koridor 1": "7,38 m²",
    "Yatak Odası 1": "11,6 m²",
    "Yatak Odası 2": "12,16 m²",
    "Ebeveyn Banyo": "4,5 m²",
    "Mutfak": "13,68 m²",
    "Salon": "30,6 m²",
    "Balkon": "9,55 m²",
    "Antre": "9,9 m²",
    "Ebeveyn Yatak Odası": "18,02 m²",
    "Genel Banyo 1": "4,59 m²",
    "Belirtilmemiş Alan": "2,97 m²",
    "Çamaşır Nişi": "2,49 m²"
  }
}
,
 {
  id: "24",
  image: "/rams-kat-plan-24.png",
  details: {
    "Kat Planı": "3+1 /3 Daire Planı",
    "Toplam Bölge": "187,97 m²",
    "Koridor 1": "7,38 m²",
    "Yatak Odası 1": "11,6 m²",
    "Yatak Odası 2": "12,16 m²",
    "Ebeveyn Banyo": "4,5 m²",
    "Mutfak": "13,68 m²",
    "Salon": "30,6 m²",
    "Balkon 1": "8,16 m²",
    "Antre": "9,9 m²",
    "Ebeveyn Yatak Odası": "15,98 m²",
    "Genel Banyo 1": "4,59 m²",
    "Belirtilmemiş Alan": "2,97 m²",
    "Balkon 2": "1,93 m²",
    "Çamaşır Nişi": "2,49 m²"
  }
}
,
 {
  id: "25",
  image: "/rams-kat-plan-25.png",
  details: {
    "Kat Planı": "4+1 A Daire Planı",
    "Toplam Bölge": "228,9 m²",
    "Koridor 1": "9,24 m²",
    "Yatak Odası 1": "12,98 m²",
    "Yatak Odası 2": "11,2 m²",
    "Yatak Odası 3": "11,3 m²",
    "Ebeveyn Banyo": "4,34 m²",
    "Mutfak": "13,29 m²",
    "Salon": "35,14 m²",
    "Antre": "7,08 m²",
    "Ebeveyn Yatak Odası": "23,96 m²",
    "Genel Banyo 1": "4,93 m²",
    "Belirtilmemiş Alan": "2,31 m²",
    "Teras": "80,04 m²",
    "Bahçe": "89,21 m²",
    "Çamaşır Nişi": "2,3 m²",
    "Suite Bathroom": "3,85 m²"
  }
}
,
  
  
  
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
