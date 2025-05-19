'use client';

export default function NaturaHero() {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("/natura-anasayfa.png")',
      }}
    >
      {/* Left Content */}
      <div className="flex-1 relative z-10 h-full flex items-center">
        <div className="w-full px-6 md:px-20 py-12 backdrop-brightness-100 ">
          <div className="max-w-3xl mx-auto flex flex-col justify-between h-full">
            {/* Top Titles */}
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">Natura İncek</h1>
              <h2 className="text-2xl md:text-3xl font-light mt-4 text-gray-800">
                Ayrıcalıklı <br />
                <span className="font-medium">Bir Yaşam Alanı</span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-800 mt-6 leading-relaxed text-justify font-bold">
                Natura İncek, adını aldığı doğallığı, modern mimariyle buluşturan özel bir konut projesidir. Geniş peyzaj
                alanları, düşük katlı yatay mimarisi ve sosyal donatılarıyla sakin, konforlu ve kaliteli bir yaşam sunar.
                Şehirden uzaklaşmadan doğayla baş başa yaşamak isteyenler için ideal bir tercih.
              </p>

              <button className="mt-6 px-4 py-2 rounded-xl bg-gray-100 text-sm hover:bg-gray-200 transition">
                Daha fazla ayrıntı
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Info Box */}
<div className="absolute right-10 top-1/2 transform -translate-y-1/2 md:max-w-sm bg-[#98463c] text-white p-6 rounded-lg z-10">   
     <h3 className="text-lg font-semibold mb-2">Modern Yaşamın Sessiz Yansıması</h3>
        <p className="text-sm mb-4">
          İncek’in doğal dokusuyla uyumlu, fonksiyonel tasarımı ve konforun bir arada sunulduğu seçkin bir yaşam alanı.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-xl text-sm hover:bg-gray-200 transition">
          Daha fazla ayrıntı
        </button>

        {/* Bottom Stats */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-black">
          <span className="bg-gray-100 px-3 py-1 rounded-xl">408 konut</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">Arsa Alanı: 9123 m²</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">Kat Sayısı: 28</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">📍 Gölbaşı/Ankara</span>
        </div>
      </div>
    </section>
  );
}
