import Image from 'next/image';
import Link from 'next/link';

const issues = [
  {
    number: 1,
    image: '/sayi1.png',
    href: '/n-bulten-1',
    period: 'Nisan - Mayıs - Haziran 24',
  },
  {
    number: 2,
    image: '/sayi2.png',
    href: '/n-bulten-2',
    period: 'Temmuz - Ağustos - Eylül 24',
  },
  {
    number: 3,
    image: '/sayi3.png',
    href: '/n-bulten-3',
    period: 'Ekim - Kasım - Aralık 24',
  },
  {
    number: 4,
    image: '/n-bulten-dort/0.jpg',
    href: '/n-bulten-4',
    period: 'Temmuz - Ağustos - Eylül 24',
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {issues.map((issue) => (
          <Link
            key={issue.number}
            href={issue.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="w-[250px] h-[350px] relative overflow-hidden rounded-xl shadow-md">
              <Image
                src={issue.image}
                alt={`${issue.number}. Sayı`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
              />
            </div>
            <p className="mt-4 text-base font-semibold text-[#ab1e3b]">
              {issue.number}. Sayı
            </p>
            <p className="text-sm text-gray-500">{issue.period}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
