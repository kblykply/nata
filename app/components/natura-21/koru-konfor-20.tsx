"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  {
    label: "Alt Kat/ 90 m² Daire",
    image: "/siteplans/natura2+1dublexüst.png",
    price: "8 Milyon TL",
    location: "Çankaya/Ankara",
     details: [
    ["Alt Kat Alanı", "44,50 m²"],
    ["Salon", "26,70 m²"],
    ["Antre", "5,70 m²"],
    ["Banyo", "3,90 m²"],
    ["Balkon", "8,20 m²"]
  ]
  },
   {
    label: "Üst Kat / 90 m² Daire",
    image: "/siteplans/natura2+1dublexalt.png",
    price: "8 Milyon TL",
    location: "Çankaya/Ankara",
     details: [
    ["Üst Kat Alanı", "42,75 m²"],
      ["Oda", "13,30 m²"],
      ["Ebeveyn Yatak Odası", "14,60 m²"],
      ["Hol", "5,00 m²"],
      ["Ebeveyn Banyo", "3,90 m²"],
      ["Balkon", "5,50 m²"],
      ["Fransız Balkon", "1,45 m²"]
  ]
  },
  
];


export default function PlanDetailsWithGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = gallery[currentIndex];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Details */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Natura Incek</h2>
          <h3 className="text-xl font-medium text-gray-700">2+1 - {current.label}</h3>

          <div className="bg-white  rounded-xl shadow p-6 w-full max-w-md text-sm text-gray-700">
            <p className="font-semibold mb-4 text-base text-black">
              {current.price}’den başlayan fiyatlarla
            </p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Lokasyon:</span>
                <span className="font-medium">{current.location}</span>
              </div>
              {current.details.map(([label, value], i) => (
                <div key={i} className="flex justify-between">
                  <span>{label}:</span>
                  <span className={label === "Net Alan" ? "font-semibold" : ""}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 w-full max-w-2xl relative min-h-[400px]">
          <Image
            src={current.image}
            alt={current.label}
            fill
            className="object-contain"
          />
        </div>

        {/* Right Navigation */}
       {/* Desktop: vertical thumbnail selector */}
<div className="hidden lg:flex flex-col gap-4">
  {gallery.map((item, i) => (
    <button
      key={i}
      onClick={() => setCurrentIndex(i)}
      className={`w-[60px] h-[60px] border-2 rounded-lg transition ${
        i === currentIndex ? "border-[#ab1e3b]" : "border-gray-300"
      }`}
    >
      <Image
        src={item.image}
        alt={item.label}
        width={60}
        height={60}
        className="object-contain rounded"
      />
    </button>
  ))}
</div>

{/* Mobile: horizontal scrollable thumbnails */}
<div className="flex lg:hidden gap-3 mt-6 overflow-x-auto">
  {gallery.map((item, i) => (
    <button
      key={i}
      onClick={() => setCurrentIndex(i)}
      className={`min-w-[60px] h-[60px] border-2 rounded-lg flex-shrink-0 transition ${
        i === currentIndex ? "border-[#ab1e3b]" : "border-gray-300"
      }`}
    >
      <Image
        src={item.image}
        alt={item.label}
        width={60}
        height={60}
        className="object-contain rounded"
      />
    </button>
  ))}
</div>

      </div>
    </section>
  );
}
