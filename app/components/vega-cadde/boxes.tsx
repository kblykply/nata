"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type Card = {
  id: number;
  type: string;
  title: string;
  highlight: string;
  icon?: string;
  link: string;
  background?: string;
  wide?: boolean;
  subtitle?: string;
};

const cards: Card[] = [
  {
    id: 1,
    type: "image",
    title: "Haberleri öğrenin",
    highlight: "Proje Hakkında Tüm Bilgiler",
    background:     "/cadde-galeri/vegacadde1.jpg",

    wide: true,   // Mark this card as wide
    link: "https://vegacadde.com/",
  },
  {
    id: 2,
    type: "icon",
    title: "Belgeleri İndirin",
    highlight: "NATA Yaşam Projeleri",
    icon: "/x.png",
    link: "https://vegacadde.com/img/vegaCaddeKatalog.pdf",
  },
  {
    id: 3,
    type: "image",
    title: "Ziyaret Edin",
    highlight: "Projenin Lokasyonunu Görün",
    background:    "/cadde-galeri/vegacadde3.jpg",
    link: "https://maps.app.goo.gl/iNZygMahRAdCPgqu9",

  },
];

export default function InfoCardsSection() {
  const tCommon = useTranslations("common");

  const localizedCards = cards.map((card) => {
    if (card.id === 1) {
      return {
        ...card,
        title: tCommon("boxesNewsTitle"),
        highlight: tCommon("boxesNewsHighlight"),
      };
    }
    if (card.id === 2) {
      return {
        ...card,
        title: tCommon("boxesDownloadTitle"),
        highlight: tCommon("boxesDownloadHighlight"),
      };
    }
    if (card.id === 3) {
      return {
        ...card,
        title: tCommon("boxesVisitTitle"),
        highlight: tCommon("boxesVisitHighlight"),
      };
    }
    return card;
  });
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {localizedCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full ${
              card.wide ? "md:w-115" : "md:w-59"
            } h-60 md:h-52 rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 ${
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
                <div className="absolute inset-0 bg-black/30 z-0" />
                <div className="absolute top-4 left-4 text-white text-sm leading-snug z-10">
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
                <div className="w-30 h-30 mx-auto">
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
