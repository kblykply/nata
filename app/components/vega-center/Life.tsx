"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Ankara nın Yeni İş ve Yaşam Merkezi",
    image: "/vegacenter-dergi.jpg",
    popup: {
      title: "Prestijli Konumda Modern Ofis ve Ticaret Alanları",
      text: "Vega Center, iş dünyası ve sosyal yaşamı tek bir noktada buluşturan yeni nesil karma proje anlayışıyla Ankara&apos;nın yükselen değeri oluyor. Modern ofisler, mağazalar ve sosyal alanlarla hem iş hayatınıza prestij katıyor hem de günlük ihtiyaçlarınıza kolay erişim sağlıyor. Şehrin dinamik yapısına uyumlu tasarımıyla, yatırımcılar ve profesyoneller için ideal bir merkez haline geliyor.",
      images: ["/vegacenter-Ankara nın Yeni İş ve Yaşam Merkezi (2).jpg", "/vegacenter-Ankara nın Yeni İş ve Yaşam Merkezi.jpg"]
    }
  },
  {
    title: "Elektrikli Araçlar İçin Şarj İstasyonları",
    image: "/Elektrikli Araçlar İçin Şarj İstasyonları.jpg",
    popup: {
      title: "Geleceğin Enerjisine Uyumlu Akıllı Çözümler",
      text: "Vega Center da sürdürülebilir yaşam anlayışıyla elektrikli araç sahipleri için özel şarj istasyonları sunuluyor. Çevre dostu ulaşımı destekleyen bu altyapı sayesinde, aracınızı güvenle ve kolayca şarj edebilir, geleceğin teknolojisine her zaman bir adım önde uyum sağlayabilirsiniz. Modern yaşamın gereksinimlerine cevap veren bu özellik ile konforunuzu ve çevreci yaklaşımınızı bir arada yaşayın.",
      images: ["/vegacenter-şarj istasyonu.jpg", "/vegacenter-şarj istasyonu (2).jpg"]
    }
  },
  {
    title: "Merkezi Konum, Kolay Ulaşım",
    image: "/Merkezi Konum, Kolay Ulaşım.jpg",
    popup: {
      title: "Şehrin Kalbinde, Her Yere Bir Adım Uzaklıkta",
      text: "Vega Center, Ankara’nın en stratejik noktalarından birinde konumlanarak size zamandan tasarruf etme ayrıcalığı sunuyor. Metro, ana arterler ve önemli ticaret merkezlerine yakınlığı sayesinde hem iş hem de sosyal yaşamınızda ulaşımı sorun olmaktan çıkarıyor. Merkezi konum avantajıyla, iş dünyasının dinamizmiyle şehrin olanaklarını en verimli şekilde değerlendirin.",
      images: ["/vegacenter-merkezi konum.jpg", "/vegacenter-merkezi konum (2).jpg"]
    }
  },
  {
    title: "Ankara nın Yeni İş ve Yaşam Merkezi",
    image: "/Ankara nın Yeni İş ve Yaşam Merkezi.jpg",
    popup: {
      title: "Prestijli Konumda Modern Ofis ve Ticaret Alanları",
      text: "Vega Center, iş dünyası ve sosyal yaşamı tek bir noktada buluşturan yeni nesil karma proje anlayışıyla Ankara&apos;nın yükselen değeri oluyor. Modern ofisler, mağazalar ve sosyal alanlarla hem iş hayatınıza prestij katıyor hem de günlük ihtiyaçlarınıza kolay erişim sağlıyor. Şehrin dinamik yapısına uyumlu tasarımıyla, yatırımcılar ve profesyoneller için ideal bir merkez haline geliyor.",
      images: ["/vegacenter-Ankara nın Yeni İş ve Yaşam Merkezi (2).jpg", "/vegacenter-Ankara nın Yeni İş ve Yaşam Merkezi.jpg"]
    }
  },
  {
    title: "Teraslı Ofislerle Doğayla İç İçe Çalışma",
    image: "/Teraslı Ofislerle Doğayla İç İçe Çalışma.jpg",
    popup: {
      title: "Verimliliği Doğanın Huzuruyla Buluşturan Ofisler",
      text: "Modern iş hayatını, ferah teraslı ofislerle doğanın sakinleştirici etkisiyle yeniden tanımlayın. Açık hava alanlarıyla motivasyonunuzu artıran bu özel çalışma ortamı, yeşilin enerjisiyle daha üretken ve keyifli bir iş deneyimi sunuyor. Şehrin kalabalığından uzak, doğayla iç içe ofis konseptiyle hem konforu hem de prestiji bir arada yaşayın.",
      images: ["/vega-teraslı ofis.jpg", "/vega-teraslıofis.jpg"]
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
  href="https://vegacenter.com.tr/img/VEGA-Center-Katalog.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-white px-5 py-2 rounded-full shadow"
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
