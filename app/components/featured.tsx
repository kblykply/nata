"use client";
import { useState } from "react";
import DemandPopup from "./DemandPopup"; // Add this import


const projects = [
  {
    title: "YALIKAVAK",
    subtitle: "Exclusive Villa",
    image: "/nata-yalikavak.jpg",
    blur: true,
    locationLink:
      "https://www.google.com/maps/place/37%C2%B008'18.0%22N+27%C2%B019'06.2%22E/@37.1383383,27.3161983,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d37.138334!4d27.318387",
    demandLink: "/on-talep/yalikavak",
  },
  {
    title: "MİLAS KIYIKIŞLACIK",
    subtitle: "VİLLA & KONUT\n& TURİZM & SAĞLIK & AVM",
    image: "/nata-kiyikislacik.jpg",
    blur: true,
    locationLink:
      "https://www.google.com/maps?q=K%C4%B1y%C4%B1k%C4%B1%C5%9Flac%C4%B1k,+48200+Milas/Mu%C4%9Fla&ftid=0x14bef5bf2b757283:0x7d86dea5fbe1f934&hl=tr-TR&gl=tr&entry=gps&g_ep=INeCAw%3D%3D&g_st=iw",
    demandLink: "/on-talep/milas",
  },
  {
    title: "VEGA SOFYA",
    subtitle: "AVM & Konut & Ofis Projesi",
    image: "/sofyaprojesiyakında.png",
    blur: true,
   
    demandLink: "/on-talep/vega-sofya",
  },
  {
    title: "NATA CENTER",
    subtitle: "Karma Kullanım: AVM, Ofis, Rezidans",
    image: "/natacenteryakinda.png",
    blur: true,

    demandLink: "/on-talep/nata-center",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);


  return (
    <>
      <section id="yakinda-projeler" className="py-10 px-4 sm:px-6 text-center">
  <h2 className="text-xl sm:text-2xl font-semibold mb-10">
    Planlanan <span className="text-[#ab1e3b]">Projeler</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
    {projects.map((project, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-xl overflow-hidden">
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
          <>
        <button
onClick={() => setSelectedProject(project.title)}
  className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition"
>
  Ön Talep Oluştur
</button>

          </>
        </div>
      </div>
    ))}
  </div>
</section>


{selectedProject && (
  <DemandPopup
    projects={projects}
    selectedProject={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
)}
  </>
  );
}
