"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const popupContent = [
  {
    title: "Ev Almanın En Kolay Yolu: NATA Yaşam’da Başlar!",
    text: `Hayalindeki eve ulaşmak artık zahmetli bir süreç değil. NATA Yaşam, dijital platformları ve kullanıcı dostu arayüzüyle ev arama deneyimini baştan sona değiştiriyor. İster akıllı filtrelerle arama yap, ister lokasyon bazlı keşfe çık — sana en uygun projeyi saniyeler içinde bulabilirsin. Üstelik satış danışmanlarımız da her adımda senin yanında.`
  },
  {
    title: "Akıllı Teknolojiyle Donatılmış Yaşam Alanlarıyla Hayatını Kolaylaştır!",
    text: `Günümüzün hızlı temposuna ayak uydurmak için sadece güzel bir ev değil, aynı zamanda fonksiyonel ve teknolojik çözümler sunan bir yaşam alanına ihtiyaç var. NATA Yaşam projeleri; uzaktan kontrol edilebilen akıllı sistemleri, enerji verimliliği, sosyal donatı alanları ve merkezi lokasyonlarıyla sana zaman kazandırır, yaşam kaliteni artırır.

• Akıllı ev sistemleri
• Güvenli ve sürdürülebilir altyapı
• Modern mimari tasarımlar`
  },
  {
    title: "56 Yıldır Aynı Değerlerle, Aynı Tutkuyla İnşa Ediyoruz!",
    text: `Bir ev sadece beton ve duvardan ibaret değildir. İçinde büyüyen çocuklar, kutlanan başarılar, yaşanan anılarla hayat bulur. 56 yıldır binlerce aileye yuva sunan Nata Holding olarak, Türkiye’nin kalbinde kök salmış projelerimizle gurur duyuyoruz. Bugün Milli Takımımızın ana sponsoru olarak sadece ev değil, aynı zamanda umut da inşa ediyoruz.

• Gücünü köklerinden alan bir marka
• Türkiye'nin gurur ortaklığı
• Her detayı düşünülmüş yaşam projeleri

#GururDuyuyoruz`
  },
  {
    title: "Ankara’da Yaşamın Yeni Tanımı: Prestij, Konfor ve Değer!",
    text: `Ankara’nın yükselen bölgelerinde, vizyoner mimarilerle şekillenen NATA Yaşam projeleri; yatırımcılara uzun vadeli kazanç, sakinlerine ise ayrıcalıklı bir yaşam vaat ediyor. Şehrin merkezine sadece dakikalar mesafede, geniş balkonlu dairelerden manzaralı rezidanslara kadar farklı alternatiflerle lüksü ulaşılabilir kılıyoruz.

• Panoramik şehir manzarası
• Uluslararası ödüllü projeler
• Prestijli yaşam alanları`
  },
  {
    title: "Hayallerimiz Ortak: Bu Forma, Hepimizin Umudu!",
    text: `Küçük bir çocuğun odasında başlayan büyük bir hayalin sembolü: Ay-yıldızlı forma. Nata Holding olarak, sporun birleştirici gücüne inanıyor ve çocukların hayallerine ortak oluyoruz. Milli Takımımıza destek verirken, geleceğin yıldızlarına da ilham veriyoruz. Katılacağın çekilişle 1 kişiye imzalı forma, 10 kişiye ise maç bileti hediye ediyoruz!

• Hayalin kıyısında bir forma
• Çekilişe katıl, kazanma şansını yakala
• Bu sadece bir hediye değil, bir umut!
• Bu Forma Hepimizin Hayali

#AyYıldızİzinİzde`
  }
];

const images = [
  "/nata_web_gorsel_haziran1.jpg",
  "/nata_web_gorsel_haziran2.jpg",
  "/slider/slider/alt3.jpg",
  "/nata_web_mobil_3.jpg",
  "/slider/slider/alt5.jpg"
];

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full px-4 py-10">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => setOpenIndex(i)}
          className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block"
        >
          <Image
            src={img}
            alt={`Alt ${i + 1}`}
            fill
            className="object-contain"
            priority
          />
        </button>
      ))}
<Transition show={openIndex !== null} as={Fragment}>
  <Dialog
    onClose={() => setOpenIndex(null)}
    className="fixed inset-0 z-[10000] flex items-center justify-center"
  >
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-black/80"
        onClick={() => setOpenIndex(null)} // ✅ Clicking on black closes
      />
    </Transition.Child>

    {openIndex !== null && (
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="relative w-[930px] h-[584px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden z-20"
          onClick={(e) => e.stopPropagation()} // ✅ Prevent close if clicked inside
        >
          <div className="relative w-full h-full">
            <Image
              src={images[openIndex]}
              alt={`Popup ${openIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 relative overflow-y-auto">
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              {popupContent[openIndex].title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 whitespace-pre-line leading-relaxed">
              {popupContent[openIndex].text}
            </p>
          </div>
        </div>
      </Transition.Child>
    )}
  </Dialog>
</Transition>


    </section>
  );
}
