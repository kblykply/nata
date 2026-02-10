"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Kalite = () => {
  const t = useTranslations('salesNetwork');
  
  return (
    <div className="px-6 md:px-30 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{t('aboutPortalTitle')}</h2>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
            {t('aboutPortalDescription')}
          </p>
          <a
            href="https://www.youtube.com/shorts/GNH6Gq1TdRQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ab1e3b] text-white text-sm font-medium px-4 py-2 hover:bg-[#961a33] transition"
          >
            {t('videoButtonText')}
          </a>
        </div>

        {/* Right Side */}
        <div>
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden relative group">
            <a
              href="https://www.youtube.com/shorts/GNH6Gq1TdRQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <Image
                src="/yetkili-satis-agi-contentiki.webp"
                alt="Yetkili Satış Ağı"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-opacity group-hover:opacity-90"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalite;
