'use client';

export default function PrimeOranHero() {
  return (
    <section className="w-full h-[140vh] flex flex-col md:flex-row items-stretch px-0 py-12 bg-white relative overflow-hidden">
      {/* Left Section with Background */}
      <div
        className="flex-1 relative z-10 bg-no-repeat bg-cover bg-left h-full"
        style={{
          backgroundImage: 'url("/pr─▒meoran-anasayfa.png")', // ✅ Make sure file is correctly named in /public
        }}
      >
        <div className="h-full flex flex-col justify-between px-6 md:px-20 py-12">
          {/* Top Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">Prime Oran</h1>
            <h2 className="text-2xl md:text-3xl font-light mt-4 text-gray-800">
              Yatırıma Değer, <br />
              <span className="font-medium">Yaşama Hazır</span>
            </h2>
          </div>

          {/* Bottom Content */}
          <div>
            <p className="text-gray-800 mt-6 max-w-xl leading-relaxed text-justify font-bold">
              Prime Oran Konutları, Ankara’nın hızla değer kazanan Oran bölgesinde modern yaşamın tüm ihtiyaçlarını
              karşılamak üzere tasarlanmış prestijli bir konut projesidir. Geniş peyzaj alanları, akıllı ev sistemleri,
              sosyal yaşam alanları ve merkezi konumuyla hem aile yaşamına hem de yatırımcılara hitap eder. Yüksek kira
              getirisi potansiyeli ve uzun vadeli değer artışıyla öne çıkan proje, kaliteli mimarisi ve fonksiyonel daire
              planlarıyla ayrıcalıklı bir yaşam sunar.
            </p>

            <button className="mt-6 px-4 py-2 rounded-xl bg-gray-100 text-sm hover:bg-gray-200 transition">
              Daha fazla ayrıntı
            </button>
          </div>
        </div>
      </div>

      {/* Right Info Box */}
      <div className="flex-1 max-w-sm bg-[#98463c] text-white p-6 rounded-lg relative z-10 self-start mt-8 md:mt-0">
        <h3 className="text-lg font-semibold mb-2">Prime Oran’da Modern Yaşam Başlıyor</h3>
        <p className="text-sm mb-4">
          Ankara’nın prestijli bölgesinde konfor, estetik ve yatırım değeri bir arada.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-xl text-sm hover:bg-gray-200 transition">
          Daha fazla ayrıntı
        </button>

        {/* Bottom Stats */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-black">
          <span className="bg-gray-100 px-3 py-1 rounded-xl">1.214 konut</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">Arsa Alanı: 57.000 m²</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">Kat Sayısı: 49</span>
          <span className="bg-gray-100 px-3 py-1 rounded-xl">📍 Etimesgut/Ankara</span>
        </div>
      </div>
    </section>
  );
}
