import Image from "next/image";
import { notFound } from "next/navigation";





    const promotions = [
  {
  slug: "guvenli-yasam",
  title: "Modern Tasarım,",
  highlight: "Güvenli Yaşam",
  description: "Nata Yaşam semtlerinde",
  bg: "/kampanya/1.png",
  image: "/kampanya/icons/1.png", // lightbulb image with heart and house
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
},
  {
  slug: "paylastikca-kazanirsin",
  title: "Paylaştıkça",
  highlight: "Kazanırsın",
  description: "",
  bg: "/kampanya/2.png",
  image: "/kampanya/icons/2.png",
  content: [
    {
      title: "Sevdiklerinle Paylaş, Herkese Kazandır!",
      text: "Nata Yaşam deneyimini sevdiklerine anlat, hem sen kazan hem de onlar güvenli bir yaşamla tanışsın! Her yönlendirdiğin yeni müşteri için sürpriz avantajlar ve özel hediyeler seni bekliyor."
    },
    {
      title: "Avantajlar Neler?",
      text: [
        "Yönlendirme başına indirim veya hediye çeki",
        "Özel kampanyalara erken erişim",
        "Çekiliş ve sürpriz ödüllere katılım hakkı",
        "Topluluğa özel etkinliklere davetiye"
      ]
    }
  ]
}

,
  {
  slug: "pesin-alim-20-indirim",
  title: "Peşin alımlarda",
  highlight: "%20 indirim",
  description: "Temmuz’a özel fırsatlar",
  bg: "/kampanya/3.png",
  image: "/kampanya/icons/3.png", // image with stacked coins
  content: [
    {
      title: "Şimdi Al, Kazançla Başla!",
      text: "Nata Yaşam projelerinde peşin ödemeye özel %20’ye varan indirim fırsatları seni bekliyor. Yatırımını bugünden yap, kazancını en baştan garantile.\n\nSatış danışmanlarımızla dakikalar içinde iletişime geç, senin için en uygun ödeme planını birlikte oluşturalım. Avantajlı başlangıç için doğru zaman: şimdi."
    },
    {
      title: "Fırsatlar Neler?",
      text: [
        "İndirimli fiyatlarla ödeme avantajı",
        "Yükselen değerli projelerde kârlı giriş",
        "Sınırlı süreli kampanya ile avantajı kaçırma",
        "Hemen sahip ol, dilediğin gibi değerlendir"
      ]
    }
  ]
}
,
 {
  slug: "esnek-odeme-imkani",
  title: "Kişiye özel ödeme planları ile",
  highlight: "esnek ödeme imkanı",
  description: "Nata Vega Konutları",
  bg: "/kampanya/4.png",
  image: "/kampanya/icons/4.png", // parachute with keys
  content: [
    {
      title: "Her Bütçeye, Her İhtiyaca Özel Çözümler",
      text: "Nata Yaşam'da ev sahibi olmak artık çok daha kolay. Senin için en uygun ödeme koşullarını birlikte planlıyoruz. Aylık gelirine, tercihlerine ve yatırım beklentine göre esnek ödeme seçenekleriyle hayalindeki yaşam seni bekliyor!"
    },
    {
      title: "Seçenekler Arasında Neler Var?",
      text: [
        "Uzun vadeli taksit imkânı",
        "Ara ödemeli planlar",
        "Balon ödeme seçenekleri",
        "Teslim sonrası ödeme desteği",
        "Kira öder gibi taksitli model"
      ]
    }
  ]
}
,
  {
  slug: "sifir-faizli-kredi",
  title: "1 yıl ödemesiz dönem ve 120 ay",
  highlight: "sıfır faizli kredi seçeneği",
  description: "Nata Vega Konut Kuleleri",
  bg: "/kampanya/5.png",
  image: "/kampanya/icons/5.png", // hourglass image
  content: [
    {
      title: "Zaman Kazandıran Kredi Seçeneği",
      text: "Ev sahibi olmak hiç bu kadar kolay ve risksiz olmamıştı. Nata Yaşam projelerinde şimdi al, 1 yıl sonra ödemeye başla! Üstelik 120 aya varan vade imkânıyla sıfır faiz avantajı seni bekliyor."
    },
    {
      title: "Avantajları Nelerdir?",
      text: [
        "İlk yıl ödeme yapmadan rahat bir başlangıç",
        "10 yıla kadar taksit seçeneği",
        "Faizsiz kredi desteğiyle ek yük yok",
        "Bankasız, kefilsiz hızlı süreç",
        "Aylık sabit ödemelerle kolay planlama"
      ]
    }
  ]
}
,
  {
  slug: "bes-pesin-36-ay",
  title: "%5 peşinatla",
  highlight: "36 ay sıfır faizli ödeme planı",
  description: "Temmuz’a özel fırsatlar",
  bg: "/kampanya/6.png",
  image: "/kampanya/icons/6.png", // calendar + red pin image
  content: [
    {
      title: "Minimum Peşinatla Sahip Ol, Faiz Ödeme!",
      text: "Nata Yaşam’da ev sahibi olmak için büyük birikimlere gerek yok! %5 gibi düşük bir peşinatla hayalindeki konuta adım at, 36 ay boyunca sıfır faizle ödemeni rahatça tamamla."
    },
    {
      title: "Avantajları:",
      text: [
        "Düşük başlangıç sermayesiyle kolay erişim",
        "Faizsiz ödeme modeliyle sıfır ek maliyet",
        "Net, sabit ödeme planı",
        "Basit ve hızlı başvuru süreci"
      ]
    }
  ]
}
,
  {
  slug: "hemen-tapu-hemen-teslim",
  title: "Hemen Tapu,",
  highlight: "Hemen Teslim",
  description: "Vega Cadde",
  bg: "/kampanya/7.png",
  image: "/kampanya/icons/7.png", // hand holding keys
  content: [
    {
      title: "Zaman Kaybetmeden Sahip Ol!",
      text: "Nata Yaşam’da sizi bekleyen daireniz hazır! Tüm işlemleriniz kısa sürede tamamlanıyor; tapunuzu hemen alıyor, anahtarınızı teslim alarak yeni hayatınıza başlıyorsunuz."
    },
    {
      title: "Hızlı Teslimatın Avantajları:",
      text: [
        "Taşınmaya hazır, kullanıma açık daireler",
        "Hızlı tapu devriyle bürokrasiye takılmadan sahiplik",
        "Günü belirle, sözleşmeni yap, aynı gün teslim",
        "Hemen otur, hemen kiraya ver, hemen değerlendir"
      ]
    }
  ]
}
,
 {
  slug: "otuz-pesinat-24-ay",
  title: "%30 peşinatla",
  highlight: "24 ay sıfır faizli taksit imkanı",
  description: "Vega Cadde",
  bg: "/kampanya/8.png",
  image: "/kampanya/icons/8.png", // house on red path image
  content: [
    {
      title: "Daha Kısa Vade, Daha Hızlı Sahiplik",
      text: "Nata Yaşam’da konut sahibi olmak için uzun vadeler beklemenize gerek yok. %30 peşinatla başlayın, 2 yıl boyunca faizsiz ödeme avantajıyla hızla mülk sahibi olun."
    },
    {
      title: "Avantajları:",
      text: [
        "Daha kısa sürede borçsuz mülk sahibi olma imkânı",
        "Net ve sabit 24 aylık ödeme planı",
        "Sıfır faizle ek maliyetlerden arındırılmış sistem",
        "Hızlı tapu devri ve kolay süreç yönetimi"
      ]
    }
  ]
},
];


export default async function PromoDetailPage({ params }: PageProps) {
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
