"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Ayşe K.",
    title: "Yeni Ev Sahibi",
    quote:
      "Configgo sayesinde hayalimdeki eve kısa sürede kavuştum.",
    image: "/customer.jpg",
  },
  {
    name: "Mehmet T.",
    title: "Yatırımcı",
    quote:
      "Güvenli bir yatırım arıyordum. Lokasyon analizleri ve ödeme planları beni etkiledi.",
    image: "/customer.jpg",
  },
  {
    name: "Selin A.",
    title: "Müşteri",
    quote:
      "Satın alma süreci inanılmaz kolaydı. Satış temsilcileri çok ilgiliydi.",
    image: "/customer.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Top-Right Filigran */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-40 z-0 pointer-events-none">
        <img
          src="/test.png" // Make sure this file exists in /public
          alt="Filigran"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-screen-md mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900">Müşterilerimiz Ne Diyor?</h2>
        <p className="mt-4 text-gray-600 text-sm">
          Gerçek müşteri deneyimleriyle hizmet kalitemizi daha yakından tanıyın.
        </p>

        <div className="mt-12 space-y-12">
          {testimonials.map((item, index) => (
            <blockquote
              key={index}
              className="bg-red-50 rounded-xl shadow p-6 text-left relative"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">“{item.quote}”</p>
                  <footer className="text-sm font-semibold text-gray-800">
                    {item.name}{" "}
                    <span className="font-normal text-gray-500">– {item.title}</span>
                  </footer>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
