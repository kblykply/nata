"use client";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
 

interface NewProjectsProps {
  onClose: () => void;
}

interface NewProjectsProps {
    onClose: () => void;
  }
  
  export default function NewProjects({ onClose }: NewProjectsProps) {
    const [query, setQuery] = useState("");
  
    const projectList = [
        { name: "VEGA CENTER", href: "/vega-center" },
        { name: "GOAT VILLAS BILKENT", href: "/goat-villas" },
        { name: "MEGA 1453", href: "/mega-1453" },
        { name: "RAMS GARDEN BAHÇELİEVLER", href: "/rams-garden" },
        { name: "ANTARES KONUTLARI", href: "/anteres" },
        { name: "VEGA OTONOMİ", href: "/vega-otonomi" },
        { name: "MEGA ŞAŞMAZ", href: "/mega-sasmaz" },
        { name: "HİTYENİBATI", href: "/hityenibati" },
      ];
      
  
    const filteredResults = query
      ? projectList.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];




  return (
    <>
      {/* Overlay - BELOW Header */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
        onClick={onClose}
      />

      {/* Popup - ABOVE Overlay but BELOW Header */}
      <div className="fixed top-30 left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-3xl shadow-2xl  z-[95] overflow-hidden animate-fade-in">
{/* Header Section with search */}
<div className="relative px-6 pt-6">
  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13z" />
    </svg>

    <input
      type="text"
      placeholder="Lokasyon, teslim yılı veya segment seçin"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full bg-transparent text-sm outline-none"
    />

    <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {filteredResults.length > 0 && (
    <ul className="absolute left-6 right-6 top-[100%] mt-2 bg-white shadow-lg rounded-lg z-50">
      {filteredResults.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>

        {/* Main Content */}
        <div className="flex px-6 py-6 gap-6">
          {/* Left: Project Info */}
          <div className="w-1/2 flex flex-col justify-between">
  {/* Top Part */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">NATALife Business</h3>
    <p className="text-sm text-gray-700">Aktif Satışta Olan Projeler</p>
    <p className="text-sm text-gray-700">Çok Yakında Satışta</p>
  </div>

  {/* Bottom Part (Button) */}
  <button className="w-fit flex items-center gap-2 px-4 py-2 border rounded-xl text-[#6F1D1B] border-gray-300 font-semibold text-sm hover:bg-gray-100 transition">    <Image src="/redpin.png" alt="Map" width={16} height={16} />
  Haritadan Proje Seç
</button>
</div>


          {/* Right: Project Image */}
          <div className="relative w-200  rounded-xl overflow-hidden">
          <Image
  src="/nata-yeni-projeler-2.png"
  alt="Vega Center"
  width={10000}
  height={1000}
  className="object-none"
/>
        

        
          </div>
        </div>
      </div>
    </>
  );
}
