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
      <div className="text-center max-w-4xl mx-auto py-16 z-20 relative px-4">
        <h2 className="text-3xl font-semibold tracking-wide text-gray-900">
          Yaşam Nerede <br /> Biz Orada.
        </h2>
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          İş dünyasının yeni merkezi VEGA Center'da bir çok prestijli marka karması ile işiniz yeni bir boyut kazanıyor.
          Açık AVM konsepti, yaşam alanları, ulaşım kolaylığı ile yaşamın bütün olanaklarını ayağınıza getiriyor.
          En değerli sermayeniz olan zamanınız, bu projede kıymetleniyor.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl h-[70vh] mx-auto">
        <Image
          src="/vega-site.jpg"
          alt="Plan Image"
          fill
          className="object-contain z-0"
        />

        {hoveredImage && (
          <Image
            src={hoveredImage}
            alt="Highlight"
            fill
            className="object-contain z-10 pointer-events-none transition-opacity duration-300"
          />
        )}

        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute z-20"
            style={{ ...spot.position, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHoveredId(spot.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Hotspot Button */}
            <div className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-gray-800 border border-gray-200 whitespace-nowrap cursor-pointer hover:bg-gray-50 transition">
              {spot.label}
            </div>

            {/* Info Box */}
            {hoveredId === spot.id && (
              <div className="absolute top-full top-1/2 transform -translate-y-1/2 ml-4 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-3 text-xs text-gray-700 z-30">
                {spot.info.split("\n").map((line, i) => (
                  <p key={i} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
