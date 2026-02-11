"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const hotspots = [
  {
    id: 1,
    image: "/vega-otonomi-A BLOK.png",
    position: { top: "10%", left: "75%" },
  },
  {
    id: 2,
    image: "/vega-otonomi-B BLOK.png",
    position: { top: "16%", left: "70%" },
  },
  {
    id: 3,
    image: "/vega-otonomi-C BLOK.png",
    position: { top: "25%", left: "74%" },
  },
  {
    id: 4,
    image: "/vega-otonomi-D BLOK.png",
    position: { top: "24%", left: "60%" },
  },
  {
    id: 5,
    image: "/vega-otonomi-E BLOK.png",
    position: { top: "40%", left: "67%" },
  },
  {
    id: 6,
    image: "/vega-otonomi-F BLOK.png",
    position: { top: "36%", left: "55%" },
  },
  {
    id: 7,
    image: "/vega-otonomi-G BLOK.png",
    position: { top: "51%", left: "50%" },
  },
  {
    id: 8,
    image: "/vega-otonomi-H BLOK.png",
    position: { top: "65%", left: "35%" },
  },
] as const;

export default function SidePlans() {
  const t = useTranslations("vegaOtonomi.sitePlans");

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 whitespace-pre-line">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Image + Hotspots */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/vega-otonomi-bloklar.jpeg"
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
              {/* Dot (Mobile) */}
              <div className="block md:hidden w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow hover:scale-125 transition-transform cursor-pointer" />

              {/* Button Label (Desktop) */}
              <div className="hidden md:block bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-sm font-medium text-gray-800 border border-gray-200 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition">
                {t(`hotspots.${spot.id}.label`)}
              </div>

              {/* Tooltip (for both views) */}
              {hoveredId === spot.id && (
                <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-40 sm:w-48 bg-white border border-gray-200 shadow-xl rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-700 z-30">
                  {t(`hotspots.${spot.id}.info`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
