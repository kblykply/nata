"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectHeroCloudSection() {
  const tHero = useTranslations("anteres.hero");

  return (
    <section className="relative w-full h-[90vh] md:h-[150vh] overflow-hidden bg-gradient-to-b from-[#006d9d] to-[#e6f3fd]">
      {/* Looping clouds (seamless illusion) */}
      <div className="absolute top-60 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
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
          <div className="relative h-full">
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
      <div className="absolute bottom-0 left-0 w-full h-[140vh] z-5 pointer-events-none">
        <Image
          src="/Antares konutları-main.png"
          alt="Building"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="py-4 ">
        <div className="text-white text-sm md:text-base flex justify-center gap-2 top-10">
          <Link href="/" className="cursor-pointer hover:underline">
            {tHero("breadcrumbHome")}
          </Link>
          <span>/</span>
          <Link href="/#aktif-projeler" className="cursor-pointer hover:underline">
            {tHero("breadcrumbProjects")}
          </Link>
          <span>/</span>
          <Link href="/anteres" className="cursor-pointer font-bold hover:underline">
            {tHero("breadcrumbProject")}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center my-10 ">
        <div className="w-90 md:w-200">
          <Image
            src="/antereslogo.png"
            alt={tHero("breadcrumbProject")}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-6 font-semibold z-10">
        <Link href="/anteres#contact">
          <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
            {tHero("tagUnits")}
          </div>
        </Link>

        <Link href="/anteres#near-locations">
          <div className="bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm cursor-pointer">
            <FaMapMarkerAlt /> {tHero("tagLocation")}
          </div>
        </Link>

        <Link href="/anteres#contact">
          <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
            {tHero("tagInvestment")}
          </div>
        </Link>

        <Link href="/anteres#contact">
          <div className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm text-center cursor-pointer">
            {tHero("tagSocialCommercial")}
          </div>
        </Link>
      </div>
    </section>
  );
}
