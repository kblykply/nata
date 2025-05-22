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
    id: 94,
    category: "markets",
    coords: [39.9783608, 32.5793143],
    name: "Harikalar Diyarı Lunapark",
    description: "3 dk, 1.7 km"
  },
  {
    id: 95,
    category: "markets",
    coords: [39.9769439, 32.5777674],
    name: "ASKİ Sincan Şube Müdürlüğü",
    description: "4 dk, 2.5 km"
  },
  {
    id: 96,
    category: "markets",
    coords: [39.9764631, 32.5799421],
    name: "Sincan Termal Aqua Park",
    description: "3 dk, 1.5 km"
  },
  {
    id: 97,
    category: "markets",
    coords: [39.9767441, 32.577113],
    name: "Sincan İtfaiye Müdürlüğü",
    description: "4 dk, 2.6 km"
  },
  {
    id: 98,
    category: "markets",
    coords: [39.9796258, 32.5768058],
    name: "Fatih Stadyumu",
    description: "6 dk, 3.4 km"
  },
  {
    id: 99,
    category: "hospitals",
    coords: [39.9832515, 32.5682975],
    name: "Sincan Ağız ve Diş Sağlığı Hastanesi",
    description: "5 dk, 3.3 km"
  },
  {
    id: 100,
    category: "hospitals",
    coords: [39.9651111, 32.5849341],
    name: "Koru Sincan Hastanesi",
    description: "5 dk, 1.5 km"
  },
  {
    id: 101,
    category: "schools",
    coords: [39.9660228, 32.611598],
    name: "Etimesgut Özkent Akbilek Fen Lisesi",
    description: "3 dk, 1.9 km"
  },
  {
    id: 102,
    category: "malls",
    coords: [39.9779324, 32.6151408],
    name: "Akcenter Outlet AVM",
    description: "6 dk, 2.5 km"
  },
  {
    id: 103,
    category: "schools",
    coords: [39.9777495, 32.5969094],
    name: "Selahattin Akbilek Anadolu Lisesi",
    description: "4 dk, 1.2 km"
  },
  {
    id: 104,
    category: "schools",
    coords: [39.9681192, 32.5724885],
    name: "Sincan Anadolu Lisesi",
    description: "7 dk, 2.7 km"
  },
  {
    id: 105,
    category: "markets",
    coords: [39.947554, 32.7018799],
    name: "Türk Hava Kuvvetleri Müzesi",
    description: "10 dk, 10 km"
  },
  {
    id: 106,
    category: "malls",
    coords: [39.9656386, 32.6289346],
    name: "Optimum Outlet",
    description: "4 dk, 3.1 km"
  },
  {
    id: 107,
    category: "malls",
    coords: [39.9701426, 32.6185951],
    name: "AVM Eryaman",
    description: "5 dk, 3 km"
  },
  {
    id: 108,
    category: "markets",
    coords: [39.9701777, 32.6005705],
    name: "Ankara Şeker Fabrikası",
    description: "8 dk, 6.2 km"
  },
  {
    id: 109,
    category: "malls",
    coords: [39.9650644, 32.5765167],
    name: "Milpark AVM Sincan",
    description: "8 dk, 2.7 km"
  },
  {
    id: 110,
    category: "markets",
    coords: [39.96034, 32.5837963],
    name: "2XL Gym Fitness",
    description: "7 dk, 2.6 km"
  },
  {
    id: 111,
    category: "schools",
    coords: [39.9136752, 32.7859479],
    name: "Lokman Hekim Üniversitesi",
    description: "22 dk, 20.1 km"
  },
  {
    id: 112,
    category: "hospitals",
    coords: [39.9603643, 32.5959536],
    name: "Lale Ağız ve Diş Sağlığı Polikliniği",
    description: "2.3 dk, 6 km"
  }
];



const projectLocation = {
  coords: [39.97218, 32.59886],
  name: "VEGA CENTER",
  description: "İş dünyasının yeni merkezi VEGA Center",
  image: "/vega-center-03.jpg",
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
                src="/altyapilar/vegaotonomi.jpg"
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
