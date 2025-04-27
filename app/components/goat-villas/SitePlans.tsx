"use client";

import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "TİP 1",
    text: "Göz Alıcı Manzara, Kaliteli Yaşam",
    image: "/goat-tip1.png",
    info: "TİP 1 villalar, 4 katlı olarak tasarlanmış olup, toplamda 750 m² brüt alana sahiptir. Bu villa tipinde, yaşam alanlarını tamamlayan 250 ile 400 m² arasında değişen açık peyzaj alanı bulunur, böylece geniş ve esnek bir bahçe kullanım imkanı sunar.",
    position: { top: "25%", left: "50%" },
  },
  {
    id: 2,
    label: "TİP 2",
    text: "Modern Tasarım, Konforlu Yaşam",
    image: "/goat-tip2.png",
    info: "TİP 2 villalar da 4 kat olarak planlanmış ve yine 750 m² brüt alan ile geniş bir yaşam alanı sağlamaktadır. Tip 2’nin farkı, daha büyük bir 300 - 350 m² açık peyzaj alanına sahip olmasıdır, bu da daha fazla yeşil alan tercih edenler için ideal bir seçenek sunar.",
    position: { top: "60%", left: "40%" },
  },
  {
    id: 3,
    label: "TİP 3",
    text: "Zamansız Tasarım, Ferah Yaşam",
    image: "/goat-tip3.png",
    info: "TİP 3 villalar, 4 katlı yapısıyla fonksiyonel bir kullanım alanı sağlarken, 680 m² brüt alanıyla daha kompakt bir yaşam alanı sunar. Bu villa tipinde ise sabit olarak 395 m² açık peyzaj alanı bulunmakta olup, geniş bahçe alanı ile doğayla iç içe bir yaşam imkanı sağlar.",
    position: { top: "60%", left: "70%" },
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
        Ankara’nın merkezi Bilkent 3’te, tüm şehri gören muhteşem bir noktada yer alan 4 katlı, açık peyzajlı ve 3 tip villa seçenekli bu proje; eşsiz tasarımı, yüksek kaliteli malzemeleri ve benzersiz mimarisi ile kendinizi tamamen özel hissedeceğiniz bir yaşam tarzı sunmak üzere tasarlandı. 
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl h-[70vh] mx-auto">
        <Image
          src="/goat-villas-bloklar.jpeg"
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
