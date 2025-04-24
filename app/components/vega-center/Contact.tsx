"use client";

import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";

export default function ContactQrSection() {
  const qrTabs = [
    { name: "WhatsApp", qr: "/qr.png", icon: "/whatsapp.png" },
    { name: "Instagram", qr: "/qr.png", icon: "/instagram.png" },
    { name: "Facebook", qr: "/qr.png", icon: "/facebook.png" }
  ];

  return (
    <section className="py-24 px-6 text-gray-800 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - QR with Tabs */}
        <div className="relative">
          <Tab.Group>
            <Tab.List className="flex space-x-4 mb-6 justify-center">
              {qrTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `flex items-center justify-center w-12 h-12 rounded-full transition shadow-md ${
                      selected ? "bg-gradient-to-r from-[#9F1C33] to-[#6B0F1A]" : "bg-gray-500 hover:bg-gray-200"
                    }`
                  }
                  title={tab.name}
                >
                  <Image src={tab.icon} alt={`${tab.name} icon`} width={24} height={24} />
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="relative h-[260px]">
              {qrTabs.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  className="absolute inset-0 flex justify-center items-center transition-opacity duration-500 ease-in-out opacity-0 data-[headlessui-state=selected]:opacity-100"
                >
                  <Image
                    src={tab.qr}
                    alt={`${tab.name} QR`}
                    width={240}
                    height={240}
                    className="rounded-xl object-contain drop-shadow-xl transform transition-transform duration-500 hover:scale-105"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900 tracking-tight">Sizi Arayalım<br />VE STATÜYE GÖRE</h3>
          <p className="text-sm text-gray-600 mb-8">Bir talep bırakın ve tüm sorularınızı cevaplayalım.</p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Adınız"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9F1C33] bg-gray-50 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(5xx) xxx xx xx"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9F1C33] bg-gray-50 placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#9F1C33] to-[#6B0F1A] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
