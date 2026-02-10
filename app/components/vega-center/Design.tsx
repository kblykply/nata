"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";

export default function DesignSection() {
  const t = useTranslations("vegaCenter");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isOpen, setIsOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = [
    "/vegacentergörsel.jpg",

    "/vega-site.jpg",
    "/vega-center-02.jpg",
    "/vega-center-03.jpg",
    "/vega-center-07.jpg",
        "/vega-revize/1.png",
        "/vega-revize/2.png",
        "/vega-revize/3.png",
        "/vega-revize/4.png",
"/vegacentergörseller/1.jpeg",
"/vegacentergörseller/2.jpeg",

"/vegacentergörseller/3.jpeg",

"/vegacentergörseller/4.jpeg",

"/vegacentergörseller/5.jpeg",

"/vegacentergörseller/6.jpeg",
"/vegacentergörseller/7.jpeg",

"/vegacentergörseller/8.jpeg",

"/vegacentergörseller/9.jpeg",

"/vegacentergörseller/10.jpeg",

"/vegacentergörseller/11.jpeg",

"/vegacentergörseller/12.jpeg",

"/vegacentergörseller/13.jpeg",

"/vegacentergörseller/14.jpeg",





  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] py-20 px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden bg-white"
    >
      
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Text Content */}
        <div className="w-full max-w-xl z-25">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight whitespace-pre-line">
            {t("designTitle")}
          </h2>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            {t("designDescription")}
          </p>
          <button
            onClick={() => {
              setGalleryIndex(0);
              setIsOpen(true);
            }}
            className="mt-6 bg-gray-800 text-white text-sm px-5 py-2 rounded-full"
          >
            {t("viewGallery")}
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
        className="absolute top-[50%] left-1/2 z-0 md:z-20 -translate-x-1/2 -translate-y-1/2"
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
  