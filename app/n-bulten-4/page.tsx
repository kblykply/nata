"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import {
  FaExpand,
  FaCompress,
  FaSearchPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const totalPages = 45;

export default function Magazine() {
  const folder = "/n-bulten-4";
  const pages = [
    `${folder}/0-Kapak.jpg`,
    ...Array.from({ length: 19 }, (_, i) => `${folder}/${i + 1}.jpg`),
  ];

     const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();
  const toggleZoom = () => setZoomed((z) => !z);

  const goFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768 || height < 600);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <Head>
        <title>Dijital Dergi</title>
        <meta name="description" content="Dijital derginizi çevrimiçi okuyun" />
      </Head>

      <main
        className="min-h-screen w-full bg-white flex flex-col items-center justify-center relative"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* === Flipbook Container === */}
        <div
          ref={containerRef}
          className="transition-transform duration-300 ease-in-out origin-center"
          style={{
            transform: zoomed ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          <div
            className="rounded-xl"
            style={{
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              borderRadius: "16px",
            }}
          >
            <HTMLFlipBook
              width={isMobile ? 400 : 900}
              height={isMobile ? 600 : 1200}
              size="stretch"
              minWidth={300}
              maxWidth={1600}
              minHeight={400}
              maxHeight={1600}
              showCover={false}
              flippingTime={700}
              drawShadow={true}
              useMouseEvents={true}
              clickEventForward={true}
              usePortrait={isMobile}
              startPage={0}
              className="rounded-xl overflow-hidden"
              onFlip={(e) => setPage(e.data)}
              ref={bookRef}
            >
              {pages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-full"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Image
                    src={src}
                    alt={`Sayfa ${index}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>

        {/* === Control Panel === */}
        <div className="fixed bottom-6 bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center gap-4 text-gray-700 z-50 border border-gray-200">
          <button onClick={goPrev} className="hover:text-blue-600 transition" title="Önceki Sayfa">
            <FaArrowLeft size={20} />
          </button>
          <button onClick={goNext} className="hover:text-blue-600 transition" title="Sonraki Sayfa">
            <FaArrowRight size={20} />
          </button>
          <button onClick={toggleZoom} className="hover:text-green-600 transition" title={zoomed ? "Zoom Out" : "Zoom In"}>
            {zoomed ? <FaCompress size={20} /> : <FaSearchPlus size={20} />}
          </button>
          <button onClick={goFullscreen} className="hover:text-indigo-600 transition" title="Tam Ekran">
            <FaExpand size={20} />
          </button>
          <span className="text-sm text-gray-500 ml-2">
            📄 {page + 1} / {totalPages}
          </span>
        </div>
      </main>
    </>
  );
}
