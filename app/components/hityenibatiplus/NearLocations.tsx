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




const places = [
  {
    id: 201,
    category: "malls",
    coords: [39.9835, 32.6579],
    name: "Acity AVM",
    description: "1 dk, 200 m",
    pin: "/mall.png"
  },
  {
    id: 202,
    category: "malls",
    coords: [39.9790, 32.6460],
    name: "Ankamall",
    description: "5 dk, 4 km",
    pin: "/mall.png"
  },
  {
    id: 203,
    category: "malls",
    coords: [39.9805, 32.6550],
    name: "Podium AVM",
    description: "6 dk, 5 km",
    pin: "/mall.png"
  },
  {
    id: 204,
    category: "malls",
    coords: [39.9750, 32.6600],
    name: "Armada AVM",
    description: "7 dk, 6 km",
    pin: "/mall.png"
  },
  {
    id: 205,
    category: "malls",
    coords: [39.9690, 32.6750],
    name: "Cepa AVM",
    description: "10 dk, 8 km",
    pin: "/mall.png"
  },

  {
    id: 301,
    category: "markets",
    coords: [39.9836, 32.6620],
    name: "Çağdaş Market (Yeni Batı)",
    description: "2 dk, 150 m",
    pin: "/shop.png"
  },
  {
    id: 302,
    category: "markets",
    coords: [39.9850, 32.6600],
    name: "ŞOK Market Batıkent",
    description: "4 dk, 3 km",
    pin: "/shop.png"
  },
  {
    id: 303,
    category: "markets",
    coords: [39.9800, 32.6610],
    name: "Aybimaş Tanzim",
    description: "5 dk, 4 km",
    pin: "/shop.png"
  },
  {
    id: 304,
    category: "markets",
    coords: [39.9820, 32.6590],
    name: "Migros Cepa",
    description: "8 dk, 6 km",
    pin: "/shop.png"
  },
  {
    id: 305,
    category: "markets",
    coords: [39.9870, 32.6540],
    name: "CarrefourSA Armada",
    description: "7 dk, 6 km",
    pin: "/shop.png"
  },

  {
    id: 401,
    category: "schools",
    coords: [39.9820, 32.6625],
    name: "Bilgi Seli Çocuk Evi",
    description: "10 dk, 1 km",
    pin: "/scool.png"
  },
  {
    id: 402,
    category: "schools",
    coords: [39.9830, 32.6630],
    name: "Mobil Anadolu Lisesi",
    description: "3 dk, 300 m",
    pin: "/scool.png"
  },
  {
    id: 403,
    category: "schools",
    coords: [39.9840, 32.6615],
    name: "Müjgan Karaçalı İlkokulu",
    description: "4 dk, 350 m",
    pin: "/scool.png"
  },
  {
    id: 404,
    category: "schools",
    coords: [39.9825, 32.6605],
    name: "Necmi Şahin İlkokulu",
    description: "5 dk, 400 m",
    pin: "/scool.png"
  },
  {
    id: 405,
    category: "schools",
    coords: [39.9805, 32.6555],
    name: "İstiklal İlkokulu",
    description: "6 dk, 4 km",
    pin: "/scool.png"
  },

  {
    id: 501,
    category: "hospitals",
    coords: [39.9800, 32.6545],
    name: "Batıkent Bilgi Hastanesi",
    description: "5 dk, 3 km",
    pin: "/hospital.png"
  },
  {
    id: 502,
    category: "hospitals",
    coords: [39.9710, 32.6440],
    name: "Özel Ortadoğu Hastanesi",
    description: "10 dk, 7 km",
    pin: "/hospital.png"
  },
  {
    id: 503,
    category: "hospitals",
    coords: [39.9740, 32.6500],
    name: "Medical Park Ankara",
    description: "12 dk, 8 km",
    pin: "/hospital.png"
  },
  {
    id: 504,
    category: "hospitals",
    coords: [39.9690, 32.6550],
    name: "Eryaman Diş Polikliniği",
    description: "8 dk, 5 km",
    pin: "/hospital.png"
  },
  {
    id: 505,
    category: "hospitals",
    coords: [39.9660, 32.6290],
    name: "Bilkent Şehir Hastanesi",
    description: "15 dk, 10 km",
    pin: "/hospital.png"
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
  coords: [39.98364, 32.66202],
  name: "Yeni Batı Plus",
  description: "Yeni Batı Mahallesi, sıradışı ve prestijli konut projesi",
  image: "/görsel.jpeg",
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
        src="/yenibatıplus/altyapı.jpg"
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
