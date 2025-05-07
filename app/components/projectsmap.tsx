"use client";

import { useState, useRef } from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FaFire, FaTrain } from "react-icons/fa";

interface Listing {
  link: string;
  type: "standard" | "featured";
  price: string;
  label?: string;
  metro: string;
  time: string;
  stats?: string[];
  footer?: string;
  image: string;
  imageAlt?: string;
  highlight?: string;
  extra?: {
    icon: string;
    label: string;
  }[];
  coords?: [number, number];
}

const listings: Listing[] = [
  {
    link: "/rams-garden",
    type: "standard",
    price: "RAMS GARDEN",
    label: "Hemen Teslim",
    metro: "Haznedar Metro",
    time: "9 dakika mesafede",
    stats: ["8.815 m²", "796 daire"],
    footer: "Bahçelievler",
    image: "/RAMS GARDEN - ON.jpg",
    imageAlt: "/RAMS GARDEN - ARKA.jpg",
    highlight: "",
    extra: [],
    coords: [40.9934, 28.8648],
  },
  {
    link: "/vega-center",
    type: "featured",
    price: "VEGA CENTER",
    label: "",
    metro: "Bilkent Metro",
    time: "5 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/VEGA CENTER - ON.jpg",
    imageAlt: "/VEGA CENTER - MAP.jpg",
    highlight: "2025 Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Açık Avm Konsepti" },
      { icon: "", label: "Business Class" },
    ],
    coords: [39.9097, 32.8604],
  },
  {
    link: "/goat-villas",
    type: "standard",
    price: "GOAT VILLAS Bilkent",
    label: "2025 Teslim",
    metro: "Bahçe Konutları",
    time: "5 dakikada mesafede",
    stats: ["3. Çeyrek 2025", "Villa Projesi"],
    footer: "Bilkent",
    image: "/GOAT VILLAS BİLKENT-ON.jpg",
    imageAlt: "/GOAT VILLAS BİLKENT-ARKA.jpg",
    highlight: "",
    extra: [],
    coords: [39.8636, 32.7491],
  },
  {
    link: "/vega-otonomi",
    type: "standard",
    price: "VEGA OTONOMI",
    label: "Hemen Teslim",
    metro: "Fatih Metro",
    time: "4 dakika mesafede",
    stats: ["490m² ye kadar", "207 bölüm"],
    footer: "Plevne",
    image: "/OTONOMI - ON.jpg",
    imageAlt: "/OTONOMI - ARKA.jpg",
    highlight: "",
    extra: [],
    coords: [39.9482, 32.8533],
  },
  {
    link: "/mega-1453",
    type: "featured",
    price: "MEGA 1453",
    label: "",
    metro: "Hastane Metro",
    time: "11 dakika mesafede",
    stats: ["70.000 m²", "715 konut"],
    footer: "Yenimahalle",
    image: "/MEGA 1453 - ON.jpg",
    imageAlt: "/MEGA 1453 - MAP.jpg",
    highlight: "2026 Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Rezidans Projesi" },
      { icon: "", label: "Ulaşım Imkanları" },
    ],
    coords: [39.9750, 32.7545],
  },
  {
    link: "/anteres",
    type: "standard",
    price: "ANTARES KONUTLARI",
    label: "Hemen Teslim",
    metro: "Yenimahalle Metro",
    time: "11 dakikada mesafede",
    stats: ["3. Çeyrek 2025", "Villa Projesi"],
    footer: "Bilkent",
    image: "/ANTARES KONUTLARI-ON.jpg",
    imageAlt: "/ANTARES KONUTLARI-ARKA.jpg",
    highlight: "Hemen Teslim",
    extra: [
      { icon: "", label: "90 Konut" },
      { icon: "", label: "52.515 ₺ / ay" },
      { icon: "", label: "İş & Yaşam" },
    ],
    coords: [39.9811, 32.7532],
  },
  {
    link: "/hityenibati",
    type: "standard",
    price: "HİTYENİBATI",
    label: "2025 Teslim",
    metro: "İstanbul Yolu Metro",
    time: "8 dakikada mesafede",
    stats: ["1+1 ve 2,5+1 daireler", "190 adet konut"],
    footer: "Bilkent",
    image: "/HİTYENİBATI-ON.jpg",
    imageAlt: "/HİTYENİBATI-ARKA.jpg",
    highlight: "",
    extra: [],
    coords: [39.9685, 32.7349],
  },
  {
    link: "/mega-sasmaz",
    type: "featured",
    price: "MEGA ŞAŞMAZ",
    label: "Hemen Teslim",
    metro: "Ümitköy Metro",
    time: "8 dakika mesafede",
    stats: ["160.000 m2", "700 bölüm"],
    footer: "Şaşmaz",
    image: "/MEGA SASMAZ - ON.jpg",
    imageAlt: "/MEGA SASMAZ - MAP.jpg",
    highlight: "Hemen Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Sanayi Bölgesi" },
      { icon: "", label: "Business Class" },
    ],
    coords: [39.9379, 32.7075],
  },
];

export default function MapWithProjects() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const mapRef = useRef<any>(null);

  const handleSelectListing = (listing: Listing) => {
    setSelectedListing(listing);
    if (mapRef.current && listing.coords) {
      mapRef.current.setCenter(listing.coords, 15, {
        duration: 500,
      });
    }
  };

  return (
    <div className="flex h-screen">
      {!selectedListing ? (
        <aside className="w-[26rem] overflow-y-auto p-6 bg-white border-r border-gray-200 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tüm Projeler</h2>
          <div className="space-y-6">
            {listings.map((listing) => (
              <div
                key={listing.link}
                onClick={() => handleSelectListing(listing)}
                className="group cursor-pointer flex items-center gap-4 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition bg-white"
              >
                <img
  src={listing.image}
  alt={listing.price}
  className="w-32 h-28 object-cover aspect-video rounded-l-xl"
/>
                <div className="flex flex-col py-2 pr-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    {listing.price}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaTrain className="text-gray-500" /> {listing.metro} — {listing.time}
                  </p>
                  {listing.footer && (
                    <p className="text-xs text-gray-500">📍 {listing.footer}</p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
  {[...new Set([listing.label, listing.highlight])].map((tag, i) => (
    tag ? (
      <span
        key={i}
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${tag === listing.label ? 'bg-red-100 text-red-600' : 'border border-[#ab1e3b] text-[#ab1e3b]'}`}
      >
        {tag === listing.label && <FaFire />} {tag}
      </span>
    ) : null
  ))}
</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      ) : (
        <aside className="w-[30rem] overflow-y-auto bg-white p-6 border-r border-gray-200 shadow-xl">
          <button
            className="text-sm text-gray-400 mb-4 underline"
            onClick={() => setSelectedListing(null)}
          >
            ← Geri dön
          </button>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {selectedListing.price}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <FaTrain className="text-gray-500" /> {selectedListing.metro} — {selectedListing.time}
          </div>
          <div className="flex items-center gap-2 flex-wrap text-xs mb-4">
            {selectedListing.highlight && (
              <span className="text-[#ab1e3b] border border-[#ab1e3b] px-2 py-0.5 rounded-full font-semibold">
                {selectedListing.highlight}
              </span>
            )}
            {selectedListing.stats?.map((stat, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
              >
                {stat}
              </span>
            ))}
          </div>
          <img
            src={selectedListing.image}
            alt={selectedListing.price}
            className="rounded-xl mb-4 w-full h-52 object-cover"
          />
          <a
  href={selectedListing.link}
  className="w-full block text-center py-3 mt-4 bg-[#ab1e3b] hover:bg-red-700 text-white rounded-xl text-sm font-semibold"
>
  Projeyi Gör
</a>
        </aside>
      )}

      <main className="flex-1">
        <YMaps>
          <Map
            defaultState={{ center: [39.9208, 32.8541], zoom: 10 }}
            width="100%"
            height="100%"
            instanceRef={(ref) => (mapRef.current = ref)}
          >
            {listings.map((listing) =>
              listing.coords ? (
                <Placemark
                key={listing.link}
                geometry={listing.coords}
                onClick={() => handleSelectListing(listing)}
                options={{ preset: 'islands#redIcon' }}
              />
              ) : null
            )}
          </Map>
        </YMaps>
      </main>
    </div>
  );
}
