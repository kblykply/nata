"use client";
import { useState } from "react";
import ContactPopup from "./ContactPopup";

const projects = [
  {
    title: "NATA DELTA",
    subtitle: "Konut & Avm",
    image: "/nata-delta.jpg",
    blur: true,
    locationLink: "https://www.google.com/maps/place/%C4%B0stanbul+Yolu,+Ankara/@39.9530369,32.6976986,17z/data=!3m1!4b1!4m6!3m5!1s0x14d337c03f8b679b:0xefcf5f62cd2142c!8m2!3d39.9530369!4d32.6976986!16s%2Fg%2F1232c84w?entry=ttu",
    demandLink: "/on-talep/nata-delta",
  },
  {
    title: "YALIKAVAK",
    subtitle: "Exclusive Villa",
    image: "/nata-yalikavak.jpg",
    blur: true,
    locationLink: "https://www.google.com/maps/place/37%C2%B008'18.0%22N+27%C2%B019'06.2%22E/@37.1383383,27.3161983,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d37.138334!4d27.318387",
    demandLink: "/on-talep/yalikavak",
  },
  {
    title: "MİLAS KIYIKIŞLACIK",
    subtitle: "VİLLA & KONUT\n& TURİZM & SAĞLIK & AVM",
    image: "/nata-kiyikislacik.jpg",
    blur: true,
    locationLink: "https://www.google.com/maps?q=K%C4%B1y%C4%B1k%C4%B1%C5%9Flac%C4%B1k,+48200+Milas/Mu%C4%9Fla&ftid=0x14bef5bf2b757283:0x7d86dea5fbe1f934&hl=tr-TR&gl=tr&entry=gps&g_ep=INeCAw%3D%3D&g_st=iw",
    demandLink: "/on-talep/milas",
  },
];

export default function FeaturedProjects() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <>
      <section id="yakinda-projeler" className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-10">
          Planlanan <span className="text-[#ab1e3b]">Projeler</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-60 h-60 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-semibold whitespace-pre-line">{project.title}</p>
              <p className="text-sm text-gray-500 whitespace-pre-line">{project.subtitle}</p>
              <div className="flex gap-3 mt-3">
                <a
                  href={project.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  Lokasyon
                </a>
                <button
                  onClick={() => setShowContactPopup(true)}
                  className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  Ön Talep Oluştur
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Show popup outside of layout */}
      {showContactPopup && <ContactPopup onClose={() => setShowContactPopup(false)} />}
    </>
  );
}
