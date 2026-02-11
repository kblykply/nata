"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const slides = [
  {
    id: 1,
    image: "/vega-cadde/I╠çs╠º ve Yas╠ºam─▒n Yeni Ad─▒ Vega Cadde.jpg",
    popupImages: [
      "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒ (2).jpg",
      "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒.jpg",
    ],
  },
  {
    id: 2,
    image: "/vega-cadde/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem.jpg",
    popupImages: [
      "/vega-cadde-popup/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem (2).jpg",
      "/vega-cadde-popup/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem.jpg",
    ],
  },
  {
    id: 3,
    image: "/vega-cadde/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒.jpg",
    popupImages: [
      "/vega-cadde-popup/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒ (2).jpg",
      "/vega-cadde-popup/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒.jpg",
    ],
  },
  {
    id: 4,
    image: "/vega-cadde/Genis╠º Toplant─▒ Salonlar─▒.jpg",
    popupImages: [
      "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒ (2).jpg",
      "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒.jpg",
    ],
  },
  {
    id: 5,
    image: "/vega-cadde/Lu╠êks Lobi Giris╠ºleri.jpg",
    popupImages: [
      "/vega-cadde-popup/Lu╠êks Lobi Giris╠ºleri (2).jpg",
      "/vega-cadde-popup/Lu╠êks Lobi Giris╠ºleri.jpg",
    ],
  },
  {
    id: 6,
    image: "/vega-cadde/Metroya Yak─▒n Konum.jpg",
    popupImages: [
      "/vega-cadde-popup/Metroya Yak─▒n Konum (2).jpg",
      "/vega-cadde-popup/Metroya Yak─▒n Konum.jpg",
    ],
  },
];

export default function ProjectLifeRhythmSection() {
  const tLife = useTranslations("vegaCadde.life");
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;
  const [dragStartX, setDragStartX] = useState<number | null>(null);
const [dragDeltaX, setDragDeltaX] = useState(0);




const handlePointerDown = (e: React.PointerEvent) => {
  setDragStartX(e.clientX);
};

const handlePointerMove = (e: React.PointerEvent) => {
  if (dragStartX !== null) {
    setDragDeltaX(e.clientX - dragStartX);
  }
};

const handlePointerUp = () => {
  if (dragDeltaX > 50) {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  } else if (dragDeltaX < -50) {
    setIndex((prev) => (prev + 1) % totalSlides);
  }

  // ✅ Add a slight delay to allow animation to complete before reset
  setTimeout(() => {
    setDragDeltaX(0);
    setDragStartX(null);
  }, 200); // 200ms matches your CSS transition
};



  return (
    <section className="select-none scroll-smooth relative py-24 px-6 bg-white text-center overflow-hidden">



      
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight whitespace-pre-line">
        {tLife("title")}
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
        {tLife("description")}
      </p>

      <div className="relative mt-12 w-full max-w-7xl mx-auto h-[500px]">
      <div className="relative flex items-center justify-center h-full">

          {slides.map((slide, i) => {
            const offset = (i - index + totalSlides) % totalSlides;
            const normalized = offset > totalSlides / 2 ? offset - totalSlides : offset;

            const styles = "absolute top-1/2 transform transition-all duration-500 ease-in-out";
            let z = 10;
            const translateX = `${normalized * 320}px`;
            let scale = 0.9;
            let opacity = 0.3;
            const translateY = "-50%";

            if (normalized === 0) {
              z = 30;
              scale = 1.1;
              opacity = 1;
            } else if (Math.abs(normalized) === 1) {
              z = 20;
              opacity = 1;
              scale = 1;
            } else if (Math.abs(normalized) > 2) {
              opacity = 0;
            }

            return (
              <div
                key={i}
                className={`w-[300px] h-[400px] bg-white rounded-xl overflow-hidden shadow-lg ${styles}`}
                style={{
                  left: `calc(50% - 150px)`,
                  transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale})`,
                                    zIndex: z,
                  opacity
                }}
              >

                
<div className="relative w-full h-full">
  {normalized === 0 && (
    <div
      className="absolute inset-0 z-10"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  )}


  
                  <Image
                    src={slide.image}
                    alt={tLife(`slides.${slide.id}.title`)}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded">
                    {tLife(`slides.${slide.id}.title`)}
                  </div>
                  {index === i && (
  <>
    {i === 0 ? (
      // If it's the first slide, render a link
      <a
              href="https://vegacadde.com/img/vegaCaddeKatalog.pdf"
    target="_blank"
    rel="noopener noreferrer" // <-- Change this URL to your target link
        className="z-100 absolute    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-white  px-5 py-2 rounded-full shadow"
      >
        {tLife("buttons.goToPresentation")}
      </a>
    ) : (
      // For other slides, open popup
      <button
        onClick={() => setPopupIndex(i)}
        className="z-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm text-gray-700 px-5 py-2 rounded-full shadow"
      >
        {tLife("buttons.details")}
      </button>
    )}
  </>
)}
                </div>
              </div>
            );
          })}

          <button
            onClick={() => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
            aria-label="Önceki"
            title="Önceki"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-40"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
            aria-label="Sonraki"
            title="Sonraki"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-40"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-4xl w-full p-6 rounded-xl relative text-left">
            <button
                onClick={() => setPopupIndex(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
                aria-label={tLife("buttons.close")}
                title={tLife("buttons.close")}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {tLife(`slides.${slides[popupIndex].id}.popupTitle`)}
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              {tLife(`slides.${slides[popupIndex].id}.popupText`)}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {slides[popupIndex].popupImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`popup-img-${i}`}
                  width={400}
                  height={250}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setPopupIndex((prev) => (prev! - 1 + slides.length) % slides.length)
                }
                className="text-sm text-gray-700 hover:underline"
              >
                {tLife("buttons.back")}
              </button>
              <button
                onClick={() =>
                  setPopupIndex((prev) => (prev! + 1) % slides.length)
                }
                className="text-sm text-gray-700 hover:underline"
              >
                {tLife("buttons.forward")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
