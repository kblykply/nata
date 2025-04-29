"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface ContactMapPopupProps {
  onClose: () => void;
}

export default function ContactMapPopup({ onClose }: ContactMapPopupProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="fixed top-30 left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-3xl shadow-xl z-[95] overflow-hidden flex animate-fade-in">
        {/* Left Side - Form */}
        <div className="w-1/2 p-10 space-y-4 bg-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <input
            type="text"
            placeholder="İsim Soyisim"
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <textarea
            placeholder="Mesajınız"
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm h-24 placeholder:text-gray-500"
          />
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <label className="text-xs text-gray-800">
              KVKK koşullarını kabul ediyorum.
            </label>
          </div>

          <button className="w-full bg-gray-100 text-sm font-semibold py-2 rounded-sm hover:bg-gray-200 transition">
            GÖNDER
          </button>

          <div className="mt-8 text-sm text-black space-y-1">
           

            <button className="mt-4 px-4 py-2 border border-gray-300 rounded-xl font-medium text-sm hover:bg-gray-50 transition">
              Satış ofisiyle görüşme planlayın
            </button>
          </div>
        </div>

        {/* Right Side - Map & Info */}
        <div className="w-1/2  relative p-4 space-5">
          <Image
            src="/map-image.png"
            alt="Map"
            fill
            className="object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute top-6 right-6 w-[260px] bg-white rounded-xl shadow-md p-3 text-xs space-y-1">
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
              <Image src="/iletisim-gorsel.png" alt="Building" fill className="object-cover" />
            </div>
            <p className="font-medium">Mustafa Kemal Mah. 2127 Cad. No:21, Çankaya - ANKARA</p>
            <p className="text-black font-semibold">+90 321 321 32 12</p>
            <p className="text-gray-500">8:30 AM - 18:30 PM All Week</p>
          </div>
        </div>
      </div>
    </>
  );
}
