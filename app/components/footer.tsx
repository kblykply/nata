"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "next-intl";


const socials = [
  { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/natayasam ' },
  { icon: FaXTwitter, name: 'X', url: 'https://x.com/natayasam' },
  { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/people/Nata-Ya%C5%9Fam/100080725145381/' },
  { icon: FaYoutube, name: 'YouTube', url: 'https://www.youtube.com/@natayasam1' }
];

export default function Footer() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 text-sm">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="w-32">
            <Image src="/navbarLogo.png" alt="Logo" width={150} height={50} />
          </div>

          <a href="tel:44480018" className="inline-block text-2xl font-bold text-gray-900">
            444 80 18
          </a>
          <div className="flex flex-wrap gap-3">
<a href="/rezervation">
  <button className="px-4 py-2 bg-[#ab1e3b] text-white rounded-full">
    {t("requestCall")}
  </button>
</a>
<Link href="/contact-us">

            <button className="px-4 py-2 border rounded-full">{t("writeUs")}</button>
            </Link>

          </div>
          <div>
            <h4 className="font-semibold">{t("centralSalesOffice")}</h4>
            <p>
Mustafa Kemal, 2127. Cd No:21, 06530 Çankaya/Ankara
</p>
            <p>{t("workingHours")}</p>
          </div>
          <div>
            <p className="font-semibold mt-4">{t("socialMedia")}</p>
            <div className="flex space-x-4 mt-2">
  {socials.map(({ icon: Icon, name, url }, idx) => (
    <Link href={url} key={idx} aria-label={name} target="_blank" rel="noopener noreferrer">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-[#F1D2D6] transition">
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
            <h5 className="font-semibold mb-2">{t("ongoingProjects")}</h5>
          <ul className="flex flex-col gap-2">
  {[
    { name: "VEGA CENTER", url: "/vega-center" },
    { name: "GOAT VILLAS BILKENT", url: "/goat-villas" },
    { name: "MEGA 1453", url: "/mega-1453" },
    { name: "RAMS GARDEN BAHÇELİEVLER", url: "/rams-garden" },
    { name: "ANTARES KONUTLARI", url: "/anteres" },
    { name: "YENİ BATI PLUS", url: "/hityenibatiplus" },

    { name: "VEGA OTONOMİ", url: "/vega-otonomi" },
    { name: "MEGA ŞAŞMAZ", url: "/mega-sasmaz" },
    { name: "HİTYENİBATI", url: "/hityenibati" },
        { name: "VEGA CADDE", url: "/vega-cadde" },

  ].map((item, idx) => (
    <li key={idx}>
      <Link href={item.url} className="hover:text-red-600">
        {item.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          <div>
            <h5 className="font-semibold mb-2">{t("upcomingProjects")}</h5>
          <ul className="flex flex-col gap-2">
  {[
    { name: "YALIKAVAK", url: "https://www.google.com/maps/place/37%C2%B008'18.0%22N+27%C2%B019'06.2%22E/@37.1385557,27.3174448,669m/data=!3m1!1e3!4m4!3m3!8m2!3d37.1383333!4d27.3183889?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" },
    { name: "MİLAS KIYIKIŞLACIK", url: "https://www.google.com/maps/place/K%C4%B1y%C4%B1k%C4%B1%C5%9Flac%C4%B1k,+48200+Milas%2FMu%C4%9Fla/@37.2725837,27.6177563,667m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14bef5bf2b757283:0x7d86dea5fbe1f934!8m2!3d37.2725837!4d27.6177563!16s%2Fg%2F11p61vs7xc?hl=tr-TR&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "VEGA SOFYA", url: "https://www.google.com/maps/search/42.615207,+23.509408?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=3bd4791d-1b7b-46f4-8e7f-6debbce7e71e" },
    { name: "NATA CENTER", url: "https://www.google.com/maps/search/39.909313,+32.782915?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=32a7c5c1-6b19-491b-8ae8-b599f4810a0f" },

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


            <h5 className="font-semibold mt-4 mb-2">{t("completedProjects")}</h5>
          <ul className="flex flex-col gap-2">
  {[
    { name: "ANTARES KONUTLARI 1. ETAP", url: "/anteres" },
    { name: "VEGA CADDE", url: "/vega-cadde" },
    { name: "TEMPOINT KONUTLARI", url: "/tempoint" },
    { name: "NATA İNCEK KONUTLARI", url: "/incek" },
    { name: "NATA VEGA KONUT KULELERİ", url: "/vega-konut-kuleleri" },
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
            <h5 className="font-semibold mb-2">{t("pages")}</h5>
          <ul className="flex flex-col gap-2">
  {[
    { name: tHeader("home"), url: "/" },
    { name: tHeader("aboutUs"), url: "/about-us" },
    { name: tHeader("campaigns"), url: "/kampanya" },
    { name: tHeader("nBulletin"), url: "/n-bulten" },
    { name: tHeader("contact"), url: "/contact-us" },
   
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
  <h5 className="font-semibold mb-2">{t("otherNataSites")}</h5>
          <ul className="flex flex-col gap-2">
    {[
      { name: "Nata Holding", url: "https://www.nataholding.com/" },
      { name: "Vega AVM", url: "https://vegaavm.com.tr/" },

     
    ].map((item, i) => (
   <li key={i}>
  <Link href={item.url} passHref legacyBehavior>
    <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-red-600 transition-colors">
      {item.name}
    </a>
  </Link>
</li>
    ))}
  </ul>
</div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-xs text-center text-gray-500">
        <p className="mb-2">
          <Link href="/kvkk" className="text-blue-600 hover:underline">
            {t("privacyPolicy")}
          </Link>
          {" · "}{t("personalDataConsent")}
        </p>
        <p>
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
