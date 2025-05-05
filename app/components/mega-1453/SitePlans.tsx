"use client";

import Image from "next/image";
import { useState } from "react";


const hotspots = [
  { id: 0, label: "A Blok", text: "A Blok", image: "/mega-blok-0.png", info: "Mega 1454 A Blok", position: { top: "87%", left: "70%" } },
  { id: 1, label: "B Blok", text: "B Blok", image: "/mega-blok-1.png", info: "Mega 1454 B Blok", position: { top: "55%", left: "79%" } },
  { id: 2, label: "C Blok", text: "C Blok", image: "/mega-blok-2.png", info: "Mega 1454 C Blok", position: { top: "28%", left: "73%" } },
  { id: 3, label: "D Blok", text: "D Blok", image: "/mega-blok-3.png", info: "Mega 1454 D Blok", position: { top: "72%", left: "47%" } },
  { id: 4, label: "E Blok", text: "E Blok", image: "/mega-blok-4.png", info: "Mega 1454 E Blok", position: { top: "65%", left: "67%" } },
  { id: 5, label: "F Blok", text: "F Blok", image: "/mega-blok-5.png", info: "Mega 1454 F Blok", position: { top: "40%", left: "67%" } },
  { id: 6, label: "G Blok", text: "G Blok", image: "/mega-blok-6.png", info: "Mega 1454 G Blok", position: { top: "55%", left: "55%" } },
  { id: 7, label: "H Blok", text: "H Blok", image: "/mega-blok-7.png", info: "Mega 1454 H Blok", position: { top: "48%", left: "32%" } },
  { id: 8, label: "I Blok", text: "I Blok", image: "/mega-blok-8.png", info: "Mega 1454 I Blok", position: { top: "45%", left: "39%" } },
  { id: 9, label: "J Blok", text: "J Blok", image: "/mega-blok-9.png", info: "Mega 1454 J Blok", position: { top: "30%", left: "54%" } },
  { id: 10, label: "K Blok", text: "K Blok", image: "/mega-blok-10.png", info: "Mega 1454 K Blok", position: { top: "21%", left: "56%" } },
  { id: 11, label: "L Blok", text: "L Blok", image: "/mega-blok-11.png", info: "Mega 1454 L Blok", position: { top: "33%", left: "33%" } },
  { id: 12, label: "M Blok", text: "M Blok", image: "/mega-blok-12.png", info: "Mega 1454 M Blok", position: { top: "27%", left: "45%" } },
  { id: 13, label: "N Blok", text: "N Blok", image: "/mega-blok-13.png", info: "Mega 1454 N Blok", position: { top: "32%", left: "10%" } },
  { id: 14, label: "O Blok", text: "O Blok", image: "/mega-blok-14.png", info: "Mega 1454 O Blok", position: { top: "29%", left: "25%" } },
  { id: 15, label: "P Blok", text: "P Blok", image: "/mega-blok-15.png", info: "Mega 1454 P Blok", position: { top: "20%", left: "41%" } },
  { id: 16, label: "Q Blok", text: "Q Blok", image: "/mega-blok-16.png", info: "Mega 1454 Q Blok", position: { top: "15%", left: "49%" } },
  { id: 17, label: "R Blok", text: "R Blok", image: "/mega-blok-17.png", info: "Mega 1454 R Blok", position: { top: "23%", left: "15%" } },
  { id: 18, label: "S Blok", text: "S Blok", image: "/mega-blok-18.png", info: "Mega 1454 S Blok", position: { top: "16%", left: "29%" } },
  { id: 19, label: "T Blok", text: "T Blok", image: "/mega-blok-19.png", info: "Mega 1454 T Blok", position: { top: "12%", left: "42%" } },
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
            src="/mega-bloklar.jpeg"
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
