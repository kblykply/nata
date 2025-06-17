"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
  borderRadius: "0 1rem 1rem 0",
};

const center = {
  lat: 39.9334, // Ankara
  lng: 32.8597,
};

export default function OfficeLocationSection() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left Info Box */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl text-gray-900 font-semibold mb-4">Ofis Bilgileri</h2>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Telefon</p>
            <p className="text-gray-700">444 8 776</p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Adres</p>
            <p className="text-gray-700">
              İnönü Mah, Fatih Sultan Mehmet Blv, No:412 Yenimahalle, ANKARA
            </p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Çalışma Saatleri</p>
            <p className="text-gray-700">09:00 - 18:30</p>
          </div>
          <div className="mb-6">
            <p className="font-medium text-gray-700">Ofise Ulaşım</p>
            <p className="text-gray-700">
              Kızılay Metro durağından 2 dakika yürüme mesafesindedir. Cadde üzerinden ulaşım çok kolaydır.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.google.com/maps?q=39.9334,32.8597"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gray-800 text-white hover:underline text-sm px-5 py-2 rounded-full"
            >
              Haritada Aç
            </a>
            <a
              href="/rezervation"
              className="mt-6 bg-[#ab1e3b] text-white hover:underline text-sm px-5 py-2 rounded-full"
            >
              Toplantı Planlayın
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2 relative">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="h-[400px] flex items-center justify-center text-gray-500">
              Harita yükleniyor...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
