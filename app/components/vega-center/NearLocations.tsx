  "use client";

  import { useState } from "react";
  import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
  } from "@pbe/react-yandex-maps";

  const categories = [
    { id: "all", name: "Tümü", count: 270, pin: "/pin.png" },
    { id: "malls", name: "AVM'ler", count: 30, pin: "/mall.png" },
    { id: "schools", name: "Okullar", count: 44, pin: "/scool.png" },
    { id: "hospitals", name: "Hastaneler", count: 12, pin: "/hospital.png" },
    { id: "markets", name: "Marketler", count: 18, pin: "/shop.png" },
  ];

  const places = [
    {
      id: 1,
      category: "malls",
      coords: [39.9101632, 32.7757069],
      name: "CEPA Alışveriş Merkezi",
      description: "4 dk, 1.5 km"
    },
    {
      id: 2,
      category: "malls",
      coords: [39.9112, 32.7583],
      name: "Tepe Prime Alışveriş Merkezi",
      description: "4 dk, 1.5 km"
    },
    {
      id: 3,
      category: "malls",
      coords: [39.9093, 32.7647],
      name: "Maidan AVM",
      description: "3 dk, 850 m"
    },
    {
      id: 4,
      category: "malls",
      coords: [39.9103, 32.7658],
      name: "Kentpark Alışveriş Merkezi",
      description: "3 dk, 1.3 km"
    },
    {
      id: 5,
      category: "schools",
      coords: [39.9126, 32.7622],
      name: "Ankara Özel Tevfik Fikret Okulları",
      description: "2 dk, 800 m"
    },
    {
      id: 6,
      category: "schools",
      coords: [39.9131, 32.7630],
      name: "Yasemin Karakaya Ortaokulu",
      description: "2 dk, 700 m"
    },
    {
      id: 7,
      category: "schools",
      coords: [39.9017, 32.7617],
      name: "ODTÜ Geliştirme Vakfı Ankara Okulları",
      description: "8 dk, 4.5 km"
    },
    {
      id: 8,
      category: "schools",
      coords: [39.9128, 32.7599],
      name: "Ankara Sınav Koleji",
      description: "7 dk, 3.5 km"
    },
    {
      id: 9,
      category: "hospitals",
      coords: [39.9017, 32.7617],
      name: "Ankara Bilkent Şehir Hastanesi",
      description: "6 dk, 3 km"
    },
    {
      id: 10,
      category: "hospitals",
      coords: [39.9109, 32.8540],
      name: "Ankara Eğitim ve Araştırma Hastanesi",
      description: "7 dk, 3 km"
    },
    {
      id: 11,
      category: "hospitals",
      coords: [39.9095, 32.7650],
      name: "Medicana Ankara Hastanesi",
      description: "7 dk, 3.5 km"
    },
    {
      id: 12,
      category: "hospitals",
      coords: [39.8907, 32.7103],
      name: "Medisun Hastanesi",
      description: "10 dk, 7.3 km"
    },
    {
      id: 13,
      category: "markets",
      coords: [39.9100, 32.7650],
      name: "Migros Market",
      description: "4 dk, 1.5 km"
    },
    {
      id: 14,
      category: "markets",
      coords: [39.9128, 32.7599],
      name: "Barış Market",
      description: "3 dk, 1.4 km"
    },
    {
      id: 15,
      category: "markets",
      coords: [39.9136, 32.7635],
      name: "Yaşam Market",
      description: "1 dk, 300 m"
    },
    {
      id: 16,
      category: "markets",
      coords: [39.9136, 32.7635],
      name: "Eğinli Market",
      description: "1 dk, 300 m"
    },
    {
      id: 17,
      category: "markets",
      coords: [39.9136, 32.7635],
      name: "Şok Market",
      description: "1 dk, 300 m"
    },
    {
      id: 18,
      category: "markets",
      coords: [39.9110, 32.7640],
      name: "Çağdaş Market",
      description: "3 dk, 1.2 km"
    },
    {
      id: 19,
      category: "markets",
      coords: [39.9105, 32.7660],
      name: "CarrefourSA",
      description: "4 dk, 2 km"
    },
  ];
  

  const projectLocation = {
    coords: [39.913899, 32.767134],
    name: "VEGA CENTER",
    description: "İş dünyasının yeni merkezi VEGA Center",
    image: "/vega-center-03.jpg",
  };

  export default function NearbyMap() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPlaces =
      selectedCategory === "all"
        ? places
        : places.filter((place) => place.category === selectedCategory);

    const getCategoryPinUrl = (categoryId: string) => {
      return categories.find((cat) => cat.id === categoryId)?.pin || "/icons/default.png";
    };

    return (
      <section className="flex h-screen w-full">
        {/* Sidebar */}
        <aside className="w-[320px] bg-white shadow-md p-4 overflow-y-auto z-10">
          <h3 className="font-semibold text-gray-800 mb-4 text-sm">Yakındaki popüler yerler</h3>
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
                  <img src={cat.pin} alt={cat.name} className="w-5 h-5" />
                  <span className="text-sm text-gray-800">{cat.name}</span>
                </div>
                <span className="text-xs text-gray-500">{cat.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Map */}
        <div className="flex-1">
        <YMaps query={{ lang: "tr_TR" }}>
          
          
                      <Map
              defaultState={{ center: [39.913899, 32.767134], zoom: 15 }}
              width="100%"
              height="100%"
              modules={["templateLayoutFactory", "layout.ImageWithContent", "balloon"]}
            >
              <ZoomControl options={{ position: { right: 10, top: 10 } }} />

              {/* Project Pin */}
              <Placemark
                geometry={projectLocation.coords}
                properties={{
                  balloonContentHeader: `<strong>${projectLocation.name}</strong>`,
                  balloonContentBody: `
                    <div style='display:flex;align-items:center;gap:10px;'>
                      <img src='${projectLocation.image}' style='width:40px;height:40px;border-radius:50%;object-fit:cover;' />
                      <div>
                        <span style='font-size:12px;'>${projectLocation.description}</span>
                      </div>
                    </div>
                  `,
                }}
                options={{
                  preset: "islands#redDotIcon",
                  balloonCloseButton: true,
                  openBalloonOnClick: true
                }}
                modules={["geoObject.addon.balloon"]}
              />

              {/* Category Places */}
              {filteredPlaces.map((place) => (
                <Placemark
                  key={place.id}
                  geometry={place.coords}
                  properties={{
                    balloonContentHeader: `<strong>${place.name}</strong>`,
                    balloonContentBody: place.description,
                  }}
                  options={{
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: getCategoryPinUrl(place.category),
                                                        iconImageSize: [42, 42],
                    iconImageOffset: [-21, -42],
                  }}
                  modules={["geoObject.addon.balloon"]}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </section>
    );
  }
