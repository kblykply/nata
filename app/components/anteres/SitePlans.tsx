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
      <div className="text-center max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
          Yaşam Nerede <br /> Biz Orada.
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
          Mega 1453, Ankara’nın kalbinde, Yenimahalle Orman Çiftliği Mahallesi’nde
          şehrin ritmini yeniden tanımlayan eşsiz bir yaşam deneyimi sunuyor.
          Toplamda 70.000 m²’lik geniş arsa alanında yükselen bu prestijli proje,
          başkentin dokusuna doğa ile harmanlanmış bir soluk getiriyor. Özgün
          mimarisi ve yaklaşık 36.000m² toplam peyzaj alanıyla modern yaşamı yeniden
          tasarlayan Mega 1453, her biri yüksek yaşam standartlarına sahip toplam 715
          konuttan (1.etap) oluşuyor.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1]">
          {/* Base Image */}
          <Image
            src="/antares-bloklar.jpeg"
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
