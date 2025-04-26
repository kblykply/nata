"use client";

export default function InfoSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-screen-xl mx-auto py-10 px-4">

      {/* Box 1 */}
      <div className="relative rounded-lg p-4 h-48 bg-[#004d3c] text-white overflow-hidden flex flex-col justify-between">
        <p className="text-sm leading-snug max-w-[80%]">
          <span className="text-red-500 font-semibold">Binlerce</span> Daire Nata Yaşam ile sizlerle.
        </p>
        <img src="/kutu1.png" alt="Plan" className="absolute bottom-0 right-0 w-60 object-contain" />
      </div>

      {/* Box 2 */}
      <div className="relative rounded-lg p-4 h-48 bg-[#f5f5f5] text-black overflow-hidden flex flex-col justify-between">
        <p className="text-sm leading-snug max-w-[80%]">
          İşletmeler için en kaliteli <span className="text-red-500 font-semibold">OFISLER</span>
        </p>
        <img src="/kutu2.png" alt="Building" className="absolute bottom-0 right-0 w-20 object-contain" />
      </div>

      {/* Box 3 */}
      <div className="relative rounded-lg p-4 h-48 bg-[#e0e0e0] text-black overflow-hidden flex flex-col justify-between">
        <p className="text-sm leading-snug max-w-[80%]">
         Kolay satın alma yöntemleri <span className="text-red-500 font-semibold">sizler </span> için
        </p>
        <img src="kutu3.png" alt="Phone" className="absolute bottom-0 right-0 w-30 object-contain" />
      </div>

      {/* Box 4 - Background Image */}
      <div
        className="relative rounded-lg p-4 h-48 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/kutu4.png)" }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        <p className="text-sm leading-snug max-w-[80%] z-10">
        Nata Yaşam <span className="text-red-500 font-semibold">Sadece</span> en iyi<span className="text-red-500 font-semibold"> kalitede </span> geliştiricilerle çalışır
        </p>
      </div>

      {/* Box 5 */}
      <div className="relative rounded-lg p-4 h-48 bg-[#fafafa] text-black overflow-hidden flex flex-col justify-between">
        <p className="text-sm leading-snug max-w-[80%]">
          Herhangi bir soruda <span className="text-red-500 font-semibold">5 dakika</span> içinde cevap
        </p>
        <img src="/kutu5.png" alt="Person" className="absolute bottom-2 right-2 w-35 object-contain" />
      </div>

    </section>
  );
}
