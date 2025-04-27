"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProjectHeroCloudSection() {
  return (
    <section id="proje" className="relative w-full h-[150vh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
      {/* Looping clouds (seamless illusion) */}
      <div className="absolute top-60 left-0 w-full h-full z-10 overflow-hidden">
        <motion.div
          className="flex h-full w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            <Image  
              src="/cloud-2.png"
              alt="Clouds"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative  h-full">
            <Image
              src="/cloud-2.png"
              alt="Clouds Repeat"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      {/* Building image */}
      <div className="absolute bottom-0 left-0 w-full h-[140vh] z-20">
        <Image
          src="/VEGA OTONOMİ-main.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>


      <div className="py-4 ">
  <div className="text-white text-sm md:text-base flex justify-center gap-2 top-10   ">
    <span>Natayaşam</span>
    <span>/</span>
    <span>yeni projeler</span>
    <span>/</span>
    <span className="font-bold">Vega Otonomi</span>
  </div>
</div>



      {/* Content goes here */}
      <div className="flex justify-center my-10">
      <div className="w-90 md:w-150">
        <Image
          src="/goat-villas-logo2.png"
          alt="Vega Otonomi Logo ve Maddeler Eksik"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

<div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-6 font-semibold">
  <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
  Şehir merkezine 10 dk
  </div>
  <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
    <FaMapMarkerAlt />  Ankara – Bilkent
  </div>
  <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center">
  9 Villa
  </div>
  <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center">
  3. Çeyrek 2025
  </div>
  <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center">
  Premium Hayat
  </div>
</div>


    </section>
  );
}
