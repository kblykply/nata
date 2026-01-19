"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  {
    label: "Asma Kat",
    image: "/momentbestepe/asmakat.png",
  },
  {
    label: "Giriş Kat",
    image: "/momentbestepe/giriskat.png",
  },
  {
    label: "Bodrum Kat",
    image: "/momentbestepe/bodrumkat.png",
  },
];

export default function MomentBestepeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = gallery[currentIndex];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              MOMENT BEŞTEPE SATILIK DÜKKAN
            </h2>
            <p className="text-lg text-gray-700">Yeni Mahalle, Ankara</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 w-full max-w-md text-sm text-gray-700">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tür:</span>
                <span className="font-medium">Dükkan</span>
              </div>
              <div className="flex justify-between">
                <span>Alan:</span>
                <span className="font-medium">539 m²</span>
              </div>
              <div className="flex justify-between">
                <span>Kat:</span>
                <span className="font-medium">Asma katlı</span>
              </div>
              <div className="flex justify-between">
                <span>Plan:</span>
                <span className="font-medium">{current.label}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl relative min-h-[420px]">
          <Image
            src={current.image}
            alt={current.label}
            fill
            className="object-contain"
          />
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          {gallery.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setCurrentIndex(i)}
              className={`w-[70px] h-[70px] border-2 rounded-lg transition ${
                i === currentIndex ? "border-[#ab1e3b]" : "border-gray-300"
              }`}
            >
              <Image
                src={item.image}
                alt={item.label}
                width={70}
                height={70}
                className="object-contain rounded"
              />
            </button>
          ))}
        </div>

        <div className="flex lg:hidden gap-3 mt-6 overflow-x-auto">
          {gallery.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setCurrentIndex(i)}
              className={`min-w-[70px] h-[70px] border-2 rounded-lg flex-shrink-0 transition ${
                i === currentIndex ? "border-[#ab1e3b]" : "border-gray-300"
              }`}
            >
              <Image
                src={item.image}
                alt={item.label}
                width={70}
                height={70}
                className="object-contain rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
