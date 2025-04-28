import Image from 'next/image';

const QualitySection = () => {
  return (
    <div className="px-6 md:px-30 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Her Projede Kalite ve Güven</h2>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6 leading-relaxed max-w-4xl">
        Nata Yaşam olarak önceliğimiz, estetik ve fonksiyonelliği bir arada sunarken, yatırımlarımıza ve sakinlerimize yüksek yaşam standartları sağlamaktır. Projelerimizde kullandığımız kaliteli malzemeler, yenilikçi mimari yaklaşımlar ve çevre dostu çözümler ile sektörde fark yaratıyoruz.
      </p>

      {/* Image */}
      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src="/kalitegüven.png"
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
