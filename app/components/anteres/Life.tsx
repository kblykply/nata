"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const slides = [
  {
    id: "1",
    image: "/Antares-dergi.jpg",
    popupImages: ["/Antares-Zengin Sosyal Olanaklar.jpg", "/Antares-Zengin Sosyal Olanaklar (2).jpg"],
  },
  {
    id: "2",
    image: "/Antares Etlik.jpg",
    popupImages: ["/Antares-Etlik’in Kalbinde Modern Yaşam (2).jpg", "/Antares-Etlik’in Kalbinde Modern Yaşam.jpg"],
  },
  {
    id: "3",
    image: "/Antares Yeşil.jpg",
    popupImages: ["/antares-Geniş Yeşil Alanlarla Doğayla İç İçe (2).jpg", "/antares-Geniş Yeşil Alanlarla Doğayla İç İçe.jpg"],
  },
  {
    id: "4",
    image: "/Antares Zengin.jpg",
    popupImages: ["/Antares-Zengin Sosyal Olanaklar.jpg", "/Antares-Zengin Sosyal Olanaklar (2).jpg"],
  },
  {
    id: "5",
    image: "/Antares Otopark.jpg",
    popupImages: ["/antares-Geniş Otopark İmkanları (2).jpg", "/antares-Geniş Otopark İmkanları.jpg"],
  },
  {
    id: "6",
    image: "/Antares havuz.jpg",
    popupImages: ["/antares-Yüzme Havuzu (2).jpg", "/antares-Yüzme Havuzu.jpg"],
  },
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  const tLife = useTranslations("anteres.life");

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

    setTimeout(() => {
      setDragDeltaX(0);
      setDragStartX(null);
    }, 200);
  };

  return (
    <section className="select-none scroll-smooth relative py-24 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight whitespace-pre-line">
        {tLife("title")}
        <br />
        {tLife("subtitle")}
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
                  opacity,
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
                        <a
                          className="z-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-white px-5 py-2 rounded-full shadow"
                        >
                          {tLife("buttons.goToPresentation")}
                        </a>
                      ) : (
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
            aria-label={tLife("buttons.prevShort")}
            title={tLife("buttons.prevShort")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-40"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
            aria-label={tLife("buttons.nextShort")}
            title={tLife("buttons.nextShort")}
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
                {tLife("buttons.prev")}
              </button>
              <button
                onClick={() =>
                  setPopupIndex((prev) => (prev! + 1) % slides.length)
                }
                className="text-sm text-gray-700 hover:underline"
              >
                {tLife("buttons.next")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
