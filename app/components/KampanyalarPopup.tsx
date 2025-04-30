"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface KampanyalarPopupProps {
  onClose: () => void;
}

export default function KampanyalarPopup({ onClose }: KampanyalarPopupProps) {
  const images: string[] = [
    "/kampanya1.png",
    "/kampanya2.png",
    "/kampanya3.png"
  ];

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="fixed top-30 left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-3xl shadow-xl z-[95] overflow-hidden animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          title="Close popup"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="relative w-full h-[400px]">
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
          />

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            {images.map((_, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                title={`Go to slide ${i + 1}`}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full bg-gray-300 ${
                  i === current ? "w-10 h-3" : "w-3 h-3"
                }`}
              />
            ))}
          </div>

          {/* Button */}
          <button className="absolute bottom-4 right-6 bg-white px-4 py-1 rounded-xl text-sm font-medium shadow hover:bg-gray-100 transition">
            Kampanyalara git
          </button>
        </div>
      </div>
    </>
  );
}
