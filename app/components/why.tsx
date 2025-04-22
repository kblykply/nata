"use client";

import { FaHandshake, FaKey, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: FaHandshake,
    title: "Güvenilir İş Ortaklığı",
    description: "Sektörde yıllara dayanan deneyim ve şeffaflık ilkesiyle hareket ediyoruz.",
  },
  {
    icon: FaKey,
    title: "Anahtar Teslim Projeler",
    description: "Satın alma sürecinden anahtar teslimine kadar tüm süreç bizde.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Merkezi Lokasyonlar",
    description: "Toplu taşıma ve sosyal olanaklara yakın konumda projeler sunuyoruz.",
  },
  {
    icon: FaShieldAlt,
    title: "Güvence ve Garanti",
    description: "Tüm projelerimiz sigortalı ve yasal güvencelidir.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Top-Right Filigran */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-40  z-0 pointer-events-none">
        <img
          src="/check.png" // Make sure this image exists in your /public directory
          alt="Filigran"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm">
            Kaliteli yaşam alanları ve yatırımda güven arayanlar için en doğru adres. İşte bizi farklı kılan nedenler:
          </p>
        </div>

        <ul className="relative grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-16 gap-x-12 mt-16">
          {features.map((item, index) => (
            <li key={index} className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <item.icon className="text-red-600 text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
