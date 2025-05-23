"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Lüks ve Yaşamın Yeni Adı: Vega Cadde",
    image: "/vega-cadde/I╠çs╠º ve Yas╠ºam─▒n Yeni Ad─▒ Vega Cadde.jpg",
    popup: {
      title: "Profesyonel buluşmalara şık bir ortam.",
      text: "İş hayatına değer katan, teknolojiyle donatılmış toplantı salonları sayesinde prestijli görüşmeler elinizin altında.",
      images: ["/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒ (2).jpg", "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒.jpg"]
    }
  },
    {
    title: "24 Saat Güvenlik ve Kameralı Sistem",
    image: "/vega-cadde/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem.jpg",
    popup: {
      title: "Ticaretin ve yaşamın güvencesi.",
      text: "Her alanı kapsayan güvenlik sistemleri sayesinde ofisler vekonutlar gece gündüz koruma altında.",
      images: ["/vega-cadde-popup/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem (2).jpg", "/vega-cadde-popup/24 Saat Gu╠êvenlik ve Kameral─▒ Sistem.jpg"]
    }
  },
  {
    title: "Açık ve Kapalı Otopark Alanları",
    image: "/vega-cadde/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒.jpg",
    popup: {
      title: "Park sorunu değil, park konforu.",
      text: "Toplam 1.030 araçlık kapasiteyle konut ve ofis sahiplerine rahat ulaşım ve güvenli park imkanı sunar.",
      images: ["/vega-cadde-popup/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒ (2).jpg", "/vega-cadde-popup/Ac╠º─▒k ve Kapal─▒ Otopark Alanlar─▒.jpg"]
    }
  },
  {
    title: "Geniş Toplantı Salonları",
    image: "/vega-cadde/Genis╠º Toplant─▒ Salonlar─▒.jpg",
    popup: {
      title: "Profesyonel buluşmalara şık bir ortam.",
      text: "İş hayatına değer katan, teknolojiyle donatılmış toplantı salonları sayesinde prestijli görüşmeler elinizin altında.",
      images: ["/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒ (2).jpg", "/vega-cadde-popup/Genis╠º Toplant─▒ Salonlar─▒.jpg"]
    }
  },
  {
    title: "Yüksek Lobi Girişleri",
    image: "/vega-cadde/Lu╠êks Lobi Giris╠ºleri.jpg",
    popup: {
      title: "İlk izlenim için kusursuz karşılama.",
      text: "Modern mimarisiyle tasarlanan lobi alanları, hem şık hem de işlevsel bir karşılama sunar.",
      images: ["/vega-cadde-popup/Lu╠êks Lobi Giris╠ºleri (2).jpg", "/vega-cadde-popup/Lu╠êks Lobi Giris╠ºleri.jpg"]
    }
  },
   {
    title: "Metroya Yakın Konum",
    image: "/vega-cadde/Metroya Yak─▒n Konum.jpg",
    popup: {
      title: "Zaman kazandıran ulaşım avantajı.",
      text: "Ankara metrosuna sadece birkaç dakika uzaklıkta, ulaşımda maksimum kolaylık sağlar.",
      images: ["/vega-cadde-popup/Metroya Yak─▒n Konum (2).jpg", "/vega-cadde-popup/Metroya Yak─▒n Konum.jpg"]
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
      VEGA CADDE  <br /> Yeni Bir Çağ Başlıyor
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
Ankara’nın gelişen bölgesinde konumlanan Vega Cadde, ofis ve konut alanlarını
modern bir mimariyle buluşturarak fark yaratıyor.      </p>

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
