"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const socials = [
  { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/natayasam ' },
  { icon: FaXTwitter, name: 'X', url: 'https://x.com/natayasam' },
  { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/people/Nata-Ya%C5%9Fam/100080725145381/' },
  { icon: FaYoutube, name: 'YouTube', url: 'https://www.youtube.com/channel/UChLQfpkpdd4fNd9FjTxInRg' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 text-sm">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="w-32">
            <Image src="/navbarLogo.png" alt="Logo" width={150} height={50} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">444 8 776</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#ab1e3b] text-white rounded-full">Bir çağrı talep edin </button>
            <button className="px-4 py-2 border rounded-full">Bize yazın</button>
          </div>
          <div>
            <h4 className="font-semibold">Merkezi Satış Ofisi</h4>
            <p>
İnönü Mah, Fatih Sultan Mehmet Blv, No:412 Yenimahalle, ANKARA
</p>
            <p>9:00 ile 21:00 saatleri arasında çalışıyoruz.</p>
          </div>
          <div>
            <p className="font-semibold mt-4">Sosyal Medya</p>
            <div className="flex space-x-4 mt-2">
  {socials.map(({ icon: Icon, name, url }, idx) => (
    <Link href={url} key={idx} aria-label={name} target="_blank" rel="noopener noreferrer">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-[#ab1e3b] transition">
        <Icon className="text-xl text-gray-700" />
      </div>
    </Link>
  ))}
</div>

          </div>
        </div>

        {/* Middle Columns */}
        <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div>
            <h5 className="font-semibold mb-2">Devam Eden Projeler</h5>
            <ul className="flex flex-wrap gap-2">
  {[
    { name: "VEGA CENTER", url: "/vega-center" },
    { name: "GOAT VILLAS BILKENT", url: "/goat-villas" },
    { name: "MEGA 1453", url: "/mega-1453" },
    { name: "RAMS GARDEN BAHÇELİEVLER", url: "/rams-garden" },
    { name: "ANTARES KONUTLARI", url: "/anteres" },
    { name: "VEGA OTONOMİ", url: "/vega-otonomi" },
    { name: "MEGA ŞAŞMAZ", url: "/mega-sasmaz" },
    { name: "HİTYENİBATI", url: "/hityenibati" },
  ].map((item, idx) => (
    <li key={idx}>
      <Link
        href={item.url}
        className="hover:text-red-600"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Gelecek Projeler</h5>
            <ul className="flex flex-wrap gap-2">
  {[
    { name: "NATA DELTA", url: "/" },
    { name: "YALIKAVAK", url: "/" },
    { name: "MİLAS KIYIKIŞLACIK", url: "/" },
  ].map((item, idx) => (
    <li key={idx}>
  <Link
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm hover:text-red-600 transition"
  >
    {item.name}
  </Link>
</li>
  ))}
</ul>


            <h5 className="font-semibold mt-4 mb-2">Tamamlanmış Projeler</h5>
            <ul className="flex flex-wrap gap-2">
  {[
    { name: "ANTARES KONUTLARI 1. ETAP", url: "https://natayasam.com/projects/antares-konutlari.html" },
    { name: "VEGA CADDE", url: "https://natayasam.com/projects/vega-cadde.html" },
    { name: "TEMPOINT KONUTLARI", url: "https://natayasam.com/projects/tempoint-konutlari.html" },
    { name: "NATA İNCEK KONUTLARI", url: "https://natayasam.com/projects/nata-incek-konutlari.html" },
    { name: "NATA VEGA KONUT KULELERİ", url: "https://natayasam.com/projects/nata-vega-konut-kuleleri.html" },
  ].map((item, idx) => (
    <li key={idx}>
      <Link
        href={item.url}
            target="_blank"
    rel="noopener noreferrer"
        className="text-sm hover:text-red-600 transition"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          <div>
            <h5 className="font-semibold mb-2">Sayfalar</h5>
            <ul className="space-y-1">
  {[
    { name: "Ana Sayfa", url: "/" },
    { name: "Hakkımızda", url: "/about-us" },
    { name: "Kampanyalar", url: "/kampanya" },
    { name: "N-Bülten", url: "/n-bulten" },
    { name: "İletişim", url: "/contact-us" },
   
  ].map((item, i) => (
    <li key={i}>
      <Link href={item.url} className="hover:text-red-600 transition">
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          <div>
  <h5 className="font-semibold mb-2">Diğer Nata Siteleri</h5>
  <ul className="space-y-1">
    {[
      { name: "Nata Holding", url: "https://www.nataholding.com/" },
      { name: "Vega AVM", url: "https://vegaavm.com.tr/" },

     
    ].map((item, i) => (
      <li key={i}>
        <Link href={item.url} className="text-sm hover:text-red-600 transition-colors">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-xs text-center text-gray-500">
        <p className="mb-2">Gizlilik Politikası · Kişisel verilerin işlenmesine onay</p>
        <p>
          © NATA HOLDING 2025. Tüm hakları saklıdır. Bu sitede yayınlanan bilgiler sadece bilgilendirme amaçlıdır.
        </p>
      </div>
    </footer>
  );
}
