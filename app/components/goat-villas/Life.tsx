"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Ankara nın Yeni İş ve Yaşam Merkezi",
    image: "/goatvillas-dergi.jpg",
    popup: {
      title: "Teknolojiyle Korunan Huzur",
      text: "Akıllı ev sistemleriyle donatılan bu yaşam alanında, güvenlik ve konfor bir arada. Kamera sistemleri, dijital giriş kontrolleri ve uzaktan yönetim teknolojileri sayesinde eviniz her an sizin kontrolünüzde.Akıllı ev sistemleriyle donatılan bu yaşam alanında, güvenlik ve konfor bir arada. Kamera sistemleri, dijital giriş kontrolleri ve uzaktan yönetim teknolojileri sayesinde eviniz her an sizin kontrolünüzde.",
      images: ["/goat-Güvenli ve Akıllı Yaşam.jpg", "/goat-Güvenli ve Akıllı Yaşam-şarj istasyonu.jpg"]
    }
  },
  {
    title: "Sürdürülebilir ve Kaliteli Malzemeler",
    image: "/goat-sürdür.jpg",
    popup: {
      title: "Uzun Ömürlü ve Çevre Dostu Yapı Malzemeleri",
      text: "Projede kullanılan tüm malzemeler doğaya ve insana dost olacak şekilde seçildi. Enerji verimliliği yüksek, dayanıklı ve estetik çözümler ile hem çevreye duyarlı hem de kaliteli bir yaşam inşa ediliyor.",
      images: ["/goat-sürdürebilir.jpg", "/goat-sürdürebilir2.jpg"]
    }
  },
  {
    title: "Doğayla Bütünleşen Modern Yaşam",
    image: "/goat-green.jpg",
    popup: {
      title: "Şehirde Doğanın Ritmini Yakala",
      text: "Geniş peyzaj alanları, yürüyüş yolları ve doğal dokuya saygılı mimarisiyle projede, modern yaşam doğayla iç içe bir deneyime dönüşüyor. Günün yorgunluğunu kuş sesleri eşliğinde atabileceğiniz özel alanlar sizi bekliyor.",
      images: ["/goat-Doğayla Bütünleşen Modern Yaşam (2).jpg", "/goat-Doğayla Bütünleşen Modern Yaşam.jpg"]
    }
  },
  {
    title: "Güvenli ve Akıllı Yaşam",
    image: "/goat-akilli.jpg",
    popup: {
      title: "Teknolojiyle Korunan Huzur",
      text: "Akıllı ev sistemleriyle donatılan bu yaşam alanında, güvenlik ve konfor bir arada. Kamera sistemleri, dijital giriş kontrolleri ve uzaktan yönetim teknolojileri sayesinde eviniz her an sizin kontrolünüzde.Akıllı ev sistemleriyle donatılan bu yaşam alanında, güvenlik ve konfor bir arada. Kamera sistemleri, dijital giriş kontrolleri ve uzaktan yönetim teknolojileri sayesinde eviniz her an sizin kontrolünüzde.",
      images: ["/goat-Güvenli ve Akıllı Yaşam.jpg", "/goat-Güvenli ve Akıllı Yaşam-şarj istasyonu.jpg"]
    }
  },
  {
    title: "Modern Mimarinin Zirvesi",
    image: "/goat-doga.jpg",
    popup: {
      title: "Zamansız Tasarım, Fonksiyonel Çözümler",
      text: "Estetik çizgilerle fonksiyonelliği birleştiren proje tasarımı, çağdaş mimariyi yeni bir seviyeye taşıyor. Ferah iç mekanlar, geniş cepheler ve ışık alan yaşam alanları ile stil sahibi bir mimari deneyim sunuluyor.",
      images: ["/goat-Modern Mimarinin Zirvesi (2).jpg", "/goat-Modern Mimarinin Zirvesi.jpg"]
    }
  },
  {
    title: "Açık ve Kişiye Özel İç Mekan Tasarımı Kapalı Otopark",
    image: "/goat-özel.jpg",
    popup: {
      title: "Hayallerinize Uygun Yaşam Alanları",
      text: "Tarzınızı yansıtan iç mekanlar için kişiselleştirme seçenekleri sunuluyor. Renk paletinden dolap yerleşimlerine kadar tüm detaylar sizin seçiminizle şekilleniyor. Kendinize özel bir yaşam alanı inşa edin..",
      images: ["/goatkişiyeözel (2).jpg", "/goatkişiyeözel.jpg"]
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
        YAŞAM RİTİMİNİZ <br /> VEGA CENTER DA 
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
        Vega Center, modern yaşamın dinamiklerini ve konforunu bir araya getiriyor. 
        Her bir alan, yaşam kalitenizi artırmak için tasarlandı.
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
  href="https://katalog.goatvillasbilkent.com.tr/"
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
