"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Hotspot = {
  id: number;
  image: string;
  labelKey: string;
  infoKey: string;
  position: {
    top: string;
    left: string;
  };
};

const hotspots: Hotspot[] = [
  {
    id: 0,
    image: "/incek-vaziyet/blok1.png",
    labelKey: "siteBlockALabel",
    infoKey: "siteBlockAInfo",
    position: { top: "37%", left: "25%" },
  },
  {
    id: 1,
    image: "/incek-vaziyet/blok2.png",
    labelKey: "siteBlockBLabel",
    infoKey: "siteBlockBInfo",
    position: { top: "25%", left: "32%" },
  },
  {
    id: 2,
    image: "/incek-vaziyet/blok3.png",
    labelKey: "siteBlockCLabel",
    infoKey: "siteBlockCInfo",
    position: { top: "33%", left: "51%" },
  },
  {
    id: 3,
    image: "/incek-vaziyet/blok4.png",
    labelKey: "siteBlockDLabel",
    infoKey: "siteBlockDInfo",
    position: { top: "33%", left: "74%" },
  },
];

export default function SidePlans() {
  const t = useTranslations("incek");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hoveredImage = hotspots.find((h) => h.id === hoveredId)?.image || null;

  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 whitespace-pre-line">
          {t("sitePlansTitle")}
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          {t("sitePlansDescription")}
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/incek-vaziyet/nataincek-blok.png"
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
                {t(spot.labelKey as any)}
              </div>

              {hoveredId === spot.id && (
  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-40 sm:w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2 sm:p-3 text-[10px] sm:text-xs text-gray-700 z-30">
    {t(spot.infoKey as any).split("\n").map((line, i) => (
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
