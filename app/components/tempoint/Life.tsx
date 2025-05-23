"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Modern Yaşamın Yeni Adı: Tempoint Konutlar",
    image: "/tempoint/Modern Yas╠ºam─▒n Yeni Ad─▒_ Nata I╠çncek Konutlar─▒.jpg",
     popup: {
      title: "Küçükler için büyük eğlenceler.",
      text: "Çocuklara özel tasarlanmış parklar ve gençler için dijital eğlence alanları ile aile yaşamına değer katıyor.",
      images: ["/tempoint-popup/C╠ºocuk Oyun Alanlar─▒ ve Playstation Odas─▒ (2).jpg", "/tempoint-popup/C╠ºocuk Oyun Alanlar─▒ ve Playstation Odas─▒.jpg"]
    }
  },
  {
    title: "270 Mağazalı AVM",
    image: "/tempoint/270 Mag╠åazal─▒k AVM.jpg",
    popup: {
      title: "Alışveriş ve yaşam bir arada.",
      text: "Projeye entegre alışveriş merkezi, günlük ihtiyaçlardan lüks markalara kadar geniş bir seçenek sunar.",
      images: ["/tempoint-popup/270 Mag╠åazal─▒k AVM (2).jpg", "/tempoint-popup/270 Mag╠åazal─▒k AVM.jpg"]
    }
  },
  {
    title: "Açık ve Kapalı Yüzme Havuzları",
    image: "/tempoint/Ac╠º─▒k ve Kapal─▒ Yu╠êzme Havuzlar─▒.jpg",
    popup: {
      title: "Tüm yıl boyunca yüzme keyfi.",
      text: "Açık ve kapalı havuz seçenekleri ile yaz-kış fark etmeksizin yüzmenin tadını çıkarabilir, günün stresinden arınabilirsiniz..",
      images: ["/tempoint-popup/Ac╠º─▒k ve Kapal─▒ Yu╠êzme Havuzlar─▒ (2).jpg", "/tempoint-popup/Ac╠º─▒k ve Kapal─▒ Yu╠êzme Havuzlar─▒.jpg"]
    }
  },
    {
    title: "Çocuk Oyun Alanları ve Playstation Odası",
    image: "/tempoint/C╠ºocuk Oyun Alanlar─▒ ve Playstation Odas─▒.jpg",
    popup: {
      title: "Küçükler için büyük eğlenceler.",
      text: "Çocuklara özel tasarlanmış parklar ve gençler için dijital eğlence alanları ile aile yaşamına değer katıyor.",
      images: ["/tempoint-popup/C╠ºocuk Oyun Alanlar─▒ ve Playstation Odas─▒ (2).jpg", "/tempoint-popup/C╠ºocuk Oyun Alanlar─▒ ve Playstation Odas─▒.jpg"]
    }
  },
  {
    title: "Fitness Salonu ve Spor Alanları",
    image: "/tempoint/Fitness Salonu ve Spor Alanlar─▒.jpg",
    popup: {
      title: "Enerji dolu bir hayat sizi bekliyor.",
      text: "Basketbol ve voleybol sahalarıyla birlikte tam donanımlı fitness salonu, spor yapmayı sevenler için vazgeçilmez bir alan sunuyor.",
      images: ["/tempoint-popup/Fitness Salonu ve Spor Alanlar─▒ (2).jpg", "/tempoint-popup/Fitness Salonu ve Spor Alanlar─▒.jpg"]
    }
  },
  
     {
    title: "Yürüyüş ve Koşu Parkurları",
    image: "/tempoint/Yu╠êru╠êyu╠ês╠º ve Kos╠ºu Parkurlar─▒.jpg",
    popup: {
      title: "Doğayla iç içe adımlar.",
      text: "Yemyeşil alanlar arasında uzanan yürüyüş ve koşu yolları, hem sabah sporları hem de akşam yürüyüşleri için birebir.",
      images: ["/tempoint-popup/Yu╠êru╠êyu╠ês╠º ve Kos╠ºu Parkurlar─▒ (2).jpg", "/tempoint-popup/Yu╠êru╠êyu╠ês╠º ve Kos╠ºu Parkurlar─▒.jpg"]
    }
  },
 
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;

  return (
    <section  className="relative py-24 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight">
     TEMPOINT KONUTLARI  <br /> KONUTLARI 
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
TEM Point, İstanbul’un en değerli lokasyonlarından birinde TEM’in yanında, karma bir
proje olarak karşınıza çıkıyor. Toplamda 444 rezidans, alışveriş merkezi ve ofis
konseptlerinin bir araya getirildiği proje, yaşamanın ve yatırımın değerlendirebileceği
bir fırsat olarak karşınıza çıkıyor.      </p>

      <div className="relative mt-12 w-full max-w-7xl mx-auto h-[500px]">
        <div className="relative flex items-center justify-center h-full">
          {slides.map((slide, i) => {
            const offset = (i - index + totalSlides) % totalSlides;
            const normalized = offset > totalSlides / 2 ? offset - totalSlides : offset;

            const styles = "absolute top-1/2 transform transition-all duration-500 ease-in-out";
            let z = 10;
            const translateX = `${normalized * 320}px`;
            let scale = 0.9;
            let opacity = 0.3;
            const translateY = "-50%";

            if (normalized === 0) {
              z = 30;
              scale = 1.1;
              opacity = 1;
            } else if (Math.abs(normalized) === 1) {
              z = 20;
              opacity = 1;
              scale = 1;
            } else if (Math.abs(normalized) > 2) {
              opacity = 0;
            }

            return (
              <div
                key={i}
                className={`w-[300px] h-[400px] bg-white rounded-xl overflow-hidden shadow-lg ${styles}`}
                style={{
                  left: `calc(50% - 150px)`,
                  transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale})`,
                  zIndex: z,
                  opacity
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded">
                    {slide.title}
                  </div>
                  {index === i && (
  <>
    {i === 0 ? (
      // If it's the first slide, render a link
      <a
        href="#"   // <-- Change this URL to your target link
        className="absolute   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-white px-5 py-2 rounded-full shadow"
      >
        Sunuma Git
      </a>
    ) : (
      // For other slides, open popup
      <button
        onClick={() => setPopupIndex(i)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm text-gray-700 px-5 py-2 rounded-full shadow"
      >
        Ayrıntılı Bilgi
      </button>
    )}
  </>
)}
                </div>
              </div>
            );
          })}

          <button
            onClick={() => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
            aria-label="Önceki"
            title="Önceki"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-40"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
            aria-label="Sonraki"
            title="Sonraki"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-40"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-4xl w-full p-6 rounded-xl relative text-left">
            <button
              onClick={() => setPopupIndex(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Kapat"
              title="Kapat"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {slides[popupIndex].popup.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              {slides[popupIndex].popup.text}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {slides[popupIndex].popup.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`popup-img-${i}`}
                  width={400}
                  height={250}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setPopupIndex((prev) => (prev! - 1 + slides.length) % slides.length)
                }
                className="text-sm text-gray-700 hover:underline"
              >
                ← Geri
              </button>
              <button
                onClick={() =>
                  setPopupIndex((prev) => (prev! + 1) % slides.length)
                }
                className="text-sm text-gray-700 hover:underline"
              >
                İleri →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
