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
  // Alışveriş Merkezleri
  {
    id: 18,
    category: "malls",
    coords: [39.9616, 32.7690],
    name: "Podium AVM Ankara",
    description: "4 dk, 2.5 km"
  },
  {
    id: 19,
    category: "malls",
    coords: [39.9536, 32.7528],
    name: "Acity Alışveriş Merkezi",
    description: "4 dk, 2.2 km"
  },
  {
    id: 20,
    category: "malls",
    coords: [39.9123, 32.8106],
    name: "Armada Alışveriş ve İş Merkezi",
    description: "12 dk, 8 km"
  },
  {
    id: 21,
    category: "malls",
    coords: [39.9511, 32.8317],
    name: "ANKAmall Alışveriş Merkezi",
    description: "10 dk, 7.4 km"
  },

  // Okullar
  {
    id: 22,
    category: "schools",
    coords: [39.9590, 32.7670],
    name: "Mehmet Emin Yurdakul Ortaokulu",
    description: "5 dk, 2.4 km"
  },
  {
    id: 23,
    category: "schools",
    coords: [39.9600, 32.7700],
    name: "Harzemşahlar İlkokulu",
    description: "5 dk, 2.3 km"
  },
  {
    id: 24,
    category: "schools",
    coords: [39.9610, 32.7720],
    name: "Şehit Hakan Ünver İmam Hatip Ortaokulu",
    description: "7 dk, 3 km"
  },
  {
    id: 25,
    category: "schools",
    coords: [39.9620, 32.7750],
    name: "Açı Koleji - Yenimahalle",
    description: "5 dk, 2.6 km"
  },

  // Hastaneler
  {
    id: 26,
    category: "hospitals",
    coords: [39.9630, 32.7780],
    name: "Servet Ünsal Tıp Merkezi",
    description: "7 dk, 3 km"
  },
  {
    id: 27,
    category: "hospitals",
    coords: [39.9640, 32.7800],
    name: "Özel Ortadoğu Hastanesi",
    description: "9 dk, 4.4 km"
  },
  {
    id: 28,
    category: "hospitals",
    coords: [39.9200, 32.8000],
    name: "Beştepe Devlet Hastanesi",
    description: "10 dk, 8.3 km"
  },
  {
    id: 29,
    category: "hospitals",
    coords: [39.9650, 32.7820],
    name: "Özel Tepe Tıp Merkezi",
    description: "8 dk, 4.5 km"
  },

  // Marketler
  {
    id: 30,
    category: "markets",
    coords: [39.9660, 32.7840],
    name: "Başkent Market",
    description: "5 dk, 2.4 km"
  },
  {
    id: 31,
    category: "markets",
    coords: [39.9670, 32.7860],
    name: "Şok Market",
    description: "5 dk, 2.5 km"
  },
  {
    id: 32,
    category: "markets",
    coords: [39.9680, 32.7880],
    name: "Funda Market",
    description: "4 dk, 2.4 km"
  },
  {
    id: 33,
    category: "markets",
    coords: [39.9690, 32.7900],
    name: "İşler Güçler Market",
    description: "5 dk, 2.6 km"
  },
  {
    id: 34,
    category: "markets",
    coords: [39.9700, 32.7920],
    name: "Şekerciler Market",
    description: "3 dk, 1.6 km"
  }
];


const projectLocation = {
  coords: [39.94721, 32.77306],
  name: "Mega 1453",
  description: "Mega 1453 Projesi",
  image: "/MEGA 1453 - ON.jpg",
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
                defaultState={{ center: [39.94721, 32.77306], zoom: 15 }}
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
          src="/mega1453.jpg" 
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
