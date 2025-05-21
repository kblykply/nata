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
    id: 57,
    category: "markets",
    coords: [39.9583527, 32.7655802],
    name: "İller Bankası Sosyal Tesisleri",
    description: "2 dk, 1 km"
  },
  {
    id: 58,
    category: "markets",
    coords: [39.9551074, 32.7676138],
    name: "T.C. Ankara Büyükşehir Belediyesi Halk Ekmek",
    description: "5 dk, 2.4 km"
  },
  {
    id: 59,
    category: "markets",
    coords: [39.9500649, 32.7702425],
    name: "TİMKO",
    description: "1 dk, 250 metre"
  },
  {
    id: 60,
    category: "malls",
    coords: [39.9465565, 32.7647371],
    name: "Gimart Outlet",
    description: "4 dk, 1.7 km"
  },
  {
    id: 61,
    category: "malls",
    coords: [39.9463264, 32.7595615],
    name: "Acity Alışveriş Merkezi",
    description: "5 dk, 2.2 km"
  },
  {
    id: 62,
    category: "markets",
    coords: [39.9468409, 32.7656291],
    name: "Crowne Plaza Ankara",
    description: "4 dk, 1.7 km"
  },
  {
    id: 63,
    category: "markets",
    coords: [39.95569, 32.7698944],
    name: "İklim Değişikliği Başkanlığı",
    description: "3 dk, 1.4 km"
  },
  {
    id: 64,
    category: "markets",
    coords: [39.9593768, 32.7693687],
    name: "Hilton Garden Inn Ankara Gimat",
    description: "3 dk, 1.4 km"
  },
  {
    id: 65,
    category: "markets",
    coords: [39.9591168, 32.7704835],
    name: "Vakıfbank Operasyon Merkezi",
    description: "3 dk, 1.4 km"
  },
  {
    id: 66,
    category: "markets",
    coords: [39.960785, 32.7680755],
    name: "Gimat Otel",
    description: "6 dk, 3.3 km"
  },
  {
    id: 67,
    category: "malls",
    coords: [39.9623191, 32.7668342],
    name: "Podium AVM",
    description: "5 dk, 2.5 km"
  },
  {
    id: 68,
    category: "schools",
    coords: [39.9635647, 32.7699825],
    name: "Özel Çılgın Çınar Anaokulu",
    description: "4 dk, 2.1 km"
  },
  {
    id: 69,
    category: "markets",
    coords: [39.9638633, 32.7689172],
    name: "Ankara Alegria Business Hotel",
    description: "11 dk, 3.4 km"
  },
  {
    id: 70,
    category: "schools",
    coords: [39.9638714, 32.7689172],
    name: "Özel Çağlayan Kız Fen ve Anadolu Lisesi",
    description: "4 dk, 2.4 km"
  },
  {
    id: 71,
    category: "schools",
    coords: [39.9660016, 32.770608],
    name: "Mustafa Azmi Doğan Anadolu Lisesi",
    description: "4 dk, 2.4 km"
  },
  {
    id: 72,
    category: "schools",
    coords: [39.9706051, 32.7688471],
    name: "Orhan Cemal Fersoy Ortaokulu",
    description: "5 dk, 2.9 km"
  },
  {
    id: 73,
    category: "schools",
    coords: [39.9645224, 32.7745617],
    name: "Adalet Çocuk Anaokulu",
    description: "6 dk, 2.8 km"
  },
  {
    id: 74,
    category: "schools",
    coords: [39.9614782, 32.7738761],
    name: "Açı Koleji",
    description: "5 dk, 2.7 km"
  },
  {
    id: 75,
    category: "markets",
    coords: [39.9614863, 32.7738761],
    name: "Nazım Hikmet Kültür Merkezi",
    description: "5 dk, 2.5 km"
  },
  {
    id: 76,
    category: "schools",
    coords: [39.9664599, 32.7729496],
    name: "Özel Çağlayan Erkek Fen ve Anadolu Lisesi",
    description: "5 dk, 2.7 km"
  },
  {
    id: 77,
    category: "hospitals",
    coords: [39.9663737, 32.7733637],
    name: "Onkoloji Hastanesi Poliklinik",
    description: "5 dk, 2.8 km"
  },
  {
    id: 78,
    category: "schools",
    coords: [39.966087, 32.7762582],
    name: "Özel Pınar Eğitim Kurumları",
    description: "5 dk, 2.6 km"
  },
  {
    id: 79,
    category: "schools",
    coords: [39.9664318, 32.7763057],
    name: "Şevket Raşit Hatipoğlu Anadolu Lisesi",
    description: "6 dk, 2.9 km"
  },
  {
    id: 80,
    category: "markets",
    coords: [39.9669237, 32.7693735],
    name: "Cevahir Wedding & Event",
    description: "4 dk, 2.4 km"
  },
  {
    id: 81,
    category: "markets",
    coords: [39.9669588, 32.7513489],
    name: "Mehmet Akif Ersoy Camii",
    description: "9 dk, 4.3 km"
  },
  {
    id: 82,
    category: "markets",
    coords: [39.9464041, 32.7747073],
    name: "Emniyet Genel Müdürlüğü – Basımevi Şubesi Müdürlüğü",
    description: "6 dk, 3.3 km"
  },
  {
    id: 83,
    category: "markets",
    coords: [39.9508307, 32.7808352],
    name: "Polis Akademisi Çamlıca Yerleşkesi",
    description: "4 dk, 2.4 km"
  },
  {
    id: 84,
    category: "markets",
    coords: [39.9558275, 32.7801875],
    name: "EGM Bakım Onarım Şube Müdürlüğü",
    description: "3 dk, 1.6 km"
  },
  {
    id: 85,
    category: "markets",
    coords: [39.9727796, 32.7532529],
    name: "Fatih Sultan Mehmet Camii",
    description: "3 dk, 1.2 km"
  },
  {
    id: 86,
    category: "markets",
    coords: [39.9424678, 32.7701837],
    name: "TCDD Açıkhava Tren Müzesi",
    description: "7 dk, 3.1 km"
  },
  {
    id: 87,
    category: "markets",
    coords: [39.942243, 32.770822],
    name: "Ankara Demirspor Stadı",
    description: "7 dk, 3.1 km"
  },
  {
    id: 88,
    category: "markets",
    coords: [39.9656069, 32.7617624],
    name: "ASELSAN Genel Müdürlük",
    description: "8 dk, 3.4 km"
  },
  {
    id: 89,
    category: "malls",
    coords: [39.9718253, 32.7638539],
    name: "Macunköy Metrosu",
    description: "11 dk, 3.2 km"
  },
  {
    id: 90,
    category: "malls",
    coords: [39.9691035, 32.7811706],
    name: "Hastane Metrosu",
    description: "8 dk, 3.7 km"
  },
  {
    id: 91,
    category: "malls",
    coords: [39.9654003, 32.7914461],
    name: "Demetevler Metrosu",
    description: "9 dk, 3.9 km"
  },
  {
    id: 92,
    category: "markets",
    coords: [39.9538082, 32.7835251],
    name: "TZOB Otel",
    description: "4 dk, 2.1 km"
  },
  {
    id: 93,
    category: "schools",
    coords: [39.9539147, 32.7036996],
    name: "Orhangazi İlkokulu",
    description: "18 dk, 15.3 km"
  }
];



const projectLocation = {
  coords: [39.94721, 32.77306],
  name: "Mega 1453",
  description: "Mega 1453 Projesi",
  image: "/MEGA 1453 - ON.jpg",
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
                src="/natavega-altyap─▒.jpg"
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
