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
    id: 113,
    category: "malls",
    coords: [39.9804886, 32.6457981],
    name: "Eryaman 1-2 Metrosu",
    description: "5 dk, 3 km"
  },
  {
    id: 114,
    category: "markets",
    coords: [39.9943566, 32.6514887],
    name: "Göksu Parkı",
    description: "3 dk, 2 km"
  },
  {
    id: 115,
    category: "schools",
    coords: [39.9944631, 32.5716633],
    name: "Yıldırım Beyazıt Üniversitesi",
    description: "23 dk, 26.1 km"
  },
  {
    id: 116,
    category: "markets",
    coords: [39.9858507, 32.6726096],
    name: "AOÇ 75. Yıl Maliye Ormanı",
    description: "5 dk, 2.4 km"
  },
  {
    id: 117,
    category: "malls",
    coords: [39.9858858, 32.654585],
    name: "Kaşmir Center",
    description: "5 dk, 2.6 km"
  },
  {
    id: 118,
    category: "malls",
    coords: [39.9656386, 32.6289346],
    name: "Ankara Optimum AVM",
    description: "9 dk, 5.6 km"
  },
  {
    id: 119,
    category: "markets",
    coords: [39.9450578, 32.6861386],
    name: "Türkkuşu Genel Müdürlüğü",
    description: "11 dk, 10.4 km"
  },
  {
    id: 120,
    category: "markets",
    coords: [39.947554, 32.7018799],
    name: "Türk Hava Kuvvetleri Müzesi",
    description: "9 dk, 8.7 km"
  },
  {
    id: 121,
    category: "hospitals",
    coords: [39.9664515, 32.7069807],
    name: "Medical Park Ankara Hastanesi",
    description: "11 dk, 6.8 km"
  },
  {
    id: 122,
    category: "malls",
    coords: [39.9701064, 32.7124749],
    name: "Atlantis Alışveriş ve Yaşam Merkezi",
    description: "12 dk, 7.2 km"
  },
  {
    id: 123,
    category: "markets",
    coords: [39.9817587, 32.6402444],
    name: "Göktürk Aile Yaşam ve Eğitim Merkezi",
    description: "5 dk, 3.4 km"
  },
  {
    id: 124,
    category: "markets",
    coords: [39.9692178, 32.6477629],
    name: "Sporcu Eğitim ve Performans Merkezi",
    description: "7 dk, 4.4 km"
  },
  {
    id: 125,
    category: "schools",
    coords: [40.0002018, 32.6243216],
    name: "Ankara Eryaman Okyanus Koleji",
    description: "9 dk, 5.3 km"
  },
  {
    id: 126,
    category: "malls",
    coords: [39.979708, 32.6559872],
    name: "İstanbul Yolu Metrosu",
    description: "11 dk, 7.6 km"
  },
  {
    id: 127,
    category: "schools",
    coords: [39.9801258, 32.6621162],
    name: "Batı Koleji Yenibatı Kampüsü",
    description: "3 dk, 1.1 km"
  },
  {
    id: 128,
    category: "markets",
    coords: [39.9880319, 32.6591358],
    name: "La Wings Wedding Ankara Düğün Salonu",
    description: "3 dk, 1 km"
  },
  {
    id: 129,
    category: "schools",
    coords: [39.9678951, 32.6569161],
    name: "T.C. MEB Eryaman Sanat Akademi",
    description: "7 dk, 5.3 km"
  },
  {
    id: 130,
    category: "schools",
    coords: [39.9679152, 32.6491913],
    name: "Eryaman Odtülüler Kurs",
    description: "6 dk, 4.7 km"
  },
  {
    id: 131,
    category: "hospitals",
    coords: [39.9679471, 32.6491913],
    name: "Eryaman Diş Polikliniği",
    description: "6 dk, 5.2 km"
  },
  {
    id: 132,
    category: "markets",
    coords: [39.9704711, 32.6740322],
    name: "Ankara 75. Yıl Hipodromu",
    description: "6 dk, 5.9 km"
  },
  {
    id: 133,
    category: "malls",
    coords: [39.9724471, 32.5961901],
    name: "Vega Otonomi",
    description: "13 dk, 9.2 km"
  }
];



const projectLocation = {
  coords: [39.98404, 32.65877],
  name: "HITYENIBATI",
  description: "Yeni Batı Mahallesi, sıradışı ve prestijli konut projesi",
  image: "/HİTYENİBATI-ON.jpg",
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
        src="/hityenibati-lokasyon.jpg"
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
