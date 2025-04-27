"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Rams Garden Bahçelievler",
    image: "/ramsgarden-dergi.jpg",
    popup: {
      title: "Her Anınıza Değer Katacak İmkanlar",
      text: "Fitness salonundan çocuk oyun alanlarına, dinlenme teraslarından etkinlik alanlarına kadar geniş sosyal imkanlarla dolu bir yaşam sizi bekliyor. Rams Garden’da her gününüz keyifli ve dolu dolu geçecek.",
      images: ["/rams-Zengin Sosyal Olanaklarla Dolu Bir Hayat (2).jpg", "/rams-Zengin Sosyal Olanaklarla Dolu Bir Hayat.jpg"]
    }
  },
  {
    title: "Şehrin Kalbinde Doğayla İç İçe",
    image: "/rams-doga.jpg",
    popup: {
      title: "İstanbul’un Merkezinde Yeşilin Huzuru",
      text: "Rams Garden Konutları, şehir yaşamının tam ortasında, doğayla baş başa kalabileceğiniz benzersiz bir yaşam alanı sunuyor. ",
      images: ["/rams-Şehrin Kalbinde Doğayla İç İçe.jpg", "/rams-rams-Şehrin Kalbinde Doğayla İç İçe.jpg"]
    }
  },
  {
    title: "Sinema Odası",
    image: "/rams-sinema.jpg",
    popup: {
      title: "Evinizin Konforunda Sinema Keyfi",
      text: "Rams Garden’da, özel olarak tasarlanmış sinema odasıyla sevdiklerinizle birlikte film izleme keyfini doyasıya yaşayın. Sosyal hayatınıza değer katacak bu alanla, her gününüzü özel kılın. ",
      images: ["/rams-Sinema Odası (2).jpg", "/rams-Sinema Odası.jpg"]
    }
  },

  {
    title: "Toplantı Odası",
    image: "/rams-toplanti.jpg",
    popup: {
      title: "İş ve Sosyal Yaşamı Birleştiren Alanlar",
      text: "Profesyonel toplantılarınızı evinizden uzaklaşmadan gerçekleştirin. Rams Garden Konutları’nın modern donanımlı toplantı odası, iş hayatınızı kolaylaştırmak için tasarlandı.",
      images: ["/rams-Toplantı Odası (2).jpg", "/rams-Toplantı Odası.jpg"]
    }
  },

  {
    title: "Zengin Sosyal Olanaklarla Dolu Bir Hayat",
    image: "/rams-sosyal.jpg",
    popup: {
      title: "Her Anınıza Değer Katacak İmkanlar",
      text: "Fitness salonundan çocuk oyun alanlarına, dinlenme teraslarından etkinlik alanlarına kadar geniş sosyal imkanlarla dolu bir yaşam sizi bekliyor. Rams Garden’da her gününüz keyifli ve dolu dolu geçecek.",
      images: ["/rams-Zengin Sosyal Olanaklarla Dolu Bir Hayat (2).jpg", "/rams-Zengin Sosyal Olanaklarla Dolu Bir Hayat.jpg"]
    }
  },


  {
    title: "Prestijli Mağazalarla Alışveriş Keyfi",
    image: "/rams-magaza.jpg",
    popup: {
      title: "Evinize Birkaç Adım Uzaklıkta Lüks Mağazalar",
      text: "Rams Garden Konutları, seçkin mağazaların yer aldığı alışveriş alanlarıyla konforlu bir yaşamın kapılarını aralıyor. Günlük ihtiyaçlarınızı karşılayın, alışverişin keyfini çıkarın.",
      images: ["/rams-Prestijli Mağazalarla Alışveriş Keyfi (2).jpg", "/rams-Prestijli Mağazalarla Alışveriş Keyfi.jpg"]
    }
  },
 
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;

  return (
    <section id="olanak" className="relative py-24 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight">
        YAŞAM RİTİMİNİZ <br />  RAMS Garden Bahçelievler
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
      Ulaşabileceğiniz maksimum yeşili ile koruya komşu, tüm ulaşım akslarının merkezinde yer alan 11 blok ve 796 dairesiyle RAMS Garden Bahçelievler, 74.531 metrekarelik geniş bir alanda doğa ve şehrin birbiriyle buluştuğu konforlu bir yaşam sunuyor.
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
      href="https://brosur.ramsgarden.com"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-gray-700 px-5 py-2 rounded-full shadow"
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
