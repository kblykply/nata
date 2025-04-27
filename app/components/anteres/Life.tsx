"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Prestijli Yaşam İçin Tasarlandı",
    image: "/Antares-dergi.jpg",
    popup: {
      title: "Sosyal Hayat Evinizin Bir Parçası",
      text: "Fitness salonundan çocuk oyun alanlarına, kafeteryadan dinlenme alanlarına kadar Antares Konutları'nda her ihtiyacınıza yönelik sosyal imkanlar mevcut. Komşuluk kültürünü modern sosyal alanlarda yeniden keşfedin.",
      images: ["/Antares-Zengin Sosyal Olanaklar.jpg", "/Antares-Zengin Sosyal Olanaklar (2).jpg"]
    }
  },
  {
    title: "Etlik’in Kalbinde Modern Yaşam",
    image: "/Antares Etlik.jpg",
    popup: {
      title: "Şehrin Merkezinde Konforlu Bir Hayat",
      text: "Antares Konutları, Etlik'in en prestijli noktasında, alışveriş ",
      images: ["/Antares-Etlik’in Kalbinde Modern Yaşam (2).jpg", "/Antares-Etlik’in Kalbinde Modern Yaşam.jpg"]
    }
  },
  {
    title: "Geniş Yeşil Alanlarla Doğayla İç İçe",
    image: "/Antares Yeşil.jpg",
    popup: {
      title: "Betonun İçinde Nefes Alabileceğiniz Alanlar",
      text: "Antares Konutları, sizlere şehrin yoğunluğunda doğayla baş başa kalabileceğiniz geniş peyzaj ve yeşil alanlar sunuyor. Çocuk oyun alanları ve yürüyüş yolları ile her yaşa hitap eden bir yaşam alanı sizi bekliyor.",
      images: ["/antares-Geniş Yeşil Alanlarla Doğayla İç İçe (2).jpg", "/antares-Geniş Yeşil Alanlarla Doğayla İç İçe.jpg"]
    }
  },
  {
    title: "Zengin Sosyal Olanaklar",
    image: "/Antares Zengin.jpg",
    popup: {
      title: "Sosyal Hayat Evinizin Bir Parçası",
      text: "Fitness salonundan çocuk oyun alanlarına, kafeteryadan dinlenme alanlarına kadar Antares Konutları'nda her ihtiyacınıza yönelik sosyal imkanlar mevcut. Komşuluk kültürünü modern sosyal alanlarda yeniden keşfedin.",
      images: ["/Antares-Zengin Sosyal Olanaklar.jpg", "/Antares-Zengin Sosyal Olanaklar (2).jpg"]
    }
  },
  {
    title: "Geniş Otopark İmkanları",
    image: "/Antares Otopark.jpg",
    popup: {
      title: "Park Yeri Arama Derdi Yok",
      text: "Antares Konutları, her daireye özel kapalı otopark alanlarıyla araçlarınız için güvenli ve geniş park alanları sunuyor. Misafir otoparkı sayesinde ziyaretçileriniz de rahat edecek.",
      images: ["/antares-Geniş Otopark İmkanları (2).jpg", "/antares-Geniş Otopark İmkanları.jpg"]
    }
  },
  {
    title: "Yüzme Havuzu",
    image: "/Antares havuz.jpg",
    popup: {
      title: "Şehrin Ortasında Tatil Keyfi",
      text: "Açık ve kapalı yüzme havuzları ile yılın her döneminde yüzme keyfi Antares Konutları'nda. Ailenizle birlikte hem spor yapın hem de serin suların tadını çıkarın.",
      images: ["/antares-Yüzme Havuzu (2).jpg", "/antares-Yüzme Havuzu.jpg"]
    }
  },



  
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;

  return (
    <section  id="olanak" className="scroll-smooth relative py-24 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight">
      ANTARES KONUTLARI  <br />Etlik'in kalbinde
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
      Dolunay iştiraki olan Antares Konutları merkezi konumu, sosyal olanaklarıyla keyifli ve konforlu bir yaşam Antares Konutları ile buluşuyor.
      </p>

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
        href="/vega-center"   // <-- Change this URL to your target link
        className="absolute   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-gray-700 px-5 py-2 rounded-full shadow"
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
