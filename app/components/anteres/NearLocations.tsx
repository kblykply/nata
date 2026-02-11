"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { OverlayView } from "@react-google-maps/api";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";



 const vegaAvms = [
  {
    id: "aquavega",
    name: "AquaVega Aquarium",
    coords: [39.88782, 32.93512], // Located inside Nata Vega Outlet, near IKEA
    icon: "/icons/aquavega.png",
    url: "https://www.aquavega.com.tr/", // fallback to social
    size: [70, 70],
  },
  {
    id: "eskisehir",
    name: "Vega Outlet Eskişehir",
    coords: [39.781511220709724, 30.479342593309756],
    icon: "/icons/Eskis╠ºehir.png",
    url: "https://www.vegaoutlet.com.tr/", // instagram page
    size: [70, 70],
  },
  {
    id: "istanbul",
    name: "Vega İstanbul",
    coords: [41.092422986394176, 28.903546427307614],
    icon: "/icons/istanbul.png",
    url: "https://www.vegaavmistanbul.com/", // instagram
    size: [70, 70],
  },
  {
    id: "natavegaoutlet",
    name: "Nata Vega Outlet",
    coords: [39.88748717217052, 32.93447179046967],
    icon: "/icons/natavegaoutlet.png",
    url: "https://www.natavega.com.tr/",
    size: [70, 70],
  },
  {
    id: "silivri",
    name: "Vega Silivri",
    coords: [41.077699686463525, 28.251653183796208],
    icon: "/icons/silivri.png",
    url: "https://vegaavmsilivri.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "subayevleri",
    name: "Vega Subayevleri",
    coords: [39.97569121868903, 32.88370383957994],
    icon: "/icons/subayevleri.png",
    url: "https://vegaavmsubayevleri.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "vegacadde",
    name: "Vega Cadde",
    coords: [39.9461513892066, 32.71575214629393], // based on Instagram location listing :contentReference[oaicite:1]{index=1}
    icon: "/icons/vegacadde.png",
    url: "https://vegacadde.com/", 
    size: [70, 70],
  },
  {
    id: "vegacenter",
    name: "Vega Center",
    coords: [39.91747353620304, 32.78111696961037], // central Ankara approximate :contentReference[oaicite:3]{index=3}
    icon: "/icons/vegacenter.png",
    url: "https://vegacenter.com.tr/", // fallback IG
    size: [70, 70],
  },
  {
    id: "vegamaxi",
    name: "Vega Maxi",
    coords: [41.08268667628786, 28.20442451024029],
    icon: "/icons/vegamaxi.png",
    url: "https://vegamaxiavm.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "yalova",
    name: "Vega Yalova",
    coords: [40.65320226567596, 29.255007708375175],
    icon: "/icons/yalova.png",
    url: "https://www.vegaavmyalova.com/", // fallback IG
    size: [70, 70],
  },
];

const places  = [
  // Market
  {
    id: 1,
    category: "markets",
    coords: [39.9708901, 32.8218806],
    name: "Metro Market",
    description: "3 dk, 1 km"
  },

  // Hospitals
  {
    id: 2,
    category: "hospitals",
    coords: [39.9650327, 32.823202],
    name: "Etlik Şehir Hastanesi",
    description: "5 dk, 2.1 km"
  },
  {
    id: 3,
    category: "hospitals",
    coords: [39.9650528, 32.8154772],
    name: "Gülhane Eğitim ve Araştırma Hastanesi",
    description: "10 dk, 3.8 km"
  },
  {
    id: 4,
    category: "hospitals",
    coords: [39.9571953, 32.7964194],
    name: "Lokman Hekim Hastanesi",
    description: "6 dk, 2.2 km"
  },
  {
    id: 5,
    category: "hospitals",
    coords: [39.9668514, 32.8185862],
    name: "Ankara İl Sağlık Müdürlüğü",
    description: "4 dk, 1.6 km"
  },
  {
    id: 6,
    category: "hospitals",
    coords: [39.9645544, 32.8375413],
    name: "Etlik Zübeyde Hanım Kadın Hastalıkları Hastanesi",
    description: "6 dk, 2.8 km"
  },
  {
    id: 7,
    category: "hospitals",
    coords: [39.9801437, 32.8196276],
    name: "Özel Deva Tıp Merkezi",
    description: "4 dk, 1.4 km"
  },

  // Schools
  {
    id: 8,
    category: "schools",
    coords: [39.9668715, 32.8108614],
    name: "Yıldırım Beyazıt Üniversitesi",
    description: "2 dk, 700 metre"
  },
  {
    id: 9,
    category: "schools",
    coords: [39.9712396, 32.8251716],
    name: "Hacı Mustafa Tarman Ortaokulu",
    description: "4 dk, 1.2 km"
  },
  {
    id: 10,
    category: "schools",
    coords: [39.9640278, 32.8159989],
    name: "Yenimahalle Atatürk Ortaokulu",
    description: "6 dk, 2 km"
  },
  {
    id: 11,
    category: "schools",
    coords: [39.9583352, 32.8271719],
    name: "Ziya Gökalp İlkokulu ve Ortaokulu",
    description: "7 dk, 3 km"
  },
  {
    id: 12,
    category: "schools",
    coords: [39.9651268, 32.8150667],
    name: "Neşe Dolu Yarınlar Kreş ve Anaokulu",
    description: "6 dk, 2.2 km"
  },
  {
    id: 13,
    category: "schools",
    coords: [39.9704858, 32.8057949],
    name: "Şehit Öğretmen Mehmet Ali Durak Ortaokulu",
    description: "4 dk, 1.5 km"
  },

  // Transportation
  {
    id: 14,
    category: "malls",
    coords: [39.9571602, 32.814444],
    name: "İvedik Metrosu",
    description: "7 dk, 3 km"
  },

  // Sports / Recreation
  {
    id: 15,
    category: "schools",
    coords: [39.9744496, 32.8129301],
    name: "Gençlerbirliği Hasan Polat Futbol Okulu",
    description: "2 dk, 650 metre"
  },
  {
    id: 16,
    category: "markets",
    coords: [39.979889, 32.8185545],
    name: "Ayvalı Gross",
    description: "3 dk, 1.2 km"
  },

  // Government
  {
    id: 17,
    category: "hospitals",
    coords: [39.959601, 32.8360217],
    name: "Ankara Valiliği İl Nüfus ve Vatandaşlık Müdürlüğü",
    description: "8 dk, 3.5 km"
  },
  {
    id: 18,
    category: "hospitals",
    coords: [39.9264301, 32.8535368],
    name: "Ankara Valiliği",
    description: "15 dk, 10 km"
  },

  // Utility
  {
    id: 19,
    category: "markets",
    coords: [39.9559996, 32.8188581],
    name: "Başkent Elektrik Dağıtım A.Ş.",
    description: "8 dk, 3.3 km"
  },

  // Recreation
  {
    id: 20,
    category: "schools",
    coords: [39.971393, 32.8235362],
    name: "Etlik Olimpik Yüzme Havuzu",
    description: "4 dk, 1.2 km"
  }
];

const categoriesBase = [
  { id: "all", pin: "/pin.png" },
  { id: "malls", pin: "/mall.png" },
  { id: "schools", pin: "/scool.png" },
  { id: "hospitals", pin: "/hospital.png" },
  { id: "markets", pin: "/shop.png" },
];


const projectLocation = {
  coords: [39.97090, 32.81910],
  nameKey: "projectName" as const,
  descriptionKey: "projectDescription" as const,
  image: "/ANTARES KONUTLARI-ON.jpg",
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: projectLocation.coords[0],
  lng: projectLocation.coords[1],
};

export default function NearbyMap() {
  const locale = useLocale();
  const tCommon = useTranslations("common");
  const tNearby = useTranslations("anteres.nearby");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSwitch, setSelectedSwitch] = useState("altyapi");


const [activeMarker, setActiveMarker] = useState<string | number | null>(null as string | number | null);

if (typeof window !== 'undefined') {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error("Google Maps API key is missing in environment variables");
  }
}
const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  language: locale,
});

const categories = categoriesBase.map((cat) => ({
  ...cat,
  name: tNearby(`categories.${cat.id}`),
  count: cat.id === "all" ? places.length : places.filter((p) => p.category === cat.id).length,
}));

  const filteredPlaces =
    selectedCategory === "all"
      ? places
      : places.filter((p) => p.category === selectedCategory);

const getCategoryPinUrl = (categoryId: string): string =>
  categories.find((cat) => cat.id === categoryId)?.pin ?? "/icons/default.png";

  return (
    <div className="w-full h-screen flex bg-white flex-col relative">
      <div className="w-full flex justify-center py-6 bg-white z-30">
        <div className="bg-gray-100 p-1 rounded-full flex shadow-md">
          <button
            onClick={() => setSelectedSwitch("altyapi")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "altyapi" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            {tCommon("nearbyInfrastructure")}
          </button>
          <button
            onClick={() => setSelectedSwitch("konum")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "konum" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            {tCommon("nearbyLocation")}
          </button>
        </div>
      </div>

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
            <aside className="fixed md:static w-[250px] bg-white shadow-md p-4 h-full overflow-y-auto z-10">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                {tNearby("sectionTitle")}
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
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

            <div className="flex-1">
              <GoogleMap
  mapContainerStyle={containerStyle}
  center={center}
  zoom={14}
  options={{
    styles: [
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          { color: "#faf5ed" },
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          { color: "#bae5a6" },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          { weight: 1.0 },
          { gamma: 1.8 },
          { saturation: 0 },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          { hue: "#ffb200" },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "transit.station.airport",
        elementType: "all",
        stylers: [
          { hue: "#b000ff" },
          { saturation: 23 },
          { lightness: -4 },
          { gamma: 0.8 },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          { color: "#a0daf2" },
        ],
      },
      {
  featureType: "poi",
  elementType: "labels.icon",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.business",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.park",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
}
    ],
  }}
>
                <Marker
                  position={{ lat: projectLocation.coords[0], lng: projectLocation.coords[1] }}
                  icon={{ url: "/pin-red.png", scaledSize: new window.google.maps.Size(32, 32) }}
                  onClick={() => setActiveMarker("project")}
                />
                {activeMarker === "project" && (
                  <InfoWindow
                    position={{ lat: projectLocation.coords[0], lng: projectLocation.coords[1] }}
                    onCloseClick={() => setActiveMarker(null)}
                    options={{ pixelOffset: new window.google.maps.Size(0, -10) }}
                  >
                    <div className="bg-white rounded-xl shadow-xl p-3 w-72 flex items-center gap-4">
                      <img
                        src={projectLocation.image}
                        alt={tNearby(projectLocation.nameKey)}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-base font-bold text-gray-900">
                          {tNearby(projectLocation.nameKey)}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {tNearby(projectLocation.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </InfoWindow>
                )}

                <MarkerClusterer
 options={{
  imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  styles: [
    {
      url: "/clusters/red.png",
      height: 40,
      width: 40,
      textColor: "white",
      textSize: 14,
    },
    {
      url: "/clusters/red.png",
      height: 50,
      width: 50,
      textColor: "white",
      textSize: 14,
    },
    {
      url: "/clusters/red.png",
      height: 60,
      width: 60,
      textColor: "white",
      textSize: 14,
    },
  ]
}}

>
                  {(clusterer) => (
                    <>
                      {filteredPlaces.map((place) => (
                        <Marker
                          key={place.id}
                          position={{ lat: place.coords[0], lng: place.coords[1] }}
                          icon={{
                            url: getCategoryPinUrl(place.category),
                            scaledSize: new window.google.maps.Size(42, 42),
                          }}
                          clusterer={clusterer}
                          onClick={() => setActiveMarker(place.id)}
                        />
                      ))}
                    </>
                  )}
                </MarkerClusterer>
{vegaAvms.map((avm) => (
  <OverlayView
    key={avm.id}
    position={{ lat: avm.coords[0], lng: avm.coords[1] }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <div
      onClick={() => window.open(avm.url, "_blank")}
      className="bg-white rounded-full p-1 shadow-lg border border-gray-200 cursor-pointer transition-transform hover:scale-105"
      style={{
        width: `${avm.size[0]}px`,
        height: `${avm.size[1]}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <img
        src={avm.icon}
        alt={avm.name}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  </OverlayView>
))}{vegaAvms.map((avm) => (
  <OverlayView
    key={avm.id}
    position={{ lat: avm.coords[0], lng: avm.coords[1] }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <div
      onClick={() => window.open(avm.url, "_blank")}
      className="bg-white rounded-full p-1 shadow-lg border border-gray-200 cursor-pointer transition-transform hover:scale-105"
      style={{
        width: `${avm.size[0]}px`,
        height: `${avm.size[1]}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <img
        src={avm.icon}
        alt={avm.name}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  </OverlayView>
))}


                {filteredPlaces.map(
                  (place) =>
                    activeMarker === place.id && (
                      <InfoWindow
                        key={`info-${place.id}`}
                        position={{ lat: place.coords[0], lng: place.coords[1] }}
                        onCloseClick={() => setActiveMarker(null)}
                      >
                        <div className="text-sm">
                          <h4 className="font-semibold">{place.name}</h4>
                          <p>{place.description}</p>
                        </div>
                      </InfoWindow>
                    )
                )}
              </GoogleMap>
            </div>
          </motion.section>
        )}

        {selectedSwitch === "altyapi" && (
       <motion.section
  key="altyapi"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 50 }}
  transition={{ duration: 0.4 }}
  className="flex items-center justify-center flex-1 bg-white text-center p-0"
>
  <div className="overflow-x-auto md:overflow-visible">
    <div className="w-[200%] md:w-auto"> {/* Zoomed width for mobile */}
      <img
        src="/mel/antares.jpg"
        alt={tNearby("infrastructureAlt")}
        className="mx-auto rounded w-full"
      />
    </div>
  </div>
</motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
