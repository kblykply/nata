"use client";

import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Image from "next/image";

const items = [
  {
    id: "road",
    src: "/natura-adana ankara.png",
    label: "Adana-Ankara Otoyolu Üzerinde",
  },
  {
    id: "bus",
    src: "/natura-otobus durak.png",
    label: "Otobüs Duraklarına 5 dk",
  },
  {
    id: "villa",
    src: "/natura-3 blok-408 konut.png",
    label: "3 Blok 408 Konut",
  },
  {
    id: "keys",
    src: "/natura-2025y─▒lsonuteslim.png",
    label: "2025 Yıl Sonu Teslim",
  },
  {
    id: "city",
    src: "/naturaincek-doga yes─▒ll─▒k.png",
    label: "Doğa-Yeşillik Manzaralı",
  },
  {
    id: "map",
    label: "",
  },
  {
    id: "garden",
    src: "/natura-yat─▒r─▒m.png",
    label: "Yatırım Fırsatı",
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 39.92077,
  lng: 32.85411,
};

const mapStyles = [
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [{ color: "#faf5ed" }, { lightness: 0 }, { gamma: 1 }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#bae5a6" }],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [{ weight: 1.0 }, { gamma: 1.8 }, { saturation: 0 }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ hue: "#ffb200" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ lightness: 0 }, { gamma: 1 }],
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
    stylers: [{ color: "#a0daf2" }],
  },
];

export default function Gallery() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridTemplate = !isMobile
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 200px)",
        gridTemplateAreas: `
          "road bus villa keys"
          "road map map keys"
          "city map map garden"
        `,
      }
    : undefined;

  return (
    <div className="min-h-screen px-6 py-10 bg-white max-w-[1440px] mx-auto">
      <div
        className={`grid gap-4 ${isMobile ? "grid-cols-1 auto-rows-[200px]" : ""}`}
        style={gridTemplate}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={!isMobile ? { gridArea: item.id } : {}}
            className="relative rounded-xl overflow-hidden"
          >
            {item.id === "map" ? (
              isLoaded && (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                  options={{
                    disableDefaultUI: true,
                    styles: mapStyles,
                  }}
                >
                  <Marker
                    position={center}
                    icon={{
                      url: "/pin-red.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                </GoogleMap>
              )
            ) : (
              <>
                {item.src && (
  <Image
    src={item.src}
    alt={item.label}
    fill
    className="object-cover"
  />
)}

                {item.label && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-3 flex items-end">
                    <p className="text-white text-sm font-semibold">
                      {item.label}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
