'use client';

import Link from "next/link";
import { kampanyalar } from "@/data/kampanyalar";

export default function PromotionGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 bg-white">
      {kampanyalar.map((promo) => (
        <Link key={promo.slug} href={`/kampanya/${promo.slug}`}>
          <div
            className="bg-white bg-cover bg-no-repeat bg-right rounded-lg shadow-md p-6 h-112 flex flex-col justify-between cursor-pointer"
            style={{ backgroundImage: `url(${promo.bg})` }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                {promo.title}{" "}
                <span className="text-red-600">{promo.highlight}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-2">{promo.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
