"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

const categories = [
  { id: "all", name: "Tümü", pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", pin: "/mall.png" },
  { id: "schools", name: "Okullar", pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", pin: "/hospital.png" },
  { id: "markets", name: "Marketler", pin: "/shop.png" },
].map((cat) => ({
  ...cat,
  count: cat.id === "all" ? places.length : places.filter(p => p.category === cat.id).length,
}));


const projectLocation = {
  coords: [39.85250, 32.75718],
  name: "GOAT VILLAS BİLKENT ",
  description: "Ankara’nın merkezi Bilkent",
  image: "/GOAT VILLAS BİLKENT-ON.jpg",
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
});



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
            Altyapı
          </button>
          <button
            onClick={() => setSelectedSwitch("konum")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "konum" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            Konum
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
                Yakındaki popüler yerler
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
                        alt={projectLocation.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-base font-bold text-gray-900">
                          {projectLocation.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {projectLocation.description}
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
  className="flex items-center justify-center flex-1 bg-white text-center p-0 "
>
  <div className="overflow-x-auto md:overflow-visible">
    <div className="w-[250%] md:w-auto"> {/* Zoomed width for mobile */}
      <img
        src="/goataltyapi.jpg "
        alt="Altyapı Görseli"
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
