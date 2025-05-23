"use client";

import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "A Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/vega-a-blok.png",
    info: "Zemin + 8 Kat, 26.925,87 m², Ofis Sayısı 100",
    position: { top: "50%", left: "75%" },
  },
  {
    id: 2,
    label: "B Blok",
    text: "Şehirde Modernlik, Peyzajda Doğallık",
    image: "/vega-b-blok.png",
    info: "Zemin + 10 Kat, 38.450,94 m², Ofis Sayısı 152",
    position: { top: "40%", left: "45%" },
  },
  {
    id: 3,
    label: "C Blok",
    text: "Ulaşımda Kolaylık, Yaşamda Konfor",
    image: "/vega-c-blok.png",
    info: "Zemin + 11 Kat, 21.639,35 m², Ofis Sayısı 87",
    position: { top: "40%", left: "25%" },
  },
  {
    id: 4,
    label: "D Blok",
    text: "Vega Merkez",
    image: "/vega-d-blok.png",
    info: "87 Ticari Alan",
    position: { top: "60%", left: "35%" },
  },
];

export default function SidePlans() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          Yaşam Nerede <br /> Biz Orada.
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Bir NATA Yaşam projesi olan VEGA Center, yatay mimarisi ile şehrin silüetine estetik bir değer katan, iş ve premium alışveriş deneyimini en yüksek seviyeye çıkaran bir yaşam merkezidir. Ferah ofisleri ve verimli iş alanları ile yüksek potansiyele sahip olan VEGA Center'ın her noktası hayatı kolaylaştırmak için tasarlandı. 
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/vega-site.jpg"
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

          {/* Buttons */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{ ...spot.position, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredId(spot.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Label Button */}
              <div className="bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-sm font-medium text-gray-800 border border-gray-200 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition">
                {spot.label}
              </div>

              {/* Info Box */}
              {hoveredId === spot.id && (
                <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-40 sm:w-48 bg-white border border-gray-200 shadow-xl rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-700 z-30">
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
