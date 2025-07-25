"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiFootsteps } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProjectHeroCloudSection() {
  return (
    <section  className="relative w-full h-[90vh] md:h-[150vh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
  
<Image
  src="/outstandinglondon-logo.png"
  alt="Top Left Decorative"
  width={150}
  height={150}
  className="absolute z-30
             bottom-4 right-4 top-auto left-auto
             md:top-4 md:left-4 md:bottom-auto md:right-auto"
/>

<a
  href="https://nataholding.com/360/vega-center/" // ← Replace with your actual link
  target="_blank"
  rel="noopener noreferrer"
  className="absolute z-30 text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-xl inline-flex items-center gap-2 backdrop-blur-sm shadow-sm w-fit h-auto max-h-[40px]
             right-6 top-auto bottom-6 left-6 
             md:top-6 md:bottom-auto md:left-auto"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
  </svg>
  360° Görünüm
</a>




      {/* Looping clouds (seamless illusion) */}
      <div className="absolute top-60 left-0 w-full h-full z-10 overflow-hidden pointer-events-none">
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
      <div className="absolute bottom-0 left-0 w-full h-[140vh] z-20 pointer-events-none">
        <Image
          src="/vegacenterbuild.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>


      <div className="py-4">
  <div className="text-white text-sm md:text-base flex justify-center gap-2">
       <Link href="/" passHref>
    <span className="cursor-pointer hover:underline">NATA Yaşam</span>
  </Link>
  <span>/</span>
  <Link href="/#aktif-projeler" passHref>
    <span className="cursor-pointer hover:underline">Yeni Projeler</span>
  </Link>
    <span>/</span>
    <span className="font-bold">VEGA Center</span>
  </div>
</div>



      {/* Content goes here */}
      <div className="flex justify-center my-10">
      <div className="w-72 md:w-96">
        <Image
          src="/vegaCenterLogo.png"
          alt="Vega Center Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>







<div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-6 font-semibold">
  <Link href="#near-locations">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
    Metroya <GiFootsteps /> 5 dk uzaklıkta
  </div>
  </Link>

  <Link href="#near-locations">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
      <FaMapMarkerAlt /> Ankara — Mustafa Kemal Mahallesi
    </div>
  </Link>

  <Link href="#contact">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
339 Ofis + 87 Ticari Alan    </div>
  </Link>

  <Link href="#contact">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
    2. Çeyrek 2025
     </div>
  </Link>

  <Link href="#life">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
Cazip Yatırım Fırsatı    </div>
  </Link>
</div>
    </section>
  );
}
