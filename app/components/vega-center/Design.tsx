"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function DesignSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isOpen, setIsOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = [
    "/vega-site.jpg",
    "/vega-center-02.jpg",
    "/vega-center-03.jpg",
    "/vega-center-07.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] py-20 px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden bg-white"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Text Content */}
        <div className="w-full max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
            VEGA Center <br /> ile Tanışın
          </h2>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            Bir NATA Yaşam projesi olan VEGA Center, yatay mimarisi ile şehrin silüetine estetik bir değer katan, iş ve premium alışveriş deneyimini en yüksek seviyeye çıkaran bir yaşam merkezidir. Ferah ofisleri ve verimli iş alanları ile yüksek potansiyele sahip olan VEGA Center&apos;ın her noktası hayatı kolaylaştırmak için tasarlandı.
          </p>
          <button
            onClick={() => {
              setGalleryIndex(0);
              setIsOpen(true);
            }}
            className="mt-6 bg-gray-800 text-white text-sm px-5 py-2 rounded-full"
          >
            Proje Galerisini Gör
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px]">
          <Image
            src="/vega-center-03.jpg"
            alt="Design"
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>

      {/* Floating Ball Image */}
      <motion.div
        style={{ y }}
        className="absolute top-[50%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/balll.png"
          alt="Floating Ball"
          width={120}
          height={120}
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto"
        />
      </motion.div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[150]">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          <Dialog.Panel className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center z-50 px-4">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ×
            </button>

            {/* Image Navigation */}
            <div className="w-full h-full flex items-center justify-center relative">
              <img
                src={gallery[galleryIndex]}
                alt={`Image ${galleryIndex + 1}`}
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />

              {/* Previous */}
              {galleryIndex > 0 && (
                <button
                  onClick={() => setGalleryIndex(galleryIndex - 1)}
                  className="absolute left-6 text-white text-4xl z-50"
                >
                  ‹
                </button>
              )}

              {/* Next */}
              {galleryIndex < gallery.length - 1 && (
                <button
                  onClick={() => setGalleryIndex(galleryIndex + 1)}
                  className="absolute right-6 text-white text-4xl z-50"
                >
                  ›
                </button>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
