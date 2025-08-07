"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const officeImages = [
  {
    src: "/hakkimizda/1.jpeg",
    alt: "Meeting Room",
  },
  {
    src: "/hakkimizda/2.jpeg",
    alt: "Meeting Room",
  },
 
  {
    src: "/hakkimizda/3.jpeg",
    alt: "Meeting Room",
  },
 
  {
    src: "/hakkimizda/4.jpeg",
    alt: "Meeting Room",
  },
 
  {
    src: "/hakkimizda/5.jpeg",
    alt: "Meeting Room",
  },
  {
    src: "/hakkimizda/6.jpeg",
    alt: "Meeting Room",
  },
 {
    src: "/hakkimizda/7.jpeg",
    alt: "Meeting Room",
  },
 {
    src: "/hakkimizda/8.jpeg",
    alt: "Meeting Room",
  },
 {
    src: "/hakkimizda/9.jpeg",
    alt: "Meeting Room",
  },
 {
    src: "/hakkimizda/10.jpeg",
    alt: "Meeting Room",
  },
 
 
 
];

export default function OfficeGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
  <section className="bg-white py-20 px-4 md:px-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center md:text-left">
      Ofis Galerisi
    </h2>
    <p className="text-gray-600 leading-relaxed mb-12 text-center md:text-left max-w-3xl">
      Şirketimizin ofisinden kareleri aşağıda bulabilirsiniz. Modern, şık ve fonksiyonel alanlarımızı keşfedin.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {officeImages.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-64 rounded-xl overflow-hidden shadow cursor-pointer"
          onClick={() => {
            setCurrentIndex(index);
            setOpen(true);
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Lightbox */}
  <Lightbox
    open={open}
    close={() => setOpen(false)}
    index={currentIndex}
    slides={officeImages.map((img) => ({ src: img.src, alt: img.alt }))}
  />
</section>

  );
}
