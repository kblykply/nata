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
  FaTimes,
} from "react-icons/fa";


const totalPages = 17;

export default function Magazine() {
  const pages = Array.from({ length: totalPages }, (_, i) => `/n-bulten-uc/page${i}.jpg`);
 const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [flipSize, setFlipSize] = useState({ width: 900, height: 1250 });

    const goNext = () => bookRef.current?.pageFlip().flipNext();
    const goPrev = () => bookRef.current?.pageFlip().flipPrev();

    const goFullscreen = () => {
      if (containerRef.current) {
        if (!document.fullscreenElement) {
          containerRef.current.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    const exitFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };

    const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setZoomLevel(parseFloat(e.target.value));
    };

    useEffect(() => {
      const updateSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const mobile = width < 768 || height < 600;
        setIsMobile(mobile);

        if (isFullscreen) {
          const scaleFactor = Math.min(width * 0.98, 1600);
          setFlipSize({
            width: scaleFactor,
            height: scaleFactor * 1.4,
          });
        } else {
          setFlipSize({
            width: mobile ? 400 : 900,
            height: mobile ? 600 : 1250,
          });
        }
      };

      const handleFullscreenChange = () => {
        const isFull = !!document.fullscreenElement;
        setIsFullscreen(isFull);
        setZoomLevel(isFull ? 1.1 : 1);
        updateSize();
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      document.addEventListener("fullscreenchange", handleFullscreenChange);

      return () => {
        window.removeEventListener("resize", updateSize);
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
      };
    }, [isFullscreen]);

    return (
      <>
        

        <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center relative">
          <div
            ref={containerRef}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
          >
            {/* === Flipbook === */}
            <div
              className="relative"
              style={{
                zoom: zoomLevel,
                transition: "zoom 0.3s ease",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                borderRadius: "16px",
              }}
            >
           <HTMLFlipBook
  width={flipSize.width}
  height={flipSize.height}
  size="stretch"
  minWidth={300}
  maxWidth={1800}
  minHeight={400}
  maxHeight={2400}
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
  style={{}} // ✅ Required even if empty
  startZIndex={0}
  autoSize={true}
  maxShadowOpacity={0.5}
  showPageCorners={true}
  mobileScrollSupport={true}
  // ✅ These fix the TypeScript error
  swipeDistance={30}
  disableFlipByClick={false}
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

            {/* === Controls Overlay === */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center gap-4 text-gray-700 z-[1000] border border-gray-200">
              <button onClick={goPrev} className="hover:text-blue-600 transition" title="Önceki Sayfa">
                <FaArrowLeft size={20} />
              </button>
              <button onClick={goNext} className="hover:text-blue-600 transition" title="Sonraki Sayfa">
                <FaArrowRight size={20} />
              </button>
              <label className="flex items-center gap-2 text-xs">
                🔍
                <input
                  type="range"
                  min="0.8"
                  max="2"
                  step="0.05"
                  value={zoomLevel}
                  onChange={handleZoomChange}
                  className="w-24 accent-blue-500"
                />
              </label>
              <button onClick={goFullscreen} className="hover:text-indigo-600 transition" title="Tam Ekran">
                <FaExpand size={20} />
              </button>
              <span className="text-sm text-gray-500 ml-2">
                📄 {page + 1} / {totalPages}
              </span>
            </div>

            {/* === ESC Button === */}
            {isFullscreen && (
              <button
                onClick={exitFullscreen}
                title="Tam Ekrandan Çık"
                className="fixed top-4 right-4 z-[1000] p-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:text-red-600 shadow-md"
              >
                <FaTimes size={18} />
              </button>
            )}
          </div>
        </main>
      </>
    );
  }
