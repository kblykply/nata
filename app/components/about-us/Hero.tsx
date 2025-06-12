// components/AboutSection.tsx

import Image from 'next/image';

const AboutSection = () => {
  return (
<div className="px-6 md:px-30 py-10">
  <div className="relative w-full h-64 rounded-2xl overflow-hidden">
    <Image
      src="/natayasamhakkinda.png"
      alt="About Nata Yaşam"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-10 items-center text-white text-center">
      <h2 className="text-4xl font-semibold">Nata Yaşam</h2>
      <p className="text-3xl mt-2">Hakkında</p>
    </div>
  </div>
</div>


  );
};

export default AboutSection;
