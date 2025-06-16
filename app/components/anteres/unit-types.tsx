"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const unitTypes = [
 {
  id: "1",
  image: "/antares-katplan-01.png",
  details: {
    "Daire Tipi": "A BLOK – TİP 3+1 B",
    "Salon": "33,56 m²",
    "Mutfak": "11,40 m²",
    "Antre": "6,77 m²",
    "Koridor": "9,00 m²",
    "Yatak Odası 1": "12,18 m²",
    "Yatak Odası 2": "12,60 m²",
    "Ebeveyn Yatak Odası": "20,09 m²",
    "Ebeveyn Soyunma Odası": "4,41 m²",
    "Ebeveyn Banyo": "4,37 m²",
    "Genel Banyo": "4,37 m²",
    "WC": "2,50 m²",
    "Çamaşır Dolabı": "1,36 m²",
    "Kiler": "1,41 m²",
    "Balkon 1": "5,71 m²",
    "Balkon 2": "4,34 m²",
    "Toplam Net Alan": "139,92 m²",
    "Ortak Hisse": "118,75 m²",
    "Yaklaşık Depo Net Alanı": "4,00 – 5,50 m²",
    "Toplam Brüt Alan": "161,44 m²"
  }
}
,
 {
  id: "2",
  image: "/antares-katplan-02.png",
  details: {
    "Daire Tipi": "B BLOK – TİP 1+1",
    "Salon + Mutfak": "26,69 m²",
    "Antre": "5,35 m²",
    "Yatak Odası": "13,89 m²",
    "Genel Banyo": "4,66 m²",
    "Balkon": "2,94 m²",
    "Toplam Net Alan": "58,67 m²",
    "Ortak Hisse": "50,18 m²",
    "Yaklaşık Depo Net Alanı": "4,00 – 5,50 m²",
    "Toplam Brüt Alan": "68,22 m²"
  }
}
,
  {
  id: "3",
  image: "/antares-katplan-03.png",
  details: {
    "Daire Tipi": "B BLOK – TİP 2+1 A",
    "Salon": "33,01 m²",
    "Mutfak": "13,68 m²",
    "Antre": "7,08 m²",
    "Koridor": "4,74 m²",
    "Yatak Odası": "11,86 m²",
    "Ebeveyn Yatak Odası": "17,43 m²",
    "Ebeveyn Banyo": "4,40 m²",
    "Genel Banyo": "4,42 m²",
    "Balkon": "4,97 m²",
    "Toplam Net Alan": "106,92 m²",
    "Ortak Hisse": "89,74 m²",
    "Yaklaşık Depo Net Alanı": "4,00 – 5,50 m²",
    "Toplam Brüt Alan": "122,00 m²"
  }
}
,
 {
  id: "4",
  image: "/antares-katplan-04.png",
  details: {
    "Daire Tipi": "B BLOK – TİP 2+1 C",
    "Salon": "26,10 m²",
    "Mutfak": "9,51 m²",
    "Antre": "4,498 m²",
    "Koridor": "5,82 m²",
    "Yatak Odası": "10,69 m²",
    "Ebeveyn Yatak Odası": "14,91 m²",
    "Ebeveyn Banyo": "4,05 m²",
    "Genel Banyo": "4,25 m²",
    "Balkon 1": "3,26 m²",
    "Balkon 2": "11,84 m²",
    "Toplam Net Alan": "90,79 m²",
    "Ortak Hisse": "76,48 m²",
    "Yaklaşık Depo Net Alanı": "4,00 – 5,50 m²",
    "Toplam Brüt Alan": "103,98 m²"
  }
}
,
  {
  id: "5",
  image: "/antares-katplan-05.png",
  details: {
    "Daire Tipi": "B BLOK – TİP 3+1 B",
    "Salon": "33,56 m²",
    "Mutfak": "11,40 m²",
    "Antre": "6,77 m²",
    "Koridor": "9,00 m²",
    "Yatak Odası 1": "12,18 m²",
    "Yatak Odası 2": "12,60 m²",
    "Ebeveyn Yatak Odası": "20,09 m²",
    "Ebeveyn Soyunma Odası": "4,41 m²",
    "Ebeveyn Banyo": "4,37 m²",
    "Genel Banyo": "4,37 m²",
    "WC": "2,50 m²",
    "Çamaşır Dolabı": "1,36 m²",
    "Kiler": "1,41 m²",
    "Balkon 1": "5,71 m²",
    "Balkon 2": "4,34 m²",
    "Toplam Net Alan": "139,92 m²",
    "Ortak Hisse": "118,75 m²",
    "Yaklaşık Depo Net Alanı": "4,00 – 5,50 m²",
    "Toplam Brüt Alan": "161,44 m²"
  }
}
,
{
  id: "6",
  image: "/antares-katplan-06.png",
  details: {
    "Daire Tipi": "C - D BLOK – TİP 4+1 C",
    "Antre": "7 m²",
    "Salon": "40 m²",
    "Balkon (1)": "10,2 m²",
    "Mutfak": "15 m²",
    "Ebeveyn Yatak Odası": "20,6 m²",
    "Ebeveyn Banyosu": "4,2 m²",
    "Genel Banyo": "3,7 m²",
    "Yatak Odası (1)": "13,4 m²",
    "Yatak Odası (2)": "13,3 m²",
    "Yatak Odası (3)": "14 m²",
    "Yatak Odası Banyo": "5,5 m²",
    "Çamaşır Dolabı": "1,6 m²",
    "Koridor": "11 m²",
    "Balkon (2)": "5,5 m²",
    "Toplam Net Alan": "165 m²",
    "Yaklaşık Depo Alanı": "5 – 7 m²",
    "Toplam Brüt Alan": "195 m²"
  }
}
,
  {
  id: "7",
  image: "/antares-katplan-07.png",
  details: {
    "Daire Tipi": "C - D BLOK – TİP 4+1 D",
    "Antre": "8,5 m²",
    "Salon": "40 m²",
    "Balkon (1)": "15,3 m²",
    "Mutfak": "14,5 m²",
    "Yatak Odası (1)": "13 m²",
    "Yatak Odası (2)": "13 m²",
    "Yatak Odası (3)": "13 m²",
    "Ebeveyn Yatak Odası": "21,2 m²",
    "Ebeveyn Banyosu": "4,6 m²",
    "Genel Banyo": "4,6 m²",
    "WC": "2 m²",
    "Dolap Odası": "2,3 m²",
    "Çamaşır Dolabı": "0,8 m²",
    "Koridor": "9,2 m²",
    "Balkon (2)": "3,5 m²",
    "Toplam Net Alan": "165,5 m²",
    "Yaklaşık Depo Alanı": "5 – 7 m²",
    "Toplam Brüt Alan": "188 m²"
  }
}
,
 {
  id: "8",
  image: "/antares-katplan-08.png",
  details: {
    "Daire Tipi": "E BLOK – DUBLEKS 1. KAT",
    "Sofa": "25,41 m²",
    "Koridor": "14,28 m²",
    "Yatak Odası 2": "25,37 m²",
    "Yatak Odası 2 Banyo": "3,32 m²",
    "Yatak Odası 3": "15,47 m²",
    "Ebeveyn Yatak Odası": "37,78 m²",
    "Ebeveyn Banyo": "4,48 m²",
    "Genel Banyo": "5,32 m²",
    "Teras": "15,25 m²",
    "Toplam Daire Net Alan": "296,61 m²",
    "Otopark / Ortak Alan": "80,00 m²",
    "Toplam Daire Brüt Alan": "332,43 m²"
  }
}
,
 {
  id: "9",
  image: "/antares-katplan-09.png",
  details: {
    "Daire Tipi": "E BLOK – DUBLEKS ZEMİN KAT",
    "Salon": "62,14 m²",
    "Mutfak": "15,25 m²",
    "Antre": "16,56 m²",
    "Koridor": "4,68 m²",
    "Depo": "1,04 m²",
    "Yatak Odası 1": "24,17 m²",
    "Yatak Odası 1 Banyo": "3,57 m²",
    "Çamaşır Dolabı": "0,90 m²",
    "WC": "2,47 m²",
    "Balkon": "5,13 m²",
    "Teras": "14,02 m²",
    "Toplam Daire Net Alan": "296,61 m²",
    "Otopark / Ortak Alan": "80,00 m²",
    "Toplam Daire Brüt Alan": "332,43 m²"
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
