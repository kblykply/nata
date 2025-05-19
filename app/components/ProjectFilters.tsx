  "use client";
  import { useState } from "react";
  import Image from "next/image";
  import { ChevronDown, SlidersHorizontal } from "lucide-react";
  import Projects from "./projects"
  import Ikıncı from "./ikinciel"
  import IstanbulProjects from "./IstanbulProjects";

  export default function NewProjectsFilterSection() {
    const [activeTab, setActiveTab] = useState<"yeni" | "ikinci">("yeni");
    const [selectedCity, setSelectedCity] = useState("Ankara");
const [showCityMenu, setShowCityMenu] = useState(false);

    return (
<div className="relative max-w-screen-xl mx-auto px-6 py-6 bg-white rounded-2xl space-y-5 font-sans">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Yeni projelerimiz{" "}
         <span
  className="text-[#ab1e3b] inline-flex items-center cursor-pointer relative"
  onClick={() => setShowCityMenu(!showCityMenu)}
>
  {selectedCity}
  <ChevronDown className="w-5 h-5 ml-1" />
</span>
        </h2>
      {showCityMenu && (
  <div className="absolute top-[60px] left-[450px] z-50 bg-white rounded-xl shadow-xl  w-44 py-2">

    {["Ankara", "İstanbul"].map((city) => (
      <div
  key={city}
  onClick={() => {
    setSelectedCity(city);
    setShowCityMenu(false);
  }}
  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
    selectedCity === city ? "text-[#ab1e3b] font-semibold" : "text-gray-700"
  }`}
>
  {city}
</div>

    ))}
  </div>
)}

        {/* Tab Switcher */}
        {selectedCity === "Ankara" ? (
  <>
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

    {/* Dynamic Ankara Content */}
    <div className="mt-4">
      {activeTab === "yeni" ? <Projects /> : <Ikıncı />}
    </div>
  </>
) : (
  // 👉 Istanbul content
  <div className="mt-4">
    <IstanbulProjects />
  </div>
)}

      </div>
    );
  }
