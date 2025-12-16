import Image from 'next/image';

const Hero = () => {
  return (
    <div className="px-6 md:px-30 py-10">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src="/ustbanner2.webp"
          alt="Yetkili Satış Ağı Portalı"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
