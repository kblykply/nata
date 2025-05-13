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
  { id: "all", name: "Tümü", count: 16, pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", count: 4, pin: "/mall.png" },
  { id: "schools", name: "Okullar", count: 4, pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", count: 4, pin: "/hospital.png" },
  { id: "markets", name: "Marketler", count: 4, pin: "/shop.png" },
];

const places = [
  {
    id: 42,
    category: "malls",
    coords: [39.8837375, 32.7558713],
    name: "Bilkent Center",
    description: "7 dk, 4.9 km"
  },
  {
    id: 43,
    category: "malls",
    coords: [39.8833115, 32.7598378],
    name: "Sports International Bilkent",
    description: "6 dk, 4.2 km"
  },
  {
    id: 44,
    category: "malls",
    coords: [39.8755266, 32.7498524],
    name: "Bilkent Odeon",
    description: "8 dk, 4.5 km"
  },
  {
    id: 45,
    category: "schools",
    coords: [39.8680208, 32.7473168],
    name: "Bilkent Üniversitesi",
    description: "9 dk, 4.3 km"
  },
  {
    id: 46,
    category: "schools",
    coords: [39.8708471, 32.715328],
    name: "Hacettepe Üniversitesi",
    description: "7 dk, 3.9 km"
  },
  {
    id: 47,
    category: "schools",
    coords: [39.8739231, 32.717308],
    name: "Ankara Güzel Sanatlar Lisesi",
    description: "10 dk, 5.2 km"
  },
  {
    id: 48,
    category: "malls",
    coords: [39.8817081, 32.730835],
    name: "Beytepe Kongre ve Kültür Merkezi",
    description: "11 dk, 6 km"
  },
  {
    id: 49,
    category: "markets",
    coords: [39.8466763, 32.7543154],
    name: "Jandarma ve Sahil Güvenlik Akademi Camisi",
    description: "4 dk, 1.2 km"
  },
  {
    id: 50,
    category: "markets",
    coords: [39.863031, 32.7383194],
    name: "Hacettepe Teknokent A.Ş.",
    description: "4 dk, 2.3 km"
  },
  {
    id: 51,
    category: "markets",
    coords: [39.8700534, 32.7432054],
    name: "Bilkent Cyberpark",
    description: "7 dk, 4.1 km"
  },
  {
    id: 52,
    category: "schools",
    coords: [39.8700886, 32.7251808],
    name: "Ortadoğu Teknik Üniversitesi",
    description: "17 dk, 11.9 km"
  },
  {
    id: 53,
    category: "hospitals",
    coords: [39.9000471, 32.7547861],
    name: "Bilkent Şehir Hastanesi",
    description: "13 dk, 9.4 km"
  },
  {
    id: 54,
    category: "malls",
    coords: [39.8749888, 32.7605247],
    name: "Bilkent Otel ve Konferans Merkezi",
    description: "6 dk, 4.7 km"
  },
  {
    id: 55,
    category: "schools",
    coords: [39.8720301, 32.7593591],
    name: "İDV Özel Bilkent İlk ve Ortaokulu",
    description: "7 dk, 5 km"
  },
  {
    id: 56,
    category: "hospitals",
    coords: [39.8923352, 32.7498897],
    name: "Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
    description: "8 dk, 6.2 km"
  }
];


const projectLocation = {
  coords: [39.85250, 32.75718],
  name: "GOAT VILLAS BİLKENT ",
  description: "Ankara’nın merkezi Bilkent",
  image: "/GOAT VILLAS BİLKENT-ON.jpg",
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
                defaultState={{ center: [39.85250, 32.75718], zoom: 15 }}
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
  iconLayout: 'default#image',
  iconImageHref: '/pin-red.png', // your PNG path
  iconImageSize: [32, 32], // size of the PNG in px
  iconImageOffset: [-15, -42], // adjust so point of pin aligns
}}


                  modules={["geoObject.addon.balloon"]}
                />

                <Clusterer
                   options={{
  iconLayout: 'default#image',
  iconImageHref: '/pin-red.png', // your PNG path
  iconImageSize: [32, 32], // size of the PNG in px
  iconImageOffset: [-15, -42], // adjust so point of pin aligns
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
          src="/goatvillas.jpg" 
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
