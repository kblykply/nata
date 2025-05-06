"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  {
    label: "A1 Blok Daire",
    image: "/KORU KONFOR 5+1.png",
    price: "16.8 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Antre", "6.2 m²"],
      ["Koridor", "12.8 m²"],
      ["Salon", "28.7 m²"],
      ["Mutfak", "17.5 m²"],
      ["Yatak Odası", "12.5 m²"],
      ["Ebeveyn Yatak Odası", "15.7 m²"],
      ["Giyinme Odası", "5.6 m²"],
      ["Ebeveyn Banyo", "4.8 m²"],
      ["Net Alan", "117 m²"]
    ]
  },
  {
    label: "B2 Plan",
    image: "/KORU KONFOR 5+1.png",
    price: "14.2 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Antre", "7.2 m²"],
      ["Koridor", "10.3 m²"],
      ["Salon", "26.7 m²"],
      ["Mutfak", "15.1 m²"],
      ["Yatak Odası", "12.2 m²"],
      ["Ebeveyn Yatak Odası", "14.4 m²"],
      ["Giyinme Odası", "6.0 m²"],
      ["Ebeveyn Banyo", "5.0 m²"],
      ["Net Alan", "110 m²"]
    ]
  },
  {
    label: "C1 Plan",
    image: "/KORU KONFOR 5+1.png",
    price: "15.6 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Antre", "6.8 m²"],
      ["Koridor", "11.2 m²"],
      ["Salon", "27.4 m²"],
      ["Mutfak", "16.2 m²"],
      ["Yatak Odası", "13.5 m²"],
      ["Ebeveyn Yatak Odası", "16.0 m²"],
      ["Giyinme Odası", "5.9 m²"],
      ["Ebeveyn Banyo", "4.9 m²"],
      ["Net Alan", "116 m²"]
    ]
  }
];

export default function PlanDetailsWithGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = gallery[currentIndex];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Details */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Prime Oran</h2>
          <h3 className="text-xl font-medium text-gray-700">3+1 TİP B2B - {current.label}</h3>

          <div className="bg-white  rounded-xl shadow p-6 w-full max-w-md text-sm text-gray-700">
            <p className="font-semibold mb-4 text-base text-black">
              {current.price}’den başlayan fiyatlarla
            </p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Lokasyon:</span>
                <span className="font-medium">{current.location}</span>
              </div>
              {current.details.map(([label, value], i) => (
                <div key={i} className="flex justify-between">
                  <span>{label}:</span>
                  <span className={label === "Net Alan" ? "font-semibold" : ""}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 w-full max-w-2xl relative min-h-[400px]">
          <Image
            src={current.image}
            alt={current.label}
            fill
            className="object-contain"
          />
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex flex-col gap-4">
          {gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-[60px] h-[60px] border-2 rounded-lg transition ${
                i === currentIndex ? "border-[#ab1e3b]" : "border-gray-300"
              }`}
            >
              <Image
                src={item.image}
                alt={item.label}
                width={60}
                height={60}
                className="object-contain rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
