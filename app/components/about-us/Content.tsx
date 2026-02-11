// components/AboutContentSection.tsx
"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutContentSection = () => {
  const t = useTranslations('aboutUs');
  
  return (
    <div className="bg-white py-12 px-6 md:px-30">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-6 leading-snug whitespace-pre-line">
            {t('contentHeading')}
          </h2>
          <div className="w-full max-w-md rounded-2xl overflow-hidden ">
            <Image
              src="/hakkimizdakutu.png"   // Single image here
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
            {t('contentDescription')}
          </p>

       <div className="w-full">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Icon 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
        <Image src="/tecrübe.png" alt="Tecrübe" width={40} height={40} />
      </div>
      <p className="text-sm mt-3 w-36">{t('stat1')}</p>
    </div>

    {/* Icon 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
        <Image src="/tamamlananproje.png" alt="Tamamlanan Proje" width={40} height={40} />
      </div>
      <p className="text-sm mt-3 w-36">{t('stat2')}</p>
    </div>

    {/* Icon 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
        <Image src="/devamedenproje.png" alt="Devam Eden Proje" width={40} height={40} />
      </div>
      <p className="text-sm mt-3 w-36">{t('stat3')}</p>
    </div>

    {/* Icon 4 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-[100px] h-[100px]">
        <Image src="/teslimedilenproje.png" alt={t('stat4Alt')} width={40} height={40} />
      </div>
      <p className="text-sm mt-3 w-36">{t('stat4')}</p>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default AboutContentSection;
