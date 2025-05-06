"use client";

import Image from "next/image";

const items = [
  {
    id: "road",
    src: "/natura-adana ankara.png",
    label: "Adana-Ankara Otoyolu Üzerinde",
    className: "col-span-1 row-span-2",
  },
  {
    id: "bus",
    src: "/natura-otobus durak.png",
    label: "Otobüs Duraklarına 5 dk",
    className: "col-span-1 row-span-1",
  },
  {
    id: "villa",
    src: "/natura-3 blok-408 konut.png",
    label: "3 Blok 408 Konut",
    className: "col-span-1 row-span-1",
  },
  {
    id: "keys",
    src: "/natura-2025y─▒lsonuteslim.png",
    label: "2025 Yıl Sonu Teslim",
    className: "col-span-1 row-span-2",
  },
  {
    id: "city",
    src: "/naturaincek-doga yes─▒ll─▒k.png",
    label: "Doğa-Yeşillik Manzaralı",
    className: "col-span-1 row-span-1",
  },
  {
    id: "map",
    src: "/natura-harita.png",
    label: "",
    className: "col-span-2 row-span-2",
  },
  {
    id: "garden",
    src: "/natura-yat─▒r─▒m.png",
    label: "Yatırım Fırsatı",
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
