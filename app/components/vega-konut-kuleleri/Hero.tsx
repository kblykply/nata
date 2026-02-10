"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProjectHeroCloudSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[160vh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
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
          src="/new-buildings/vegakonutkuleleri.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>


      <div className="py-4 ">
  <div className="text-white text-sm md:text-base flex justify-center gap-2 top-10   ">
       <Link href="/" passHref>
    <span className="cursor-pointer hover:underline">NATA Yaşam</span>
  </Link>
  <span>/</span>
  <Link href="/#tamamlanan-projeler" passHref>
    <span className="cursor-pointer hover:underline">Tamamlanmış Projeler</span>
  </Link>
    <span>/</span>
    <span className="font-bold">NATA Vega Konut Kuleleri</span>
  </div>
</div>



      {/* Content goes here */}
      <div className="flex justify-center my-10">
      <div className="w-90 md:w-150">
        <Image
          src="/NATAVEGAKONUTKULELERI╠ç-LOGO.png"
          alt="Vega Center Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>









<div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-6 font-semibold z-100 ">
  <Link href="#near-locations">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
  Otobüs Durağına 2 dk
  </div>
  </Link>

  <Link href="#near-locations">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
      <FaMapMarkerAlt /> Mamak / Ankara
    </div>
  </Link>

  <Link href="#contact">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
 377 Konut
    </div>
  </Link>

  <Link href="#design">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
 Kusursuz Mimari ve Konforlu Yaşam
     </div>
  </Link>

  <Link href="#life">
    <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
 Hemen Teslim
   </div>
  </Link>
</div>

    </section>
  );
}
