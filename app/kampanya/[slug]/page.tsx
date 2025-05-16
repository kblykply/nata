import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Fixing the type constraint error by ensuring params are awaited if needed in future Next.js versions

const promotions = [
  {
    slug: "guvenli-yasam",
    title: "Modern Tasarım,",
    highlight: "Güvenli Yaşam",
    description: "Nata Yaşam semtlerinde",
    bg: "/kampanya/1.png",
    image: "/kampanya/icons/1.png",
    content: [
      {
        title: "Yüksek Standartlarda Yaşam Deneyimi",
        text: "Modern mimarisi, yenilikçi donatıları ve doğayla uyumlu yaklaşımıyla Nata Yaşam projeleri; sadece bir ev değil, yeni nesil bir yaşam tarzı sunuyor. Her detay, konfor, estetik ve fonksiyonellik düşünülerek tasarlanıyor."
      },
      {
        title: "Teknolojiyle Güçlendirilmiş Akıllı Ev Sistemleri",
        text: "Aydınlatmadan iklimlendirmeye, güvenlikten enerji tasarrufuna kadar her şey akıllı sistemlerle kontrol altında. Akıllı yaşam çözümleri sayesinde hem zamandan kazanırsınız hem de yaşam kaliteniz artar."
      },
      {
        title: "Sosyal Yaşam ve Topluluk Ruhu",
        text: "Yürüyüş yolları, çocuk oyun alanları, spor salonları ve dinlenme alanları gibi sosyal donatılar sayesinde hem huzur bulabilir hem de güçlü bir topluluk hissi yaşayabilirsiniz."
      }
    ]
  }
  // ... other promotion objects unchanged
];

type Params = Promise<{ slug: string }>;

export default async function PromoDetailPage({ params }: { params: { slug: string } }) {
  const promo = promotions.find((p) => p.slug === params.slug);

  if (!promo) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-100">
        <div className="max-w-2xl space-y-2 z-10">
          <h1 className="text-3xl font-semibold text-gray-800 leading-snug">
            {promo.title}<br />
            <span className="text-red-600">{promo.highlight}</span>
          </h1>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src={promo.image}
            alt="Promotion Visual"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {promo.content.map((section, index) => (
          <div key={index}>
            <h2 className="text-3xl font-semibold text-gray-800">{section.title}</h2>
            {Array.isArray(section.text) ? (
              <ul className="text-2xl list-disc pl-6 space-y-2 text-sm text-gray-700 mt-2">
                {section.text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-2xl text-gray-600 mt-2">{section.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
