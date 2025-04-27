"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Kurumsal pencerenin yeni adresi ",
    image: "/vegaotonomi-dergi.jpg",
    popup: {
      title: "Modern Altyapı ile Kurumsal Kimliğinizi Güçlendirin",
      text: "Vega Otonomi'nin sunduğu profesyonel iş alanları sayesinde müşterilerinize güven veren bir ortamda hizmet sunun. Modern tasarımı ve kurumsal altyapısıyla işinize prestij kazandırın.",
      images: ["/vegaotonomi2- İşinize Güven Katın (2).jpg", "/vegaotonomi2- İşinize Güven Katın.jpg"]
    }
  },
  {
    title: "Otomotiv Ticaretinin Yeni Merkezi",
    image: "/vegaotonomi-Otomotiv Ticaretinin Yeni Merkezi.jpg",
    popup: {
      title: "Sektörün Kalbi Artık Vega Otonomi’de",
      text: "Vega Otonomi, otomotiv dünyasının tüm ihtiyaçlarını tek çatı altında toplayarak, modern ve yenilikçi yapısıyla ticaretin yeni buluşma noktası oluyor. Araç alım-satımında prestijli bir merkezde yerinizi alın.",
      images: ["/vegaotonomi2-Otomotiv Ticaretinin Yeni Merkezi (2).jpg", "/vegaotonomi2-Otomotiv Ticaretinin Yeni Merkezi.jpg"]
    }
  },
  {
    title: "Stratejik Konum, Yüksek Erişilebilirlik",
    image: "/vegaotonomi-Stratejik Konum, Yüksek Erişilebilirlik.jpg",
    popup: {
      title: "Her Yerden Kolay Ulaşım Avantajı",
      text: "Ankara'nın en değerli lokasyonlarından birinde konumlanan Vega Otonomi, hem şehir içi hem de şehirlerarası ulaşım kolaylığı ile işinizi hızlandırıyor. Müşterileriniz ve iş ortaklarınız için ulaşımı sorun olmaktan çıkarın.",
      images: ["/vegaotonomi2- Stratejik Konum, Yüksek Erişilebilirlik (2).jpg", "/vegaotonomi2- Stratejik Konum, Yüksek Erişilebilirlik.jpg"]
    }
  },
  {
    title: "İşinize Güven Katın",
    image: "/vegaotonomi-İşinize Güven Katın.jpg",
    popup: {
      title: "Modern Altyapı ile Kurumsal Kimliğinizi Güçlendirin",
      text: "Vega Otonomi'nin sunduğu profesyonel iş alanları sayesinde müşterilerinize güven veren bir ortamda hizmet sunun. Modern tasarımı ve kurumsal altyapısıyla işinize prestij kazandırın.",
      images: ["/vegaotonomi2- İşinize Güven Katın (2).jpg", "/vegaotonomi2- İşinize Güven Katın.jpg"]
    }
  },
  {
    title: "Sektöre Değer Katan Yeni Nesil İş Alanları",
    image: "/vegaotonomi-Sektöre Değer Katan Yeni Nesil İş Alanları.jpg",
    popup: {
      title: "Sadece Bir Galeri Değil, Çok Daha Fazlası",
      text: "Vega Otonomi, klasik ticaret anlayışını geride bırakıyor. Yeni nesil iş alanlarıyla, showroomlardan toplantı odalarına kadar her detay, sektöre değer katacak şekilde tasarlandı.",
      images: ["/vegaotonomi2-Sektöre Değer Katan Yeni Nesil İş Alanları (2).jpg", "/vegaotonomi2-Sektöre Değer Katan Yeni Nesil İş Alanları.jpg"]
    }
  },
  {
    title: "Türkiye’nin İlk Otomotiv AVM Konseptifi",
    image: "/vegaotonomi-Türkiye’nin İlk Otomotiv AVM Konsepti.jpg",
    popup: {
      title: "Yenilikçi Yaklaşımıyla İlk ve Tek",
      text: "Vega Otonomi, Türkiye’nin otomotiv sektöründe AVM konseptiyle hizmet veren ilk yapısı olma özelliğini taşıyor. Araç alım-satımı, servis, aksesuar ve finansal hizmetleri tek noktadan sunan bu konsept ile fark yaratın.",
      images: ["/vegaotonomi2-Türkiye’nin İlk Otomotiv AVM Konseptifi (2).jpg", "/vegaotonomi2-Türkiye’nin İlk Otomotiv AVM Konseptifi.jpg"]
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
        

VEGA OTONOMİ
 <br /> Oto Galeri ve Ofis avantajları
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
      Vega Otonomi, geniş ulaşım imkanı, merkezi konumu ve 490m²’ye kadar 207 adet Oto Galeri ve Ofis avantajları ile şehrin otonomi kültürüne yeni bir soluk kazandırıyor. VEGA Otonomi Ofis & Galeri seçenekleri ile sizlerle buluşuyor.
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
