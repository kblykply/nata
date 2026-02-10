"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const QualitySection = () => {
  const t = useTranslations('aboutUs');
  
  return (
    <div className="px-6 md:px-30 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">{t('qualityTitle')}</h2>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6 leading-relaxed max-w-4xl">
        {t('qualityDescription')}
      </p>

      {/* Image */}
      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src="/hakkimizdabanneriki.png"
          alt="Kalite ve Güven"
          width={3000}
          height={500}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default QualitySection;
