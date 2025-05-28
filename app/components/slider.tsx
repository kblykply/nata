'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  mobileBackground?: string;
  textColor: 'white' | 'black';
}

const slides: SlideData[] = [
  {
    id: 1,
    title: '',
    subtitle: '',
    background: '/slider/slider/Banner1.jpg',
    mobileBackground: '/slider/slider/m1.jpg',
    textColor: 'black',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    background: '/slider/slider/Banner2.jpg',
    mobileBackground: '/slider/slider/BannerMobil.jpg',
    textColor: 'black',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Swiper Fullscreen */}
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
                src={
                  isMobile && slide.mobileBackground
                    ? slide.mobileBackground
                    : slide.background
                }
                alt={slide.title}
                fill
                className="object-cover object-left pointer-events-none"
                priority
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 z-10 w-full h-full flex items-start px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pointer-events-none">
                <div
                  className={`max-w-xl space-y-6 ${
                    slide.textColor === 'white' ? 'text-white' : 'text-black'
                  } pointer-events-auto`}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 z-30">
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

      {/* Right: Floating Card Section */}
      {!isMobile && (
        <div className="absolute top-0 right-0 h-full w-[320px] p-4 flex flex-col justify-end bg-white/0 z-20 rounded-bl-2xl shadow-lg">
          <div className="rounded-xl overflow-hidden w-full flex items-center justify-center">
            <Image
              src="/slider/slider/sagkutu.png"
              alt="Mega 1453"
              width={300}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
          <div
            className="rounded-xl bg-no-repeat bg-cover bg-center shadow-md h-[120px] mt-4 px-6 py-4 flex items-start w-full"
            style={{ backgroundImage: "url('/images/kutu-2.png')" }}
          >
            <div className="text-sm leading-tight">
              <p className="text-black font-medium">Paylaştıkça</p>
              <p className="text-red-600 font-semibold">Kazanırsın</p>
            </div>
          </div>
          <Link href="/kampanya" className="w-full">
            <button className="mt-4 bg-gradient-to-r from-red-600 to-orange-400 text-white py-4 px-4 rounded shadow-md text-sm font-medium w-full">
              +6 daha
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
