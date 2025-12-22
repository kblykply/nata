"use client";

import Image from 'next/image';
import { useState } from 'react';

const Kalite = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="px-6 md:px-30 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Portal Hakkında</h2>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Nata Yaşam yetkili Satış Ağı Portalı, gayrimenkul satış süreçlerini tek bir merkezde toplayan yeni bir ekosistemdir. 
            Peki bu sistem nasıl çalışır?
            Sistem, Konut, Ofis, Ticari Alan portföyü tek bir veritabanında birleştirilir. 
            Bu portföy Türkiye genelinde seçilmiş profesyonel emlak ofislerine kontrollü bir şekilde açılır. 
            Profesyonel emlak danışmanları bu portala giriş yaptığında, tüm ilanlara, güncel fiyatlara, proje detaylarına ve satış dökümanlarına doğrudan erişir. 
            Müşteri kaydı, teklif oluşturma, rezervasyon talebi ve sözleşme süreçleri ise tamamen NATA YAŞAM CRM üzerinden yönetilir. 
            Sistem ayrıca özel bir onay mekanizmasına sahiptir. Yapılan her işlem NATA YAŞAM'ın merkezi ekipleri tarafından dijital olarak kontrol edilir. 
            Bu fiyat istikrarını, doğru bilgi akışını ve standart bir satış sürecini garanti eder. 
            Güçlü bir portföye erişim, hızlı bilgi akışı, doğru veri ve tek merkezden yönetilen profesyonel bir satış düzeni. Sonuç olarak, 
            NATA YAŞAM Yetkili Satış Ağı, gayrimenkul satışını kolay erişilebilir, sistematik, güvenilir ve çok daha verimli hale getiren yeni bir dijital iş modeli sunar.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden relative group">
            <a
              href="https://www.youtube.com/shorts/GNH6Gq1TdRQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
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
            {showTooltip && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 pointer-events-none">
                Bilgilendirme videosunu izlemek için görsele tıklayın
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalite;
