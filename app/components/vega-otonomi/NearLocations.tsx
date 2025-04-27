"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  Clusterer,
} from "@pbe/react-yandex-maps";

// Categories (only for Konum view)
const categories = [
  { id: "all", name: "Tümü", count: 270, pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", count: 30, pin: "/mall.png" },
  { id: "schools", name: "Okullar", count: 44, pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", count: 12, pin: "/hospital.png" },
  { id: "markets", name: "Marketler", count: 18, pin: "/shop.png" },
];

const places = [
  // Alışveriş Merkezleri
  {
    id: 1,
    category: "malls",
    coords: [39.9645, 32.6189],
    name: "Metromall Alışveriş Merkezi",
    description: "7 dk, 3 km"
  },
  {
    id: 2,
    category: "malls",
    coords: [39.9765, 32.6094],
    name: "Eryaman Port AVM",
    description: "4 dk, 1.4 km"
  },
  {
    id: 3,
    category: "malls",
    coords: [39.9792, 32.6174],
    name: "Dolphin Alışveriş Merkezi",
    description: "6 dk, 2.6 km"
  },
  {
    id: 4,
    category: "malls",
    coords: [39.9902, 32.6482],
    name: "Göksu Alışveriş Merkezi",
    description: "10 dk, 6.1 km"
  },

  // Okullar
  {
    id: 5,
    category: "schools",
    coords: [39.9350, 32.8570],
    name: "Kavram Okulları",
    description: "3 dk, 1.3 km"
  },
  {
    id: 6,
    category: "schools",
    coords: [39.9782, 32.5874],
    name: "Sincan Akşemsettin İlkokulu",
    description: "3 dk, 1 km"
  },
  {
    id: 7,
    category: "schools",
    coords: [39.9760, 32.5900],
    name: "Şehit Tufan Kansuva İlkokulu",
    description: "3 dk, 1 km"
  },
  {
    id: 8,
    category: "schools",
    coords: [39.9810, 32.6200],
    name: "Muradiye Eryaman Sevgi Okulları",
    description: "2 dk, 1 km"
  },
  {
    id: 9,
    category: "schools",
    coords: [39.9750, 32.6000],
    name: "Elvankent Sınav Koleji",
    description: "4 dk, 1.5 km"
  },

  // Hastaneler
  {
    id: 10,
    category: "hospitals",
    coords: [39.9651, 32.5874],
    name: "Koru Sincan Hastanesi",
    description: "4 dk, 1.5 km"
  },
  {
    id: 11,
    category: "hospitals",
    coords: [39.9800, 32.5800],
    name: "Lokman Hekim Üniversitesi Ankara Hastanesi",
    description: "9 dk, 2.7 km"
  },
  {
    id: 12,
    category: "hospitals",
    coords: [39.9820, 32.5900],
    name: "Sincan Eğitim ve Araştırma Hastanesi",
    description: "5 dk, 3.2 km"
  },
  {
    id: 13,
    category: "hospitals",
    coords: [39.9899, 32.5794],
    name: "Dr. Nafiz Körez Sincan Devlet Hastanesi",
    description: "5 dk, 4.4 km"
  },

  // Marketler
  {
    id: 14,
    category: "markets",
    coords: [39.9734, 32.7908],
    name: "Şok Market",
    description: "2 dk, 500 m"
  },
  {
    id: 15,
    category: "markets",
    coords: [39.9750, 32.6100],
    name: "Aynaslar Market",
    description: "3 dk, 700 m"
  },
  {
    id: 16,
    category: "markets",
    coords: [39.9760, 32.6120],
    name: "Koçak Market",
    description: "3 dk, 600 m"
  },
  {
    id: 17,
    category: "markets",
    coords: [39.9770, 32.6150],
    name: "Çağlayan Market",
    description: "5 dk, 1 km"
  }
];


const projectLocation = {
  coords: [39.97218, 32.59886],
  name: "VEGA CENTER",
  description: "İş dünyasının yeni merkezi VEGA Center",
  image: "/vega-center-03.jpg",
};

export default function NearbyMap() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSwitch, setSelectedSwitch] = useState<"altyapi" | "konum">("altyapi");

  const filteredPlaces =
    selectedCategory === "all"
      ? places
      : places.filter((place) => place.category === selectedCategory);

  const getCategoryPinUrl = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)?.pin || "/icons/default.png";
  };

  return (
    <div className="w-full h-screen flex bg-white flex-col relative">
      {/* Global Switcher */}
      <div className="w-full flex justify-center py-6 bg-white  z-30">
        <div className="bg-gray-100 p-1 rounded-full flex shadow-md">
     
          <button
            onClick={() => setSelectedSwitch("altyapi")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "altyapi"
                ? "bg-[#4B3B4E] text-white"
                : "text-gray-700"
            }`}
          >
            Altyapı
          </button>

          <button
            onClick={() => setSelectedSwitch("konum")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "konum"
                ? "bg-[#4B3B4E] text-white"
                : "text-gray-700"
            }`}
          >
            Konum
          </button>
        </div>
      </div>

      {/* Main Content */}

      <AnimatePresence mode="wait">
  {selectedSwitch === "konum" && (
    <motion.section
      key="konum"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row flex-1 relative"
    >
       <section className="flex flex-col md:flex-row flex-1 relative">
          {/* Sidebar */}
          <aside
            className={`fixed md:static ${
              isSidebarOpen ? "left-0" : "-left-80"
            } transition-all duration-300 w-[250px] bg-white shadow-md p-4 h-full overflow-y-auto z-10`}
          >
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">
              Yakındaki popüler yerler
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`flex justify-between items-center p-2 cursor-pointer rounded-lg hover:bg-gray-100 ${
                    selectedCategory === cat.id ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white rounded-full p-1 shadow">
                      <img src={cat.pin} alt={cat.name} className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-gray-800">{cat.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{cat.count}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Map */}
          <div className="flex-1">
            <YMaps query={{ lang: "tr_TR" }}>
              <Map
                defaultState={{ center: [39.97218, 32.59886], zoom: 15 }}
                width="100%"
                height="100%"
                modules={["templateLayoutFactory", "layout.ImageWithContent", "balloon"]}
              >
                <ZoomControl options={{ position: { right: 10, top: 10 } }} />

                <Placemark
                  geometry={projectLocation.coords}
                  properties={{
                    balloonContentHeader: `<h4>${projectLocation.name}</h4>`,
                    balloonContentBody: `
                      <div style='display:flex;align-items:center;gap:10px;'>
                        <img src='${projectLocation.image}' style='width:40px;height:40px;border-radius:50%;object-fit:cover;' />
                        <div>
                          <span style='font-size:12px;'>${projectLocation.description}</span>
                        </div>
                      </div>
                    `,
                  }}
                  options={{
                    preset: "islands#redDotIcon",
                    balloonCloseButton: true,
                    openBalloonOnClick: true,
                  }}
                  modules={["geoObject.addon.balloon"]}
                />

                <Clusterer
                  options={{
                    preset: "islands#invertedRedClusterIcons",
                    groupByCoordinates: false,
                  }}
                >
                  {filteredPlaces.map((place) => (
                    <Placemark
                      key={place.id}
                      geometry={place.coords}
                      properties={{
                        balloonContentHeader: `<h4 className=" font-thin">${place.name}</h4>`,
                        balloonContentBody: place.description,
                      }}
                      options={{
                        iconLayout: "default#imageWithContent",
                        iconImageHref: getCategoryPinUrl(place.category),
                        iconImageSize: [42, 42],
                        iconImageOffset: [-21, -42],
                      }}
                      modules={["geoObject.addon.balloon"]}
                    />
                  ))}
                </Clusterer>
              </Map>
            </YMaps>
          </div>
        </section>
      ... 
    </motion.section>
  )}

  {selectedSwitch === "altyapi" && (
    <motion.section
      key="altyapi"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center flex-1 bg-white text-center p-10"
    >
      <div>
        <img 
          src="/vegaotonomi.jpg" 
          alt="Altyapı Görseli" 
          className="mx-auto rounded w-3/3"
        />
      </div>
    </motion.section>
  )}
</AnimatePresence>








      )
    </div>
  );
}
