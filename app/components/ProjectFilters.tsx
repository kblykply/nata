"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Projects from "./projects"
export default function NewProjectsFilterSection() {
  const [activeTab, setActiveTab] = useState<"yeni" | "ikinci">("yeni");

  return (
    <div className=" max-w-screen-xl mx-auto px-6 py-6 bg-white rounded-2xl  space-y-5 font-sans">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800">
        Yeni projelerimiz{" "}
        <span className="text-[#ab1e3b] inline-flex items-center">
          Ankara
          <ChevronDown className="w-5 h-5 ml-1" />
        </span>
      </h2>

      {/* Tab Switcher */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setActiveTab("yeni")}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
            activeTab === "yeni"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          3287 Yeni Proje
        </button>
        <button
          onClick={() => setActiveTab("ikinci")}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
            activeTab === "ikinci"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          452 İkinci El
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {["Lokasyon", "Daire Tipi", "m² Alanı", "Fiyat"].map((item) => (
          <button
            key={item}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            {item}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        ))}

        <button className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-[#ab1e3b] font-medium">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Tüm Filtreler
        </button>
      </div>

     

      {/* Bottom Controls */}
      <div className="flex justify-between items-center text-sm mt-2">
        <button className="text-gray-500 hover:underline">
          Tüm filtreleri temizle
        </button>

        <div className="flex items-center gap-4">
          <button className="flex items-center px-4 py-2 rounded-full bg-gray-100">
            <Image
              src="/pin.png"
              alt="Haritada Gör"
              width={20}
              height={20}
              className="mr-2"
            />
            Haritada Gör
          </button>

          <button className="flex items-center text-gray-500">
            Varsayılan Olarak
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* 🔁 Dynamic Content Slot */}
      <div className="mt-4">
        {activeTab === "yeni" ? (
          <div>
            
            <Projects/>
          
          </div>
        ) : (
          <div>{/* 👉 Insert İkinci El content here */}</div>
        )}
      </div>
    </div>
  );
}
