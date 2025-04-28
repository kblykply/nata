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
    id: 67,
    category: "malls",
    coords: [39.95111, 32.83167],
    name: "ANKAmall Alışveriş Merkezi",
    description: "15 dk, 13 km"
  },
  {
    id: 68,
    category: "malls",
    coords: [39.91234, 32.81065],
    name: "Armada Alışveriş ve İş Merkezi",
    description: "17 dk, 13 km"
  },
  {
    id: 69,
    category: "malls",
    coords: [39.9112, 32.7583],
    name: "Kentpark Alışveriş Merkezi",
    description: "15 dk, 10 km"
  },
  {
    id: 70,
    category: "malls",
    coords: [39.88278, 32.68573],
    name: "Arcadium Alışveriş Merkezi",
    description: "12 dk, 8 km"
  },

  // Okullar
  {
    id: 71,
    category: "schools",
    coords: [39.95191, 32.76914],
    name: "ATAEL KOLEJİ ORTAOKULU, FEN ve ANADOLU LİSESİ",
    description: "8 dk, 3.5 km"
  },
  {
    id: 72,
    category: "schools",
    coords: [39.95191, 32.76914],
    name: "Yönder Okulları Batıkent 100.Yıl Kampüsü",
    description: "16 dk, 7.7 km"
  },
  {
    id: 73,
    category: "schools",
    coords: [39.95191, 32.76914],
    name: "ÇANKAYA ULUBATLI HASAN İLKOKULU",
    description: "23 dk, 15 km"
  },

  // Hastaneler
  {
    id: 74,
    category: "hospitals",
    coords: [39.95191, 32.76914],
    name: "Yıldırım Beyazıt Üniversitesi Yenimahalle Eğitim ve Araştırma Hastanesi",
    description: "16 dk, 6.5 km"
  },
  {
    id: 75,
    category: "hospitals",
    coords: [39.96656, 32.7095],
    name: "Medical Park Ankara Hastanesi",
    description: "14 dk, 5.5 km"
  },
  {
    id: 76,
    category: "hospitals",
    coords: [39.90083, 32.75694],
    name: "Ankara Bilkent Şehir Hastanesi",
    description: "15 dk, 9 km"
  },
  {
    id: 77,
    category: "hospitals",
    coords: [39.95191, 32.76914],
    name: "Medisun Hastanesi",
    description: "13 dk, 6.6 km"
  },

  // Marketler
  {
    id: 78,
    category: "markets",
    coords: [39.95191, 32.76914],
    name: "CarrefourSA",
    description: "11 dk, 8.6 km"
  },
  {
    id: 79,
    category: "markets",
    coords: [39.95191, 32.76914],
    name: "Çağdaş Market",
    description: "11 dk, 5 km"
  },
  {
    id: 80,
    category: "markets",
    coords: [39.95191, 32.76914],
    name: "File Market",
    description: "17 dk, 8.4 km"
  }
];


const projectLocation = {
  coords: [39.92851, 32.71992],
  name: "Mega Şaşmaz",
  description: "Ankaranın iş merkezi",
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
                defaultState={{ center: [39.92851, 32.71992], zoom: 15 }}
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
          src="/megaşaşmaz-lokasyon.jpg" 
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
