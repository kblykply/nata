interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
}

const blogPostsTr: BlogPost[] = [
  {
    id: 1,
    title: "Şehir Yaşamını Değiştiren Modern İnşaat Teknikleri",
    slug: "modern-insaat-teknikleri",
    image: "/antares-1.jpg",
    excerpt: "Yeni nesil inşaat yöntemleriyle şehirler daha hızlı, çevreci ve akıllı hale geliyor.",
    date: "2025-05-01",
    content: `
      <h2>Yeni Nesil Yapı Yaklaşımları</h2>
      <p>Günümüz şehirleri, modern inşaat tekniklerinin yaygınlaşmasıyla birlikte hızlı bir dönüşüm yaşıyor. Prefabrik yapılar, modüler sistemler ve sürdürülebilir malzemeler, bu dönüşümün merkezinde yer alıyor.</p>

      <h2>Hangi Teknikler Öne Çıkıyor?</h2>
      <ul>
        <li>Prefabrik ve modüler yapı sistemleri</li>
        <li>3D baskı ile yapı inşası</li>
        <li>Yenilenebilir enerjiyle entegre projeler</li>
      </ul>

      <p>Bu yenilikler, sadece inşaat süresini azaltmakla kalmaz; aynı zamanda malzeme israfını azaltarak çevresel etkileri minimuma indirir.</p>

      <h2>Akıllı Şehirlerin Temeli</h2>
      <p>Yeni teknikler, sensörlerle donatılmış akıllı altyapıların entegrasyonunu kolaylaştırıyor. Bu da şehir planlamasında yeni bir çağın kapılarını aralıyor.</p>
    `,
  },
  {
    id: 2,
    title: "Sürdürülebilir Mimari ile Yeşil Geleceğe Adım",
    slug: "surdurulebilir-mimari",
    image: "/antares-3.jpg",
    excerpt: "Doğaya dost yapılarla çevreye zarar vermeyen şehirler inşa etmek mümkün.",
    date: "2025-05-02",
    content: `
      <h2>Sürdürülebilirliğin Temelleri</h2>
      <p>Sürdürülebilir mimari, doğal kaynakların verimli kullanılması ve çevreye en az zarar verecek şekilde yapılar inşa edilmesini amaçlar.</p>

      <h2>Uygulanan Başlıca Yöntemler</h2>
      <ul>
        <li>Geri dönüştürülebilir malzeme kullanımı</li>
        <li>Yağmur suyu toplama sistemleri</li>
        <li>Güneş enerjisi panelleri ve pasif ısıtma</li>
      </ul>

      <p>Bu yöntemlerle sadece enerji tasarrufu sağlanmaz, aynı zamanda kullanıcıların çevresel farkındalığı da artar.</p>

      <h2>Ekolojik Yaşam Alanlarına Geçiş</h2>
      <p>Yeni nesil projeler, bireylerin doğa ile daha iç içe olabileceği, nefes alabilir mekanlar yaratmayı hedefliyor.</p>
    `,
  },
  {
    id: 3,
    title: "2025 Gayrimenkul Trendleri: Neleri Takip Etmeliyiz?",
    slug: "2025-gayrimenkul-trendleri",
    image: "/antares-4.jpg",
    excerpt: "Teknoloji, yaşam tarzı ve ekonomi gayrimenkul sektörünü nasıl şekillendiriyor?",
    date: "2025-05-03",
    content: `
      <h2>Gayrimenkulde Yeni Dönem</h2>
      <p>2025 yılı itibarıyla gayrimenkul sektörü; teknoloji, çevresel bilinç ve değişen demografik yapıların etkisiyle yeniden şekilleniyor.</p>

      <h2>Trend Olarak Öne Çıkanlar</h2>
      <ul>
        <li>Akıllı ev teknolojilerine entegre projeler</li>
        <li>Esnek yaşam alanları (home office düzenine uygun)</li>
        <li>Ulaşım akslarına yakın mikrobölge yatırımları</li>
      </ul>

      <p>Özellikle genç yatırımcılar, kısa vadeli değil; uzun vadeli değer artışı sağlayacak lokasyonları tercih ediyor.</p>

      <h2>Yatırımcılar İçin Tavsiyeler</h2>
      <p>2025 yılı boyunca Etimesgut, Oran ve İncek gibi bölgeler öne çıkmaya devam edecek. Projelerin teslim süresi, sosyal olanakları ve kira getirisi detaylı analiz edilmeli.</p>
    `,
  },
];

const blogPostsEn: BlogPost[] = [
  {
    id: 1,
    title: "Modern Construction Techniques Transforming City Life",
    slug: "modern-insaat-teknikleri",
    image: "/antares-1.jpg",
    excerpt: "With next-generation construction methods, cities are becoming faster, greener, and smarter.",
    date: "2025-05-01",
    content: `
      <h2>Next-Generation Building Approaches</h2>
      <p>Today's cities are undergoing a rapid transformation with the widespread adoption of modern construction techniques. Prefabricated structures, modular systems, and sustainable materials are at the heart of this transformation.</p>

      <h2>Which Techniques Stand Out?</h2>
      <ul>
        <li>Prefabricated and modular building systems</li>
        <li>3D printing construction</li>
        <li>Projects integrated with renewable energy</li>
      </ul>

      <p>These innovations not only reduce construction time but also minimize environmental impact by reducing material waste.</p>

      <h2>The Foundation of Smart Cities</h2>
      <p>New techniques facilitate the integration of smart infrastructure equipped with sensors. This opens the door to a new era in urban planning.</p>
    `,
  },
  {
    id: 2,
    title: "Stepping into a Green Future with Sustainable Architecture",
    slug: "surdurulebilir-mimari",
    image: "/antares-3.jpg",
    excerpt: "It is possible to build cities that do not harm the environment with nature-friendly structures.",
    date: "2025-05-02",
    content: `
      <h2>Foundations of Sustainability</h2>
      <p>Sustainable architecture aims to build structures that use natural resources efficiently and cause minimal damage to the environment.</p>

      <h2>Key Methods Applied</h2>
      <ul>
        <li>Use of recyclable materials</li>
        <li>Rainwater harvesting systems</li>
        <li>Solar panels and passive heating</li>
      </ul>

      <p>These methods not only save energy but also increase users' environmental awareness.</p>

      <h2>Transition to Ecological Living Spaces</h2>
      <p>Next-generation projects aim to create breathable spaces where individuals can be more in touch with nature.</p>
    `,
  },
  {
    id: 3,
    title: "2025 Real Estate Trends: What Should We Follow?",
    slug: "2025-gayrimenkul-trendleri",
    image: "/antares-4.jpg",
    excerpt: "How are technology, lifestyle, and economy shaping the real estate sector?",
    date: "2025-05-03",
    content: `
      <h2>A New Era in Real Estate</h2>
      <p>As of 2025, the real estate sector is being reshaped by the impact of technology, environmental awareness, and changing demographics.</p>

      <h2>Trending Highlights</h2>
      <ul>
        <li>Projects integrated with smart home technologies</li>
        <li>Flexible living spaces (suitable for home office setup)</li>
        <li>Micro-zone investments near transportation axes</li>
      </ul>

      <p>Especially young investors prefer locations that will provide long-term value appreciation rather than short-term gains.</p>

      <h2>Tips for Investors</h2>
      <p>Throughout 2025, areas like Etimesgut, Oran, and Incek will continue to stand out. Project delivery times, social amenities, and rental yields should be analyzed in detail.</p>
    `,
  },
];

export function getBlogPosts(locale: string = "tr"): BlogPost[] {
  return locale === "en" ? blogPostsEn : blogPostsTr;
}

// Default export for backward compatibility
export const blogPosts = blogPostsTr;
