"use client";

import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "A Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/antares-A BLOK.png",
    info: "Göz Alıcı Manzara, Kaliteli Yaşam",
    position: { top: "40%", left: "80%" },
  },
  {
    id: 2,
    label: "B Blok",
    text: "Modern Tasarım, Konforlu Yaşam",
    image: "/antares-B BLOK.png",
    info: "Modern Tasarım, Konforlu Yaşam",
    position: {top: "40%", left: "65%"},
  },
  {
    id: 3,
    label: "C Blok",
    text: "Şehrin Kalbinde, Hayatın İçinde",
    image: "/antares-C BLOK.png",
    info: "Şehrin Kalbinde, Hayatın İçinde",
    position: { top: "50%", left: "70%" },
  },
  {
    id: 4,
    label: "D Blok",
    text: "Sonsuz Olanaklar, Sınırsız Konfor",
    image: "/antares-D BLOK.png",
    info: "Sonsuz Olanaklar, Sınırsız Konfor",
    position: { top: "50%", left: "55%" },
  },
  {
    id: 5,
    label: "E Blok",
    text: "Hayalinizdeki Yaşam Alanı",
    image: "/antares-E BLOK.png",
    info: "Hayalinizdeki Yaşam Alanı",
    position: { top: "50%", left: "40%" },
  },
  {
    id: 6,
    label: "F Blok",
    text: "Hayalinizdeki Yaşam Alanı",
    image: "/antares-F BLOK.png",
    info: "Hayalinizdeki Yaşam Alanı",
    position: { top: "50%", left: "25%" },
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
        Etlik'in kalbinde yaşamın adresi Antares Konutları ile kalite, konfor, güven bir arada iken Antares AVM ile her şey yanıbaşınızda. Dolunay iştiraki olan Antares Konutları merkezi konumu, sosyal olanaklarıyla keyifli ve konforlu bir yaşam Antares Konutları ile buluşuyor. 
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl h-[70vh] mx-auto">
        <Image
          src="/antares-bloklar.jpeg"
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
