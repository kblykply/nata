"use client";

import Image from "next/image";
import { useState } from "react";


const hotspots = [
  { id: 0, label: "VEGA CADDE", text: "A Blok", image: "/vega-cadde-vaziyet/vegacadde.png", info: "Cadde A Blok", position: { top: "77%", left: "50%" } },
];


  

export default function SidePlans() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          İş ve Yaşamın <br /> Kesiştiği Nokta
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Ankara Yenimahalle’de yer alan Vega Cadde, 3 blokta toplam 161 adet
bağımsız birimden oluşur. Hem konut hem ofis kullanımına uygun
yapısıyla, şehrin iş ve sosyal hayatını birleştiren çok yönlü bir yaşam
alanı sunar. Metroya olan yakınlığıyla ulaşımda büyük kolaylık sağlar.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/vega-cadde-vaziyet/vegacadde-blok.jpg"
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
