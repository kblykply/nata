  "use client";

  import { useState, useEffect } from "react";
  import { motion, useMotionValue, useAnimation } from "framer-motion";
  import Image from "next/image";

  const slides = [
    {
      title: "Yaşam Nerede Biz Orada.",
      description: "Ticari alanlarda sınırlı sayıda fırsat! Kampanya dönemine özel avantajlarla şimdi Vega Center’da yerinizi ayırtın.",
      backgroundImage: "/vega-center-03.jpg",
      overlayStats: [
        { number: "339", label: "Ofis" },
        { number: "87", label: "Ticari Alan" },
        { number: "1,182", label: "Otopark" },
      ],
      promoCard: {
        title: "Prestijli lokasyon modern mimari",
        features: ["Yüksek yaya trafiği", "Kurumsal markalar", "Ofis + mağaza + yaşam konsepti"],
        image: "/adam2.png",
      },
    },
    {
      title: "Hayalinizdeki Proje Burada.",
      description: "Ankara’nın kalbinde yeni yaşam alanları. Şimdi yerinizi ayırtın, avantajları kaçırmayın.",
      backgroundImage: "/goat-villas-bilkent-4.jpg",
      overlayStats: [
        { number: "120", label: "Daire" },
        { number: "40", label: "Dükkan" },
        { number: "900", label: "Otopark" },
      ],
      promoCard: {
        title: "Modern ve Konforlu Yaşam",
        features: ["Doğayla iç içe mimari", "Yüksek güvenlik", "Sosyal alanlar"],
        image: "/Nature.png",
      },
    },
  ];

  export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const dragX = useMotionValue(0);

    // Animate on slide change
    useEffect(() => {
      controls.start({
        x: `-${currentIndex * 100}%`,
        transition: { type: "spring", stiffness: 200, damping: 30 },
      });
    }, [currentIndex]);

    // Auto slide every 8 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 8000);
      return () => clearInterval(interval);
    }, []);

    const handleDragEnd = (_: any, info: any) => {
      const threshold = 100;
      if (info.offset.x < -threshold && currentIndex < slides.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (info.offset.x > threshold && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      dragX.set(0);
    };

    return (
      <section className="relative w-full h-screen text-white overflow-hidden">
        {/* Transparent Drag Layer */}
        <motion.div
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          onDragEnd={handleDragEnd}
        />

        {/* Slide Track */}
        <motion.div className="flex h-full w-full relative z-0" animate={controls}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-full h-screen flex-shrink-0"
              style={{ flex: "0 0 100%" }}
            >
              <Image
                src={slide.backgroundImage}
                alt={`Slide ${idx}`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          ))}
        </motion.div>

        {/* Shadow Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Promo Card */}
        <div className="absolute right-10 top-10 bg-white rounded-xl overflow-hidden w-[300px] shadow-lg z-20 flex flex-col items-start">
          <div className="relative w-full h-[380px]">
            <Image
              src={slides[currentIndex].promoCard.image}
              alt="Promo Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-4 left-4 right-4 text-white z-10">
              <h2 className="text-lg font-semibold mb-2">{slides[currentIndex].promoCard.title}</h2>
              <ul className="text-sm mb-2 space-y-1">
                {slides[currentIndex].promoCard.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Left Side Text */}
        <div className="absolute left-10 bottom-10 z-20 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="mt-4 text-lg text-white/90">
            {slides[currentIndex].description}
          </p>
          <div className="mt-6 flex gap-8 text-white text-lg">
            {slides[currentIndex].overlayStats.map((stat, idx) => (
              <div key={idx} className="font-light">
                <span className="font-bold text-2xl md:text-3xl">{stat.number}</span>{" "}
                {stat.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Right Cards */}
        <div className="absolute right-10 bottom-28 bg-white rounded-xl shadow-lg w-[300px] h-[150px] px-4 py-3 text-black z-20">
          <h2 className="text-lg font-semibold">Vega Center</h2>
          <p className="text-sm">Ankara'nın kalbinde yeni yaşam alanları.</p>
        </div>
        <div className="absolute right-10 bottom-10 bg-gradient-to-r from-[#9F1C33] to-[#ED6230] rounded-xl w-[300px] h-[60px] px-4 py-2 text-white font-semibold flex items-center z-20">
          <div>
            <h2 className="text-lg">Kampanya Dönemi</h2>
            <p className="text-sm">Avantajları kaçırmayın.</p>
          </div>
        </div>
      </section>
    );
  }
