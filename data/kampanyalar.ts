interface KampanyaContent {
  title: string;
  text: string[];
}

interface Kampanya {
  slug: string;
  title: string;
  highlight: string;
  description: string;
  bg: string;
  image: string;
  firstOne: string;
  grayText?: string;
  content: KampanyaContent[];
  nextContent?: KampanyaContent[];
  secondText?: string;
}

const kampanyalarTr: Kampanya[] = [
  {
    slug: "guvenli-yasam",
    title: "Modern Tasarım,",
    highlight: "Güvenli Yaşam",
    description: "NATA Yaşam semtlerinde",
    bg: "/kampanya/1.png",
    image: "/kampanya/icons/1.png",
    firstOne: "NATA Yaşam, sadece bir konut değil; modern hayatı kolaylaştıran, estetikle işlevselliği bir araya getiren bir yaşam tarzı sunar. Her detayda kaliteyi ve çağdaş çizgileri hissedeceğiniz projelerimizde, mimari tasarımlar zamansız bir anlayışla şekilleniyor. Işık, renk, doku ve doğayla uyumlu malzeme seçimleri sayesinde kendinizi her gün özel hissedeceğiniz bir ortam sizi bekliyor.",
    grayText: `NATA Yaşam, her ihtiyaca uygun yaşam çözümleri\nve ödeme kolaylıkları sunar.`,
    content: [
      {
        title: "Avantajları",
        text: [
          "1. NATA Yaşam projeleri, modern mimarisiyle sadece bir ev değil, çağdaş bir yaşam tarzı sunar. Her detay, estetik, konfor ve fonksiyon düşünülerek tasarlanır.",
          "2. 7/24 güvenlik, kartlı giriş sistemleri ve gelişmiş izleme altyapısıyla aileniz güvende. NATA Yaşam'da huzur her zaman önceliklidir.",
          "3. Aydınlatma, ısıtma ve güvenlik artık telefonunuzla kontrolünüzde. Akıllı sistemler hem zaman kazandırır hem konforu artırır.",
          "4. Yürüyüş yolları, çocuk parkları, spor salonları ve yeşil alanlarla dolu sosyal yaşam sizi bekliyor. Hem aktif hem huzurlu bir çevre sunar.",
          "5. Depreme dayanıklı ve sürdürülebilir malzemelerle inşa edilen yapılar, geleceğe güvenle bakmanızı sağlar."
        ]
      }
    ],
    nextContent: [
      {
        title: "Kimler için ideal?",
        text: [
          "• Banka kredisi yerine esnek taksit planı isteyenler",
          "• Mevcut evini satıp yeni bir yaşam kurmak isteyenler",
          "• Ailesini büyütmeyi planlayanlar",
          "• Modern, güvenli ve teknolojik bir ortamda yaşamak isteyenler",
        ]
      }
    ],
  },
  {
    slug: "paylastikca-kazanirsin",
    title: "Paylaştıkça",
    highlight: "Kazanırsın",
    description: "",
    bg: "/chartsredtwo.png",
    image: "/chartsredtwo.png",
    firstOne: "NATA Yaşam deneyimini sevdiklerinle paylaşarak hem onların güvenli bir yaşama adım atmasını sağla hem de sen kazançlı çık.",
    content: [
      {
        title: "Seninle Büyüyen Avantajlar",
        text: [
          "• Her yönlendirme için hediye çeki veya ekstra indirim",
          "• Sadece üyelerin erişebileceği özel kampanyalar",
          "• Çekiliş ve sürpriz ödül katılım hakkı",
          "• Topluluğa özel davet ve sosyal etkinlik avantajı"
        ]
      }
    ],
  },
  {
    slug: "hemen-tapu-hemen-teslim",
    title: "Hemen Tapu,",
    highlight: "Hemen Teslim",
    description: "Vega Cadde",
    bg: "/kampanya/7.png",
    image: "/kampanya/icons/7.png",
    firstOne: "NATA Yaşam projelerinde artık hayalindeki eve ulaşmak için aylarca beklemenize gerek yok. Tapunuzu anında teslim alabilir, dairenize hemen yerleşebilirsiniz. Gecikmeler yok, teslim tarihi beklemek yok. Hazır projeler, hazır yaşamlar için seni bekliyor.",
    content: [
      {
        title: "Bu Avantajla Neler Kazanırsın?",
        text: [
          "1. Tapunu aynı gün içinde al",
          "2. Anahtar teslim dairelere hemen yerleş",
          "3. Zaman kaybetmeden yatırımını değerlendirmeye başla",
          "4. Kira geliri elde etmek isteyenler için hızlı çözüm",
        ]
      }
    ],
    secondText: "NATA Yaşam'da her detay, ev sahibi olma sürecini kolaylaştırmak ve hızlandırmak için titizlikle planlandı. Tapunuzu almak için haftalarca beklemenize gerek yok; işlemler hızlı, net ve güvenli bir şekilde ilerler. Satın aldığınız daireye aynı gün içinde sahip olabilir, anahtarınızı teslim alarak hemen yeni hayatınıza başlayabilirsiniz. Gecikmeler, belirsiz teslim tarihleri ya da fazladan masraflar olmadan, tam anlamıyla hazır bir yaşama adım atın. Detaylı bilgi almak, tapu ve teslim sürecini yakından öğrenmek için bizimle hemen iletişime geçin. Size en yakın satış ofisimiz ya da online danışmanlarımız bir telefon kadar yakın."
  },
];

const kampanyalarEn: Kampanya[] = [
  {
    slug: "guvenli-yasam",
    title: "Modern Design,",
    highlight: "Safe Living",
    description: "In NATA Living neighborhoods",
    bg: "/kampanya/1.png",
    image: "/kampanya/icons/1.png",
    firstOne: "NATA Living is not just a residence; it offers a lifestyle that simplifies modern life, combining aesthetics with functionality. In our projects where you will feel quality and contemporary lines in every detail, architectural designs are shaped with a timeless understanding. Thanks to light, color, texture and nature-compatible material selections, an environment where you will feel special every day awaits you.",
    grayText: "NATA Living offers living solutions suitable for every need\nand payment conveniences.",
    content: [
      {
        title: "Advantages",
        text: [
          "1. NATA Living projects offer not just a home but a contemporary lifestyle with modern architecture. Every detail is designed with aesthetics, comfort and function in mind.",
          "2. Your family is safe with 24/7 security, card access systems and advanced monitoring infrastructure. Peace is always a priority at NATA Living.",
          "3. Lighting, heating and security are now under your control with your phone. Smart systems save time and increase comfort.",
          "4. Social life full of walking paths, playgrounds, gyms and green areas awaits you. It offers both active and peaceful surroundings.",
          "5. Structures built with earthquake-resistant and sustainable materials give you confidence in the future."
        ]
      }
    ],
    nextContent: [
      {
        title: "Who is it ideal for?",
        text: [
          "• Those who want a flexible installment plan instead of a bank loan",
          "• Those who want to sell their current home and start a new life",
          "• Those planning to grow their family",
          "• Those who want to live in a modern, safe and technological environment",
        ]
      }
    ],
  },
  {
    slug: "paylastikca-kazanirsin",
    title: "The More You Share,",
    highlight: "The More You Earn",
    description: "",
    bg: "/chartsredtwo.png",
    image: "/chartsredtwo.png",
    firstOne: "Share the NATA Living experience with your loved ones, help them step into a safe life, and benefit yourself.",
    content: [
      {
        title: "Advantages Growing with You",
        text: [
          "• Gift voucher or extra discount for every referral",
          "• Exclusive campaigns accessible only to members",
          "• Raffle and surprise prize participation rights",
          "• Community-exclusive invitations and social event benefits"
        ]
      }
    ],
  },
  {
    slug: "hemen-tapu-hemen-teslim",
    title: "Immediate Title Deed,",
    highlight: "Immediate Delivery",
    description: "Vega Cadde",
    bg: "/kampanya/7.png",
    image: "/kampanya/icons/7.png",
    firstOne: "In NATA Living projects, you no longer need to wait months to reach your dream home. You can receive your title deed instantly and move into your apartment right away. No delays, no waiting for delivery dates. Ready projects and ready lives are waiting for you.",
    content: [
      {
        title: "What Do You Gain with This Advantage?",
        text: [
          "1. Get your title deed on the same day",
          "2. Move into turnkey apartments immediately",
          "3. Start evaluating your investment without losing time",
          "4. Quick solution for those who want to earn rental income",
        ]
      }
    ],
    secondText: "At NATA Living, every detail is meticulously planned to simplify and speed up the home ownership process. You don't need to wait weeks to get your title deed; the process moves quickly, clearly and securely. You can own the apartment you purchased on the same day, receive your keys and start your new life immediately. Step into a completely ready life without delays, uncertain delivery dates or extra costs. Contact us immediately for detailed information and to learn about the title deed and delivery process. Our nearest sales office or online consultants are just a phone call away."
  },
];

export function getKampanyalar(locale: string = "tr"): Kampanya[] {
  return locale === "en" ? kampanyalarEn : kampanyalarTr;
}

// Default export for backward compatibility
export const kampanyalar = kampanyalarTr;
