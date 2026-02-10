"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import DemandPopup from "./DemandPopup";

const projects = [
  {
    title: "BODRUM-YALIKAVAK",
    subtitleKey: "planned.bodrumYalikavakSubtitle",
    image: "/nata-yalikavak.jpg",
    blur: true,
    locationLink:
      "https://www.google.com/maps/place/37%C2%B008'18.0%22N+27%C2%B019'06.2%22E/@37.1383383,27.3161983,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d37.138334!4d27.318387",
    demandLink: "/on-talep/yalikavak",
  },
  {
    title: "MİLAS KIYIKIŞLACIK",
    subtitleKey: "planned.milasSubtitle",
    image: "/nata-kiyikislacik.jpg",
    blur: true,
    locationLink:
      "https://www.google.com/maps?q=K%C4%B1y%C4%B1k%C4%B1%C5%9Flac%C4%B1k,+48200+Milas/Mu%C4%9Fla&ftid=0x14bef5bf2b757283:0x7d86dea5fbe1f934&hl=tr-TR&gl=tr&entry=gps&g_ep=INeCAw%3D%3D&g_st=iw",
    demandLink: "/on-talep/milas",
  },
  {
    title: "VEGA SOFYA-BULGARİSTAN",
    subtitleKey: "planned.vegaSofyaSubtitle",
    image: "/sofyaprojesiyakında.png",
    blur: true,
    locationLink: "https://maps.app.goo.gl/gmod5LPGNt7Y9kU9A?g_st=ic",
    demandLink: "/on-talep/vega-sofya",
  },
  {
    title: "NATA CENTER",
    subtitleKey: "planned.nataCenterSubtitle",
    image: "/natacenteryakinda.png",
    blur: true,
    locationLink:
      "https://www.google.com/maps/search/39.909313,+32.782915?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=32a7c5c1-6b19-491b-8ae8-b599f4810a0f",
    demandLink: "/on-talep/nata-center",
  },
];

export default function FeaturedProjects() {
  const t = useTranslations("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <section id="yakinda-projeler" className="py-10 px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-10">
          {t("planned.sectionTitleMain")}{" "}
          <span className="text-[#ab1e3b]">{t("planned.sectionTitleHighlight")}</span>
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
              <p className="text-sm text-gray-500 whitespace-pre-line">
                {t(project.subtitleKey as any)}
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href={project.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  {t("planned.location")}
                </a>
                <button
                  onClick={() => setSelectedProject(project.title)}
                  className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  {t("planned.createDemand")}
                </button>
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
