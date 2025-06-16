"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const unitTypes = [
  {
  id: "1",
  image: "/goat-kat-01.png",
  details: {
    "Kat Planı": "VİLLA TİP-1 | 2. Bodrum Kat",
    "Hol (1)": "8,98 m²",
    "Kombi Odası": "24,30 m²",
    "Depo (1)": "12,26 m²",
    "Ütü-Çamaşır Odası": "13,05 m²",
    "Hol (2)": "8,41 m²",
    "Duş-Sauna": "6,59 m²",
    "Fitness Salonu": "56,88 m²",
    "Depo (2)": "15,00 m²",
    "Rezerv Alan": "91,11 m²",
    "Kat Net Alanı": "236,58 m²",
    "Kat Brüt Alanı": "284,04 m²"
  }
}
,
 {
  id: "2",
  image: "/goat-kat-02.png",
  details: {
    "Kat Planı": "VİLLA TİP-1 | 1. Bodrum Kat",
    "Rüzgarlık": "6,59 m²",
    "Giriş Holü": "11,88 m²",
    "Vestiyer": "4,95 m²",
    "WC": "3,30 m²",
    "Otopark": "43,68 m²",
    "Yatak Odası": "15,93 m²",
    "Salon & Mutfak": "46,46 m²",
    "Duş-WC": "3,57 m²",
    "İç Bahçe": "34,99 m²",
    "Hol (1)": "8,98 m²",
    "Hol (2)": "13,52 m²",
    "Sosyal Alan": "91,11 m²",
    "Kat Net Alanı": "249,97 m²",
    "İç Bahçeli Net Alan": "284,96 m²",
    "Kat Brüt Alanı": "294,45 m²",
    "İç Bahçeli Kat Brüt Alanı": "332,50 m²"
  }
}
,
  {
  id: "3",
  image: "/goat-kat-03.png",
  details: {
    "Kat Planı": "VİLLA TİP-1 | Zemin Kat",
    "Hol (1)": "10,19 m²",
    "Kat Holü": "12,37 m²",
    "Yüklük": "5,81 m²",
    "Hol (2)": "3,03 m²",
    "WC": "3,38 m²",
    "Salon": "54,06 m²",
    "Mutfak": "21,65 m²",
    "Kiler": "3,62 m²",
    "Yatak Odası": "18,06 m²",
    "Soyunma": "2,46 m²",
    "Duş-WC": "3,15 m²",
    "Teras": "45,90 m²",
    "Kat Net Alanı": "137,78 m²",
    "Teraslı Net Alan": "183,68 m²",
    "Kat Brüt Alanı": "169,31 m²",
    "Teraslı Brüt Alan": "216,21 m²"
  }
}
,
 {
  id: "4",
  image: "/goat-kat-04.png",
  details: {
    "Kat Planı": "VİLLA TİP-1 | 1. Kat",
    "Hol (1)": "18,20 m²",
    "Çamaşır & Ütü Odası": "9,06 m²",
    "Yatak Odası (1)": "20,69 m²",
    "Duş-WC (1)": "4,40 m²",
    "Soyunma (1)": "7,22 m²",
    "Balkon (1)": "18,32 m²",
    "Soyunma (2)": "4,48 m²",
    "Hol (2)": "2,97 m²",
    "Yatak Odası (2)": "15,00 m²",
    "Duş-WC (2)": "4,13 m²",
    "Yatak Odası (3)": "16,69 m²",
    "Soyunma (3)": "2,46 m²",
    "Duş-WC (3)": "3,15 m²",
    "Balkonsuz Net Alan": "108,45 m²",
    "Balkonlu Net Alan": "126,77 m²",
    "Kat Brüt Alanı": "138,14 m²",
    "Balkonlu Brüt Alan": "159,27 m²"
  }
}
,{
  id: "5",
  image: "/goat-kat-05.png",
  details: {
    "Kat Planı": "VİLLA TİP-1 | 2. Kat",
    "Hol": "25,71 m²",
    "Ebeveyn Yatak Odası": "21,86 m²",
    "Ebeveyn Soyunma Odası": "10,87 m²",
    "Ebeveyn Duş": "4,10 m²",
    "Net Alan": "62,54 m²",
    "Kat Brüt Alanı": "84,90 m²"
  }
}
,
 {
  id: "6",
  image: "/goat-kat-06.png",
  details: {
    "Kat Planı": "VİLLA TİP-2 | Bodrum Kat",
    "Hol": "10,41 m²",
    "Kombi Odası": "11,92 m²",
    "Vestiyer": "4,90 m²",
    "WC": "5,34 m²",
    "Jeneratör Depo": "12,95 m²",
    "Otopark": "60,90 m²",
    "Yatak Odası": "25,21 m²",
    "Salon & Mutfak": "36,17 m²",
    "Duş-WC": "3,57 m²",
    "İç Bahçe": "24,15 m²",
    "Net Alan": "171,37 m²",
    "İç Bahçeli Net Alan": "195,52 m²",
    "Kat Brüt Alanı": "211,13 m²",
    "İç Bahçeli Brüt Alan": "235,28 m²"
  }
}
,
  {
  id: "7",
  image: "/goat-kat-07.png",
  details: {
    "Kat Planı": "VİLLA TİP-2 | Zemin Kat",
    "Rüzgarlık": "6,00 m²",
    "Giriş Holü": "10,16 m²",
    "Salon": "53,95 m²",
    "Mutfak": "26,26 m²",
    "Kiler": "3,40 m²",
    "Yatak Odası": "18,75 m²",
    "Soyunma Odası": "2,70 m²",
    "Duş-WC": "3,15 m²",
    "Hol (1)": "6,72 m²",
    "Hol (2)": "3,16 m²",
    "WC": "3,25 m²",
    "Vestiyer": "5,30 m²",
    "Teras": "26,25 m²",
    "Net Alan": "142,80 m²",
    "Teraslı Net Alan": "169,05 m²",
    "Kat Brüt Alanı": "179,80 m²",
    "Teraslı Brüt Alan": "206,05 m²"
  }
}
,
  {
  id: "8",
  image: "/goat-kat-08.png",
  details: {
    "Kat Planı": "VİLLA TİP-2 | 1. Kat",
    "Hol (1)": "8,04 m²",
    "Yatak Odası (1)": "16,97 m²",
    "Duş-WC (1)": "3,27 m²",
    "Yatak Odası (2)": "26,19 m²",
    "Duş-WC (2)": "4,16 m²",
    "Soyunma Odası (1)": "8,16 m²",
    "Teras": "19,79 m²",
    "Yatak Odası (3)": "16,99 m²",
    "Hol (2)": "3,33 m²",
    "Duş-WC (3)": "4,16 m²",
    "Yatak Odası (4)": "17,46 m²",
    "Soyunma Odası (2)": "2,70 m²",
    "Duş-WC (4)": "3,15 m²",
    "Net Alan": "114,58 m²",
    "Teraslı Net Alan": "134,37 m²",
    "Kat Brüt Alanı": "149,05 m²",
    "Teraslı Brüt Alan": "170,63 m²"
  }
}
,
 {
  id: "9",
  image: "/goat-kat-09.png",
  details: {
    "Kat Planı": "VİLLA TİP-2 | 2. Kat",
    "Hol": "6,54 m²",
    "Ebeveyn Banyo": "6,66 m²",
    "Ebeveyn Soyunma Odası": "8,96 m²",
    "Ebeveyn Yatak Odası": "37,02 m²",
    "Net Alan": "59,18 m²",
    "Kat Brüt Alanı": "85,27 m²"
  }
}
,
  {
  id: "10",
  image: "/goat-kat-10.png",
  details: {
    "Kat Planı": "VİLLA TİP-3 | Bodrum Kat",
    "Hol": "9,33 m²",
    "Kombi Odası": "14,88 m²",
    "Vestiyer Odası": "4,55 m²",
    "WC": "2,71 m²",
    "Otopark": "41,40 m²",
    "Sosyal Alan": "77,28 m²",
    "Yatak Odası": "28,01 m²",
    "Duş-WC": "4,16 m²",
    "Net Alan": "182,32 m²",
    "Kat Brüt Alanı": "219,11 m²"
  }
}
,
 {
  id: "11",
  image: "/goat-kat-11.png",
  details: {
    "Kat Planı": "VİLLA TİP-3 | Zemin Kat",
    "Rüzgarlık": "5,12 m²",
    "Giriş Holü": "8,10 m²",
    "Vestiyer": "6,24 m²",
    "WC": "3,03 m²",
    "Salon": "54,62 m²",
    "Hol": "9,21 m²",
    "Mutfak": "28,36 m²",
    "Kiler": "4,51 m²",
    "Teras": "28,73 m²",
    "Net Alan": "119,19 m²",
    "Teraslı Net Alan": "147,92 m²",
    "Kat Brüt Alanı": "148,63 m²",
    "Teraslı Brüt Alan": "179,46 m²"
  }
}
,
  {
  id: "12",
  image: "/goat-kat-12.png",
  details: {
    "Kat Planı": "VİLLA TİP-3 | 1. Kat",
    "Hol": "11,61 m²",
    "Yatak Odası (1)": "15,14 m²",
    "Soyunma Odası (1)": "2,52 m²",
    "Duş-WC (1)": "2,72 m²",
    "Soyunma Odası (2)": "3,13 m²",
    "Duş-WC (2)": "3,33 m²",
    "Yatak Odası (2)": "22,31 m²",
    "Balkon": "9,70 m²",
    "Yatak Odası (3)": "23,09 m²",
    "Soyunma Odası (3)": "3,36 m²",
    "Duş-WC (3)": "3,50 m²",
    "Net Alan": "90,71 m²",
    "Balkonlu Net Alan": "100,41 m²",
    "Kat Brüt Alanı": "111,64 m²",
    "Balkonlu Kat Brüt Alanı": "123,45 m²"
  }
}
,
 {
  id: "13",
  image: "/goat-kat-13.png",
  details: {
    "Kat Planı": "VİLLA TİP-3 | 2. Kat",
    "Hol": "14,49 m²",
    "Yatak Odası": "15,48 m²",
    "Soyunma Odası (1)": "2,52 m²",
    "Duş-WC": "2,72 m²",
    "Ebeveyn Banyo": "4,76 m²",
    "Soyunma Odası (2)": "7,12 m²",
    "Ebeveyn Yatak Odası": "33,66 m²",
    "Balkon": "13,77 m²",
    "Net Alan": "80,75 m²",
    "Balkonlu Net Alan": "94,52 m²",
    "Kat Brüt Alanı": "107,60 m²",
    "Balkonlu Kat Brüt Alanı": "123,23 m²"
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
