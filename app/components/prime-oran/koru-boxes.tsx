"use client";

import Image from "next/image";

const items = [
  {
    id: "road",
    src: "/prime-doga ve sehrin bulus╠ºmas─▒.png",
    label: "Doğa ve Şehrin Buluşması",
    className: "col-span-1 row-span-2",
  },
  {
    id: "bus",
    src: "/prime-otobusdurag─▒.png",
    label: "Otobüs Duraklarına 7 dk",
    className: "col-span-1 row-span-1",
  },
  {
    id: "villa",
    src: "/prime-1214.png",
    label: "1214 Daire 31 Ticari Alan",
    className: "col-span-1 row-span-1",
  },
  {
    id: "keys",
    src: "/prime-sosyalolanak.png",
    label: "Sosyal Olanaklar",
    className: "col-span-1 row-span-2",
  },
  {
    id: "city",
    src: "/prime-15.000.png",
    label: "15.500 m² Peyzaj Alanı",
    className: "col-span-1 row-span-1",
  },
  {
    id: "map",
    src: "/prime-harita.png",
    label: "",
    className: "col-span-2 row-span-2",
  },
  {
    id: "garden",
    src: "/prime-okul.png",
    label: "Okulların Birleşme Noktası",
    className: "col-span-1 row-span-1",
  },
];



export default function Gallery() {
  return (
<div className="min-h-screen px-6 py-10 bg-white max-w-[1440px] mx-auto">      <div
        className="grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 200px)",
          gridTemplateAreas: `
            "road bus villa keys"
            "road map map keys"
            "city map map garden"
          `,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{ gridArea: item.id }}
            className="relative rounded-xl overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
            />
            {item.label && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-3 flex items-end">
                <p className="text-white text-sm font-semibold">
                  {item.label}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
