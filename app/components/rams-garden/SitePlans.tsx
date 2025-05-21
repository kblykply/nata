"use client";

import Image from "next/image";
import { useState } from "react";
type Hotspot = {
  id: number;
  label: string;
  text: string;
  image: string;
  info: string;
  position: {
    top: string;
    left: string;
  };
};

const hotspots = [
  {
    id: 1,
    label: "A Blok",
    text: "A Blok",
    image: "/RAMS- A BLOK.png",
    info: "A Blok",
    position: { top: "22%", left: "19%" },
  },
  {
    id: 2,
    label: "B Blok",
    text: "Modern Mimari, Konforlu Yaşam",
    image: "/RAMS- B BLOK.png",
    info: "B Blok",
    position: { top: "38%", left: "20%" },
  },
  {
    id: 3,
    label: "C Blok",
    text: "Doğayla İç İçe, Huzurlu Yaşam",
    image: "/RAMS- C BLOK.png",
    info: "C Blok",
    position: { top: "49%", left: "28%" },
  },
  {
    id: 4,
    label: "D Blok",
    text: "Şehrin Kalbinde, Sakin Bir Yaşam",
    image: "/RAMS- D BLOK.png",
    info: "D Blok",
    position: { top: "60%", left: "40%" },
  },
  {
    id: 5,
    label: "E Blok",
    text: "Geniş Alanlar, Ferah Yaşam",
    image: "/RAMS- E BLOK.png",
    info: "E Blok",
    position: { top: "65%", left: "52%" },
  },
  {
    id: 6,
    label: "F Blok",
    text: "Estetik Tasarım, Konforlu Yaşam",
    image: "/RAMS- F BLOK.png",
    info: "F Blok",
    position: { top: "66%", left: "68%" },
  },
  
   { id: 7,
    label: "G Blok",
    text: "Modern Mimari, Konforlu Yaşam",
    image: "/RAMS- G BLOK.png",
    info: "G Blok",
    position: { top: "50%", left: "74%" },
  },
  {
    id: 8,
    label: "H Blok",
    text: "Şehrin Kalbinde, Sakin Bir Yaşam",
    image: "/RAMS- H BLOK.png",
    info: "H Blok",
    position: { top: "46%", left: "62%" },
  },
  {
    id: 9,
    label: "I Blok",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/RAMS- I BLOK.png",
    info: "I Blok",
    position: { top: "39%", left: "51%" },
  },
  {
    id: 10,
    label: "J Blok",
    text: "Doğayla İç İçe, Huzurlu Yaşam",
    image: "/RAMS- J BLOK.png",
    info: "J Blok",
    position: { top: "30%", left: "40%" },
  },
  {
    id: 11,
    label: "K Blok",
    text: "Geniş Alanlar, Ferah Yaşam",
    image: "/RAMS-K BLOK.png",
    info: "K Blok",
    position: { top: "20%", left: "30%" },
  },
  

  
  
];
export default function SidePlans() {
  const [hovered, setHovered] = useState<{ id: number; x: number; y: number } | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (e: React.MouseEvent, spot: Hotspot) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered({
      id: spot.id,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setHoveredImage(spot.image);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setHoveredImage(null);
  };

  return (
    <section className="relative w-full bg-white">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          Yaşam Nerede <br /> Biz Orada.
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Mega 1453, Ankara’nın kalbinde, Yenimahalle Orman Çiftliği Mahallesi’nde
          şehrin ritmini yeniden tanımlayan eşsiz bir yaşam deneyimi sunuyor...
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[563/358]">
          {/* Base Image */}
          <Image
            src="/rams-garden-bloklar.jpeg"
            alt="Plan Image"
            fill
            className="object-contain z-0"
          />

          {/* Overlay Image on Hover */}
          {hoveredImage && (
            <Image
              src={hoveredImage}
              alt="Highlight"
              fill
              className="object-contain z-10 pointer-events-none transition-opacity duration-300"
            />
          )}

          {/* Red Dots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-30"
              style={{
                top: spot.position.top,
                left: spot.position.left,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={(e) => handleMouseEnter(e, spot)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full border-2 border-white shadow hover:scale-125 transition-transform cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip (fixed on screen) */}
      {hovered && (
        <div
          className="fixed z-50 w-40 sm:w-48 bg-white border border-gray-300 shadow-2xl rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-800 pointer-events-none transition-opacity duration-300"
          style={{
            top: hovered.y - 48,
            left: hovered.x,
            transform: "translate(-50%, -100%)",
          }}
        >
          {hotspots.find((h) => h.id === hovered.id)?.info}
        </div>
      )}
    </section>
  );
}