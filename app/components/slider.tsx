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
    background: string;
    textColor: 'white' | 'black';
    logoImage?: string;
    logoPosition?: string;
    titleImage?: string;
    titlePosition?: string;
  }

  const slides: SlideData[] = [
    {
      id: 1,
      background: '/sliderson/image1.jpg',
      textColor: 'black',
      logoImage: '/sliderson/logo.png',
      logoPosition: 'top-26 left-6',
      titleImage: '/sliderson/title1.png',
      titlePosition: 'top-70 left-1/2 -translate-x-1/2 -translate-y-1/2',
    },
    {
      id: 7,
      background: '/sliderson/image2.jpg',
      textColor: 'black',
      logoImage: '/sliderson/logo.png',
      logoPosition: 'bottom-6 left-6',
      titleImage: '/sliderson/title2.png',
      titlePosition: 'top-26 left-6',
    },
    {
      id: 8,
      background: '/sliderson/image3.jpg',
      textColor: 'black',
      logoImage: '/sliderson/logo.png',
      logoPosition: 'top-26 left-6',
      titleImage: '/sliderson/title3.png',
      titlePosition: 'bottom-6 left-1/2 -translate-x-1/2',
    },
    {
      id: 9,
      background: '/sliderson/image4.jpg',
      textColor: 'black',
      logoImage: '/sliderson/logo.png',
      logoPosition: 'top-26 left-6',
      titleImage: '/sliderson/title4.png',
      titlePosition: 'bottom-6 left-1/2 -translate-x-1/2',
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
      <div className="relative w-full h-[100vh]">
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
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover object-center pointer-events-none"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                  {slide.logoImage && (
                    <div
                      className={`absolute pointer-events-auto ${
                        slide.logoPosition || 'top-4 left-4 sm:top-6 sm:left-6'
                      }`}
                    >
                      <Image
                        src={slide.logoImage}
                        alt="Logo"
                        width={160}
                        height={80}
                        className="w-auto h-20 sm:h-22 md:h-26"
                      />
                    </div>
                  )}
                  {slide.titleImage && (
                    <div
                      className={`absolute pointer-events-auto ${
                        slide.titlePosition ||
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                      }`}
                    >
                      <Image
                        src={slide.titleImage}
                        alt="Title"
                        width={1000}
                        height={400}
  className="w-full max-w-[400  px] sm:max-w-[400px] md:max-w-[500px] h-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
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

        {/* Right Floating Card (Desktop Only) */}
        {!isMobile && (
          <div className="absolute top-0 right-0 h-full w-[320px] p-4 flex flex-col justify-end bg-white/0 z-20 rounded-bl-2xl ">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="rounded-xl overflow-hidden w-full flex items-center justify-center"
            >
              <SwiperSlide>
                <Image
                  src="/slider/slider/sagkutu.png"
                  alt="Mega 1453"
                  width={300}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/slider/slider/sagkutu2.png"
                  alt="Mega 1453 Slide 2"
                  width={300}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </SwiperSlide>
            </Swiper>

            <div
              className="rounded-xl bg-no-repeat bg-cover bg-center shadow-md h-[120px] mt-4 px-6 py-4 flex items-start w-full"
              style={{ backgroundImage: "url('/natakalp.png')" }}
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
