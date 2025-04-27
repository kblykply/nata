"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Prestijli Yaşam için Mega 1453",
    image: "/mega-prestij.jpg",
    popup: {
      title: "Modern Mimarinin, Konforun ve Değerli Yatırımın Buluşma Noktası",
      text: "Mega 1453, şehrin merkezinde konfor, estetik ve prestiji bir araya getiriyor. Hem ayrıcalıklı bir yaşam hem de kazançlı bir yatırım fırsatı sunuyor.",
      images: ["/mega  Prestijli Yaşam için Mega 1453.jpg", "/mega Prestijli Yaşam için Mega 1453.jpg"]
    }
  },
  {
    title: "Doğa ile İç İçe Mimari",
    image: "/mega-doga.jpg",
    popup: {
      title: "Yeşilin huzuru, modern yaşamla buluşuyor.",
      text: "Mega 1453, doğayla uyumlu tasarımıyla sizi şehirde sakin ve ferah bir yaşama davet ediyor. Her anınızı yeşilin içinde geçirmenin ayrıcalığını sunuyor.",
      images: ["/mega Doğa ile İç İçe Mimari (2).jpg", "/mega Doğa ile İç İçe Mimari.jpg"]
    }
  },
  {
    title: "Modern Yaşamın Yeni Merkezi",
    image: "/mega-modern.jpg",
    popup: {
      title: "Şehrin kalbinde yenilikçi ve konforlu yaşam.",
      text: "Mega 1453, modern mimarisi ve merkezi konumuyla çağdaş yaşamın tüm ayrıcalıklarını bir araya getiriyor. Hem sosyal hem de konforlu bir yaşam sizi bekliyor.",
      images: ["/mega Modern Yaşamın Yeni Merkezi (2).jpg", "/mega Modern Yaşamın Yeni Merkezi.jpg"]
    }
  },
  {
    title: "Dinamik iş hayatının gücü",
    image: "/mega-dinamik.jpg",
    popup: {
      title: "İş ve yaşamın kesiştiği verimli alanlar.",
      text: "Mega 1453, modern ofis alanları ve merkezi konumuyla iş hayatınızı daha etkin ve prestijli hale getiriyor. Başarıya giden yolda size güç katıyor.",
      images: ["/mega Dinamik iş hayatının gücü (2).jpg", "/mega Dinamik iş hayatının gücü.jpg"]
    }
  },
  {
    title: "Şehrin İçinde Huzurlu Yaşam Alanı",
    image: "/mega-sehir.jpg",
    popup: {
      title: "Şehir merkezinde sakin ve konforlu bir hayat.",
      text: "Mega 1453, şehir yaşamının dinamizmi içinde size huzur dolu bir yaşam sunuyor. Doğayla iç içe, modern ve ferah yaşam alanlarıyla fark yaratıyor.",
      images: ["/mega Şehrin İçinde Huzurlu Yaşam Alanı (2).jpg", "/mega Şehrin İçinde Huzurlu Yaşam Alanı.jpg"]
    }
  },
  {
    title: "Zarif ve fonksiyonel çalışma alanı",
    image: "/mega-zarif.jpg",
    popup: {
      title: "Şıklığı ve verimliliği bir araya getiren ofisler.",
      text: "Mega 1453, modern tasarımıyla iş hayatınıza prestij katarken, fonksiyonel alanlarıyla çalışma verimliliğinizi artırır. İş dünyası için ideal bir ortam sunar.",
      images: ["/mega Zarif ve fonksiyonel çalışma alanı (2).jpg", "/mega Zarif ve fonksiyonel çalışma alanı.jpg"]
    }
  },
  {
    title: "⁠Akıllı güvenlik ile kontrollü giriş",
    image: "/mega-akıllı.jpg",
    popup: {
      title: "Güvenli ve huzurlu yaşamın teknolojik çözümü.",
      text: "Akıllı sistemlerle donatılmış giriş-çıkışlar sayesinde, her anınız güven altında. Teknoloji destekli güvenlik ile hem evinizde hem iş yerinizde huzurla yaşayın.",
      images: ["/mega ⁠Akıllı güvenlik ile kontrollü giriş (2).jpg", "/mega ⁠Akıllı güvenlik ile kontrollü giriş.jpg"]
    }
  },
  {
    title: "Zengin Altyapı",
    image: "/mega-zengin.jpg",
    popup: {
      title: "Modern yaşam ve iş dünyası için güçlü altyapı çözümleri.",
      text: "Kesintisiz enerji, hızlı internet ve ileri teknoloji olanaklarıyla donatılmış altyapı, hem yaşam hem de iş hayatında konfor ve süreklilik sağlar.",
      images: ["/mega Zengin Altyapı (2).jpg", "/mega Zengin Altyapı.jpg"]
    }
  },
  {
    title: "Verimli planlamalar",
    image: "/mega-verimli.jpg",
    popup: {
      title: "Alan kullanımında maksimum konfor ve işlevsellik.",
      text: "Kesintisiz enerji, hızlı internet ve ileri teknoloji olanaklarıyla donatılmış altyapı, hem yaşam hem de iş hayatında konfor ve süreklilik sağlar.İhtiyaca uygun tasarlanmış yaşam ve çalışma alanlarıyla, her metrekare akıllıca değerlendiriliyor. Fonksiyonel çözümlerle konfor ve verimlilik bir arada sunuluyor.",
      images: ["/mega Verimli planlamalar (2).jpg", "/mega Verimli planlamalar.jpg"]
    }
  },
  {
    title: "⁠Güvenli ve konforlu yeraltı otopark",
    image: "/mega-güven.jpg",
    popup: {
      title: "Araçlarınız için güvenli, size özel alanlar.",
      text: "Geniş ve modern tasarlanmış yeraltı otopark ile aracınız her zaman güvende. Kolay erişim ve konforlu park alanlarıyla şehir yaşamının stresinden uzaklaşın.",
      images: ["/mega ⁠Güvenli ve konforlu yeraltı otopark (2).jpg", "/mega ⁠Güvenli ve konforlu yeraltı otopark.jpg"]
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
      MEGA 1453  <br /> Yeni Bir Çağ Başlıyor
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
      Huzur dolu bir atmosfer sunan bu proje, yaklaşık 36.000m² toplam peyzaj alanında yeşille iç içe benzersiz bir yaşam sunuyor. Ankara’nın en değerli lokasyonlarından birinde konumlanan Mega 1453, sadece bir konut değil, aynı zamanda hayatı zirvede yaşamak isteyenler için kusursuz bir yaşam merkezi olarak sizleri bekliyor.
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
