"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";


const listings = [
  
  {
    title: "Prime Oran",
    price: "16.8 Milyon",
    currency: "TL",
    location: "Çankaya/Ankara",
    type: "Rezidans",
    specs: ["2+1", "117 m²", "31. Kat"],
    image: "/PRIME ORAN 2+1 TI╠çPC16-D1_D2 BLOK.png",
    imageAlt: "/prime-map.png",
    link: "/prime-oran"
  },
 
  
  {
    title: "Prime Oran",
    price: "14.2 Milyon",
    currency: "TL",
    location: "Çankaya/Ankara",
    type: "Rezidans",
    specs: ["3+1", "140 m²", "14. Kat"],
    image: "/PRIME ORAN 3+1 TI╠çPB2B-A1 BLOK.png",
    imageAlt: "/prime-map.png",
    link: "/prime-oran"
  }
];

export default function KoruKonforListings() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">


<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
  Benzer Projeler
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <a
              href={item.link}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white shadow-md rounded-xl overflow-hidden relative transition duration-300"
            >
              <span className="absolute top-4 right-4 bg-[#ab1e3b] text-white text-xs px-4 py-1 rounded-full z-20">
                {item.type}
              </span>

              <div className="p-4 space-y-1 z-20 relative">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-md font-medium text-gray-800">
                  {item.price}{" "}
                  <span className="text-sm text-gray-500">{item.currency}</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs text-gray-500" />
                  {item.location}
                </p>

                <div className="flex gap-2 flex-wrap mt-2">
                  {item.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 border px-3 py-1 rounded-full text-gray-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full h-72 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={item.imageAlt}
                  alt={`${item.title} Map`}
                  fill
                  className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="absolute bottom-3 right-3 z-20">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-sm">
                  ♥
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
