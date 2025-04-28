import Image from 'next/image';

const ApproachSection = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-6 relative">
          {/* Overlapping Images */}
          <div className="rounded-xl overflow-hidden w-fit">
  <Image 
    src="/road.png"   // This is your image showing both visuals
    alt="Prestijli Projeler"
    width={800}
    height={300}
    objectFit="cover"
  />
</div>

          {/* Bottom Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <Image src="/dal.png" alt="Nature" width={600} height={300} objectFit="cover" />
          </div>
        </div>

        {/* Right Side - Text Blocks */}
        <div className="flex flex-col gap-25">
          <div>
            <h3 className="font-bold text-lg mb-2">
              Stratejik Lokasyonlarda Prestijli Projeler
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Ankara’dan Bodrum’a, Milas’tan Türkiye’nin yükselen bölgelerine kadar konumlandırdığımız projelerimiz; merkezi lokasyonları, ulaşım kolaylığı ve sosyal donatılarıyla hem yaşam hem de yatırım açısından büyük avantaj sağlıyor. Konut ve AVM konseptinden, exclusive villa projelerine ve turizm odaklı yaşam alanlarına kadar geniş bir portföye sahibiz.            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Müşteri Memnuniyeti Odaklı Yaklaşım
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Her zaman müşterilerimizin beklentilerini aşmayı hedefliyor, satış öncesi ve sonrası sunduğumuz profesyonel hizmetlerle güvenilir bir çözüm ortağı oluyoruz. Şeffaf iletişim, hızlı destek ve kişiye özel çözümlerle, yatırım yolculuğunuzda daima yanınızdayız.            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Sürdürülebilir ve Yenilikçi Yaklaşım
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
            Nata Yaşam, geleceğe değer katacak projeler üretirken, çevresel ve toplumsal sorumluluklarını da göz önünde bulundurur. Doğayla uyumlu, enerji verimliliği yüksek yapılarımızla sürdürülebilir bir yaşamın kapılarını aralıyoruz.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
