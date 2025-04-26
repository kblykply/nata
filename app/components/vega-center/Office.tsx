"use client";

export default function OfficeLocationSection() {
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
            <p className="text-gray-700">İnönü Mah, Fatih Sultan Mehmet Blv, No:412 Yenimahalle, ANKARA</p>
          </div>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Çalışma Saatleri</p>
            <p className="text-gray-700">09:00 - 21:00</p>
          </div>
          <div className="mb-6">
            <p className="font-medium text-gray-700">Ofise Ulaşım</p>
            <p className="text-gray-700">
              Kızılay Metro durağından 2 dakika yürüme mesafesindedir. Cadde üzerinden ulaşım çok kolaydır.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://yandex.com.tr/harita/ankara/?ll=32.8597%2C39.9334&z=16&l=map&pt=32.8597,39.9334,pm2rdm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gray-800 text-white text-sm px-5 py-2 rounded-full "
            >
              Haritada Aç
            </a>
            <a
              href="#"
              className="mt-6 bg-[#ab1e3b]  text-white text-sm px-5 py-2 rounded-full"
            >
              Toplantı Planlayın
            </a>
          </div>
        </div>

        {/* Map Box */}
        <div className="w-full md:w-1/2 relative">
          <iframe
            src="https://yandex.com.tr/map-widget/v1/?ll=32.8597%2C39.9334&z=16&pt=32.8597,39.9334,pm2rdm"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full rounded-r-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
