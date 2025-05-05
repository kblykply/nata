"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Projects from "./projects"
import Ikıncı from "./ikinciel"
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

     
      {/* 🔁 Dynamic Content Slot */}
      <div className="mt-4">
        {activeTab === "yeni" ? (
          <div>
            
            <Projects/>
          
          </div>
        ) : (
          <div>{/* 👉 Insert İkinci El content here */}
          <Ikıncı/>
          
          
          </div>
        )}
      </div>
    </div>
  );
}
