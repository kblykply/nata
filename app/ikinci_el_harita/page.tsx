"use client";

import { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaMapMarkerAlt } from "react-icons/fa";

interface SimpleListing {
  title: string;
  price: string;
  currency: string;
  location: string;
  type: string;
  specs: string[];
  image: string;
  imageAlt: string;
  link: string;
  coords: [number, number];
}

const listings: SimpleListing[] = [
  {
    title: "Koru Konfor",
    price: "10 Milyon",
    currency: "USD",
    location: "Etimesgut/Ankara",
    type: "Rezidans",
    specs: ["2+1", "117 m²", "1. Kat"],
    image: "/KORU KONFOR 5+1.png",
    imageAlt: "/koru-map.png",
    link: "/koru-konfor-20",
    coords: [39.9439, 32.6901],
  },
  {
    title: "Natura İncek",
    price: "7.75 Milyon",
    currency: "TL",
    location: "Gölbaşı/Ankara",
    type: "Ofis",
    specs: ["2+1 Flat", "80 m²", "1. Bodrum Kat"],
    image: "/NATURA I╠çNCEK 2+1.png",
    imageAlt: "/natura-map.png",
    link: "/natura-20",
    coords: [39.7964, 32.7814],
  },
  {
    title: "Prime Oran",
    price: "16.8 Milyon",
    currency: "TL",
    location: "Çankaya/Ankara",
    type: "Rezidans",
    specs: ["2+1", "117 m²", "31. Kat"],
    image: "/PRIME ORAN 2+1 TI╠çPC16-D1_D2 BLOK.png",
    imageAlt: "/prime-map.png",
    link: "/prime-oran-20",
    coords: [39.8889, 32.8135],
  },
  {
    title: "Koru Konfor",
    price: "7.75 Milyon",
    currency: "TL",
    location: "Etimesgut/Ankara",
    type: "Rezidans",
    specs: ["2+1", "80 m²", "1. Kat"],
    image: "/KORU KONFOR 5+1.png",
    imageAlt: "/koru-map.png",
    link: "/koru-konfor-20",
    coords: [39.9439, 32.6901],
  },
  {
    title: "Natura İncek",
    price: "10 Milyon",
    currency: "USD",
    location: "Gölbaşı/Ankara",
    type: "Ofis",
    specs: ["3+1", "144 m²", "3. Kat"],
    image: "/NATURA I╠çNCEK 2+1.png",
    imageAlt: "/natura-map.png",
    link: "/natura-20",
    coords: [39.7964, 32.7814],
  },
  {
    title: "Koru Konfor",
    price: "10 Milyon",
    currency: "USD",
    location: "Etimesgut/Ankara",
    type: "Rezidans",
    specs: ["3+1", "144 m²", "3. Kat"],
    image: "/KORU KONFOR- 4+1.png",
    imageAlt: "/koru-map.png",
    link: "/koru-konfor-20",
    coords: [39.9439, 32.6901],
  },
  {
    title: "Natura İncek",
    price: "10 Milyon",
    currency: "USD",
    location: "Gölbaşı/Ankara",
    type: "Ofis",
    specs: ["4+1", "154 m²", "4. Kat"],
    image: "/NATURA I╠çNCEK 2+1.png",
    imageAlt: "/natura-map.png",
    link: "/natura-20",
    coords: [39.7964, 32.7814],
  },
  {
    title: "Prime Oran",
    price: "14.2 Milyon",
    currency: "TL",
    location: "Çankaya/Ankara",
    type: "Rezidans",
    specs: ["3+1", "140 m²", "14. Kat"],
    image: "/PRIME ORAN 3+1 TI╠çPB2B-A1 BLOK.png",
    imageAlt: "/prime-map.png",
    link: "/prime-oran-20",
    coords: [39.8889, 32.8135],
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 39.9208,
  lng: 32.8541,
};

export default function SimpleMapWithSidebar() {
  const [selectedListing, setSelectedListing] = useState<SimpleListing | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Harita yükleniyor...</div>;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-[26rem] overflow-y-auto p-6 bg-white border-r border-gray-200 shadow-lg">
        <div className="space-y-6">
          {listings.map((listing, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedListing(listing)}
              className="cursor-pointer flex items-center gap-4 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition bg-white"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-32 h-28 object-cover rounded-l-xl"
              />
              <div className="flex flex-col pr-3 py-2">
                <h3 className="text-base font-semibold">{listing.title}</h3>
                <p className="text-sm text-gray-600">{listing.location}</p>
                <p className="text-xs text-gray-500">{listing.specs.join(" · ")}</p>
                <span className="mt-2 text-xs font-medium text-[#aa1e3a]">{listing.price} {listing.currency}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Map */}
      <main className="flex-1">
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
           ],
         }}
       >
          {listings.map((listing, idx) => (
            <Marker
              key={idx}
              position={{ lat: listing.coords[0], lng: listing.coords[1] }}
              icon={{
                url: "/pin-red.png",
                scaledSize: new window.google.maps.Size(32, 32),
              }}
              onClick={() => setSelectedListing(listing)}
            />
          ))}

          {selectedListing && (
            <InfoWindow
              position={{
                lat: selectedListing.coords[0],
                lng: selectedListing.coords[1],
              }}
              onCloseClick={() => setSelectedListing(null)}
            >
              <div className="w-56">
                <img
                  src={selectedListing.image}
                  alt={selectedListing.title}
                  className="w-full h-24 object-cover rounded"
                />
                <h3 className="font-semibold text-sm mt-2">{selectedListing.title}</h3>
                <p className="text-xs text-gray-600">{selectedListing.location}</p>
                <p className="text-xs text-gray-500">{selectedListing.specs.join(" · ")}</p>
                <a
                  href={selectedListing.link}
                  className="mt-2 inline-block bg-[#aa1e3a] text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                >
                  Projeyi Gör
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </main>
    </div>
  );
}
