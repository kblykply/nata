"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function HeroKoruKonforSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-24 ">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Koru Konfor
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Şehrin İçinde Sessiz ve Konforlu Bir Yaşam
          </h2>
          <p className="text-gray-600 max-w-xl">
            Koru Konfor, doğayla iç içe huzurlu bir yaşam arayanlar için tasarlandı.
            Geniş balkonlu daireleri, peyzajla bütünleşen mimarisi ve merkezi konumuyla hem aile
            yaşamına hem de yatırımcılara hitap ediyor. Şehir hayatının karmaşasından uzak konforlu
            bir yaşam sunar.
          </p>
          <button className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
            Daha fazla ayrıntı
          </button>
        </div>

        {/* Center Image */}
        <div className="flex-1 relative w-full max-w-md h-[340px] lg:h-[420px]">
          <Image
            src="/koru-anasayfa.png"
            alt="Koru Konfor Görseli"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Card */}
        <div className="flex-1 w-full max-w-sm bg-[#9b3a35] text-white p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold">Doğanın Kalbinde Konforlu Yaşam</h3>
          <p className="text-sm">
            Şehrin merkezine yakın yeşil alanlarla çevrili ferah daireler ile hem huzurlu hem de modernliği bir arada yaşayın.
          </p>
          <button className="bg-white text-[#9b3a35] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Daha fazla ayrıntı
          </button>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-2 text-sm mt-4">
            <span className="bg-white text-[#9b3a35] px-3 py-1 rounded-full">117 m²</span>
            <span className="bg-white text-[#9b3a35] px-3 py-1 rounded-full">16.800.000 TL</span>
            <span className="bg-white text-[#9b3a35] px-3 py-1 rounded-full">2+1</span>
            <span className="bg-white text-[#9b3a35] px-3 py-1 rounded-full inline-flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs" /> Çankaya/Ankara
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
