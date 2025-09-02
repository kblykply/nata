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
  // 🛍️ Malls
  {
    id: 101,
    category: "malls",
    coords: [39.8910, 32.9335],
    name: "Nata Vega Outlet AVM",
    description: "1 dk, 100 metre"
  },
  {
    id: 102,
    category: "malls",
    coords: [39.9200, 32.8500],
    name: "Armada AVM",
    description: "20 dk, 12.5 km"
  },
  {
    id: 103,
    category: "malls",
    coords: [39.9500, 32.8500],
    name: "ANKAmall",
    description: "25 dk, 15.0 km"
  },
  {
    id: 104,
    category: "malls",
    coords: [39.9300, 32.8700],
    name: "Forum Ankara Outlet",
    description: "15 dk, 8.0 km"
  },

  // 🏫 Schools
  {
    id: 201,
    category: "schools",
    coords: [39.8920, 32.9350],
    name: "Akşemsettin İlkokulu",
    description: "2 dk, 200 metre"
  },
  {
    id: 202,
    category: "schools",
    coords: [39.8935, 32.9365],
    name: "Mamak Anadolu Lisesi",
    description: "3 dk, 300 metre"
  },
  {
    id: 203,
    category: "schools",
    coords: [39.8950, 32.9380],
    name: "Yükselen Koleji",
    description: "5 dk, 500 metre"
  },
  {
    id: 204,
    category: "schools",
    coords: [39.8965, 32.9395],
    name: "Doğa Koleji Mamak Kampüsü",
    description: "6 dk, 600 metre"
  },

  // 🏥 Hospitals
  {
    id: 301,
    category: "hospitals",
    coords: [39.8930, 32.9345],
    name: "Mamak Devlet Hastanesi",
    description: "2 dk, 150 metre"
  },
  {
    id: 302,
    category: "hospitals",
    coords: [39.8945, 32.9360],
    name: "Özel Mamak Hastanesi",
    description: "3 dk, 250 metre"
  },
  {
    id: 303,
    category: "hospitals",
    coords: [39.8960, 32.9375],
    name: "Memorial Ankara Hastanesi",
    description: "5 dk, 400 metre"
  },
  {
    id: 304,
    category: "hospitals",
    coords: [39.8975, 32.9390],
    name: "Acıbadem Ankara Hastanesi",
    description: "6 dk, 550 metre"
  },

  // 🛒 Markets
  {
    id: 401,
    category: "markets",
    coords: [39.8905, 32.9340],
    name: "Migros Mamak Şubesi",
    description: "1 dk, 50 metre"
  },
  {
    id: 402,
    category: "markets",
    coords: [39.8915, 32.9350],
    name: "Şok Market Akşemsettin",
    description: "2 dk, 150 metre"
  },
  {
    id: 403,
    category: "markets",
    coords: [39.8925, 32.9360],
    name: "A101 Mamak Şubesi",
    description: "3 dk, 250 metre"
  },
  {
    id: 404,
    category: "markets",
    coords: [39.8935, 32.9370],
    name: "BİM Mamak Şubesi",
    description: "4 dk, 350 metre"
  },
   {
    id: 3001,
    category: "markets",
    coords: [39.89264, 32.93411], // IKEA Ankara (Nata Vega AVM içi)
    name: "İKEA Ankara",
    description: "1 dk, 0.2 km"
  },
  {
    id: 3002,
    category: "parks",
    coords: [39.89210, 32.93450], // Aqua Vega Aquarium (Nata Vega AVM içi)
    name: "Aqua Vega Akvaryum",
    description: "1 dk, 0.2 km"
  },
  {
    id: 3003,
    category: "schools",
    coords: [39.88840, 32.94920], // Yükselen Koleji Mamak Kampüsü
    name: "Yükselen Koleji",
    description: "5 dk, 2.0 km"
  },
  {
    id: 3004,
    category: "hospitals",
    coords: [39.92320, 32.88260], // Mamak Devlet Hastanesi
    name: "Mamak Devlet Hastanesi",
    description: "12 dk, 6.5 km"
  },
  {
    id: 3005,
    category: "parks",
    coords: [39.98990, 33.01270], // Mavi Göl (Bayındır Barajı)
    name: "Mavi Göl",
    description: "25 dk, 15 km"
  },
  {
    id: 3006,
    category: "all", // cadde
    coords: [39.89650, 32.95300], // Doğukent Caddesi (Mamak merkez)
    name: "Doğukent Caddesi",
    description: "6 dk, 3.0 km"
  },
  {
    id: 3007,
    category: "all", // çevre yolu
    coords: [39.87450, 32.97000], // Ankara Çevre Yolu (O-20 yakın kavşak)
    name: "Ankara Çevre Yolu",
    description: "10 dk, 5.0 km"
  },
  {
    id: 3008,
    category: "schools",
    coords: [39.88720, 32.94400], // Genetik Koleji Mamak
    name: "Genetik Koleji",
    description: "5 dk, 1.8 km"
  }
];

const categories = [
 { id: "all", name: "Tümü", pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", pin: "/mall.png" },
  { id: "schools", name: "Okullar", pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", pin: "/hospital.png" },
  { id: "markets", name: "Marketler", pin: "/shop.png" },
  { id: "hotels", name: "Oteller", pin: "/ikonlar-lokasyon/otel.png" },
  { id: "mosques", name: "Camii", pin: "/ikonlar-lokasyon/cami.png" },
  { id: "ministries", name: "Bakanlıklar / Kurumlar", pin: "/ikonlar-lokasyon/kurumlar.png" },
  { id: "business", name: "İş Merkezleri", pin: "/ikonlar-lokasyon/ismerkezi.png" },
  { id: "parks", name: "Parklar", pin: "/ikonlar-lokasyon/park.png" },  
].map((cat) => ({
  ...cat,
  count: cat.id === "all" ? places.length : places.filter(p => p.category === cat.id).length,
}));

const projectLocation = {
  coords: [39.89044, 32.93402],
  name: "Nata Vega Konut Kuleleri",
  description: "Yükseklerde bir yaşam",
  image: "/natavegakonutkule5.jpeg",
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
          className="flex items-center justify-center flex-1 bg-white text-center p-0"
        >
          <div className="overflow-x-auto md:overflow-visible">
            <div className="w-[200%] md:w-auto"> {/* Zoomed width for mobile */}
              <img
                src="/alt/natavega.jpg"
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
