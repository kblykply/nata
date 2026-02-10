"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFire, FaTrain } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { useTranslations } from "next-intl";

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
  city?: "Ankara" | "İstanbul";
  district?: string;
  productType?: ("Konut" | "Ofis" | "Ticari" | "Villa")[];
  deliveryStatus?: string;
}

// Helper functions
const getProductTypeFromListing = (listing: Omit<Listing, 'productType' | 'city' | 'district' | 'deliveryStatus'>): "Konut" | "Ofis" | "Ticari" | "Villa" => {
  const statsText = listing.stats?.join(" ").toLowerCase() || "";
  const extraText = listing.extra?.map(e => e.label).join(" ").toLowerCase() || "";
  const combinedText = `${statsText} ${extraText}`;

  if (combinedText.includes("villa")) {
    return "Villa";
  }
  if (combinedText.includes("ofis") || combinedText.includes("açık avm ve ofis")) {
    return "Ofis";
  }
  if (combinedText.includes("ticari")) {
    return "Ticari";
  }
  return "Konut";
};

const getDistrictsByCity = (city: string, listings: Listing[]): string[] => {
  return Array.from(
    new Set(
      listings
        .filter((item) => item.city === city && item.district)
        .map((item) => item.district!)
    )
  ).sort();
};


const listings: Listing[] = [

  
  {
    link: "/anteres",
    type: "featured",
    price: "ANTARES KONUTLARI 1. ETAP",
    highlight : "Tamamlandı",
    metro: "Otobüs Durağına ",
    time: "2",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/r-antares-1.jpg",
    imageAlt: "/r-antares-1.jpg",
    extra: [
      { icon: "", label: "840 Daire" },
      { icon: "", label: "AVM Yanında" },
      { icon: "", label: "YHT Garı'na 5 dakika uzaklık" },
    ],
    city: "Ankara",
    district: "Yenimahalle",
    productType: ["Ticari"],
    deliveryStatus: "Tamamlandı",
  },
  {
    link: "/vega-cadde",
    type: "featured",
    price: "VEGA CADDE",
    highlight : "Tamamlandı",
    metro: "Metro Durağına ",
    time: "8",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/vega-cadde.jpg",
    imageAlt: "/vega-cadde.jpg",
    extra: [
      { icon: "", label: "161 Adet Konut&Ofis" },
      { icon: "", label: "Vega AVM" },
      { icon: "", label: "Cazip Yatırım Fırsatı" },
    ],
    city: "Ankara",
    district: "Yenimahalle",
    productType: ["Ofis"],
    deliveryStatus: "Tamamlandı",
  },
  {
    link: "/tempoint",
    type: "featured",
    price: "TEMPOINT KONUTLARI",
    highlight : "Tamamlandı",
    metro: "Metro Durağına ",
    time: "10",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/tempoint-konutlari.jpg",
    imageAlt: "/tempoint-konutlari.jpg",
    extra: [
      { icon: "", label: "TEM Otoyolu Üzerinde" },
      { icon: "", label: "Vega AVM" },
      { icon: "", label: "Can Alıcı Lokasyon" },
    ],
    city: "İstanbul",
    district: "Sultangazi",
    productType: ["Konut"],
    deliveryStatus: "Tamamlandı",
  },
  {
    link: "/incek",
    type: "featured",
    price: "NATA İNCEK KONUTLARI",
    highlight : "Tamamlandı",
    metro: "Otobüs Durağına ",
    time: "1",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/nata-incek-konutlari.jpg",
    imageAlt: "/nata-incek-konutlari.jpg",
    extra: [
      { icon: "", label: "Mogan Gölü Manzarası" },
      { icon: "", label: "12.000 m2 Yeşil Alan" },
      { icon: "", label: "Ferah, Şık ve Kullanışlı" },
    ],
    city: "Ankara",
    district: "İncek Mahallesi",
    productType: ["Konut"],
    deliveryStatus: "Tamamlandı",
  },
  {
    link: "/vega-konut-kuleleri",
    type: "featured",
    price: "NATA VEGA KONUT KULELERİ",
    highlight : "Tamamlandı",
    metro: "Otobüs Durağına ",
    time: "2",
    stats: ["Merkezi Lokasyon", "Açık Avm Konsepti"],
    footer: "Çankaya",
    image: "/nata-vega-konut-kuleleri.jpg",
    imageAlt: "/nata-vega-konut-kuleleri.jpg",
    extra: [
      { icon: "", label: "Nata Vega Outlet" },
      { icon: "", label: "Aquavega Akvaryum" },
      { icon: "", label: "Kusursuz Mimari" },
    ],
    city: "Ankara",
    district: "Mamak",
    productType: ["Konut"],
    deliveryStatus: "Tamamlandı",
  },


  
  

];


export default function ProjectListingSection() {
  const t = useTranslations("projectList");
  const tCommon = useTranslations("common");
  const tMap = useTranslations("map");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState("Tümü");
  const [selectedDistrict, setSelectedDistrict] = useState("Tümü");
  const [selectedProductType, setSelectedProductType] = useState("Tümü");
  const [showAllFilters, setShowAllFilters] = useState(false);

  const translateTag = (label: string) => {
    switch (label) {
      case "Merkezi Lokasyon":
        return tCommon("centralLocation");
      case "Açık Avm Konsepti":
        return tCommon("openMallConcept");
      case "Tamamlandı":
        return t("deliveryCompleted");
      default:
        return label;
    }
  };

  const formatTime = (minutesText: string) => {
    const minutes = Number(minutesText);
    if (!Number.isFinite(minutes)) return minutesText;
    return `${minutes} ${tMap("minutesAway")}`;
  };

  // Get unique filter options
  const cityOptions = Array.from(new Set(listings.map((item) => item.city).filter((city): city is "Ankara" | "İstanbul" => Boolean(city))));
  const districtOptions = selectedCity === "Tümü" || selectedCity === "İstanbul"
    ? []
    : getDistrictsByCity(selectedCity, listings);
  const productTypeOptions = ["Konut", "Ofis", "Ticari", "Villa"];

  const resetFilters = () => {
    setSelectedCity("Tümü");
    setSelectedDistrict("Tümü");
    setSelectedProductType("Tümü");
  };

  // Update district when city changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict("Tümü"); // Reset district when city changes
  };

  const filteredListings = listings.filter((item) => {
    const cityMatch =
      selectedCity === "Tümü" || item.city === selectedCity;
    const districtMatch =
      selectedCity === "Tümü" || selectedCity === "İstanbul" || selectedDistrict === "Tümü" || item.district === selectedDistrict;
    const productTypeMatch =
      selectedProductType === "Tümü" || 
      (item.productType && Array.isArray(item.productType) && item.productType.includes(selectedProductType as "Konut" | "Ofis" | "Ticari" | "Villa"));

    return cityMatch && districtMatch && productTypeMatch;
  });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const isRight = x > bounds.width / 2;
    setHoveredIndex(index);
    setShowAltImage(isRight);
  };

  const handlePlusClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupIndex(index);
  };

  return (
    <section id="tamamlanan-projeler" className="bg-white py-16 px-6">
      <h2 className="text-2xl text-center font-semibold mb-10">
        {t("completedHeadingMain")}{" "}
        <span className="text-[#ab1e3b]">{t("completedHeadingHighlight")}</span>
      </h2>
      
      <div className="max-w-screen-xl mx-auto mb-6">
        <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
          {/* Şehir Filtresi */}
          <select
            value={selectedCity === "Tümü" ? "" : selectedCity}
            onChange={(e) => handleCityChange(e.target.value || "Tümü")}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            <option value="" disabled>
              {t("cityPlaceholder")}
            </option>
            {cityOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* İlçe Filtresi - Sadece Ankara seçildiğinde görünür */}
          {selectedCity === "Ankara" && districtOptions.length > 0 && (
            <select
              value={selectedDistrict === "Tümü" ? "" : selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value || "Tümü")}
              className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
            >
              <option value="" disabled>
                {t("districtPlaceholder")}
              </option>
              {districtOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {/* Proje Tipi Filtresi */}
          <select
            value={selectedProductType === "Tümü" ? "" : selectedProductType}
            onChange={(e) => setSelectedProductType(e.target.value || "Tümü")}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            <option value="" disabled>
              {t("typePlaceholder")}
            </option>
            {productTypeOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowAllFilters(true)}
            className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-[#ab1e3b] font-medium"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {t("allFilters")}
          </button>
        </div>

        {showAllFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-6 rounded-xl relative">
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={() => setShowAllFilters(false)}
                aria-label={t("clearAllFilters")}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold mb-4">{t("filtersTitle")}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("cityLabel")}
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCity === "Ankara" && districtOptions.length > 0 && (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t("districtLabel")}
                    </label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      {districtOptions.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("typeLabel")}
                  </label>
                  <select
                    value={selectedProductType}
                    onChange={(e) => setSelectedProductType(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {productTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setShowAllFilters(false)}
                  className="w-full mt-4 py-2 rounded-lg bg-[#ab1e3b] text-white text-sm font-medium"
                >
                  {t("apply")}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center text-sm mt-2">
          <button
            onClick={resetFilters}
            className="text-gray-500 hover:underline"
          >
            {t("clearAllFilters")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto relative">

        
        {filteredListings.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const imgSrc = isHovered && showAltImage && item.imageAlt ? item.imageAlt : item.image;
          console.log(imgSrc);

          return (
            <Link href={item.link} key={index} className="block h-full">
              <div
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPopupIndex(null);
                }}
                className={`relative rounded-md overflow-hidden shadow-sm transition cursor-pointer flex flex-col ${
                  item.type === "featured"
                    ? "bg-black text-white min-h-[495px]"
                    : "bg-white"
                }`}
              >
              {item.type === "featured" && (
<>
  <Image
    src={item.image}
    alt="Main Project"
    fill
    className={`object-cover object-center z-0 transition-opacity duration-500 ${
      hoveredIndex === index ? "opacity-0" : "opacity-100"
    }`}
  />
  {item.imageAlt && (
    <Image
      src={item.imageAlt}
      alt="Alt Project"
      fill
      className={`object-cover object-center z-0 absolute inset-0 transition-opacity duration-500 ${
        hoveredIndex === index ? "opacity-100" : "opacity-0"
      }`}
    />
  )}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
</>
)}

                <div className={`relative z-20 p-4 flex flex-col justify-between flex-grow ${
                  item.type === "featured" ? "" : "p-0"
                }`}>
                  {item.type === "featured" ? (
                    <div>
                      {item.price.split("\n").map((line, idx) => (
                        <h3 key={idx} className="text-lg font-semibold leading-tight">
                          {line}
                        </h3>
                      ))}
                      <p className="flex items-center gap-1 mt-2 text-sm">
                        <span className="bg-green-500 px-2 py-0.5 rounded-full">M</span>
                        {item.metro} · {formatTime(item.time)}
                      </p>
                    </div>
                  ) : (
                    <>
               <div className="relative w-full aspect-[4/3]">
<Image
  src={item.image}
  alt="Main Project"
  fill
  className={`object-cover object-center transition-opacity duration-500 ${
    hoveredIndex === index ? "opacity-0" : "opacity-100"
  }`}
/>
{item.imageAlt && (
  <Image
    src={item.imageAlt}
    alt="Alt Project"
    fill
    className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${
      hoveredIndex === index ? "opacity-100" : "opacity-0"
    }`}
  />
)}
</div>

                      <div className="p-4 space-y-2">
                        <h3 className="text-xl font-semibold leading-snug text-gray-800">{item.price}</h3>
                        {item.label && (
                          <span className="text-xs bg-[#ab1e3b] text-white px-3 py-1 rounded-full inline-block">
                            {translateTag(item.label)}
                          </span>
                        )}
                        <p className="text-sm flex items-center gap-2 text-gray-700">
                          <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">M</span>
                          <span>{item.metro}</span>
                          <FaTrain className="text-gray-400" />
                          <span>{formatTime(item.time)}</span>
                        </p>
                        <div className="flex gap-2 text-xs text-gray-600">
                          {item.stats?.map((stat, idx) => (
                            <span key={idx} className="px-2 py-0.5 border rounded-full">
                              {translateTag(stat)}
                            </span>
                          ))}
                        </div>
                        {item.footer && (
                          <div className="text-sm mt-2 text-gray-500">{item.footer}</div>
                        )}
                      </div>
                    </>
                  )}

                  {item.type === "featured" && (
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {item.highlight && (
                        <div className="inline-flex bg-[#ab1e3b] text-white font-normal text-sm px-3 py-1 rounded-full items-center gap-1">
                          <FaFire className="text-xs" />
                          {translateTag(item.highlight)}
                        </div>
                      )}
                      <div
                        className="inline-flex bg-[#ab1e3b] text-white text-sm px-3 py-1 rounded-full items-center gap-1 cursor-pointer"
                        onClick={(e) => handlePlusClick(e, index)}
                      >
                        <span>+3</span>
                        <span className="ml-2">
                          <FiPlus />
                        </span>
                      </div>
                    </div>
                  )}

                  {item.type === "featured" && popupIndex === index && (
                    <div className="absolute right-4 bottom-12 w-64 bg-[#4A4A4A] text-white rounded-2xl shadow-xl p-4 z-30 space-y-2">
                      {item.extra?.map((info, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 g-[#5C5C5C] px-3 py-1.5 rounded-full text-sm"
                        >
                          <span>{info.icon}</span>
                          <span className="whitespace-nowrap">
                            {translateTag(info.label)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}