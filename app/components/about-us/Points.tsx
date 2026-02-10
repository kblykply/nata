"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ApproachSection = () => {
  const t = useTranslations('aboutUs');
  
  return (
    <div className="px-6 md:px-20 py-12 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-6 relative">
          {/* Overlapping Images */}
          <div className="rounded-xl overflow-hidden w-fit">
  <Image 
    src="/hakkimizdakutuiki.png"   // This is your image showing both visuals
    alt="Prestijli Projeler"
    width={800}
    height={300}
    objectFit="cover"
  />
</div>

          {/* Bottom Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <Image src="/hakkimizdaphoto.png" alt="Nature" width={600} height={300} objectFit="cover" />
          </div>
        </div>

        {/* Right Side - Text Blocks */}
        <div className="flex flex-col gap-25">
          <div>
            <h3 className="font-bold text-lg mb-2">
              {t('point1Title')}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t('point1Description')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              {t('point2Title')}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t('point2Description')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              {t('point3Title')}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t('point3Description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
