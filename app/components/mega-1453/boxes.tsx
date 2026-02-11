"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export default function InfoCardsSection() {
  const tCommon = useTranslations("common");

  const whatsappLink = buildWhatsAppUrl(tCommon("whatsAppGenericMessage"));

  const cards = [
    {
      id: 1,
      type: "image" as const,
      title: tCommon("boxesNewsTitle"),
      highlight: tCommon("boxesNewsHighlight"),
      background: "/new-mega1453-6.jpg",
      wide: true,
      link: "https://trinvest.com.tr/mega1453/",
    },
    {
      id: 2,
      type: "icon" as const,
      title: tCommon("boxesDownloadTitle"),
      highlight: tCommon("boxesDownloadHighlight"),
      icon: "/x.png",
      link: "https://trinvest.com.tr/kataloglar/#flipbook-df_21514/1/",
    },
    {
      id: 3,
      type: "image" as const,
      title: tCommon("boxesVisitTitle"),
      highlight: tCommon("boxesVisitHighlight"),
      background: "/new-mega1453-8.jpg",
      link: "https://maps.app.goo.gl/bmZ66EzsQ6R4vXoa7",
    },
    {
      id: 4,
      type: "icon" as const,
      title: tCommon("boxesQuestionsTitle"),
      highlight: tCommon("boxesQuestionsHighlight"),
      icon: "/vegacenter-canli-destek.png",
      subtitle: tCommon("boxesQuestionsSubtitle"),
      link: whatsappLink,
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {cards.map((card) => (
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
