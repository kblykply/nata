"use client";

import Image from "next/image";
import { useState } from "react";


const hotspots = [
  { id: 0, label: "A Blok", text: "A Blok", image: "/tempoint-vaziyet/ablok.png", info: "Tempoint A Blok", position: { top: "17%", left: "10%" } },
  { id: 1, label: "B Blok", text: "B Blok", image: "/tempoint-vaziyet/bblok.png", info: "Tempoint B Blok", position: { top: "15%", left: "20%" } },
{ id: 2, label: "C Blok", text: "C Blok", image: "/tempoint-vaziyet/cblok.png", info: "Tempoint C Blok", position: { top: "15%", left: "30%" } },
{ id: 3, label: "D Blok", text: "D Blok", image: "/tempoint-vaziyet/dblok.png", info: "Tempoint D Blok", position: { top: "25%", left: "35%" } },
{ id: 4, label: "E Blok", text: "E Blok", image: "/tempoint-vaziyet/eblok.png", info: "Tempoint E Blok", position: { top: "45%", left: "43%" } },

  
  
  ];


  

export default function SidePlans() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          Şehrin Yeni  <br /> Cazibe Noktası  
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          TEM Point, İstanbul Sultangazi’de 75.000 m² arsa üzerinde
konumlanan; 686 konut, 444 rezidans ve 270 mağazalık alışveriş
merkezinden oluşan dev bir karma yaşam projesidir. Konumu
itibarıyla ulaşım ağlarına yakınlığıyla öne çıkan proje, sosyal yaşamın
merkezinde prestijli bir deneyim sunuyor.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/tempoint-vaziyet/tempoint-bloklar.jpeg"
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
