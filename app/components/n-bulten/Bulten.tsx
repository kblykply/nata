import Image from 'next/image';
import Link from 'next/link';

const NBultenSection = () => {
  return (
    <div className="px-6 md:px-20 py-12 text-center">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">N-BÜLTEN</h2>

      {/* Description */}
      <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
        N-Bülten dergimizde, NATA Holding’in projelerindeki yenilikler, başarılar ve önemli gelişmelerin yanı sıra, çeşitli içerikler ve röportajlar da yer almaktadır. Dergimiz, siz değerli okuyucularımıza hem projelerimiz hakkında en güncel bilgileri sunmayı hem de bilgilendirici içerikler sağlamayı amaçlamaktadır.
      </p>

      {/* Magazine Issues */}

<div className="flex flex-wrap justify-center gap-10">
  {/* Issue 1 */}
  <Link 
    href="https://nbulten.natayasam.com/issue-1.html" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center cursor-pointer"
  >
    <Image src="/sayi1.png" alt="1. Sayı" width={250} height={220} />
    <p className="mt-3 text-sm font-semibold text-[#ab1e3b]">1. Sayı</p>
    <p className="text-xs text-gray-500">Nisan - Mayıs - Haziran 24</p>
  </Link>

  {/* Issue 2 */}
  <Link 
    href="https://nbulten.natayasam.com/issue-2.html" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center cursor-pointer"
  >
    <Image src="/sayi2.png" alt="2. Sayı" width={250} height={220} />
    <p className="mt-3 text-sm font-semibold text-[#ab1e3b]">2. Sayı</p>
    <p className="text-xs text-gray-500">Temmuz - Ağustos - Eylül 24</p>
  </Link>

  {/* Issue 3 */}
  <Link 
    href="https://nbulten.natayasam.com/issue-3.html" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center cursor-pointer"
  >
    <Image src="/sayi3.png" alt="3. Sayı" width={250} height={220} />
    <p className="mt-3 text-sm font-semibold text-[#ab1e3b]">3. Sayı</p>
    <p className="text-xs text-gray-500">Ekim - Kasım - Aralık 24</p>
  </Link>
</div>

    </div>
  );
};

export default NBultenSection;
