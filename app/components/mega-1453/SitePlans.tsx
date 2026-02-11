"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Hotspot {
  id: number;
  image: string;
  position: { top: string; left: string };
}

const HOTSPOTS: Hotspot[] = [
  { id: 0, image: "/mega-blok-0.png", position: { top: "70%", left: "70%" } },
  { id: 1, image: "/mega-blok-1.png", position: { top: "55%", left: "79%" } },
  { id: 2, image: "/mega-blok-2.png", position: { top: "32%", left: "73%" } },
  { id: 3, image: "/mega-blok-3.png", position: { top: "62%", left: "47%" } },
  { id: 4, image: "/mega-blok-4.png", position: { top: "65%", left: "67%" } },
  { id: 5, image: "/mega-blok-5.png", position: { top: "40%", left: "67%" } },
  { id: 6, image: "/mega-blok-6.png", position: { top: "55%", left: "55%" } },
  { id: 7, image: "/mega-blok-7.png", position: { top: "48%", left: "32%" } },
  { id: 8, image: "/mega-blok-8.png", position: { top: "45%", left: "39%" } },
  { id: 9, image: "/mega-blok-9.png", position: { top: "30%", left: "54%" } },
  { id: 10, image: "/mega-blok-10.png", position: { top: "27%", left: "56%" } },
  { id: 11, image: "/mega-blok-11.png", position: { top: "33%", left: "33%" } },
  { id: 12, image: "/mega-blok-12.png", position: { top: "29%", left: "45%" } },
  { id: 13, image: "/mega-blok-13.png", position: { top: "32%", left: "10%" } },
  { id: 14, image: "/mega-blok-14.png", position: { top: "35%", left: "25%" } },
  { id: 15, image: "/mega-blok-15.png", position: { top: "25%", left: "41%" } },
  { id: 16, image: "/mega-blok-16.png", position: { top: "20%", left: "49%" } },
  { id: 17, image: "/mega-blok-17.png", position: { top: "27%", left: "15%" } },
  { id: 18, image: "/mega-blok-18.png", position: { top: "24%", left: "29%" } },
  { id: 19, image: "/mega-blok-19.png", position: { top: "20%", left: "42%" } },
];

export default function SidePlans() {
  const tSitePlans = useTranslations("mega1453.sitePlans");
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 whitespace-pre-line">
          {tSitePlans("title")}
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          {tSitePlans("description")}
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[563/358]">
          {/* Base Image */}
          <Image
            src="/mega-bloklar.jpeg"
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

          {/* Hotspots */}
          {HOTSPOTS.map((spot) => (
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
            top: hovered.y - 12,
            left: hovered.x,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tSitePlans(`hotspots.${hovered.id}.info` as any)}
        </div>
      )}
    </section>
  );
}

