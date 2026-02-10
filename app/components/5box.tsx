"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";

const images = [
  "/ramsgardenbahçelievlergorsel.jpg",
  "/nata_web_goat_villas.jpg",
  "/sehrin-merkezinde-hayatın-yeni-noktası.jpg",
  "/türkiyenin-en-prestijli-projeleri.jpg",
  "/millitakimafis.jpg  ",
];

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("fiveBox");

  const popupContent = [
    { title: t("popup1Title"), text: t("popup1Text") },
    { title: t("popup2Title"), text: t("popup2Text") },
    { title: t("popup3Title"), text: t("popup3Text") },
    { title: t("popup4Title"), text: t("popup4Text") },
    { title: t("popup5Title"), text: t("popup5Text") },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full px-4 py-10">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => setOpenIndex(i)}
          className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block"
        >
          <Image
            src={img}
            alt={`Alt ${i + 1}`}
            fill
            className="object-contain"
            priority
          />
        </button>
      ))}
<Transition show={openIndex !== null} as={Fragment}>
  <Dialog
    onClose={() => setOpenIndex(null)}
    className="fixed inset-0 z-[10000] flex items-center justify-center"
  >
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-black/80"
        onClick={() => setOpenIndex(null)}
      />
    </Transition.Child>

    {openIndex !== null && (
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="relative w-[930px] h-[584px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[openIndex]}
              alt={`Popup ${openIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 relative overflow-y-auto">
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              {popupContent[openIndex].title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 whitespace-pre-line leading-relaxed">
              {popupContent[openIndex].text}
            </p>
          </div>
        </div>
      </Transition.Child>
    )}
  </Dialog>
</Transition>


    </section>
  );
}
