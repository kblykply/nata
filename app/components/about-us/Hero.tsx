// components/AboutSection.tsx

import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center p-10 bg-white">
      <div className="relative w-full max-w-7xl h-64 rounded-xl overflow-hidden">
        <Image
          src="/natayasamhakkinda.png"  // Place your image in the public folder with this name
          alt="About Nata Yaşam"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
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
