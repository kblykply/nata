'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  textColor: 'white' | 'black';
}

const slides: SlideData[] = [
  // same as your slides array...
  {
    id: 1,
    title: 'Yeni Bir Yaşamı Büyütüyorsunuz',
    subtitle: 'Doğanın kalbinde, her gününüzü güzelleştirecek bir yaşam sizi bekliyor.',
    background: '/images/slide1.jpg',
    textColor: 'black',
  },
  {
    id: 2,
    title: 'İşte Orası, Sizin Geleceğiniz.',
    subtitle: 'Hayalini kurduğunuz yaşam, şimdi bir adım uzağınızda..',
    background: '/images/slide2.jpg',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'Hayat Burada Başlıyor',
    subtitle: 'İlk adımlar burada atılır.',
    background: '/images/slide3.jpg',
    textColor: 'black',
  },
  {
    id: 4,
    title: 'Hayat Evinizin Dışında da Devam Ediyor',
    subtitle: 'Nata Yaşam’da sosyalleşmek, dinlenmek ve kendinize zaman ayırmak için her şey elinizin altında.',
    background: '/images/slide4.jpg',
    textColor: 'black',
  },
  {
    id: 5,
    title: 'Gücünüzü Burada Toplayın',
    subtitle: 'Sağlıklı yaşam alanlarıyla her gününüz daha enerjik.',
    background: '/images/slide5.jpg',
    textColor: 'white',
  },
  {
    id: 6,
    title: 'Sadece Eşyalarınızı Değil, Anılarınızı da Yerleştirin.',
    subtitle: 'Nata Yaşam’da taşınmak bir işlem değil, bir dönüşümdür.',
    background: '/images/slide6.jpg',
    textColor: 'black',
  },
  {
    id: 7,
    title: 'Yeni Fırsatlarla Tanışın',
    subtitle: 'Hayalinizdeki yaşama ulaşmak için en doğru zaman şimdi.',
    background: '/images/slide7.jpg',
    textColor: 'black',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                src={slide.background}
                alt={slide.title}
                fill
                className="object-cover object-center z-0"
                priority
              />

              {/* Overlay Content */}
              <div className="relative z-10 h-full w-full flex justify-between items-start pt-20 px-6 md:px-16">                {/* Left Side Text */}
                <div className={`max-w-xl space-y-6 ${slide.textColor === 'white' ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
                  <p className="text-lg">{slide.subtitle}</p>
                </div>

                {/* Right Side Cards */}
                <div className="hidden md:flex flex-col gap-4 w-[280px] md:w-[320px] mt-6">
                  {/* Top Card - Background with Text */}
                  <div
                    className="rounded-xl overflow-hidden shadow-md bg-cover bg-center relative h-[360px] w-full p-4 flex flex-col justify-start"
                    style={{ backgroundImage: "url('/images/leaves.png')" }}
                  >
                    <div className="z-10 text-black">
                      <h3 className="text-md font-semibold leading-tight">
                        Yaşamın Yeni Tanımı:<br />Nata Yaşam
                      </h3>
                      <p className="text-xs mt-1 leading-snug text-black/80">
                        Doğayla iç içe, sosyal olanaklarla zenginleştirilmiş<br />
                        Nata Yaşam; sizi merkeze alan bir yaşam biçimidir.
                      </p>
                    </div>
                  </div>

                  {/* Middle Card - Kazanırsın */}
                  <div
                    className="rounded-xl bg-no-repeat bg-cover bg-center shadow-md w-full h-[120px] px-6 py-4 flex items-start"
                    style={{ backgroundImage: "url('/images/hearts.png')" }}
                  >
                    <div className="text-sm leading-tight">
                      <p className="text-black font-medium">Paylaştıkça</p>
                      <p className="text-red-600 font-semibold">Kazanırsın</p>
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <button className="bg-gradient-to-r from-red-600 to-orange-400 text-white py-2 rounded shadow-md text-sm font-medium">
                    +6 daha
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Dots */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentIndex ? "w-10 h-3 bg-white" : "w-3 h-3 bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
