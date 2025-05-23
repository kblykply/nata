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
  {
    id: 101,
    category: "malls",
    coords: [39.9463264, 32.7595615],
    name: "Acity Alışveriş Merkezi",
    description: "50 dk, 3.8 km"
  },
  {
    id: 102,
    category: "malls",
    coords: [39.9465565, 32.7647371],
    name: "Gimart Outlet",
    description: "56 dk, 4.2 km"
  },
  {
    id: 103,
    category: "malls",
    coords: [39.95, 32.89],
    name: "Nata Vega Outlet AVM",
    description: "15 dk, 6.0 km"
  },
  {
    id: 104,
    category: "malls",
    coords: [39.947, 32.84],
    name: "ANKAmall",
    description: "20 dk, 7.5 km"
  },
  {
    id: 201,
    category: "schools",
    coords: [39.9635647, 32.7699825],
    name: "Özel Çılgın Çınar Anaokulu",
    description: "10 dk, 4.0 km"
  },
  {
    id: 202,
    category: "schools",
    coords: [39.9706051, 32.7688471],
    name: "Orhan Cemal Fersoy Ortaokulu",
    description: "12 dk, 4.5 km"
  },
  {
    id: 203,
    category: "schools",
    coords: [39.9660016, 32.770608],
    name: "Mustafa Azmi Doğan Anadolu Lisesi",
    description: "11 dk, 4.2 km"
  },
  {
    id: 204,
    category: "schools",
    coords: [39.9664318, 32.7763057],
    name: "Şevket Raşit Hatipoğlu Anadolu Lisesi",
    description: "11 dk, 4.3 km"
  },
  {
    id: 301,
    category: "hospitals",
    coords: [39.9663737, 32.7733637],
    name: "Onkoloji Hastanesi Poliklinik",
    description: "11 dk, 4.3 km"
  },
  {
    id: 302,
    category: "hospitals",
    coords: [39.98, 32.85],
    name: "Ankara Etlik City Hospital",
    description: "18 dk, 6.5 km"
  },
  {
    id: 303,
    category: "hospitals",
    coords: [39.92, 32.85],
    name: "Ankara Bilkent City Hospital",
    description: "20 dk, 7.0 km"
  },
  {
    id: 304,
    category: "hospitals",
    coords: [39.93, 32.86],
    name: "Dr. Abdurrahman Yurtaslan Ankara Oncology Training and Research Hospital",
    description: "22 dk, 7.5 km"
  },
  {
    id: 401,
    category: "markets",
    coords: [39.9468409, 32.7656291],
    name: "Crowne Plaza Ankara",
    description: "57 dk, 4.3 km"
  },
  {
    id: 402,
    category: "markets",
    coords: [39.9583527, 32.7655802],
    name: "İller Bankası Sosyal Tesisleri",
    description: "60 dk, 4.5 km"
  },
  {
    id: 403,
    category: "markets",
    coords: [39.9551074, 32.7676138],
    name: "T.C. Ankara Büyükşehir Belediyesi Halk Ekmek",
    description: "61 dk, 4.6 km"
  },
  {
    id: 404,
    category: "markets",
    coords: [39.9500649, 32.7702425],
    name: "TİMKO",
    description: "63 dk, 4.7 km"
  }
];




const projectLocation = {
  coords: [39.94591, 32.71549],
  name: "Vega CADDE",
  description: "Yaşam Vega'da",
  image: "/cadde-galeri/vegacadde2.png",
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
                src="/altyapilar/vegacadde.jpg"
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
