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
  {
    id: 1,
    category: "malls",
    coords: [39.860838, 32.741212],
    name: "Beytepe Alışveriş Merkezi",
    description: "4 dk, 3.9 km"
  },
  {
    id: 2,
    category: "malls",
    coords: [39.800, 32.700],
    name: "İncek AVM",
    description: "13 Dk, 8.4 Km"
  },
  {
    id: 3,
    category: "malls",
    coords: [39.880, 32.740],
    name: "Arcadium AVM",
    description: "16 Dk, 9.5 Km"
  },
  {
    id: 4,
    category: "malls",
    coords: [39.870, 32.750],
    name: "Turkuaz Alışveriş Merkezi",
    description: "14 Dk, 8.3 Km"
  },
  {
    id: 5,
    category: "schools",
    coords: [39.805, 32.695],
    name: "Tam Okulları",
    description: "16 Dk, 10 Km"
  },
  {
    id: 6,
    category: "schools",
    coords: [39.860, 32.740],
    name: "Beytepe İlkokulu",
    description: "6 Dk, 3.2 Km"
  },
  {
    id: 7,
    category: "schools",
    coords: [39.850, 32.735],
    name: "Tsk Mehmetçik Vakfı Hafize İhsan Payaza İlk/Ortaokulu",
    description: "13 Dk, 7.4 Km"
  },
  {
    id: 8,
    category: "schools",
    coords: [39.875275, 32.748524],
    name: "İDV Özel Bilkent İlk ve Ortaokulu",
    description: "7 Dk, 5 Km"
  },
  {
    id: 9,
    category: "hospitals",
    coords: [39.860838, 32.741212],
    name: "Beytepe Şehit Murat Erdi Eker Devlet Hastanesi",
    description: "14 Dk, 8 Km"
  },
  {
    id: 10,
    category: "hospitals",
    coords: [39.86784, 32.73365],
    name: "Beytepe Gün Hastanesi",
    description: "6 Dk, 3.5 Km"
  },
  {
    id: 11,
    category: "hospitals",
    coords: [39.800, 32.700],
    name: "Medical Park Ankara İncek Hastanesi",
    description: "13 Dk, 8 Km"
  },
  {
    id: 12,
    category: "hospitals",
    coords: [39.89082, 32.71051],
    name: "Medisun Hastanesi",
    description: "15 Dk, 9 Km"
  },
  {
    id: 13,
    category: "markets",
    coords: [39.9207759, 32.8540497],
    name: "CarrefourSA",
    description: "4 Dk, 2 Km"
  },
  {
    id: 14,
    category: "markets",
    coords: [39.892, 32.850],
    name: "Şok Market",
    description: "6 Dk, 3 Km"
  },
  {
    id: 15,
    category: "markets",
    coords: [39.600, 28.783],
    name: "Çınar Market",
    description: "16 Dk, 10 Km"
  },
  {
    id: 16,
    category: "markets",
    coords: [39.850, 32.740],
    name: "Angora Market",
    description: "8 Dk, 5 Km"
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
