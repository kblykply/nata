"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function HomePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const originalOverflowRef = useRef<string>("");

  // Drag state
  const dragStartXRef = useRef(0);
  const dragLastXRef = useRef(0);
  const dragStartTimeRef = useRef(0);
  const dragDeltaRef = useRef(0);
  const baseXRef = useRef(0); // base translate at gesture start

  // Slides
  const SLIDES: Slide[] = [
    { src: "/natayasamkampanya.jpg", alt: "Campaign - EN" },
    { src: "/nata-tr-popup.jpg", alt: "Kampanya - TR" },
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
      baseXRef.current = base;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  // Auto-slide
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!showPopup) return;

    // don't autoplay while dragging or paused (hover)
    if (!paused && !dragging) {
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
      }, 10000);
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [showPopup, paused, dragging]);

  // Close on Esc
  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPopup, index]);

  // Sync when index changes (programmatic changes)
  useEffect(() => {
    if (!trackRef.current) return;
    const width = widthRef.current || containerRef.current?.offsetWidth || 0;
    const base = -index * width;
    trackRef.current.style.transition = "transform 400ms ease-out";
    trackRef.current.style.transform = `translate3d(${Math.round(base)}px,0,0)`;
    baseXRef.current = base;
  }, [index]);

  const goTo = (i: number) => {
    const next = (i + SLIDES.length) % SLIDES.length;
    setIndex(next);
  };

  // ----- Drag handlers (Pointer Events) -----
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current || !containerRef.current) return;
    setPaused(true); // pause while interacting
    setDragging(true);

    // capture pointer to keep receiving move/up outside element
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);

    dragStartXRef.current = e.clientX;
    dragLastXRef.current = e.clientX;
    dragStartTimeRef.current = performance.now();
    dragDeltaRef.current = 0;

    widthRef.current = containerRef.current.offsetWidth || 0;
    const base = -index * widthRef.current;
    baseXRef.current = base;

    trackRef.current.style.transition = "none";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !trackRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    dragDeltaRef.current = dx;
    dragLastXRef.current = e.clientX;

    // Add small resistance at edges
    const w = widthRef.current || 1;
    const atFirst = index === 0;
    const atLast = index === SLIDES.length - 1;
    let offset = dx;

    if ((atFirst && dx > 0) || (atLast && dx < 0)) {
      const sign = dx > 0 ? 1 : -1;
      offset = sign * (Math.abs(dx) ** 0.85); // gentle rubberband
    }

    const x = baseXRef.current + offset;
    trackRef.current.style.transform = `translate3d(${Math.round(x)}px,0,0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !trackRef.current) return;
    setDragging(false);
    setPaused(false);

    // release pointer
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      /* nop */
    }

    const w = widthRef.current || containerRef.current?.offsetWidth || 1;
    const dx = dragDeltaRef.current;
    const dt = Math.max(1, performance.now() - dragStartTimeRef.current);
    const vx = dx / dt; // px per ms

    const THRESHOLD = Math.min(0.18 * w, 240); // distance threshold
    const FLICK_VELOCITY = 0.6 / 1000; // px per ms (≈0.6px/ms)

    let next = index;

    // decide by distance or flick
    if (Math.abs(dx) > THRESHOLD || Math.abs(vx) > FLICK_VELOCITY) {
      if (dx < 0 && index < SLIDES.length - 1) next = index + 1;
      if (dx > 0 && index > 0) next = index - 1;
      // allow wrap if you prefer:
      // if (dx < 0) next = (index + 1) % SLIDES.length;
      // if (dx > 0) next = (index - 1 + SLIDES.length) % SLIDES.length;
    }

    // snap
    setIndex(next);
  };

  const handleClose = () => setShowPopup(false);

  // Dynamic height for each slide (so whole image is visible, different sizes allowed)
  const containerWidth =
    widthRef.current || containerRef.current?.offsetWidth || 0;
  const ratio = ratios[index] ?? 9 / 16;
  const minH = 320;
  const maxH = Math.min(
    720,
    Math.floor((typeof window !== "undefined" ? window.innerHeight : 900) * 0.9)
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
            onMouseLeave={() => !dragging && setPaused(false)}
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
              className="relative w-full overflow-hidden transition-[height] duration-300 ease-out bg-black/5 touch-pan-y"
              style={{ height: targetH }}
            >
              {/* Track */}
              <div
                ref={trackRef}
                className="flex h-full cursor-grab active:cursor-grabbing will-change-transform select-none"
                style={{ transform: "translate3d(0px,0,0)" }}
                aria-roledescription="carousel"
                aria-label="Popup slider"
                // Pointer Events for drag
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
              >
                {SLIDES.map((s, i) => (
                  <div key={i} className="relative h-full flex-[0_0_100%] bg-white">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 560px) 90vw, 560px"
                      className="object-contain pointer-events-none select-none"
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
