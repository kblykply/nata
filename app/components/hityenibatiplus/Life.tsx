"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Yeni Batı Plus",
    image: "/yenibatıplus/yenibatıbroşür.jpeg",
     popup: {
      title: "Spor Tutkunları İçin Ayrıcalıklı Alanı",
      text: "Yeni Batı Plus, basketbol severlere özel tasarlanmış saha ile hem eğlenme hem de spor yapma imkanı sunarak sağlıklı bir yaşam tarzını destekler.",
      images: ["/yenibatıplus/basketbolsahası1.jpeg", "/yenibatıplus/basketbolsahası2.jpeg"]
    }
  },
  {
    title: "7/24 Güvenlik",
    image: "/yenibatıplus/724güvenlik.jpeg",
    popup: {
        title: "Dört Mevsim Koruma ve Güvenlik",
  text: "Kapalı otopark ile aracınız her mevsim hava koşullarına karşı koruma altında; 7/24 aktif güvenlik sistemiyle de güvenle park edebilirsiniz.",
      images: ["/yenibatıplus/popupgüvenlik1.jpeg", "/yenibatıplus/popupgüvenlik2.jpeg"]
    }
  },
  {
    title: "Açık Otopark",
    image: "/yenibatıplus/açıkotopark.jpeg",
    popup: {
      title: "Kolay ve Hızlı Park Konforu",
      text: "Proje bünyesindeki geniş açık otopark alanları, araç sahipleri için zamandan tasarruf sağlayan pratik bir park deneyimi sunar.",
      images: ["/yenibatıplus/açıkotopark1.jpeg", "/yenibatıplus/açıkotopark2.jpeg"]
    }
  },
  {
    title: "Basketbol Sahası",
    image: "/yenibatıplus/basketbol.jpeg",
    popup: {
      title: "Spor Tutkunları İçin Ayrıcalıklı Alanı",
      text: "Yeni Batı Plus, basketbol severlere özel tasarlanmış saha ile hem eğlenme hem de spor yapma imkanı sunarak sağlıklı bir yaşam tarzını destekler.",
      images: ["/yenibatıplus/basketbolsahası1.jpeg", "/yenibatıplus/basketbolsahası2.jpeg"]
    }
  },
  {
    title: "Kapalı Otopark",
    image: "/yenibatıplus/kapalıotopark.jpeg",
    popup: {
      title: "Dört Mevsim Güvenli Park İmkanı",
      text: "Kapalı otopark ile aracınız her mevsim hava koşullarına karşı koruma altında; 7/24 aktif güvenlik sistemiyle de güvenle park edebilirsiniz.",
      images: ["/yenibatıplus/kapalıotopark1.jpeg", "/yenibatıplus/kapalıotopark2.jpeg"]
    }
  },
    {
    title: "Oyun Alanı",
    image: "/yenibatıplus/oyunalanı.jpeg",
    popup: {
      title: "Çocukların Hayal Dünyası Burada Genişliyor",
      text: "Yeni Batı Plus, çocuklara özel güvenli ve modern oyun alanlarıyla onların enerjilerini keyifle atabilecekleri, yeni arkadaşlıklar kurabilecekleri renkli bir ortam sunar.",
      images: ["/yenibatıplus/oyunalanı1.jpeg", "/yenibatıplus/oyunalanı2.jpeg"]
    }
  },
  
];

export default function ProjectLifeRhythmSection() {
  const [index, setIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const totalSlides = slides.length;
  const [dragStartX, setDragStartX] = useState<number | null>(null);
const [dragDeltaX, setDragDeltaX] = useState(0);




const handlePointerDown = (e: React.PointerEvent) => {
  setDragStartX(e.clientX);
};

const handlePointerMove = (e: React.PointerEvent) => {
  if (dragStartX !== null) {
    setDragDeltaX(e.clientX - dragStartX);
  }
};

const handlePointerUp = () => {
  if (dragDeltaX > 50) {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  } else if (dragDeltaX < -50) {
    setIndex((prev) => (prev + 1) % totalSlides);
  }

  // ✅ Add a slight delay to allow animation to complete before reset
  setTimeout(() => {
    setDragDeltaX(0);
    setDragStartX(null);
  }, 200); // 200ms matches your CSS transition
};



  return (
    <section className="select-none scroll-smooth relative py-24 px-6 bg-white text-center overflow-hidden">



      
      <h2 className="text-3xl font-light text-gray-800 uppercase leading-tight">
      Yeni Batı Plus  <br />Ankara'nın yükselen değeri
      </h2>
      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
Ankara'nın yükselen değeri, son zamanların en gözde konut ve yatırım bölgesi olan Yeni Batı Mahallesi, sıradışı ve prestijli konut projesi Yeni Batı Plus ile yeni bir soluk kazanıyor. Bu eşsiz proje, sıradışı mimarisiyle şehrin kalbinde sizlere nefes alacak yeni bir yaşam alanı sunuyor.

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
  {normalized === 0 && (
    <div
      className="absolute inset-0 z-10"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  )}


  
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
          // <-- Change this URL to your target link
        className="z-100 absolute    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-sm text-white  px-5 py-2 rounded-full shadow"
      >
        Sunuma Git
      </a>
    ) : (
      // For other slides, open popup
      <button
        onClick={() => setPopupIndex(i)}
        className="z-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm text-gray-700 px-5 py-2 rounded-full shadow"
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