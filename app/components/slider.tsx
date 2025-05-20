'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  textColor: 'white' | 'black';
}

const slides: SlideData[] = [
  {
    id: 1,
    title: '',
    subtitle: '',
    background: '/slider/slider/Banner1.jpg',
    textColor: 'black',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    background: '/slider/slider/Banner2.jpg',
    textColor: 'black',
  },
  {
    id: 12,
    title: 'Sadece Eşyalarınızı Değil, Anılarınızı da Yerleştirin.',
    subtitle: 'Yeni anılar biriktireceğiniz, geçmişinize değer katacağınız yepyeni bir başlangıçtır. Doğayla iç içe peyzaj alanları, sosyal yaşamı destekleyen donatılar, çocuklar için güvenli oyun alanları ve modern mimarisiyle; sizi yalnızca yeni bir eve değil, hayalini kurduğunuz yaşama davet ediyor.',
    background: '/images/slide1.jpg',
    textColor: 'black',
  },
  {
    id: 13,
    title: 'Hayalinizdeki Eve Konmak Bu Kadar Kolay!',
    subtitle: 'Nata Yaşam’da ev sahibi olmak artık bir hayal değil. Doğayla iç içe, sosyal yaşam alanlarıyla zenginleşmiş yeni bir yaşam biçimi, anahtarıyla birlikte size geliyor. Siz sadece karar verin, yeni hayatınız size doğru gelsin.',
    background: '/images/slide2.jpg',
    textColor: 'black',
  },
  {
    id: 3,
    title: 'Yeni Bir Yaşamı Büyütüyorsunuz',
    subtitle: 'Doğanın kalbinde, her gününüzü güzelleştirecek bir yaşam sizi bekliyor. Nata Yaşam, yalnızca bir konut değil; sizi, huzurun, sürdürülebilir mimarinin ve sosyal olanakların merkezine alan yeni bir hayat tarzıdır.',
    background: '/images/slide3.jpg',
    textColor: 'black',
  },
  {
    id: 4,
    title: 'Işığını İçinden Alan Bir Yaşam',
    subtitle: 'Nata Yaşam, ışığını dışarıdan değil; içindeki sevgi, güven ve vizyondan alan bir yaşam anlayışı sunar. Modern mimarisi, doğayla uyumlu sosyal alanları ve yüksek güvenlik standartlarıyla; bugünü aydınlatan, yarına yön veren bir fikirle inşa edildi.',
    background: '/images/slide4.jpg',
    textColor: 'black',
  },
  {
    id: 5,
    title: 'Hayat Evinizin Dışında da Devam Ediyor',
    subtitle: 'Nata Yaşam’da sosyalleşmek, dinlenmek ve kendinize zaman ayırmak için her şey elinizin altında.',
    background: '/images/slide5.jpg',
    textColor: 'black',
  },
  {
    id: 6,
    title: 'Güvence Altında Bir Yaşam',
    subtitle: 'Hayatınızı şekillendireceğiniz yuvanız, hem size hem geleceğinize güven verecek şekilde tasarlandı. Nata Yaşam, deprem yönetmeliğine uygun yapısı, site içi güvenlik sistemleri ve doğayla uyumlu mimarisiyle size sadece bir ev değil, huzur dolu bir yaşam sunuyor.',
    background: '/images/slide6.jpg',
    textColor: 'black',
  },
  {
    id: 7,
    title: 'Hayatın Ritmiyle Uyumlan',
    subtitle: 'Nata Yaşam’da yaşam temposu sizin ritminize ayarlanır. İster huzurlu yürüyüş yollarında dinginliği, ister sosyal alanlarda dinamizmi arayın; bu yaşam alanı size uyum sağlar.  Çünkü Nata Yaşam, hayatı sizin hızınıza göre planlar.',
    background: '/images/slide7.jpg',
    textColor: 'black',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
  <div className="flex w-full h-screen">
    {/* Swiper - 78% width */}
    <div className="w-[78%] h-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.background}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="relative z-10 h-full w-full flex items-start pt-20 px-4 sm:px-6 md:px-12 lg:px-16">
                <div className={`max-w-xl space-y-6 ${slide.textColor === 'white' ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
                  <p className="text-base sm:text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots */}
      <div className="absolute bottom-6 left-4 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentIndex ? 'w-8 h-2 bg-gray-700' : 'w-2 h-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Right-side Cards - Always Visible, Responsive Width */}
   <div className="flex-1 bg-white p-4 flex flex-col justify-end h-full">
   <div className="rounded-xl overflow-hidden  w-full  bg-white flex items-center justify-center">
  <Image
    src="/slider/slider/sagkutu.png"
    alt="Mega 1453"
    width={300}
    height={500}
    className="w-full h-auto object-contain"
  />
</div>
    <div
      className="rounded-xl bg-no-repeat bg-cover bg-center shadow-md h-[120px] mt-4 px-6 py-4 flex items-start"
      style={{ backgroundImage: "url('/images/kutu-2.png')" }}
    >
      <div className="text-sm leading-tight">
        <p className="text-black font-medium">Paylaştıkça</p>
        <p className="text-red-600 font-semibold">Kazanırsın</p>
      </div>
    </div>
    <Link href="/kampanya">
      <button className="mt-4 bg-gradient-to-r from-red-600 to-orange-400 text-white py-4 px-4 rounded shadow-md text-sm font-medium w-full">
        +6 daha
      </button>
    </Link>
  </div>
  </div>
);


}
