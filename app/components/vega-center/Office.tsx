"use client";

import Image from "next/image";

export default function OfficeLocationSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left Info Box */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">BİZ DAVET EDİYORUZ SATIŞ OFİSİ</h2>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Telefon</p>
            <p className="text-gray-700">+90 (312) 123 45 67</p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Adres</p>
            <p className="text-gray-700">Moskova Cd. No:15, Çankaya / ANKARA</p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Çalışma Saatleri</p>
            <p className="text-gray-700">09:00 - 21:00</p>
          </div>
          <div className="mb-6">
            <p className="font-medium text-gray-700">Ofise Ulaşım</p>
            <p className="text-gray-700">
              Kızılay Metro durağından 2 dakika yürüme mesafesindedir. Cadde üzerinden ulaşım çok kolaydır.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://yandex.com.tr/harita/ankara/?ll=32.8597%2C39.9334&z=16&l=map&pt=32.8597,39.9334,pm2rdm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-400 hover:bg-gray-200 text-black rounded-full text-sm font-medium transition"
            >
              Haritada Aç
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-[#9F1C33] to-[#ED6230] hover:opacity-90 text-white rounded-full text-sm font-medium transition"
            >
              Toplantı Planlayın
            </a>
          </div>
        </div>

        {/* Map Box */}
        <div className="w-full md:w-1/2 relative">
          <iframe
            src="https://yandex.com.tr/map-widget/v1/?ll=32.8597%2C39.9334&z=16&pt=32.8597,39.9334,pm2rdm"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full rounded-r-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
