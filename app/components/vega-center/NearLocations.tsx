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
    coords: [39.9095568, 32.7619682],
    name: "Maidan",
    description: "2 dk, 700 metre"
  },
  {
    id: 2,
    category: "schools",
    coords: [39.9107176, 32.7619986],
    name: "Ankara Özel Tevfik Fikret Okulları",
    description: "3 dk, 800 metre"
  },
  {
    id: 3,
    category: "schools",
    coords: [39.9117683, 32.7632051],
    name: "Sembol Özel Öğretim Kursu",
    description: "1 dk, 350 metre"
  },
  {
    id: 4,
    category: "markets",
    coords: [39.9117884, 32.7554803],
    name: "ULAK Haberleşme",
    description: "1 dk, 450 metre"
  },
  {
    id: 5,
    category: "markets",
    coords: [39.9156105, 31.5478882],
    name: "Aspilsan Enerji",
    description: "1 dk, 180 metre"
  },
  {
    id: 6,
    category: "markets",
    coords: [39.9157398, 32.7647352],
    name: "Anahtar Parti Ankara İl Başkanlığı",
    description: "1 dk, 180 metre"
  },
  {
    id: 7,
    category: "markets",
    coords: [39.9161107, 32.7650722],
    name: "Büyük Birlik Partisi Genel Merkez",
    description: "1 dk, 260 metre"
  },
  {
    id: 8,
    category: "markets",
    coords: [39.999775, 32.7214826],
    name: "Aselsan Net",
    description: "1 dk, 220 metre"
  },
  {
    id: 9,
    category: "schools",
    coords: [39.9106708, 32.7661057],
    name: "Mustafa Kemal Final Akademi Anadolu Lisesi",
    description: "2 dk, 700 metre"
  },
  {
    id: 10,
    category: "schools",
    coords: [39.9114439, 32.7682096],
    name: "Yasemin Karakaya Orta Okulu",
    description: "2 dk, 650 metre"
  },
  {
    id: 11,
    category: "malls",
    coords: [39.9087184, 32.7738704],
    name: "Kentpark AVM",
    description: "4 dk, 1.8 km"
  },
  {
    id: 12,
    category: "malls",
    coords: [39.9095329, 32.7756851],
    name: "Cepa AVM",
    description: "5 dk, 3.5 km"
  },
  {
    id: 13,
    category: "markets",
    coords: [39.8935549, 32.7535625],
    name: "Havelsan",
    description: "5 dk, 1.7 km"
  },
  {
    id: 14,
    category: "markets",
    coords: [39.9579714, 32.7956168],
    name: "Gençlik ve Spor Bakanlığı",
    description: "13 dk, 11.5 km"
  },
  {
    id: 15,
    category: "markets",
    coords: [39.9147609, 32.7787748],
    name: "Ankara Bölge Adliye Mahkemesi",
    description: "5 dk, 2 km"
  },
  {
    id: 16,
    category: "markets",
    coords: [39.9115598, 32.7785842],
    name: "STM Savunma Teknolojileri",
    description: "4 dk, 1.8 km"
  },
  {
    id: 17,
    category: "markets",
    coords: [39.9094391, 32.777854],
    name: "Sanayi ve Teknoloji Bakanlığı Rehberlik ve Teftiş Başkanlığı",
    description: "4 dk, 3.2 km"
  },
  {
    id: 18,
    category: "markets",
    coords: [39.9091096, 32.778033],
    name: "T.C. Sanayi ve Teknoloji Bakanlığı",
    description: "4 dk, 3.1 km"
  },
  {
    id: 19,
    category: "markets",
    coords: [39.9110751, 32.783008],
    name: "Devlet Su İşleri Genel Müdürlüğü",
    description: "4 dk, 2.4 km"
  },
  {
    id: 20,
    category: "markets",
    coords: [39.9111377, 32.7443834],
    name: "Cumhuriyet Halk Partisi",
    description: "5 dk, 2.7 km"
  },
  {
    id: 21,
    category: "schools",
    coords: [39.9136752, 32.7859479],
    name: "Lokman Hekim Üniversitesi",
    description: "5 dk, 2.7 km"
  },
  {
    id: 22,
    category: "markets",
    coords: [39.9112895, 32.7843971],
    name: "Ankara Ticaret İl Müdürlüğü",
    description: "4 dk, 3.9 km"
  },
  {
    id: 23,
    category: "markets",
    coords: [39.9116789, 32.7742904],
    name: "Albaraka Türk Başkent Kurumsal Şubesi",
    description: "3 dk, 1.3 km"
  },
  {
    id: 24,
    category: "schools",
    coords: [39.9112828, 32.7637622],
    name: "Türk Akreditasyon Kurumu TÜRKAK",
    description: "1 dk, 400 metre"
  },
  {
    id: 25,
    category: "schools",
    coords: [39.9111489, 32.7634186],
    name: "Özel Sembol Anadolu Lisesi",
    description: "2 dk, 500 metre"
  },
  {
    id: 26,
    category: "markets",
    coords: [39.9099979, 32.7594837],
    name: "Avrupa Birliği Genel Sekreterliği",
    description: "3 dk, 1 km"
  },
  {
    id: 27,
    category: "markets",
    coords: [39.9097097, 32.7592972],
    name: "Dışişleri Bakanlığı Avrupa Birliği Başkanlığı",
    description: "3 dk, 1 km"
  },
  {
    id: 28,
    category: "markets",
    coords: [39.9086491, 32.7589331],
    name: "TOBB Türkiye Odalar ve Borsalar Birliği",
    description: "3 dk, 1.1 km"
  },
  {
    id: 29,
    category: "malls",
    coords: [39.9090682, 32.7526068],
    name: "Tepe Prime",
    description: "5 dk, 2 km"
  },
  {
    id: 30,
    category: "malls",
    coords: [39.9084099, 32.7505028],
    name: "Mahall Ankara",
    description: "4 dk, 2 km"
  },
  {
    id: 31,
    category: "schools",
    coords: [39.9080443, 32.7476196],
    name: "ODTÜ Teknokent Bilişim ve İnovasyon Merkezi",
    description: "5 dk, 2.3 km"
  },
  {
    id: 32,
    category: "markets",
    coords: [39.9069621, 32.7475851],
    name: "Tarım Bakanlığı Danıştay",
    description: "5 dk, 2.3 km"
  },
  {
    id: 33,
    category: "markets",
    coords: [39.9069822, 32.7398603],
    name: "AFAD",
    description: "6 dk, 3.4 km"
  },
  {
    id: 34,
    category: "markets",
    coords: [39.9069822, 32.7398603],
    name: "Tarım ve Orman Bakanlığı",
    description: "6 dk, 3.4 km"
  },
  {
    id: 35,
    category: "markets",
    coords: [39.9104666, 32.7912125],
    name: "Ticaret Bakanlığı",
    description: "6 dk, 3.2 km"
  },
  {
    id: 36,
    category: "hospitals",
    coords: [39.9000471, 32.7547861],
    name: "Bilkent Şehir Hastanesi",
    description: "7 dk, 3 km"
  },
  {
    id: 37,
    category: "markets",
    coords: [39.9065984, 32.7605169],
    name: "Ahmet Hamdi Akseki Camii",
    description: "8 dk, 3.7 km"
  },
  {
    id: 38,
    category: "markets",
    coords: [0, 0],
    name: "Diyanet İşleri Başkanlığı",
    description: "8 dk, 3.7 km"
  },
  {
    id: 39,
    category: "malls",
    coords: [39.9067365, 32.7621741],
    name: "Bilkent Metro",
    description: "5 dk, 2.8 km"
  },
  {
    id: 40,
    category: "malls",
    coords: [39.9069621, 32.7475851],
    name: "Tarım ve Orman Bakanlığı Metro",
    description: "5 dk, 2.2 km"
  },
  {
    id: 41,
    category: "schools",
    coords: [39.9069973, 32.7295605],
    name: "Ortadoğu Teknik Üniversitesi",
    description: "10 dk, 6.1 km"
  }
];


const projectLocation = {
  coords: [39.913899, 32.767134],
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

const getCategoryPinUrl = (categoryId: string): string =>
  categories.find((cat) => cat.id === categoryId)?.pin ?? "/icons/default.png";


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
                defaultState={{ center: [39.913899, 32.767134], zoom: 15 }}
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
          src="/vegacenter.jpg" 
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
