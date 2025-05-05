"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

interface SimpleListing {
  title: string;
  price: string;
  currency: string;
  location: string;
  type: string;
  specs: string[];
  image: string;
  imageAlt: string;
}

interface SimpleListing {
  title: string;
  price: string;
  currency: string;
  location: string;
  type: string;
  specs: string[];
  image: string;
  imageAlt: string;
  link: string;
}

const listings: SimpleListing[] = [
    {
      title: "Koru Konfor",
      price: "10 Milyon",
      currency: "USD",
      location: "Etimesgut/Ankara",
      type: "Rezidans",
      specs: ["2+1", "117 m²", "1. Kat"],
      image: "/KORU KONFOR 5+1.png",
      imageAlt: "/koru-map.png",
      link: "/koru-konfor-20"
    },
    {
      title: "Natura İncek",
      price: "7.75 Milyon",
      currency: "TL",
      location: "Gölbaşı/Ankara",
      type: "Ofis",
      specs: ["2+1 Flat", "80 m²", "1. Bodrum Kat"],
      image: "/NATURA I╠çNCEK 2+1.png",
      imageAlt: "/natura-map.png",
      link: "/natura-incek"
    },
    {
      title: "Prime Oran",
      price: "16.8 Milyon",
      currency: "TL",
      location: "Çankaya/Ankara",
      type: "Rezidans",
      specs: ["2+1", "117 m²", "31. Kat"],
      image: "/PRIME ORAN 2+1 TI╠çPC16-D1_D2 BLOK.png",
      imageAlt: "/prime-map.png",
      link: "/prime-oran"
    },
    {
      title: "Koru Konfor",
      price: "7.75 Milyon",
      currency: "TL",
      location: "Etimesgut/Ankara",
      type: "Rezidans",
      specs: ["2+1", "80 m²", "1. Kat"],
      image: "/KORU KONFOR 5+1.png",
      imageAlt: "/koru-map.png",
      link: "/koru-konfor-20"
    },
    {
      title: "Natura İncek",
      price: "10 Milyon",
      currency: "USD",
      location: "Gölbaşı/Ankara",
      type: "Ofis",
      specs: ["3+1", "144 m²", "3. Kat"],
      image: "/NATURA I╠çNCEK 2+1.png",
      imageAlt: "/natura-map.png",
      link: "/natura-incek"
    },
    {
      title: "Koru Konfor",
      price: "10 Milyon",
      currency: "USD",
      location: "Etimesgut/Ankara",
      type: "Rezidans",
      specs: ["3+1", "144 m²", "3. Kat"],
      image: "/KORU KONFOR- 4+1.png",
      imageAlt: "/koru-map.png",
      link: "/koru-konfor-20"
    },
    {
      title: "Natura İncek",
      price: "10 Milyon",
      currency: "USD",
      location: "Gölbaşı/Ankara",
      type: "Ofis",
      specs: ["4+1", "154 m²", "4. Kat"],
      image: "/NATURA I╠çNCEK 2+1.png",
      imageAlt: "/natura-map.png",
      link: "/natura-incek"
    },
    {
      title: "Prime Oran",
      price: "14.2 Milyon",
      currency: "TL",
      location: "Çankaya/Ankara",
      type: "Rezidans",
      specs: ["3+1", "140 m²", "14. Kat"],
      image: "/PRIME ORAN 3+1 TI╠çPB2B-A1 BLOK.png",
      imageAlt: "/prime-map.png",
      link: "/prime-oran"
    }
  ];

const locations = ["Tümü", "Etimesgut/Ankara", "Gölbaşı/Ankara", "Çankaya/Ankara"];
const roomTypes = ["Tümü", "2+1", "3+1", "4+1"];
const areaRanges = ["Tümü", "<100", "100–130", ">130"];
const priceRanges = ["Tümü", "<10M", "10M–15M", ">15M"];

export default function FilteredListingCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("Tümü");
  const [selectedType, setSelectedType] = useState("Tümü");
  const [selectedArea, setSelectedArea] = useState("Tümü");
  const [selectedPrice, setSelectedPrice] = useState("Tümü");
  const [showAllFilters, setShowAllFilters] = useState(false);

  const resetFilters = () => {
    setSelectedLocation("Tümü");
    setSelectedType("Tümü");
    setSelectedArea("Tümü");
    setSelectedPrice("Tümü");
  };

  const filterListings = listings.filter((item) => {
    const [room, areaStr] = item.specs;
    const area = parseInt(areaStr.replace(" m²", ""));
    const priceVal = parseFloat(item.price);

    const locationMatch =
      selectedLocation === "Tümü" || item.location === selectedLocation;
    const typeMatch = selectedType === "Tümü" || room === selectedType;

    const areaMatch =
      selectedArea === "Tümü" ||
      (selectedArea === "<100" && area < 100) ||
      (selectedArea === "100–130" && area >= 100 && area <= 130) ||
      (selectedArea === ">130" && area > 130);

    const priceMatch =
      selectedPrice === "Tümü" ||
      (selectedPrice === "<10M" && priceVal < 10) ||
      (selectedPrice === "10M–15M" && priceVal >= 10 && priceVal <= 15) ||
      (selectedPrice === ">15M" && priceVal > 15);

    return locationMatch && typeMatch && areaMatch && priceMatch;
  });

  return (
    <section className="px-6 py-12 ">
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
        >
          {locations.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
        >
          {roomTypes.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
        >
          {areaRanges.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
        >
          {priceRanges.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <button
          onClick={() => setShowAllFilters(true)}
          className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-[#ab1e3b] font-medium"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Tüm Filtreler
        </button>
      </div>

      {/* Filter Modal */}
      {showAllFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-md p-6 rounded-xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setShowAllFilters(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Tüm Filtreler</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Lokasyon</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Daire Tipi</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">m² Alanı</label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {areaRanges.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Fiyat</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setShowAllFilters(false)}
                className="w-full mt-4 py-2 rounded-lg bg-[#ab1e3b] text-white text-sm font-medium"
              >
                Uygula
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex justify-between items-center text-sm mt-2 mb-6">
        <button
          onClick={resetFilters}
          className="text-gray-500 hover:underline"
        >
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
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterListings.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <a href={item.link} key={index} onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white shadow-md rounded-xl overflow-hidden relative transition duration-300"
            >
              <span className="absolute top-4 right-4 bg-[#ab1e3b] text-white text-xs px-4 py-1 rounded-full z-20">
                {item.type}
              </span>

              <div className="p-4 space-y-1 z-20 relative">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-md font-medium text-gray-800">
                  {item.price} <span className="text-sm text-gray-500">{item.currency}</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs text-gray-500" />
                  {item.location}
                </p>

                <div className="flex gap-2 flex-wrap mt-2">
                  {item.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 border px-3 py-1 rounded-full text-gray-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full h-70 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={item.imageAlt}
                  alt={`${item.title} Map`}
                  fill
                  className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="absolute bottom-3 right-3 z-20">
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-sm">
                  ♥
                </div>
              </div>
            </a> );
        })}
      </div>
    </section>
  );
}
