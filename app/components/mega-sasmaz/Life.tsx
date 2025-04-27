"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Dergiyi Keşfedin",
    image: "/megaşaşmaz-dergi.jpg",
    popup: {
      title: "Müşterileriniz İçin Erişim Kolaylığı",
      text: "Ankara'nın en işlek noktalarından birinde konumlanan Mega Şaşmaz, ulaşım kolaylığı ve geniş otopark alanlarıyla hem işletmelere hem de ziyaretçilere büyük avantaj sağlıyor.",
      images: ["/megaşaşmaz-Kolay Ulaşım ve Geniş Otopark İmkanları (2).jpg", "/megaşaşmaz-Kolay Ulaşım ve Geniş Otopark İmkanları.jpg"]
    }
  },
  {
    title: "Yeni Nesil Oto Sanayi Deneyimi",
    image: "/megaşaşmaz Yeni.jpg",
    popup: {
      title: "Modern Altyapıyla Yenilenen Sanayi Kültürü",
      text: "Mega Şaşmaz, klasik oto sanayi anlayışını geride bırakarak, teknolojik altyapısı ve düzenli yapısıyla yeni nesil bir sanayi deneyimi sunuyor. Hem işletmeler hem de müşteriler için konforlu ve verimli bir ortam sağlıyor.",
      images: ["/megaşaşmaz- Yeni Nesil Oto Sanayi Deneyimi (2).jpg", "/megaşaşmaz- Yeni Nesil Oto Sanayi Deneyimi.jpg"]
    }
  },
  {
    title: "Alışveriş ve Sosyal Yaşamın Yeni Adresi",
    image: "/megaşaşmaz Sosyal.jpg",
    popup: {
      title: "İşinizi Yaparken Sosyal Hayatı Yakalayın",
      text: "Sadece ticaret değil, aynı zamanda yaşam alanı sunan Mega Şaşmaz, alışveriş ve sosyal alanlarıyla ziyaretçilerine keyifli vakit geçirme imkanı sağlıyor. Kafeler, restoranlar ve mağazalarla dolu modern bir ortam sizi bekliyor.",
      images: ["/megaşaşmaz-Alışveriş ve Sosyal Yaşamın Yeni Adresi (2).jpg", "/megaşaşmaz-Alışveriş ve Sosyal Yaşamın Yeni Adresi.jpg"]
    }
  },
  {
    title: "Modern Mimari ve Fonksiyonel Tasarım",
    image: "/megaşaşmaz Modern.jpg",
    popup: {
      title: "Estetik ve Kullanışlılık Bir Arada",
      text: "Geniş cepheler, ferah iç alanlar ve çağdaş mimari detaylarla Mega Şaşmaz, iş yerlerinize prestij katıyor. Fonksiyonelliği ön planda tutan tasarımıyla her metrekareyi verimli kullanın.",
      images: ["/megaşaşmaz-Modern Mimari ve Fonksiyonel Tasarım (2).jpg", "/megaşaşmaz-Modern Mimari ve Fonksiyonel Tasarım.jpg"]
    }
  },
  {
    title: "Kolay Ulaşım ve Geniş Otopark İmkanları",
    image: "/megaşaşmaz Ulaşım.jpg",
    popup: {
      title: "Müşterileriniz İçin Erişim Kolaylığı",
      text: "Ankara'nın en işlek noktalarından birinde konumlanan Mega Şaşmaz, ulaşım kolaylığı ve geniş otopark alanlarıyla hem işletmelere hem de ziyaretçilere büyük avantaj sağlıyor.",
      images: ["/megaşaşmaz-Kolay Ulaşım ve Geniş Otopark İmkanları (2).jpg", "/megaşaşmaz-Kolay Ulaşım ve Geniş Otopark İmkanları.jpg"]
    }
  },
  {
    title: "Geniş Araç ve Yükleme Alanları",
    image: "/megaşaşmaz Geniş.jpg",
    popup: {
      title: "Lojistikte Maksimum Verimlilik",
      text: "Yüksek tavanlı depo ve mağaza alanları sayesinde hem depolama kapasitenizi artırın hem de ürünlerinizi şık bir şekilde sergileyin. Mega Şaşmaz, işletmenize alan avantajı sunuyor.",
      images: ["/megaşaşmaz-Geniş Araç ve Yükleme Alanları (2).jpg", "/megaşaşmaz-Geniş Araç ve Yükleme Alanları.jpg"]
    }
  },
  {
    title: "Yüksek Tavanlı Depo ve Mağaza Alanları  ",
    image: "/megaşaşmaz Yüksek.jpg",
    popup: {
      title: "Depolama ve Teşhirde Esnek Çözümler",
      text: "Yüksek tavanlı depo ve mağaza alanları sayesinde hem depolama kapasitenizi artırın hem de ürünlerinizi şık bir şekilde sergileyin. Mega Şaşmaz, işletmenize alan avantajı sunuyor.",
      images: ["/megaşaşmaz- Yüksek Tavanlı Depo ve Mağaza Alanları (2).jpg", "/megaşaşmaz- Yüksek Tavanlı Depo ve Mağaza Alanları.jpg"]
    }
  },
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;

  return (
    <section className="relative py-24 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight">
        YAŞAM RİTİMİNİZ <br /> VEGA CENTER DA 
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
      Ankara Şaşmaz'da 700 bağımsız bölümden oluşan, 2 bodrum katı, alt zemin kat, üst zemin kat ve 7 ofis katı ile geniş depolama hacimlerine sahip MEGA Şaşmaz, toplam 160.000 m2 kapalı alana sahiptir. 
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
