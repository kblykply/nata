"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ProjectHeroCloudSection() {
  const tHero = useTranslations("vegaCadde.hero");

  return (
    <section className="relative w-full h-[112svh] md:h-[120svh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
      {/* Looping clouds (seamless illusion) */}
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden pointer-events-none">
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
      <div className="absolute bottom-12 md:bottom-4 left-0 w-full h-full z-20 pointer-events-none">
        <Image
          src="/new-buildings/vegacadde.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>


      <div className="py-4 relative z-30">
        <div className="text-white text-sm md:text-base flex justify-center gap-2 top-10">
          <Link href="/">
            <span className="cursor-pointer hover:underline">
              {tHero("breadcrumbHome")}
            </span>
          </Link>
          <span>/</span>
          <Link href="/#tamamlanan-projeler">
            <span className="cursor-pointer hover:underline">
              {tHero("breadcrumbCompletedProjects")}
            </span>
          </Link>
          <span>/</span>
          <span className="font-bold">{tHero("breadcrumbProject")}</span>
        </div>
      </div>



      {/* Content goes here */}
      <div className="flex justify-center my-10 relative z-30">
      <div className="w-90 md:w-150">
        <Image
          src="/VEGA CADDE-LOGO.png"
          alt="Vega Center Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>






<div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-6 font-semibold relative z-30">
  <Link href="#near-locations">
    <div className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
      {tHero("tagMetroDistance")}
    </div>
  </Link>

  <Link href="#near-locations">
    <div className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
      <FaMapMarkerAlt /> {tHero("tagLocation")}
    </div>
  </Link>

  <Link href="#contact">
    <div className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
      {tHero("tagUnits")}
    </div>
  </Link>

  <Link href="#contact">
    <div className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
      {tHero("tagImmediateDelivery")}
    </div>
  </Link>

  <Link href="#life">
    <div className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
      {tHero("tagPremiumLife")}
    </div>
  </Link>
</div>
    </section>
  );
}
