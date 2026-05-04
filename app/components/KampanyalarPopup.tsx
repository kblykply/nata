"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface KampanyalarPopupProps {
  onClose: () => void;
}

export default function KampanyalarPopup({ onClose }: KampanyalarPopupProps) {
  const t = useTranslations("popups");
  const images = ["/8seckin_popup_yt2.jpg", "/kampanya1.png", "/kampanya2.png", "/kampanya3.png"];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection("left");
      setCurrent((prev) => (prev + 1) % images.length);
    },
    onSwipedRight: () => {
      setDirection("right");
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className="fixed top-30 left-1/2 -translate-x-1/2 w-[1000px]  rounded-3xl shadow-xl z-[95] overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          title="Close popup"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Swipeable Image Slider */}
        <div
          {...swipeHandlers}
          className="relative w-full h-[400px] touch-pan-y select-none cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                fill
                priority
                className="object-cover select-none pointer-events-none"
                sizes="1000px"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? "left" : "right");
                  setCurrent(i);
                }}
                className={`transition-all duration-300 rounded-full bg-gray-300 ${
                  i === current ? "w-10 h-3" : "w-3 h-3"
                }`}
              />
            ))}
          </div>

          {/* Action Button */}
          <div onClick={onClose}>
            <Link href="/kampanya">
              <button className="absolute bottom-4 right-6 bg-white px-4 py-1 rounded-xl text-sm font-medium shadow hover:bg-gray-100 transition z-10">
                {t("goToCampaigns")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
