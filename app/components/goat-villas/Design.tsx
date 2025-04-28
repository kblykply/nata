"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function DesignSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isOpen, setIsOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = [
    "/goat-villas-bilkent-2.jpg",
    "/goat-villas-bilkent-3.jpg",
    "/goat-villas-bilkent-4.jpg",
    "/goat-villas-bilkent-5.jpg",
    "/goat-villas-bilkent-6.jpg",


  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] py-32 px-6 flex items-center justify-between overflow-hidden bg-white"
    >
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between gap-10 relative z-10">
        {/* Left Text Content */}
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
          GREATEST OF
<br /> ANKARA TIME
          </h2>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
          Ankara’nın merkezinde, Bilkent 3’te, tüm şehri gören muhteşem bir noktada yer alan proje, üniversitelere, hastanelere, okullara, alışveriş merkezlerine, ormanlara ve parklara kolay ulaşımıyla fark yaratıyor. “GREATEST OF ANKARA TIME” sloganıyla şehir villası konseptini ortaya koyan bu proje, lüks hizmet ve kaliteyi arayanlar için ideal bir yaşam alanı sunuyor. 
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

        {/* Right Background Image */}
        <div className="relative h-[600px] w-1/2">
          <Image
            src="/goat-villas-bilkent-6.jpg"
            alt="Design"
            fill
            className="object-cover object-right rounded-lg"
          />
        </div>
      </div>

      {/* Floating Ball Image - inside section and scrolls within it */}
      <motion.div
        style={{ y }}
        className="absolute top-[50%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/balll.png"
          alt="Floating Ball"
          width={160}
          height={160}
        />
      </motion.div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          <Dialog.Panel className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center z-50">
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
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
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
