"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface SingleImagePopupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function SingleImagePopup({
  src,
  alt,
  width = 1080,
  height = 1080,
}: SingleImagePopupProps) {
  const [open, setOpen] = useState(false);
  const originalOverflowRef = useRef<string>("");

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowRef.current;
    }
    return () => {
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[5000] bg-black/50 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-fit max-w-[min(90vw,560px)] max-h-[90vh] select-none"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-20 text-white/90 bg-black/60 hover:bg-black/80 p-1 rounded-full transition-colors"
          aria-label="Kapat"
        >
          <X size={18} />
        </button>

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 560px) 90vw, 560px"
          className="block max-h-[90vh] max-w-full w-auto h-auto object-contain"
          priority
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
