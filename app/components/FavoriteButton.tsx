'use client';

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function FavoriteButton() {
  const [showPing, setShowPing] = useState(false);

  const handleClick = () => {
    setShowPing(true);
    setTimeout(() => setShowPing(false), 1000);
  };

  return (   

  <Link
    href="/favorites"
    onClick={handleClick}
    className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center relative"
  >
    {/* Ping animation */}
    {showPing && (
      <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75 animate-ping"></span>
    )}

    {/* Icon (smaller than background) */}
    <Image
      src="/favori icon.png"
      alt="Favori"
      width={20}
      height={20}
      className="z-10"
    />
  </Link>


  );
}
