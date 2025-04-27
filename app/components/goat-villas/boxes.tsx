"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    type: "image",
    title: "Haberleri öğrenin",
    highlight: "Proje Hakkında Tüm Bilgiler",
    background: "/goat-villas-bilkent-4.jpg",
    wide: true,   // Mark this card as wide
  },
  {
    id: 2,
    type: "icon",
    title: "Belgeleri İndirin",
    highlight: "Nata Yaşam Projeleri",
    icon: "/vegacenter-klasor.png",
  },
  {
    id: 3,
    type: "image",
    title: "Ziyaret Edin",
    highlight: "Projenin Lokasyonunu Görün",
    background: "/goat-villas-bilkent-5.jpg",
  },
  {
    id: 4,
    type: "icon",
    title: "Sorularınızı Cevaplıyoruz",
    highlight: "5 dakika içinde",
    icon: "/vegacenter-canli-destek.png",
    subtitle: "Projesyonel Ekibimizle",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative ${
              card.wide ? "w-115" : "w-59"
            } h-52 rounded-lg overflow-hidden shadow-sm ${
              card.type === "icon" ? "bg-gray-50 flex flex-col justify-between p-4" : ""
            }`}
          >
            {card.type === "image" && card.background && (
              <>
                <Image
                  src={card.background}
                  alt={card.highlight}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 text-white text-sm leading-snug">
                  <p>{card.title}</p>
                  <p className="font-semibold">{card.highlight}</p>
                </div>
              </>
            )}

            {card.type === "icon" && card.icon && (
              <>
                <div className="text-gray-500 text-sm leading-snug">
                  <p>{card.title}</p>
                  <p className="font-semibold text-gray-800">{card.highlight}</p>
                  {card.subtitle && (
                    <p className="text-xs text-gray-400 mt-1">{card.subtitle}</p>
                  )}
                </div>
                <div className="w-25 h-25 mx-auto">
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
