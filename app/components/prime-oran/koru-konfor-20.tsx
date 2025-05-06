"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  {
    label: "2+1 Flat / 80 m² Daire",
    image: "/KORU KONFOR 5+1.png",
    price: "7,75 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Otobüs", "5 Dakikadan itibaren"],
      ["Konut", "3 Blok 408"],
      ["Teslim", "2025 Yıl Sonu"],
      ["Ebeveyn Yatak Odası", "15,50 m²"],
      ["Ebeveyn Banyo", "4,00 m²"],
      ["Oda", "11,30 m²"],
      ["Antre", "7,85 m²"],
      ["Genel Banyo", "5,10 m²"],
      ["Balkon", "11,10 m²"]
    ]
  },
  {
    label: "2+1 Geniş Plan",
    image: "/KORU KONFOR 5+1.png",
    price: "8,25 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Otobüs", "5 Dakikadan itibaren"],
      ["Konut", "3 Blok 408"],
      ["Teslim", "2025 Yıl Sonu"],
      ["Ebeveyn Yatak Odası", "16,10 m²"],
      ["Ebeveyn Banyo", "4,50 m²"],
      ["Oda", "12,00 m²"],
      ["Antre", "8,10 m²"],
      ["Genel Banyo", "5,30 m²"],
      ["Balkon", "12,20 m²"]
    ]
  },
  {
    label: "2+1 Bahçeli Seçenek",
    image: "/KORU KONFOR 5+1.png",
    price: "8,60 Milyon TL",
    location: "Çankaya/Ankara",
    details: [
      ["Otobüs", "5 Dakikadan itibaren"],
      ["Konut", "3 Blok 408"],
      ["Teslim", "2025 Yıl Sonu"],
      ["Ebeveyn Yatak Odası", "15,80 m²"],
      ["Ebeveyn Banyo", "4,20 m²"],
      ["Oda", "11,80 m²"],
      ["Antre", "7,90 m²"],
      ["Genel Banyo", "5,00 m²"],
      ["Bahçe Alanı", "25,00 m²"]
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
