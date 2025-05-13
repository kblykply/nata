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
      id: 134,
      category: "malls",
      coords: [41.0156233, 28.8755488],
      name: "Kale Outlet Center",
      description: "7 dk, 1.9 km"
    },
    {
      id: 135,
      category: "malls",
      coords: [41.0094253, 28.8844663],
      name: "Merter AVM",
      description: "12 dk, 2.8 km"
    },
    {
      id: 136,
      category: "markets",
      coords: [41.0023469, 28.8777836],
      name: "İBB Bahçelievler Spor Kompleksi",
      description: "8 dk, 2.4 km"
    },
    {
      id: 137,
      category: "hospitals",
      coords: [41.0063523, 28.8675715],
      name: "Medicana Bahçelievler Hastanesi",
      description: "12 dk, 3.3 km"
    },
    {
      id: 138,
      category: "malls",
      coords: [41.0083776, 28.8633514],
      name: "Haznedar Metro İstasyonu",
      description: "10 dk, 2.7 km"
    },
    {
      id: 139,
      category: "markets",
      coords: [41.0056495, 28.8679028],
      name: "Violet Bahçelievler Düğün Salonu",
      description: "12 dk, 3.2 km"
    },
    {
      id: 140,
      category: "schools",
      coords: [41.0196429, 28.8868589],
      name: "YTÜ Yıldız Teknopark",
      description: "12 dk, 4 km"
    },
    {
      id: 141,
      category: "schools",
      coords: [41.0196627, 28.8791341],
      name: "Yıldız Teknik Üniversitesi",
      description: "16 dk, 4.9 km"
    },
    {
      id: 142,
      category: "markets",
      coords: [41.0097308, 28.8967032],
      name: "Radisson Hotel İstanbul Merter",
      description: "14 dk, 3.6 km"
    },
    {
      id: 143,
      category: "malls",
      coords: [40.9968115, 28.8844236],
      name: "Marmara Forum",
      description: "7 dk, 2.4 km"
    },
    {
      id: 144,
      category: "markets",
      coords: [40.997759, 28.8796491],
      name: "Bakırköy Tenis Kulübü Atatürk Spor ve Yaşam Köyü",
      description: "11 dk, 3.3 km"
    },
    {
      id: 145,
      category: "malls",
      coords: [40.9966169, 28.8727322],
      name: "İncirli Metro İstasyonu",
      description: "12 dk, 3.5 km"
    },
    {
      id: 146,
      category: "markets",
      coords: [41.0049242, 28.8808618],
      name: "The Green Park Hotel Merter",
      description: "7 dk, 1.7 km"
    },
    {
      id: 147,
      category: "hospitals",
      coords: [40.9975841, 28.8646301],
      name: "Özel Aile Hastanesi",
      description: "10 dk, 3.7 km"
    },
    {
      id: 148,
      category: "malls",
      coords: [40.9957055, 28.8601054],
      name: "MetroPort AVM",
      description: "10 dk, 3.7 km"
    },
    {
      id: 149,
      category: "hospitals",
      coords: [40.9933612, 28.9063733],
      name: "İstanbul İl Sağlık Müdürlüğü",
      description: "32 dk, 15 km"
    },
    {
      id: 150,
      category: "markets",
      coords: [40.9904438, 28.8497435],
      name: "İstanbul Gençlik ve Spor İl Müdürlüğü",
      description: "14 dk, 6.2 km"
    },
    {
      id: 151,
      category: "schools",
      coords: [41.004353, 28.8456295],
      name: "Bahçelievler Atatürk İlkokulu",
      description: "16 dk, 4.9 km"
    },
    {
      id: 152,
      category: "hospitals",
      coords: [41.0058494, 28.8420557],
      name: "Bahçelievler Devlet Hastanesi",
      description: "18 dk, 5 km"
    },
    {
      id: 153,
      category: "schools",
      coords: [41.0070717, 28.8707339],
      name: "Bahçelievler Gökkuşağı İlkokulu",
      description: "7 dk, 2.3 km"
    },
    {
      id: 154,
      category: "malls",
      coords: [40.9987354, 28.8711848],
      name: "Ömür Plaza Alışveriş Merkezi",
      description: "8 dk, 2.7 km"
    },
    {
      id: 155,
      category: "schools",
      coords: [41.0097977, 28.8732544],
      name: "Emlak Konut İlköğretim Okulu",
      description: "8 dk, 1.9 km"
    },
    {
      id: 156,
      category: "markets",
      coords: [41.010481, 28.8721637],
      name: "Güngören Belediyesi",
      description: "9 dk, 2 km"
    },
    {
      id: 157,
      category: "markets",
      coords: [41.0105007, 28.8644389],
      name: "MMM Migros",
      description: "11 dk, 2.6 km"
    },
    {
      id: 158,
      category: "markets",
      coords: [41.0105739, 28.8335391],
      name: "Ramada Hotel & Suites by Wyndham",
      description: "7 dk, 2 km"
    },
    {
      id: 159,
      category: "markets",
      coords: [41.0064445, 28.8702712],
      name: "M Migros",
      description: "7 dk, 2 km"
    },
    {
      id: 160,
      category: "markets",
      coords: [41.0065177, 28.8393715],
      name: "Metro Market İstanbul",
      description: "6 dk, 2 km"
    }
  ];
  
  

const projectLocation = {
  coords: [41.00805, 28.88039],
  name: "RAMS GARDEN",
  description: "İstanbul'un kalbi Bahçelievler'de ",
  image: "/RAMS GARDEN - ON.jpg",
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


 if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
  throw new Error("Google Maps API key is missing in environment variables");
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
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} options={{ styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        { saturation: 36 },
        { color: "#333333" },
        { lightness: 40 }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        { visibility: "on" },
        { color: "#ffffff" },
        { lightness: 16 }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        { color: "#fefefe" },
        { lightness: 20 }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        { color: "#fefefe" },
        { lightness: 17 },
        { weight: 1.2 }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        { color: "#aa1e3a" }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { color: "#f5f5f5" },
        { lightness: 20 }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        { color: "#f5f5f5" },
        { lightness: 21 }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        { color: "#dedede" },
        { lightness: 21 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { color: "#ffffff" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        { color: "#ffffff" },
        { lightness: 29 },
        { weight: 0.2 }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { color: "#ffffff" },
        { lightness: 18 }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        { color: "#ffffff" },
        { lightness: 16 }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        { color: "#f2f2f2" },
        { lightness: 19 }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { color: "#e9e9e9" },
        { lightness: 17 }
      ]
    }
] }}>
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
            className="flex items-center justify-center flex-1 bg-white text-center p-10"
          >
            <div>
              <img
                src="/ramsgarden.jpg"
                alt="Altyapı Görseli"
                className="mx-auto rounded w-3/3"
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
