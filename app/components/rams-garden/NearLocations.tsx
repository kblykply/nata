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
      id: 1,
      category: "malls",
      coords: [40.9946, 28.8645],
      name: "MetroPort AVM",
      description: "7 Dk, 3.7 Km"
    },
    {
      id: 2,
      category: "malls",
      coords: [40.9920, 28.8535],
      name: "Ömür Plaza Alışveriş Merkezi",
      description: "9 Dk, 3.6 Km"
    },
    {
      id: 3,
      category: "malls",
      coords: [40.9935, 28.8942],
      name: "Marmara Forum Alışveriş Merkezi",
      description: "7 Dk, 2.4 Km"
    },
    {
      id: 4,
      category: "malls",
      coords: [41.0361, 28.8241],
      name: "Kale Outlet Center",
      description: "4 dk, 1.9 Km"
    },
  
    {
      id: 5,
      category: "schools",
      coords: [40.9972, 28.8605],
      name: "Mevlana İlkokulu",
      description: "5 Dk, 2.5 Km"
    },
    {
      id: 6,
      category: "schools",
      coords: [40.9993, 28.8554],
      name: "Fikret Yüzatlı İlkokulu",
      description: "8 Dk, 3.4 Km"
    },
    {
      id: 7,
      category: "schools",
      coords: [41.0008, 28.8547],
      name: "Bahçelievler Kumport Ortaokulu",
      description: "8 Dk, 3.4 Km"
    },
    {
      id: 8,
      category: "schools",
      coords: [40.9985, 28.8499],
      name: "Bahçelievler Okyanus Koleji",
      description: "6 Dk, 2.1 Km"
    },
    {
      id: 9,
      category: "schools",
      coords: [40.9943, 28.8490],
      name: "Bahçelievler Özel Şafak Okulları",
      description: "8 Dk, 2.4 Km"
    },
  
    {
      id: 10,
      category: "hospitals",
      coords: [40.9930, 28.8601],
      name: "Memorial Bahçelievler Hastanesi",
      description: "11 Dk, 4.5 Km"
    },
    {
      id: 11,
      category: "hospitals",
      coords: [40.9936, 28.8567],
      name: "Medicana Bahçelievler Hastanesi",
      description: "9 Dk, 3.3 Km"
    },
    {
      id: 12,
      category: "hospitals",
      coords: [40.9981, 28.8512],
      name: "Aktif International Hastanesi Bahçelievler",
      description: "9 Dk, 3.3 Km"
    },
    {
      id: 13,
      category: "hospitals",
      coords: [40.9949, 28.8540],
      name: "Medical Park Bahçelievler Hastanesi",
      description: "9 Dk, 3.8 Km"
    },
  
    {
      id: 14,
      category: "markets",
      coords: [41.0023, 28.8587],
      name: "Gelişim Market",
      description: "8 Dk, 2.4 Km"
    },
    {
      id: 15,
      category: "markets",
      coords: [40.9929, 28.8475],
      name: "Çağrı Market Haznedar",
      description: "8 Dk, 2.3 Km"
    },
    {
      id: 16,
      category: "markets",
      coords: [40.9957, 28.8599],
      name: "Şok Market",
      description: "10 Dk, 4.4 Km"
    },
    {
      id: 17,
      category: "markets",
      coords: [40.9968, 28.8621],
      name: "Yazıcı Market",
      description: "10 Dk, 4.7 Km"
    }
  ];
  

const projectLocation = {
  coords: [41.00805, 28.88039],
  name: "RAMS GARDEN",
  description: "İstanbul'un kalbi Bahçelievler'de ",
  image: "/RAMS GARDEN - ON.jpg",
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
                defaultState={{ center: [41.00805, 28.88039], zoom: 15 }}
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
          src="/ramsgarden.jpg" 
          alt="Altyapı Görseli" 
          className="mx-auto rounded w-2/3"
        />
      </div>
    </motion.section>
  )}
</AnimatePresence>








      )
    </div>
  );
}
