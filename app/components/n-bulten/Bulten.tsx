import Image from 'next/image';
import Link from 'next/link';

const issues = [
  {
    number: 1,
    image: '/sayi1.png',
    href: '/n-bulten-1',
    period: 'Nisan - Mayıs - Haziran 24',
    summary: [
      'Dünyanın ilk 250 inşaat şirketi arasında olmak',
      'Yılın ilk çeyreğinde neler başardık',
      'Bahar yorgunluğunu nasıl atlatırız',
      'Kadın gücünü yükseltmek',
      'Stresi azaltmanın 5 eğlenceli yolu',
      'Nata Holding çatısı altında parlayan AVM’ler',
      'İşinize/hobilerinize iyi bir şekilde odaklanmak için ipuçları',
      'Gıda israfından kaçınmanın yolları',
    ],
  },
  {
    number: 2,
    image: '/sayi2.png',
    href: '/n-bulten-2',
    period: 'Temmuz - Ağustos - Eylül 24',
    summary: [
      'Şehirde yazın keyfini çıkarmanın yolları',
      'İş ve tatil dengesi nasıl sağlanır',
      'Kadın mühendis olmak',
      'İş dünyasında ve tatilde neler değişiyor?',
      'Nata Holding’in sağlam yapılar inşa etmesindeki süreç',
      'Nata Holding’in gelecek projeleri',
      'Milenyum çağında kariyer ve değişim',
    ],
  },
  {
    number: 3,
    image: '/sayi3.png',
    href: '/n-bulten-3',
    period: 'Ekim - Kasım - Aralık 24',
    summary: [
      'Nata AVM’leri',
      'Holding başkanından 10 Kasım, büyük liderin 86. ölüm yıldönümü mesajı',
      'Holding başkanından 24 Kasım Öğretmenler Günü tebriği',
    ],
  },
  {
    number: 4,
    image: '/n-bulten-dort/0.jpg',
    href: '/n-bulten-4',
    period: 'Temmuz - Ağustos - Eylül 25',
    summary: [
      'İş ve yaşam dengesi: mutluluğun anahtarı',
      'Ekip içi iletişimi arttırma yolları',
      'Vega Center kapılarını açıyor',
      'Yaz aylarında beslenme',
      'Konutlarda deprem güvenliği',
      'Türkiye’nin en güzel plajları ve saklı cennetleri',
      'Ankara’da hafta sonu',
      'Tatil sonrası, motivasyonu yeniden kazanma',
      'Ofis yaşantısını anlatan filmler',
    ],
  },
];

export default function NBultenSection() {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ab1e3b] mb-4 tracking-wide">
        N-BÜLTEN
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        N-Bülten dergimizde, NATA Holding’in projelerindeki yenilikler, başarılar ve önemli gelişmelerin yanı sıra, çeşitli içerikler ve röportajlar da yer almaktadır. Dergimiz, siz değerli okuyucularımıza hem projelerimiz hakkında en güncel bilgileri sunmayı hem de bilgilendirici içerikler sağlamayı amaçlamaktadır.
      </p>

      {/* Grid of Issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {issues.map((issue) => (
          <Link
            key={issue.number}
            href={issue.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-transform hover:scale-[1.02] text-left"
          >
            <div className="w-[220px] h-[310px] relative overflow-hidden rounded-xl shadow-md shrink-0">
              <Image
                src={issue.image}
                alt={`${issue.number}. Sayı`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-sm text-gray-500">{issue.number}. Sayı</p>
              <p className="mt-1 text-sm text-gray-500">{issue.period}</p>
              <ul className="mt-3 text-sm text-gray-700 leading-relaxed space-y-1 list-disc list-inside">
                {issue.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
