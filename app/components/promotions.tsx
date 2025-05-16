'use client';
import Link from "next/link";

const promotions = [
  {
    title: "Modern Tasarım,",
    highlight: "Güvenli Yaşam",
    description: "Nata Yaşam semtlerinde",
    bg: "/kampanya/1.png",
  },
  {
    title: "Paylaştıkça",
    highlight: "Kazanırsın",
    description: "",
    bg: "/kampanya/2.png",
  },
  {
    title: "Peşin alımlarda",
    highlight: "%20 indirim",
    description: "Temmuz’a özel fırsatlar",
    bg: "/kampanya/3.png",
  },
  {
    title: "Kişiye özel ödeme planları ile",
    highlight: "esnek ödeme imkanı",
    description: "Nata Vega Konutları",
    bg: "/kampanya/4.png",
  },
  {
    title: "1 yıl ödemesiz dönem ve 120 ay",
    highlight: "sıfır faizli kredi seçeneği",
    description: "Nata Vega Konut Kuleleri",
    bg: "/kampanya/5.png",
  },
  {
    title: "%5 peşinata",
    highlight: "36 ay sıfır faizli ödeme planı",
    description: "Temmuz’a özel fırsatlar",
    bg: "/kampanya/6.png",
  },
  {
    title: "Hemen Tapu,",
    highlight: "Hemen Teslim",
    description: "Vega Cadde",
    bg: "/kampanya/7.png",
  },
  {
    title: "%30 peşinata",
    highlight: "24 ay sıfır faizli taksit imkanı",
    description: "Vega Cadde",
    bg: "/kampanya/8.png",
  },
];

export default function PromotionGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 bg-white">
      {promotions.map((promo, index) => (
       <Link href={`/kampanya/${promo.slug}`}>
  <div
    key={index}
    className="bg-white bg-cover bg-no-repeat bg-right rounded-lg shadow-md p-6 h-112 flex flex-col justify-between cursor-pointer"
    style={{ backgroundImage: `url(${promo.bg})` }}
  >
    <div>
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">
        {promo.title} <span className="text-red-600">{promo.highlight}</span>
      </h3>
      <p className="text-sm text-gray-500 mt-2">{promo.description}</p>
    </div>
  </div>
</Link>
      ))}
    </section>
  );
}
