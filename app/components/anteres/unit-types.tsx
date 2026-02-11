"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

type UnitDetailKey =
  | "apartmentType"
  | "livingRoom"
  | "kitchen"
  | "entryway"
  | "corridor"
  | "bedroom"
  | "bedroom1"
  | "bedroom2"
  | "bedroom3"
  | "masterBedroom"
  | "masterDressingRoom"
  | "masterBathroom"
  | "sharedBathroom"
  | "wc"
  | "laundryCabinet"
  | "pantry"
  | "balcony"
  | "balcony1"
  | "balcony2"
  | "livingRoomKitchen"
  | "totalNetArea"
  | "sharedArea"
  | "approxStorageNetArea"
  | "totalGrossArea"
  | "approxStorageArea"
  | "bedroomBathroom"
  | "closetRoom"
  | "sofaArea"
  | "bedroom2Bathroom"
  | "apartmentNetArea"
  | "parkingCommonArea"
  | "apartmentGrossArea"
  | "storage"
  | "bedroom1Bathroom"
  | "terrace";

type UnitDetail = {
  labelKey: UnitDetailKey;
  value: string;
};

type UnitType = {
  id: string;
  image: string;
  details: UnitDetail[];
};

const unitTypes: UnitType[] = [
  {
    id: "1",
    image: "/antares-katplan-01.png",
    details: [
      { labelKey: "apartmentType", value: "A BLOK – TİP 3+1 B" },
      { labelKey: "livingRoom", value: "33,56 m²" },
      { labelKey: "kitchen", value: "11,40 m²" },
      { labelKey: "entryway", value: "6,77 m²" },
      { labelKey: "corridor", value: "9,00 m²" },
      { labelKey: "bedroom1", value: "12,18 m²" },
      { labelKey: "bedroom2", value: "12,60 m²" },
      { labelKey: "masterBedroom", value: "20,09 m²" },
      { labelKey: "masterDressingRoom", value: "4,41 m²" },
      { labelKey: "masterBathroom", value: "4,37 m²" },
      { labelKey: "sharedBathroom", value: "4,37 m²" },
      { labelKey: "wc", value: "2,50 m²" },
      { labelKey: "laundryCabinet", value: "1,36 m²" },
      { labelKey: "pantry", value: "1,41 m²" },
      { labelKey: "balcony1", value: "5,71 m²" },
      { labelKey: "balcony2", value: "4,34 m²" },
      { labelKey: "totalNetArea", value: "139,92 m²" },
      { labelKey: "sharedArea", value: "118,75 m²" },
      { labelKey: "approxStorageNetArea", value: "4,00 – 5,50 m²" },
      { labelKey: "totalGrossArea", value: "161,44 m²" },
    ],
  },
  {
    id: "2",
    image: "/antares-katplan-02.png",
    details: [
      { labelKey: "apartmentType", value: "B BLOK – TİP 1+1" },
      { labelKey: "livingRoomKitchen", value: "26,69 m²" },
      { labelKey: "entryway", value: "5,35 m²" },
      { labelKey: "bedroom", value: "13,89 m²" },
      { labelKey: "sharedBathroom", value: "4,66 m²" },
      { labelKey: "balcony", value: "2,94 m²" },
      { labelKey: "totalNetArea", value: "58,67 m²" },
      { labelKey: "sharedArea", value: "50,18 m²" },
      { labelKey: "approxStorageNetArea", value: "4,00 – 5,50 m²" },
      { labelKey: "totalGrossArea", value: "68,22 m²" },
    ],
  },
  {
    id: "3",
    image: "/antares-katplan-03.png",
    details: [
      { labelKey: "apartmentType", value: "B BLOK – TİP 2+1 A" },
      { labelKey: "livingRoom", value: "33,01 m²" },
      { labelKey: "kitchen", value: "13,68 m²" },
      { labelKey: "entryway", value: "7,08 m²" },
      { labelKey: "corridor", value: "4,74 m²" },
      { labelKey: "bedroom", value: "11,86 m²" },
      { labelKey: "masterBedroom", value: "17,43 m²" },
      { labelKey: "masterBathroom", value: "4,40 m²" },
      { labelKey: "sharedBathroom", value: "4,42 m²" },
      { labelKey: "balcony", value: "4,97 m²" },
      { labelKey: "totalNetArea", value: "106,92 m²" },
      { labelKey: "sharedArea", value: "89,74 m²" },
      { labelKey: "approxStorageNetArea", value: "4,00 – 5,50 m²" },
      { labelKey: "totalGrossArea", value: "122,00 m²" },
    ],
  },
  {
    id: "4",
    image: "/antares-katplan-04.png",
    details: [
      { labelKey: "apartmentType", value: "B BLOK – TİP 2+1 C" },
      { labelKey: "livingRoom", value: "26,10 m²" },
      { labelKey: "kitchen", value: "9,51 m²" },
      { labelKey: "entryway", value: "4,498 m²" },
      { labelKey: "corridor", value: "5,82 m²" },
      { labelKey: "bedroom", value: "10,69 m²" },
      { labelKey: "masterBedroom", value: "14,91 m²" },
      { labelKey: "masterBathroom", value: "4,05 m²" },
      { labelKey: "sharedBathroom", value: "4,25 m²" },
      { labelKey: "balcony1", value: "3,26 m²" },
      { labelKey: "balcony2", value: "11,84 m²" },
      { labelKey: "totalNetArea", value: "90,79 m²" },
      { labelKey: "sharedArea", value: "76,48 m²" },
      { labelKey: "approxStorageNetArea", value: "4,00 – 5,50 m²" },
      { labelKey: "totalGrossArea", value: "103,98 m²" },
    ],
  },
  {
    id: "5",
    image: "/antares-katplan-05.png",
    details: [
      { labelKey: "apartmentType", value: "B BLOK – TİP 3+1 B" },
      { labelKey: "livingRoom", value: "33,56 m²" },
      { labelKey: "kitchen", value: "11,40 m²" },
      { labelKey: "entryway", value: "6,77 m²" },
      { labelKey: "corridor", value: "9,00 m²" },
      { labelKey: "bedroom1", value: "12,18 m²" },
      { labelKey: "bedroom2", value: "12,60 m²" },
      { labelKey: "masterBedroom", value: "20,09 m²" },
      { labelKey: "masterDressingRoom", value: "4,41 m²" },
      { labelKey: "masterBathroom", value: "4,37 m²" },
      { labelKey: "sharedBathroom", value: "4,37 m²" },
      { labelKey: "wc", value: "2,50 m²" },
      { labelKey: "laundryCabinet", value: "1,36 m²" },
      { labelKey: "pantry", value: "1,41 m²" },
      { labelKey: "balcony1", value: "5,71 m²" },
      { labelKey: "balcony2", value: "4,34 m²" },
      { labelKey: "totalNetArea", value: "139,92 m²" },
      { labelKey: "sharedArea", value: "118,75 m²" },
      { labelKey: "approxStorageNetArea", value: "4,00 – 5,50 m²" },
      { labelKey: "totalGrossArea", value: "161,44 m²" },
    ],
  },
  {
    id: "6",
    image: "/antares-katplan-06.png",
    details: [
      { labelKey: "apartmentType", value: "C - D BLOK – TİP 4+1 C" },
      { labelKey: "entryway", value: "7 m²" },
      { labelKey: "livingRoom", value: "40 m²" },
      { labelKey: "balcony1", value: "10,2 m²" },
      { labelKey: "kitchen", value: "15 m²" },
      { labelKey: "masterBedroom", value: "20,6 m²" },
      { labelKey: "masterBathroom", value: "4,2 m²" },
      { labelKey: "sharedBathroom", value: "3,7 m²" },
      { labelKey: "bedroom1", value: "13,4 m²" },
      { labelKey: "bedroom2", value: "13,3 m²" },
      { labelKey: "bedroom3", value: "14 m²" },
      { labelKey: "bedroomBathroom", value: "5,5 m²" },
      { labelKey: "laundryCabinet", value: "1,6 m²" },
      { labelKey: "corridor", value: "11 m²" },
      { labelKey: "balcony2", value: "5,5 m²" },
      { labelKey: "totalNetArea", value: "165 m²" },
      { labelKey: "approxStorageArea", value: "5 – 7 m²" },
      { labelKey: "totalGrossArea", value: "195 m²" },
    ],
  },
  {
    id: "7",
    image: "/antares-katplan-07.png",
    details: [
      { labelKey: "apartmentType", value: "C - D BLOK – TİP 4+1 D" },
      { labelKey: "entryway", value: "8,5 m²" },
      { labelKey: "livingRoom", value: "40 m²" },
      { labelKey: "balcony1", value: "15,3 m²" },
      { labelKey: "kitchen", value: "14,5 m²" },
      { labelKey: "bedroom1", value: "13 m²" },
      { labelKey: "bedroom2", value: "13 m²" },
      { labelKey: "bedroom3", value: "13 m²" },
      { labelKey: "masterBedroom", value: "21,2 m²" },
      { labelKey: "masterBathroom", value: "4,6 m²" },
      { labelKey: "sharedBathroom", value: "4,6 m²" },
      { labelKey: "wc", value: "2 m²" },
      { labelKey: "closetRoom", value: "2,3 m²" },
      { labelKey: "laundryCabinet", value: "0,8 m²" },
      { labelKey: "corridor", value: "9,2 m²" },
      { labelKey: "balcony2", value: "3,5 m²" },
      { labelKey: "totalNetArea", value: "165,5 m²" },
      { labelKey: "approxStorageArea", value: "5 – 7 m²" },
      { labelKey: "totalGrossArea", value: "188 m²" },
    ],
  },
  {
    id: "8",
    image: "/antares-katplan-08.png",
    details: [
      { labelKey: "apartmentType", value: "E BLOK – DUBLEKS 1. KAT" },
      { labelKey: "sofaArea", value: "25,41 m²" },
      { labelKey: "corridor", value: "14,28 m²" },
      { labelKey: "bedroom2", value: "25,37 m²" },
      { labelKey: "bedroom2Bathroom", value: "3,32 m²" },
      { labelKey: "bedroom3", value: "15,47 m²" },
      { labelKey: "masterBedroom", value: "37,78 m²" },
      { labelKey: "masterBathroom", value: "4,48 m²" },
      { labelKey: "sharedBathroom", value: "5,32 m²" },
      { labelKey: "terrace", value: "15,25 m²" },
      { labelKey: "apartmentNetArea", value: "296,61 m²" },
      { labelKey: "parkingCommonArea", value: "80,00 m²" },
      { labelKey: "apartmentGrossArea", value: "332,43 m²" },
    ],
  },
  {
    id: "9",
    image: "/antares-katplan-09.png",
    details: [
      { labelKey: "apartmentType", value: "E BLOK – DUBLEKS ZEMİN KAT" },
      { labelKey: "livingRoom", value: "62,14 m²" },
      { labelKey: "kitchen", value: "15,25 m²" },
      { labelKey: "entryway", value: "16,56 m²" },
      { labelKey: "corridor", value: "4,68 m²" },
      { labelKey: "storage", value: "1,04 m²" },
      { labelKey: "bedroom1", value: "24,17 m²" },
      { labelKey: "bedroom1Bathroom", value: "3,57 m²" },
      { labelKey: "laundryCabinet", value: "0,90 m²" },
      { labelKey: "wc", value: "2,47 m²" },
      { labelKey: "balcony", value: "5,13 m²" },
      { labelKey: "terrace", value: "14,02 m²" },
      { labelKey: "apartmentNetArea", value: "296,61 m²" },
      { labelKey: "parkingCommonArea", value: "80,00 m²" },
      { labelKey: "apartmentGrossArea", value: "332,43 m²" },
    ],
  },
];

export default function UnitTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const activeUnit = unitTypes[activeIndex];
  const t = useTranslations("anteres.unitTypes");

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? unitTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === unitTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12 pt-40">
      {showLightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative w-[90vw] max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition"
              aria-label={t("lightboxClose")}
            >
              <FiX size={24} />
            </button>

            <div className="relative w-full h-[70vh]">
              <Image
                src={activeUnit.image}
                alt={t("lightboxAlt", { id: activeUnit.id })}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tabs & Selector */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        {unitTypes.map((unit, index) => (
          <button
            key={unit.id}
            onClick={() => setActiveIndex(index)}
            aria-label={t("tabAria", { id: unit.id })}
            className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition ${
              activeIndex === index
                ? "bg-[#4B3B4E] text-white border-[#4B3B4E]"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {unit.id}
          </button>
        ))}

        {/* Divider */}
        <span className="w-px h-6 bg-gray-300" />

        {/* Selector Label */}
        <button
          aria-label={t("selectorAria")}
          className="flex items-center px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700"
        >
          {t("selectorLabel")}
          <span className="ml-1 text-xs text-gray-400">
            {t("selectorSubLabel")}
          </span>
        </button>
      </div>

      {/* Dynamic m² Info */}
      <div className="text-center mb-10 space-y-2">
        {activeUnit.details.map((detail) => (
          <p key={detail.labelKey} className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">
              {t(`details.${detail.labelKey}`)}:
            </span>{" "}
            {detail.value}
          </p>
        ))}
      </div>

      {/* Image + Arrows */}
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label={t("previousPlan")}
          className="absolute left-4 md:left-20 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Plan Image */}
        <button
          onClick={() => setShowLightbox(true)}
          className="relative w-[300px] md:w-[500px] aspect-[4/3] rounded overflow-hidden focus:outline-none"
          aria-label={t("openLightbox")}
        >
          <Image
            src={activeUnit.image}
            alt={t("mainAlt", { id: activeUnit.id })}
            fill
            className="object-contain"
          />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label={t("nextPlan")}
          className="absolute right-4 md:right-20 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

