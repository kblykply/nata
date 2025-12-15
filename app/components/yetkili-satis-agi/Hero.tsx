import Image from 'next/image';

const Hero = () => {
  return (
    <div className="px-6 md:px-30 py-10">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src="/ustbanner2.jpg"
          alt="Yetkili Satış Ağı Portalı"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-2 items-center text-white text-center">
          <h2 className="text-4xl font-semibold">Yetkili Satış Ağı</h2>
          <p className="text-3xl mt-2">Portalı</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
