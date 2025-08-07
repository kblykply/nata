"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function HomePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  const handleClose = () => setShowPopup(false);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={handleClose} // ← Click outside
    >
      <div
        className="relative bg-white rounded-xl overflow-hidden shadow-xl max-w-md w-[90%]"
        onClick={(e) => e.stopPropagation()} // ← Prevent close when clicking inside
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-black/80 p-1 rounded-full"
        >
          <X size={18} />
        </button>

        <Image
          src="/nata-tr-popup.jpg"
          alt="Kampanya"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
