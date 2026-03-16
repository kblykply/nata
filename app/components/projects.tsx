"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { FaFire, FaTrain, FaWhatsapp } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { SlidersHorizontal, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface Listing {
  id: string;
  title?: string;
  price: string;
  currency?: string;
  location?: string;
  type: "standard" | "featured";
  specs?: string[];
  stats?: string[];
  metro?: string;
  time?: string;
  footer?: string;
  image: string;
  imageAlt?: string;
  label?: string;
  highlight?: string;
  extra?: {
    icon: string;
    label: string;
  }[];
  link: string;
  progress?: number; // percentage from 0 to 100
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

const normalizeDeliveryStatus = (label?: string, highlight?: string): string => {
  const text = (label || highlight || "").toLowerCase();

  if (text.includes("hemen teslim")) {
    return "Hemen Teslim";
  }

  // Extract year from patterns like "2026 3. Çeyrek Teslim", "2027 1. Çeyrek Teslim", "3. Çeyrek 2025"
  const yearMatch = text.match(/(20\d{2})/);
  if (yearMatch) {
    return yearMatch[1];
  }

  return "Hemen Teslim"; // Default
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

const allListings: Listing[] = [

  {
    id: "10",
    link: "/vega-center",
    type: "standard",
    price: "VEGA CENTER",
    label: "Hemen Teslim Hemen Tapu",
    metro: "Bilkent Metro",
    time: "5 dakika mesafede",
    stats: ["Merkezi Lokasyon", "Açık Avm ve Ofis Konsepti"],
    footer: "Çankaya",
    image: "/new-images/VEGA CENTER/vega center - 14.webp",
    imageAlt: "/new-images/VEGA CENTER/vega center - 14.webp",
    progress: 100,
    city: "Ankara",
    district: "Mustafa Kemal Mahallesi",
    productType: ["Ofis"],
    deliveryStatus: "Hemen Teslim"
  },

  {
    id: "22",

    link: "/rams-garden",
    type: "standard",
    price: "RAMS GARDEN\nBAHÇELİEVLER",
    label: "Hemen Teslim ve Tapu",
    metro: "Haznedar Metro",
    time: "9 dakika mesafede",
    stats: ["8.815 m²", "796 daire"],
    footer: "Bahçelievler",
    image: "/new-images/RAMS GARDEN BAHÇELİEVLER/Resim5.webp",
    imageAlt: "/new-images/RAMS GARDEN BAHÇELİEVLER/Resim5.webp",

    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Ticari Alanlar" },
      { icon: "", label: "Premium Hayat " },
    ],
    progress: 100,
    city: "İstanbul",
    district: "Bahçelievler",
    productType: ["Konut"],
    deliveryStatus: "Hemen Teslim"

  },


  {
    id: "11",
    link: "/goat-villas",
    type: "standard",
    price: "GOAT VILLAS\nBilkent",
    metro: "Bilkent Metro",
    time: "9 dakikada mesafede",
    image: "/new-images/GOAT VİLLAS/goat-gallery-05.webp",
    imageAlt: "/new-images/GOAT VİLLAS/goat-gallery-05.webp",
    label: "2026 3. Çeyrek Teslim",
    footer: "Bilkent",
    stats: ["Villa Projesi"],
    progress: 95,
    city: "Ankara",
    district: "Bilkent",
    productType: ["Villa"],
    deliveryStatus: "2026"
  },
  {
    id: "12",
    link: "/vega-otonomi",
    type: "standard",
    price: "VEGA OTONOMİ",
    label: "Hemen Teslim ve Tapu",
    metro: "Fatih Metro",
    time: "4 dakika mesafede",
    stats: ["490m² ye kadar", "207 bölüm"],
    footer: "Plevne",
    image: "/new-images/VEGA OTONOMİ/Vega Otonomi (17).webp",
    imageAlt: "/new-images/VEGA OTONOMİ/Vega Otonomi (17).webp",
    progress: 100,
    city: "Ankara",
    district: "Sincan",
    productType: ["Ticari", "Ofis"],
    deliveryStatus: "Hemen Teslim"
  },
  {
    id: "13",
    link: "/mega-1453",
    type: "standard",
    price: "MEGA 1453",
    metro: "Hastane Metro",
    time: "11 dakika mesafede",
    stats: ["70.000 m²", "715 konut"],
    footer: "Yenimahalle",
    image: "/new-images/MEGA 1453/Ç_09.webp",
    imageAlt: "/new-images/MEGA 1453/Ç_09.webp",
    label: "2027 1. Çeyrek Teslim",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Rezidans Projesi" },
      { icon: "", label: "Ulaşım Imkanları" },
    ],
    progress: 50,
    city: "Ankara",
    district: "Yenimahalle",
    productType: ["Konut"],
    deliveryStatus: "2027"
  },

  {
    id: "9",
    link: "/hityenibatiplus",
    type: "standard",
    price: "YENİ BATI PLUS",
    label: "Hemen Teslim ve Tapu",
    metro: "Haznedar Metro",
    time: "10 dakika mesafede",
    stats: ["43.500 m²", "405 konut + 5 Ticari Alan "],
    footer: "Yeni Batı Mahallesi",
    image: "/new-images/YENİ BATI PLUS/YENİ BATI PLUS (5).webp",
    imageAlt: "/new-images/YENİ BATI PLUS/YENİ BATI PLUS (5).webp",
    progress: 100,
    city: "Ankara",
    district: "Yeni Batı Mahallesi",
    productType: ["Konut"],
    deliveryStatus: "Hemen Teslim"
  },
  {
    id: "15",
    link: "/hityenibati",
    type: "standard",
    price: "HİTYENİBATI",
    metro: "İstanbul Yolu Metro",
    time: "8 dakika mesafede",
    image: "/new-images/HİT YENİ BATI/_DSC2379.webp",
    imageAlt: "/new-images/HİT YENİ BATI/_DSC2379.webp",
    footer: "Yeni Batı Mahallesi",
    stats: ["1+1 ve 2,5+1 daireler", "190 adet konut"],
    label: "Hemen Teslim ve Tapu",
    progress: 100,
    city: "Ankara",
    district: "Yeni Batı Mahallesi",
    productType: ["Konut"],
    deliveryStatus: "Hemen Teslim"
  },
  {
    id: "16",
    link: "/mega-sasmaz",
    type: "standard",
    price: "MEGA ŞAŞMAZ",
    label: "Hemen Teslim ve Tapu",
    metro: "Ümitköy Metro",
    time: "8 dakika mesafede",
    stats: ["160.000 m²", "700 bölüm"],
    footer: "Şaşmaz",
    image: "/new-images/MEGA ŞAŞMAZ/trinvest-megasasmaz-3.webp",
    imageAlt: "/new-images/MEGA ŞAŞMAZ/trinvest-megasasmaz-3.webp",
    highlight: "Hemen Teslim ve Tapu",
    extra: [
      { icon: "", label: "Merkezi Lokasyon" },
      { icon: "", label: "Sanayi Bölgesi" },
      { icon: "", label: "Business Class" },
    ],

    progress: 100,
    city: "Ankara",
    district: "Şaşmaz",
    productType: ["Ticari", "Ofis"],
    deliveryStatus: "Hemen Teslim"
  }, {
    id: "14",
    link: "/anteres",
    type: "standard",
    price: "ANTARES KONUTLARI 2. ETAP",
    metro: "Yenimahalle Metro",
    time: "11 dakika mesafede",
    image: "/ANTARES KONUTLARI-ON.jpg",
    footer: "Yenimahalle",
    imageAlt: "/ANTARES KONUTLARI-ON.jpg",
    highlight: "Hemen Teslim ve Tapu",
    label: "Hemen Teslim ve Tapu",
    extra: [
      { icon: "", label: "90 Konut" },
      { icon: "", label: "52.515 ₺ / ay" },
      { icon: "", label: "İş & Yaşam" },
    ],
    stats: ["3. Çeyrek 2025", "Konut ve Ticari Alan"],


    progress: 100,
    city: "Ankara",
    district: "Yenimahalle",
    productType: ["Konut"],
    deliveryStatus: "2025"
  },



];

export default function ProjectListingSection() {
  const t = useTranslations("projectList");
  const tCommon = useTranslations("common");
  const tMap = useTranslations("map");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const router = useRouter();
  const [compareSelection, setCompareSelection] = useState<
    [Listing | null, Listing | null]
  >([null, null]);
  const [selectedCity, setSelectedCity] = useState("Tümü");
  const [selectedDistrict, setSelectedDistrict] = useState("Tümü");
  const [selectedProductType, setSelectedProductType] = useState("Tümü");
  const [selectedDeliveryStatus, setSelectedDeliveryStatus] = useState("Tümü");
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Get unique filter options
  const cityOptions = Array.from(new Set(allListings.map((item) => item.city).filter((city): city is "Ankara" | "İstanbul" => Boolean(city))));
  const districtOptions = selectedCity === "Tümü" || selectedCity === "İstanbul"
    ? []
    : getDistrictsByCity(selectedCity, allListings);
  const productTypeOptions = ["Konut", "Ofis", "Ticari", "Villa"];
  const deliveryStatusOptions = Array.from(
    new Set(allListings.map((item) => item.deliveryStatus).filter(Boolean))
  ).sort();

  const translateTag = (label: string) => {
    const text = label.trim();
    if (!text) return text;

    switch (text) {
      case "Hemen Teslim Hemen Tapu":
        return tCommon("immediateDeliveryDeed");
      case "Hemen Teslim ve Tapu":
        return tCommon("immediateDeliveryAndDeed");
      case "Hemen Teslim":
        return tCommon("immediateDelivery");
      case "2026 3. Çeyrek Teslim":
        return tCommon("delivery2026Q3");
      case "2027 1. Çeyrek Teslim":
        return tCommon("delivery2027Q1");
      case "2025 Teslim":
        return tCommon("delivery2025");
      case "2026 Teslim":
        return tCommon("delivery2026");
      case "Merkezi Lokasyon":
        return tCommon("centralLocation");
      case "Açık Avm Konsepti":
      case "Açık Avm ve Ofis Konsepti":
        return tCommon("openMallConcept");
      case "Business Class":
        return tCommon("businessClass");
      case "Rezidans Projesi":
        return tCommon("residenceProject");
      case "Ulaşım Imkanları":
        return tCommon("transportAccess");
      case "İş & Yaşam":
        return tCommon("workAndLife");
      case "Sanayi Bölgesi":
        return tCommon("industrialZone");
      default:
        if (text.includes("Hemen Teslim")) return tCommon("immediateDelivery");
        return text;
    }
  };

  const translateProductType = (type: string) => {
    switch (type) {
      case "Konut":
        return t("typeKonut");
      case "Ofis":
        return t("typeOfis");
      case "Ticari":
        return t("typeTicari");
      case "Villa":
        return t("typeVilla");
      default:
        return type;
    }
  };

  const translateDeliveryStatus = (status: string) => {
    if (status === "Hemen Teslim") {
      return tCommon("immediateDelivery");
    }
    return status;
  };

  const formatTime = (timeText?: string) => {
    if (!timeText) return "-";
    const match = timeText.match(/(\d+)/);
    if (!match) return timeText;
    const minutes = Number(match[1]);
    if (!Number.isFinite(minutes)) return timeText;
    return `${minutes} ${tMap("minutesAway")}`;
  };

  const resetFilters = () => {
    setSelectedCity("Tümü");
    setSelectedDistrict("Tümü");
    setSelectedProductType("Tümü");
    setSelectedDeliveryStatus("Tümü");
  };

  // Update district when city changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict("Tümü"); // Reset district when city changes
  };

  const filteredListings = allListings.filter((item) => {
    const cityMatch =
      selectedCity === "Tümü" || item.city === selectedCity;
    const districtMatch =
      selectedCity === "Tümü" || selectedCity === "İstanbul" || selectedDistrict === "Tümü" || item.district === selectedDistrict;
    const productTypeMatch =
      selectedProductType === "Tümü" ||
      (item.productType && Array.isArray(item.productType) && item.productType.includes(selectedProductType as "Konut" | "Ofis" | "Ticari" | "Villa"));
    const deliveryStatusMatch =
      selectedDeliveryStatus === "Tümü" || item.deliveryStatus === selectedDeliveryStatus;

    return cityMatch && districtMatch && productTypeMatch && deliveryStatusMatch;
  });
  const isCompared = (item: Listing) =>
    compareSelection.some((selected) => selected?.id === item.id);
  const compareCount = compareSelection.filter(Boolean).length;
  const hasCompareSelection = compareSelection.some(Boolean);
  const shouldHideOthers = compareCount === 2;
  const visibleListings = shouldHideOthers
    ? filteredListings.filter((item) => isCompared(item))
    : filteredListings;
  const compareLeft = shouldHideOthers ? visibleListings[0] : null;
  const compareRight = shouldHideOthers ? visibleListings[1] : null;
  const formatLine = (value?: string) =>
    value ? value.replace(/\n/g, " ") : "-";
  const formatArray = (value?: string[]) =>
    value && value.length > 0 ? value.join(", ") : "-";
  const formatExtra = (value?: { label: string }[]) =>
    value && value.length > 0 ? value.map((item) => item.label).join(", ") : "-";
  const comparisonRows =
    compareLeft && compareRight
      ? [
        {
          label: t("project"),
          left: formatLine(compareLeft.price),
          right: formatLine(compareRight.price),
        },
        {
          label: t("delivery"),
          left: translateTag(formatLine(compareLeft.label || compareLeft.highlight)),
          right: translateTag(formatLine(compareRight.label || compareRight.highlight)),
        },
        {
          label: t("metro"),
          left: formatLine(compareLeft.metro),
          right: formatLine(compareRight.metro),
        },
        {
          label: t("distance"),
          left: formatTime(compareLeft.time),
          right: formatTime(compareRight.time),
        },
        {
          label: t("features"),
          left: formatArray(compareLeft.stats?.map(translateTag)),
          right: formatArray(compareRight.stats?.map(translateTag)),
        },
        {
          label: t("location"),
          left: formatLine(compareLeft.footer),
          right: formatLine(compareRight.footer),
        },
        {
          label: t("progress"),
          left:
            compareLeft.progress !== undefined
              ? `%${compareLeft.progress}`
              : "-",
          right:
            compareRight.progress !== undefined
              ? `%${compareRight.progress}`
              : "-",
        },
        {
          label: t("extra"),
          left: formatExtra(compareLeft.extra?.map((e) => ({ label: translateTag(e.label) }))),
          right: formatExtra(compareRight.extra?.map((e) => ({ label: translateTag(e.label) }))),
        },
      ]
      : [];

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

  const handleCompareToggle = (
    e: React.MouseEvent,
    item: Listing
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCompareSelection(([first, second]) => {
      const isFirst = first?.id === item.id;
      const isSecond = second?.id === item.id;

      if (isFirst) {
        return [second ?? null, null];
      }

      if (isSecond) {
        return [first ?? null, null];
      }

      if (!first) {
        return [item, second ?? null];
      }

      if (!second) {
        return [first, item];
      }

      return [first, item];
    });
  };


  return (
    <section id="aktif-projeler" className="bg-white py-16 px-6">
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
                {translateProductType(item)}
              </option>
            ))}
          </select>

          {/* Teslim Durumu Filtresi */}
          <select
            value={selectedDeliveryStatus === "Tümü" ? "" : selectedDeliveryStatus}
            onChange={(e) => setSelectedDeliveryStatus(e.target.value || "Tümü")}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            <option value="" disabled>
              {t("deliveryPlaceholder")}
            </option>
            {deliveryStatusOptions.map((item) => (
              <option key={item} value={item}>
                {translateDeliveryStatus(item as string)}
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
          {hasCompareSelection && (
            <button
              onClick={() => setCompareSelection([null, null])}
              className="flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
            >
              {t("clearComparison")}
            </button>
          )}
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
                        {translateProductType(type)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("deliveryLabel")}
                  </label>
                  <select
                    value={selectedDeliveryStatus}
                    onChange={(e) => setSelectedDeliveryStatus(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {deliveryStatusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
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
        {visibleListings.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const imgSrc = isHovered && showAltImage && item.imageAlt ? item.imageAlt : item.image;
          const compared = isCompared(item);
          return (
            <Fragment key={item.id}>
              {shouldHideOthers && comparisonRows.length > 0 && index === 1 && (
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm h-fit">
                  <div className="space-y-3 text-xs text-gray-700">
                    {comparisonRows.map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-2 items-start">
                        <div className="text-right text-gray-800">{row.left}</div>
                        <div className="text-center text-gray-500 font-semibold">
                          {row.label}
                        </div>
                        <div className="text-left text-gray-800">{row.right}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div
                key={item.id}
                role="link"
                tabIndex={0}
                onClick={() => router.push(item.link)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(item.link);
                  }
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPopupIndex(null);
                }}
                className={`block h-full relative rounded-md overflow-hidden shadow-sm transition cursor-pointer flex flex-col ${item.type === "featured"
                    ? "bg-black text-white min-h-[540px]"
                    : "bg-white"
                  }`}
              >
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-30">
                  <button
                    onClick={(e) => handleCompareToggle(e, item)}
                    className={`px-3 py-1 rounded-full text-[10px] font-medium transition ${compared
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {compared ? t("selected") : t("compare")}
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2 items-end">
                  <Link
                    href="/contact-us"
                    onClick={(e) => e.stopPropagation()}
                    className="w-11 h-11 bg-[#ab1e3b] rounded-full flex items-center justify-center text-[10px] text-white hover:bg-[#961a33] transition"
                    title={t("priceRequestTitle")}
                  >
                    {t("priceRequestTitle")}
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=905017111818&text=${encodeURIComponent(
                      t("whatsAppMessage", {
                        projectName: item.price.replace(/\n/g, " "),
                      })
                    )}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center"
                    title={t("whatsAppTitle")}
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>


                {/* Image */}

                {item.type === "featured" ? (
                  <>
                    <Image
                      src={item.image}
                      alt="Main Project"
                      fill
                      className={`object-cover object-center z-0 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    {item.imageAlt && (
                      <Image
                        src={item.imageAlt}
                        alt="Alt Project"
                        fill
                        className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    )}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
                  </>
                ) : (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt="Main Project"
                      fill
                      className={`object-cover object-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    {item.imageAlt && (
                      <Image
                        src={item.imageAlt}
                        alt="Alt Project"
                        fill
                        className={`object-cover object-center absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className={`relative z-20 p-4 flex flex-col justify-between flex-grow ${item.type === "featured" ? "" : "p-0"
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

                      {item.progress !== undefined && (
                        <div className="mt-3 px-2 py-2 rounded-md bg-white/40 backdrop-blur-sm w-fit">
                          <div className="flex flex-col items-start">
                            <p className="text-[10px] text-gray-800 mb-1">
                              {t("constructionProgress")}
                            </p>
                            <div className="w-45 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                              <div
                                className="bg-green-600 h-full transition-all"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <p className="text-[10px] mt-1 text-gray-800">
                              {item.progress}%
                            </p>
                          </div>
                        </div>
                      )}


                    </div>
                  ) : (
                    <div className="p-4 space-y-2">
                      <h3 className="text-l font-semibold leading-snug text-gray-800">{item.price}</h3>
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


                      {item.progress !== undefined && (
                        <div className="mt-2 flex flex-col items-start">
                          <p className="text-[10px] text-gray-500 mb-1">
                            {t("constructionProgress")}
                          </p>
                          <div className="w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-green-600 h-full transition-all"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <p className="text-[10px] mt-1 text-gray-500">
                            {item.progress}%
                          </p>
                        </div>
                      )}





                    </div>
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
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
