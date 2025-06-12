"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";

const categories = [
  { id: "all", name: "Tümü", count: 16, pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", count: 4, pin: "/mall.png" },
  { id: "schools", name: "Okullar", count: 4, pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", count: 4, pin: "/hospital.png" },
  { id: "markets", name: "Marketler", count: 4, pin: "/shop.png" },
];


const places = [
  // 🛍️ Malls
  {
    id: 101,
    category: "malls",
    coords: [39.9531, 32.8994],
    name: "Nata Vega Outlet AVM",
    description: "18 dk, 15.3 km"
  },
  {
    id: 102,
    category: "malls",
    coords: [39.9933, 32.8574],
    name: "Vega AVM Subayevleri",
    description: "28 dk, 23.4 km"
  },
  {
    id: 103,
    category: "malls",
    coords: [39.9686, 32.9084],
    name: "Anatolium Ankara",
    description: "30 dk, 25.1 km"
  },
  {
    id: 104,
    category: "malls",
    coords: [39.9175, 32.8072],
    name: "Armada AVM",
    description: "24 dk, 20.3 km"
  },

  // 🏫 Schools
  {
    id: 201,
    category: "schools",
    coords: [39.8192, 32.7661],
    name: "TED Ankara Koleji",
    description: "3 dk, 0.8 km"
  },
  {
    id: 202,
    category: "schools",
    coords: [39.8145, 32.7628],
    name: "Okyanus Koleji İncek Kampüsü",
    description: "4 dk, 1.2 km"
  },
  {
    id: 203,
    category: "schools",
    coords: [39.8139, 32.7703],
    name: "Doğa Koleji İncek",
    description: "2 dk, 0.6 km"
  },
  {
    id: 204,
    category: "schools",
    coords: [39.8215, 32.7654],
    name: "Mektebim Koleji İncek Kampüsü",
    description: "3 dk, 1.0 km"
  },

  // 🏥 Hospitals
  {
    id: 301,
    category: "hospitals",
    coords: [39.8194, 32.7648],
    name: "İncek Fizik Tedavi ve Rehabilitasyon Hastanesi",
    description: "3 dk, 1.0 km"
  },
  {
    id: 302,
    category: "hospitals",
    coords: [39.9028, 32.8598],
    name: "Güven Hastanesi",
    description: "20 dk, 17.2 km"
  },
  {
    id: 303,
    category: "hospitals",
    coords: [39.9199, 32.8036],
    name: "Memorial Ankara Hastanesi",
    description: "24 dk, 19.3 km"
  },
  {
    id: 304,
    category: "hospitals",
    coords: [39.9176, 32.7874],
    name: "Medicana International Ankara",
    description: "22 dk, 18.1 km"
  },

  // 🛒 Markets
  {
    id: 401,
    category: "markets",
    coords: [39.8200, 32.7730],
    name: "Migros İncek",
    description: "1 dk, 300 metre"
  },
  {
    id: 402,
    category: "markets",
    coords: [39.8197, 32.7741],
    name: "Şok Market İncek",
    description: "2 dk, 400 metre"
  },
  {
    id: 403,
    category: "markets",
    coords: [39.8189, 32.7720],
    name: "A101 İncek",
    description: "2 dk, 350 metre"
  },
  {
    id: 404,
    category: "markets",
    coords: [39.8210, 32.7715],
    name: "BİM İncek",
    description: "2 dk, 300 metre"
  }
];



const projectLocation = {
  coords: [39.82029, 32.77247],
  name: "Incek Konutları",
  description: "Gölbaşı İncek'te, doğayla iç içe bir yaşam alanı.",
  image: "/proje-galeri/incek4.jpg",
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
        src="/altyapilar/nataincek.jpg"
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
