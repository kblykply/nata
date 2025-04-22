"use client";

import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "A Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/B-block.png",
    info: "Zemin + 8 Kat, 26.925,87 m², Ofis Sayısı 100",
    position: { top: "50%", left: "65%" },
  },

  {
    id: 2,
    label: "B Blok",
    text: "Şehirde Modernlik, Peyzajda Doğallık",
    image: "/B-block.png",
    info: "Zemin + 10 Kat, 38.450,94 m², Ofis Sayısı 152",
    position: { top: "40%", left: "35%" },
  },
  {
    id: 3,
    label: "C Blok",
    text: "Ulaşımda Kolaylık, Yaşamda Konfor",
    image: "/B-block.png",
    info: "Zemin + 11 Kat, 21.639,35 m², Ofis Sayısı 87",
    position: { top: "40%", left: "15%" },
  },
  {
    id: 4,
    label: "D Blok",
    text: "Vega Merkez",
    image: "/B-block.png",
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
      <div className="text-center max-w-4xl mx-auto py-16 z-20 relative">
        <h2 className="text-3xl font-semibold tracking-wide text-gray-900">
        

Yaşam Nerede <br/>Biz Orada.

        </h2>
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          

İş dünyasının yeni merkezi VEGA Center'da bir çok prestijli marka karması ile işiniz yeni bir boyut kazanıyor.

Açık AVM konsepti, yaşam alanları, ulaşım kolaylığı ile yaşamın bütün olanaklarını ayağınıza getiriyor.

En değerli sermayeniz olan zamanınız, bu projede kıymetleniyor.

        </p>
      </div>

      {/* Image container */}
      <div className="relative w-full max-w-6xl h-[80vh] mx-auto">
        <Image
          src="/vega-site.jpg "
          alt="Plan Image"
          fill
          className="object-contain z-0"
        />

        {hoveredImage && (
          <Image
            src={hoveredImage}
            alt="Highlight"
            fill
            className="object-contain z-10 pointer-events-none"
          />
        )}

        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute z-20"
            style={{ ...spot.position }}
            onMouseEnter={() => setHoveredId(spot.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="bg-white opacity-85 px-4 py-2 rounded-full shadow text-sm font-medium text-gray-800 border border-gray-200 whitespace-nowrap">
              {spot.label}
              <div className="text-xs text-gray-500 mt-1">{spot.text}</div>
            </div>

            {hoveredId === spot.id && (
              <div className="absolute mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 text-sm text-gray-700">
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
