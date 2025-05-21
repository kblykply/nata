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
    mobileBackground: '/slider/slider/BannerMobil.jpg',
    textColor: 'black',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    background: '/slider/slider/Banner2.jpg',
    mobileBackground: '/slider/slider/mobil2.jpg',
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
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Swiper - full width on mobile, 78% on desktop */}
      <div className="w-full md:w-[78%] h-full relative">
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
                  className="object-cover object-center"
                  priority
                />
                <div className="relative z-10 h-full w-full flex items-start pt-20 px-4 sm:px-6 md:px-12 lg:px-16">
                  <div
                    className={`max-w-xl space-y-6 ${
                      slide.textColor === 'white' ? 'text-white' : 'text-black'
                    }`}
                  >
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

      {/* Right-side Cards - hidden on mobile */}
      <div className="hidden md:flex flex-1 bg-white p-4 flex-col justify-end h-full">
        <div className="rounded-xl overflow-hidden w-full bg-white flex items-center justify-center">
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
