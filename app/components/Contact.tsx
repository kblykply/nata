"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactQrSection() {
  const [selectedTab, setSelectedTab] = useState("whatsapp");

  const qrTabs = [
    { id: "whatsapp", icon: "/face-insta-wp-01.png", qr: "/nata-telefo-qr.png" },
    { id: "facebook", icon: "/face-insta-wp-02.png", qr: "/nata-facebook-qr.png" },
    { id: "instagram", icon: "/face-insta-wp-01.png", qr: "/nata-instagram-qr.png" },
  ];

  const activeQr = qrTabs.find(tab => tab.id === selectedTab)?.qr || "/default-qr.png";

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="bg-gradient-to-b from-[#3d313f] to-[#2b2230] rounded-3xl p-6 flex flex-col items-center text-white relative w-full max-w-sm mx-auto">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            {qrTabs.map((tab) => (
              <button
                key={tab.id}
                aria-label={`Switch to ${tab.id}`}
                onClick={() => setSelectedTab(tab.id)}
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  selectedTab === tab.id
                    ? "bg-white text-[#3d313f]"
                    : "bg-[#4b3b4e] hover:bg-[#5d4b5e]"
                }`}
              >
                <Image src={tab.icon} alt={tab.id} width={24} height={24} />
              </button>
            ))}
          </div>

          {/* Info Text */}
          <p className="text-center text-xs mb-4 leading-tight">
            Kamerayla QR Kodu Okutun,<br />
            Telefonunuz üzerinden iletişim kurabilirsiniz.<br />
          </p>

          {/* Phone Mockup */}
          <div className="relative w-64 h-96">
            <Image
              src="/telefongorseli.png"
              alt="Phone"
              fill
              className="object-contain"
            />
            <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 transition-all duration-300">
              <Image
                src={activeQr}
                alt={`${selectedTab} QR Code`}
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4 leading-snug">
            TUM SORULARINIZ IÇIN <br />BURADAYIZ
          </h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Bir çağrı talebinde bulunun.<br />
            Aklınızdaki sorular için buradayız.
          </p>

          {/* Toggle Buttons */}
       

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <input
              type="text"
              placeholder="Adınız ve Soyadınız"
              className="px-6 py-4 bg-gray-50 border text-gray-800 border-gray-300 rounded-full w-full md:w-1/2"
            />
            <input
              type="tel"
              placeholder="+90 (5__) ___ __ __"
              className="px-6 py-4 bg-gray-50 border text-gray-800 border-gray-300 rounded-full w-full md:w-1/2"
            />
          </div>

          {/* Privacy Note */}
          <p className="text-[11px] text-gray-500 text-center mb-6 leading-snug max-w-md mx-auto">
            Formu gönderdiğiniz takdirde <br />
            <span className="font-semibold">Gizlilik Politikalarımızı onaylamış bulunuyorsunuz</span>
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-[#c2b8be] text-white rounded-full text-sm hover:opacity-90 transition">
              Gönder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
