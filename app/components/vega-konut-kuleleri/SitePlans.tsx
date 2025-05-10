"use client";

import Image from "next/image";
import { useState } from "react";


const hotspots = [
  { id: 0, label: "A Blok", text: "A Blok", image: "/konutkule-vaziyet/1.blok.png", info: "Konutkule 1 ", position: { top: "67%", left: "45%" } },
    { id: 1, label: "B Blok", text: "B Blok", image: "/konutkule-vaziyet/2.blok.png", info: "Konutkule 2 ", position: { top: "67%", left: "70%" } },

];


  

export default function SidePlans() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          Modern Yaşamın  <br /> Yüksek Noktası
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
         Nata Vega Konut Kuleleri, Ankara Mamak’ta yükselen 33 katlı iki
kulede toplam 300 konuttan oluşan, şehrin siluetine imza atan bir
projedir. Nata Vega AVM’nin hemen yanında konumlanan proje,
ulaşım kolaylığı ve sunduğu sosyal olanaklarla konforlu bir yaşamın
kapılarını aralıyor.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/konutkule-vaziyet/natavegakonutkule-blok.jpg"
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
                <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-40 sm:w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-700 z-30">
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
