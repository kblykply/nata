"use client";

import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "A Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/RAMS- A BLOK.png",
    info: "Göz Alıcı Manzara, Kaliteli Yaşam",
    position: { top: "22%", left: "19%" },
  },
  {
    id: 2,
    label: "B Blok",
    text: "Modern Mimari, Konforlu Yaşam",
    image: "/RAMS- B BLOK.png",
    info: "Modern Mimari, Konforlu Yaşam",
    position: { top: "38%", left: "20%" },
  },
  {
    id: 3,
    label: "C Blok",
    text: "Doğayla İç İçe, Huzurlu Yaşam",
    image: "/RAMS- C BLOK.png",
    info: "Doğayla İç İçe, Huzurlu Yaşam",
    position: { top: "49%", left: "28%" },
  },
  {
    id: 4,
    label: "D Blok",
    text: "Şehrin Kalbinde, Sakin Bir Yaşam",
    image: "/RAMS- D BLOK.png",
    info: "Şehrin Kalbinde, Sakin Bir Yaşam",
    position: { top: "60%", left: "40%" },
  },
  {
    id: 5,
    label: "E Blok",
    text: "Geniş Alanlar, Ferah Yaşam",
    image: "/RAMS- E BLOK.png",
    info: "Geniş Alanlar, Ferah Yaşam",
    position: { top: "65%", left: "52%" },
  },
  {
    id: 6,
    label: "F Blok",
    text: "Estetik Tasarım, Konforlu Yaşam",
    image: "/RAMS- F BLOK.png",
    info: "Estetik Tasarım, Konforlu Yaşam",
    position: { top: "66%", left: "68%" },
  },
  
   { id: 7,
    label: "G Blok",
    text: "Modern Mimari, Konforlu Yaşam",
    image: "/RAMS- G BLOK.png",
    info: "Modern Mimari, Konforlu Yaşam",
    position: { top: "50%", left: "74%" },
  },
  {
    id: 8,
    label: "H Blok",
    text: "Şehrin Kalbinde, Sakin Bir Yaşam",
    image: "/RAMS- H BLOK.png",
    info: "Şehrin Kalbinde, Sakin Bir Yaşam",
    position: { top: "46%", left: "62%" },
  },
  {
    id: 9,
    label: "I Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/RAMS- I BLOK.png",
    info: "Göz Alıcı Manzara, Kaliteli Yaşam",
    position: { top: "39%", left: "51%" },
  },
  {
    id: 10,
    label: "J Blok",
    text: "Doğayla İç İçe, Huzurlu Yaşam",
    image: "/RAMS- J BLOK.png",
    info: "Doğayla İç İçe, Huzurlu Yaşam",
    position: { top: "30%", left: "40%" },
  },
  {
    id: 11,
    label: "K Blok",
    text: "Geniş Alanlar, Ferah Yaşam",
    image: "/RAMS-K BLOK.png",
    info: "Geniş Alanlar, Ferah Yaşam",
    position: { top: "20%", left: "30%" },
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
        İstanbul'un kalbi Bahçelievler'de 2+1'den 5+1 seçeneğine kadar 796 daire bulunmakta olup, yanı başında nitelikli yeşil alan ve peyzaj alanları ile prestijli mağazaların olduğu özel proje NATA Holding ve Rams Türkiye güvencesiyle sizlerle buluşuyor.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl h-[70vh] mx-auto">
        <Image
          src="/rams-garden-bloklar.jpeg"
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
