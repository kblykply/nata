// components/AboutContentSection.tsx

import Image from 'next/image';

const AboutContentSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-30">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-6 leading-snug">
            Geleceği İnşa Ediyoruz,<br />
            Yaşam Alanlarınıza Değer Katıyoruz
          </h2>
          <div className="w-full max-w-md rounded-2xl overflow-hidden ">
            <Image
              src="/homesdesign.png"   // Single image here
              alt="Modern Living Space"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            Nata Holding güvencesiyle hayata geçirilen Nata Yaşam, sadece konut projeleri geliştiren bir marka olmanın ötesine geçerek, yaşamın her alanına dokunan; modern ve sürdürülebilir projelere imza atmaktadır. Türkiye’nin dört bir yanında; konut, villa, alışveriş merkezi, turizm, sağlık ve sosyal yaşam alanlarını bir araya getiren çok yönlü projelerimizle, geleceğin şehircilik anlayışını bugünden sunuyoruz.
          </p>

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-10">
      {/* Icon 1 */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
          <Image src="/tecrübe.png" alt="Tecrübe" width={40} height={40} />
        </div>
        <p className="text-sm mt-3 text-center w-36">40+ Yıllık Tecrübe</p>
      </div>

      {/* Icon 2 */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
          <Image src="/tamamlananproje.png" alt="Tamamlanan Proje" width={40} height={40} />
        </div>
        <p className="text-sm mt-3 text-center w-36">30+ Tamamlanan Proje</p>
      </div>

      {/* Icon 3 */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
          <Image src="/devamedenproje.png" alt="Devam Eden Proje" width={40} height={40} />
        </div>
        <p className="text-sm mt-3 text-center w-36">20+ Devam Eden & Proje</p>
      </div>

      {/* Icon 4 */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
          <Image src="/teslimedilenproje.png" alt="Teslim Edilen" width={40} height={40} />
        </div>
        <p className="text-sm mt-3 text-center w-36">10.000+ Teslim Edilen ve Ticari Alan</p>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default AboutContentSection;
