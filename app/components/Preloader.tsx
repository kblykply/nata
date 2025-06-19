"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsFadingOut(false);

    const timer = setTimeout(() => {
      setIsFadingOut(true);

      // Fully remove from DOM after fade animation
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // match transition duration
    }, 1000); // how long loader stays before fade starts

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/navbarLogo.png"
        alt="Loading"
        width={220}
        height={220}
        className="animate-pulse"
      />
    </div>
  );
}
