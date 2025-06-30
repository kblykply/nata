"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  {
  label: "Bodrum Kat",
  image: "/korubodrum.jpg", // replace with the actual image path if available
  price: "1.0 Milyon TL", // optional, update if needed
  location: "Çankaya/Ankara", // optional, update if needed
  details: [
    ["Hol", "7.20 m²"],
    ["Tesisat Odası", "7.20 m²"],
    ["Görevli Odası", "13.70 m²"],
    ["Duş", "3.85 m²"],
    ["Otopark", "2 Araçlık"]
  ]
},
{
  label: "Zemin Kat",
  image: "/koruzemin.jpg", // replace with actual image path if needed
  price: "",
  location: "Çankaya/Ankara", // optional
  details: [
    ["Antre", "12.00 m²"],
    ["Vestiyer", "3.30 m²"],
    ["Kiler", "2.25 m²"],
    ["WC", "2.00 m²"],
    ["LVB", "2.00 m²"],
    ["Salon", "38.00 m²"],
    ["Mutfak", "28.00 m²"],
    ["Teras", "İki alan mevcut"],
    ["Süs Havuzu", ""]
  ]
}
,

  {
  label: "1. Kat",
  image: "/korubirincikat.jpg", // update this with the actual image path if needed
  price: "1.0 Milyon TL", // optional, update if needed
  location: "Çankaya/Ankara", // optional or editable
  details: [
    ["Hol", "6.70 m²"],
    ["Çamaşır Odası", "4.25 m²"],
    ["Oda 1", "13.40 m²"],
    ["Oda 2", "14.80 m²"],
    ["Duş (iki duş)", "3.40 m² + 3.40 m²"],
    ["Balkon (iki balkon)", "3.90 m² + 4.10 m²"],
    ["Ebeveyn Yatak Odası", "22.30 m²"],
    ["Giyinme Odası", "3.70 m²"],
    ["Duş", "3.70 m²"],
    ["Teras", "13.50 m²"]
  ]
}

];

export default function PlanDetailsWithGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = gallery[currentIndex];

  return (
<section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 min-h-[80vh]">      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Details */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Koru Konfor</h2>
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
       {/* Desktop: vertical thumbnail selector */}
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

{/* Mobile: horizontal scrollable thumbnails */}
<div className="flex lg:hidden gap-3 mt-6 overflow-x-auto">
  {gallery.map((item, i) => (
    <button
      key={i}
      onClick={() => setCurrentIndex(i)}
      className={`min-w-[60px] h-[60px] border-2 rounded-lg flex-shrink-0 transition ${
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
