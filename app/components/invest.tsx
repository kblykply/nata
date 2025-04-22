"use client";

import { FaChartLine, FaBuilding, FaWallet, FaClock } from "react-icons/fa";

const features = [
  {
    icon: FaChartLine,
    title: "Yüksek Geri Dönüş",
    description: "%35’e varan yatırım geri dönüş oranı ile güçlü kazanç fırsatı.",
  },
  {
    icon: FaBuilding,
    title: "Bölgesel Değer Artışı",
    description: "Bağlıca gibi yükselen bölgelerde değer her yıl ortalama %15 artıyor.",
  },
  {
    icon: FaWallet,
    title: "Taksitle Yatırım",
    description: "%0 faizli taksit imkanları ile kolay başlangıç fırsatı.",
  },
  {
    icon: FaClock,
    title: "Kısa Amortisman Süresi",
    description: "Ortalama 12-14 yıl içinde yatırımın geri dönüşü sağlanır.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
  {/* Filigran Image */}
  <div className="absolute top-0 left-0 z-0 opacity-40 pointer-events-none w-[400px] h-[400px]">
    <img
      src="/invets.png" // or .png depending on your design
      alt="Filigran"
      className="object-contain w-full h-full"
    />
  </div>

  <div className="max-w-screen-xl mx-auto relative z-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Yatırım Avantajları</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm">
            Konum, amortisman süresi, taksit kolaylığı ve yüksek kazanç potansiyeliyle yatırımda öne çıkan avantajlarımız:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-red-50 rounded-xl p-6 flex flex-col md:flex-row md:items-start md:gap-4 hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-100">
                <item.icon className="text-red-600 text-xl" />
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
