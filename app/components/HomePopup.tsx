"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function HomePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const originalOverflowRef = useRef<string>("");

  // Slides
  const SLIDES: Slide[] = [
    { src: "/nata-tr-popup.jpg", alt: "Kampanya - TR" },
    { src: "/natayasamkampanya.jpg", alt: "Campaign - EN" },
  ];

  // Aspect ratios (height / width) per slide; filled after preload
  const [ratios, setRatios] = useState<number[]>(
    Array(SLIDES.length).fill(9 / 16) // default fallback
  );

  // Open on mount
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // Lock/unlock body scroll tied to showPopup
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (showPopup) {
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowRef.current;
    }
    return () => {
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, [showPopup]);

  // Preload images for natural aspect ratios
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const results = await Promise.all(
        SLIDES.map(
          (s) =>
            new Promise<number>((resolve) => {
              const img = new window.Image();
              img.src = s.src;
              img.onload = () => {
                const r =
                  img.naturalWidth > 0
                    ? img.naturalHeight / img.naturalWidth
                    : 9 / 16;
                resolve(r);
              };
              img.onerror = () => resolve(9 / 16);
            })
        )
      );
      if (!cancelled) setRatios(results);
    };
    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Measure width (for precise translate) + sync on resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      widthRef.current = containerRef.current.offsetWidth || 0;
      const base = -index * widthRef.current;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translate3d(${Math.round(base)}px,0,0)`;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  // Auto-slide (no dragging)
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!showPopup) return;

    if (!paused) {
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [showPopup, paused, index]);

  // Close on Esc
  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPopup]);

  // Sync when index changes
  useEffect(() => {
    if (!trackRef.current) return;
    const width = widthRef.current || containerRef.current?.offsetWidth || 0;
    const base = -index * width;
    trackRef.current.style.transform = `translate3d(${Math.round(base)}px,0,0)`;
    trackRef.current.style.transition = "transform 400ms ease-out";
  }, [index]);

  const handleClose = () => setShowPopup(false);

  // Dynamic height for each slide (so whole image is visible, different sizes allowed)
  const containerWidth =
    widthRef.current || containerRef.current?.offsetWidth || 0;
  const ratio = ratios[index] ?? 9 / 16;
  const minH = 320;
  const maxH = Math.min(
    720,
    Math.floor(
      (typeof window !== "undefined" ? window.innerHeight : 900) * 0.9
    )
  );
  const targetH =
    Math.max(minH, Math.min(maxH, Math.round(containerWidth * ratio))) || 420;

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 z-[5000] bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Promosyon"
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-[min(90vw,560px)] select-none"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 text-white/90 bg-black/60 hover:bg-black/80 p-1 rounded-full"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>

            {/* Media area: dynamic height per slide */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden transition-[height] duration-300 ease-out bg-black/5"
              style={{ height: targetH }}
            >
              {/* Track */}
              <div
                ref={trackRef}
                className="flex h-full cursor-default touch-pan-y will-change-transform"
                style={{ transform: "translate3d(0px,0,0)" }}
                aria-roledescription="carousel"
                aria-label="Popup slider"
              >
                {SLIDES.map((s, i) => (
                  <div key={i} className="relative h-full flex-[0_0_100%]">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 560px) 90vw, 560px"
                      className="object-contain pointer-events-none select-none no-drag bg-white"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      index === i ? "w-6 bg-black/90" : "w-2 bg-black/60"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
