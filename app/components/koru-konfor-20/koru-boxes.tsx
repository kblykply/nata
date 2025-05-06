"use client";

import Image from "next/image";

const items = [
  {
    id: "road",
    src: "/koru-ankarac╠ºevre.png",
    label: "Ankara Çevre Yolu Üzerinde",
    className: "col-span-1 row-span-2",
  },
  {
    id: "bus",
    src: "/koru-otobu╠êsdurak.png",
    label: "Otobüs duraklarına 3 dk",
    className: "col-span-1 row-span-1",
  },
  {
    id: "villa",
    src: "/koru-2 adet 12 katl─▒.png",
    label: "2 adet 12 katlı blok ve 12 Villa",
    className: "col-span-1 row-span-1",
  },
  {
    id: "keys",
    src: "/koru-hemenoturun.png",
    label: "Hemen Oturum",
    className: "col-span-1 row-span-2",
  },
  {
    id: "city",
    src: "/koru-s╠ºehirmanzara.png",
    label: "Şehir Manzaralı",
    className: "col-span-1 row-span-1",
  },
  {
    id: "map",
    src: "/koru-harita.png",
    label: "",
    className: "col-span-2 row-span-2",
  },
  {
    id: "garden",
    src: "/koru 1000.png",
    label: "1000m2'lik bahçe alanı",
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
