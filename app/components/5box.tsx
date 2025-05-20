"use client";

export default function InfoSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-screen-xl mx-auto py-10 px-4">

      {/* Box 1 */}
        <div
        className="relative rounded-lg p-4 h-78 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/slider/slider/alt1.jpg)" }}
      >
        <div className="absolute inset-0  rounded-lg"></div>
      
      </div>

      {/* Box 2 */}
       <div
        className="relative rounded-lg p-4 h-78 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/slider/slider/alt2.jpg)" }}
      >
        <div className="absolute inset-0  rounded-lg"></div>
      
      </div>
      {/* Box 3 */}
       <div
        className="relative rounded-lg p-4 h-78 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/slider/slider/alt3.jpg)" }}
      >
        <div className="absolute inset-0  rounded-lg"></div>
      
      </div>

      {/* Box 4 - Background Image */}
      <div
        className="relative rounded-lg p-4 h-78 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/slider/slider/alt4.jpg)" }}
      >
        <div className="absolute inset-0  rounded-lg"></div>
      
      </div>

      {/* Box 5 */}
     <div
        className="relative rounded-lg p-4 h-78 text-white overflow-hidden flex flex-col justify-start bg-cover bg-center"
        style={{ backgroundImage: "url(/slider/slider/alt5.jpg)" }}
      >
        <div className="absolute inset-0  rounded-lg"></div>
      
      </div>
    </section>
  );
}
