"use client";

import Image from 'next/image';

const Content = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-30">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-6 leading-snug text-gray-800">
            Yetkili Satış Ağı Portalımıza<br />
            Hoş Geldiniz
          </h2>
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden relative group">
            <a
              href="https://youtu.be/xEleIV9zfRQ?si=E3JKZH5wLCIMHOcv"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <Image
                src="/contentpic4.webp"
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

        {/* Right Side */}
        <div>
          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            NATA YAŞAM'ın güçlü portföyü artık tek çatı altında.
             Nata Yaşam gayrimenkul portföyünü seçilmiş profesyoneller için tek merkezden sunan yeni bir ekosistem kurdu. 
             Bu ekosistem, yalnızca bir erişim alanı değil, sektörün işleyişine yön verecek yeni bir yaklaşım. 
             Dijital, şeffaf ve tamamen kontrol edilebilir CRM altyapısıyla gayrimenkul satış süreçlerine yeni bir disiplin kazandırıyoruz. 
             Artık tüm işlemler tek düzen, tek sistem ve tek standart altında yürütülüyor. 
             Profesyonel gayrimenkul uzmanları için NATA YAŞAM çağı başlıyor. 
            Kurumsal portföyümüze doğrudan erişim sunan bu yeni satış ağı, güveninizi, hızınızı ve hizmet kalitenizi bir üst seviyeye taşımak için tasarlandı. 
            NATA YAŞAM Yetkili Satış Ağı'na katılın. Portföyünüzü güçlendirin.
          </p>
          <a
            href="https://youtu.be/xEleIV9zfRQ?si=E3JKZH5wLCIMHOcv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ab1e3b] text-white text-sm font-medium px-4 py-2 hover:bg-[#961a33] transition"
          >
            Bilgilendirme videosu için tıklayın
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
