"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 39.923083,
  lng: 32.80325,
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

export default function MomentBestepeMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <section className="w-full bg-white px-6 pb-12 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-[420px] rounded-xl overflow-hidden">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
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
          )}
        </div>
      </div>
    </section>
  );
}
