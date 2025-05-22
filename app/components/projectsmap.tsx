"use client";

import { useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaFire, FaTrain } from "react-icons/fa";
import { MarkerClusterer } from "@react-google-maps/api";
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
    coords: [41.00792, 28.88038],
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
    coords: [39.91392, 32.76720],
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
    coords: [39.85248, 32.75719],
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
    coords: [39.97231, 32.59874],
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
    coords: [39.94720, 32.77310],
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
    coords: [39.97105, 32.81907],
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
    coords: [39.98404, 32.65880],
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
    coords: [39.92855, 32.71991],
  },
];
const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function MapWithProjects() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const center = {
    lat: 39.9208,
    lng: 32.8541,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Harita yükleniyor...</div>;

  return (
    <div className="flex h-screen">
      {!selectedListing ? (
<aside className="hidden md:block w-[26rem] overflow-y-auto p-6 bg-white border-r border-gray-200 shadow-lg">          <div className="space-y-6">
            {listings.map((listing) => (
              <div
                key={listing.link}
                onClick={() => setSelectedListing(listing)}
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
                    {[...new Set([listing.label, listing.highlight])].map((tag, i) =>
                      tag ? (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            tag === listing.label
                              ? "bg-red-100 text-red-600"
                              : "border border-[#ab1e3b] text-[#ab1e3b]"
                          }`}
                        >
                          {tag === listing.label && <FaFire />} {tag}
                        </span>
                      ) : null
                    )}
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
       <GoogleMap
  mapContainerStyle={containerStyle}
  center={center}
  zoom={14}
  options={{
    styles: [
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          { color: "#faf5ed" },
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          { color: "#bae5a6" },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          { weight: 1.0 },
          { gamma: 1.8 },
          { saturation: 0 },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          { hue: "#ffb200" },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "transit.station.airport",
        elementType: "all",
        stylers: [
          { hue: "#b000ff" },
          { saturation: 23 },
          { lightness: -4 },
          { gamma: 0.8 },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          { color: "#a0daf2" },
        ],
      },
      {
  featureType: "poi",
  elementType: "labels.icon",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.business",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.park",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
}
    ],
    
  }}
>
<MarkerClusterer>
  {(clusterer) => (
    <>
      {listings
        .filter((listing) => listing.coords)
        .map((listing) => (
          <Marker
            key={listing.link}
            position={{ lat: listing.coords![0], lng: listing.coords![1] }}
            clusterer={clusterer}
            icon={{
              url: "/pin-red.png",
              scaledSize: new window.google.maps.Size(32, 32),
            }}
            onClick={() => {
              setSelectedListing(listing);
              setActiveMarker(listing.link);
            }}
          />
        ))}
    </>
  )}
</MarkerClusterer>


  {selectedListing && selectedListing.coords && (
    <InfoWindow
      position={{
        lat: selectedListing.coords[0],
        lng: selectedListing.coords[1],
      }}
      onCloseClick={() => setSelectedListing(null)}
    >
      <div className="text-sm">
        <h4 className="font-semibold">{selectedListing.price}</h4>
        <p>
          {selectedListing.metro} — {selectedListing.time}
        </p>
      </div>
    </InfoWindow>
  )}
</GoogleMap>
      </main>
    </div>
  );
}
