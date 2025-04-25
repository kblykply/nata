"use client";

const projects = [
  {
    title: "NATA DELTA",
    subtitle: "Konut & Avm",
    image: "/nata-delta.jpg",
    blur: true,
    locationLink: "/nata-delta.jpg",
    demandLink: "/on-talep/nata-delta",
  },
  {
    title: "YALIKAVAK",
    subtitle: "Exclusive Villa",
    image: "/nata-yalikavak.jpg",
    blur: true,
    locationLink: "/nata-yalikavak.jpg",
    demandLink: "/on-talep/yalikavak",
  },
  {
    title: "MİLAS KIYIKIŞLACIK",
    subtitle: "VİLLA & KONUT\n& TURİZM & SAĞLIK & AVM",
    image: "/nata-kiyikislacik.jpg",
    blur: true,
    locationLink: "/lokasyon/milas",
    demandLink: "/on-talep/milas",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 text-center">
       <h2 className="text-2xl  text-center    font-semibold mb-10">Planlanan<span className="text-[#ab1e3b]"> Projeler</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-60 h-60 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover}`}
              />
              
            </div>
            <p className="mt-4 font-semibold whitespace-pre-line">{project.title}</p>
            <p className="text-sm text-gray-500 whitespace-pre-line">{project.subtitle}</p>
            <div className="flex gap-3 mt-3">
              <a href={project.locationLink} className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition">
                Lokasyon
              </a>
              <a href={project.demandLink} className="bg-gray-100 text-sm px-4 py-1 rounded-full hover:bg-gray-200 transition">
                Ön Talep Oluştur
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
