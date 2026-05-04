"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { GiFootsteps } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ProjectHeroCloudSection() {
  const t = useTranslations("vegaCenter");
  
  return (
    <section  className="relative w-full h-[100svh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
  
<div
  className="absolute z-30
             bottom-18   left-4 top-auto right-auto
             md:top-4 md:left-4 md:bottom-auto md:right-auto
             backdrop-blur-sm bg-white/30 rounded-xl p-2 w-fit h-fit"
>
  <Image
    src="/outstandinglondon-logo.png"
    alt="Top Left Decorative"
    width={150}
    height={150}
    priority
  />
</div>


<a
  href="https://vegacenter360.vercel.app/" // ← Replace with your actual link
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
  {t("view360")}
</a>




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
      <div className="absolute -bottom-6 md:-bottom-8 left-0 w-full h-full z-20 pointer-events-none">
        <Image
          src="/vegacenterbuild.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>


      <div className="py-4">
  <div className="text-white text-sm md:text-base flex justify-center gap-2">
       <Link href="/">
    <span className="cursor-pointer hover:underline">{t("breadcrumbHome")}</span>
  </Link>
  <span>/</span>
  <Link href="/#aktif-projeler">
    <span className="cursor-pointer hover:underline">{t("breadcrumbProjects")}</span>
  </Link>
    <span>/</span>
    <span className="font-bold">{t("breadcrumbVega")}</span>
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







<div className="relative z-30 mx-auto mt-12 px-4 font-semibold">
  <div className="flex items-start justify-center gap-3">
    <Link href="#near-locations">
      <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
        {t("metroDistance")} <GiFootsteps /> {t("metroWalk")}
      </div>
    </Link>

    <Link href="#near-locations">
      <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
        <FaMapMarkerAlt /> {t("location")}
      </div>
    </Link>

    <Link href="#contact">
      <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
        {t("units")}
      </div>
    </Link>
  </div>

  <div className="mt-3 flex justify-center gap-3">
    <Link href="#contact">
      <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
        {t("delivery")}
      </div>
    </Link>

    <Link href="#life">
      <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
        {t("investment")}
      </div>
    </Link>
  </div>
</div>
    </section>
  );
}
