"use client";

import Image from "next/image";
import { useState } from "react";


const hotspots = [
  { id: 0, label: "A Blok", text: "A Blok", image: "/incek-vaziyet/blok1.png", info: "Nata Incek A Blok", position: { top: "37%", left: "25%" } },
{ id: 1, label: "B Blok", text: "B Blok", image: "/incek-vaziyet/blok2.png", info: "Nata Incek B Blok", position: { top: "25%", left: "32%" } },
{ id: 2, label: "C Blok", text: "C Blok", image: "/incek-vaziyet/blok3.png", info: "Nata Incek C Blok", position: { top: "33%", left: "51%" } },
{ id: 3, label: "D Blok", text: "D Blok", image: "/incek-vaziyet/blok4.png", info: "Nata Incek D Blok", position: { top: "33%", left: "74%" } },
 
];


  

export default function SidePlans() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          İncek’te Doğayla İç İçe<br /> Ayrıcalıklı
Yaşam
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Ankara’nın prestijli semti İncek’te konumlanan proje, 12.000 m² yeşil
alanı ve ferah peyzaj düzenlemeleriyle doğayla iç içe bir yaşam sunar.
5 blokta toplam 290 konuttan oluşan Nata İncek, huzurlu bir aile
yaşamı için modern çözümlerle donatılmıştır.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/incek-vaziyet/nataincek-blok.png"
            alt="Plan Image"
            fill
            className="object-contain z-0"
          />

          {/* Hovered Overlay */}
          {hoveredImage && (
            <Image
              src={hoveredImage}
              alt="Highlight"
              fill
              className="object-contain z-10 pointer-events-none transition-opacity duration-300"
            />
          )}

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{ ...spot.position, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredId(spot.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-sm font-medium text-gray-800 border border-gray-200 whitespace-nowrap cursor-pointer hover:bg-gray-50 transition">
                {spot.label}
              </div>

                {hoveredId === spot.id && (
  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-40 sm:w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-700 z-30">
    {spot.info.split("\n").map((line, i) => (
      <p key={i} className="mb-1">{line}</p>
    ))}
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
