"use client";

import React from "react";

export default function KVKKPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-sm leading-7 text-gray-800">
      <h1 className="text-2xl font-semibold mb-6">Kişisel Verilerin İşlenmesiyle İlgili Genel Aydınlatma Metni</h1>

      <p>
        <strong>İstmar Tem Gayrimenkul Yatırım İnşaat ve Ticaret Anonim Şirketi</strong> (“İSTMAR” veya “Şirket”) olarak
        kişisel verilerinizin güvenliğinin sağlanmasına son derece önem vermekteyiz. Bu kapsamda 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”) uyarınca gerekli tüm teknik ve idari tedbirleri alıyoruz.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">1. Kişisel Verilerinizin Elde Edilmesi, İşlenmesi ve Amaçları</h2>
      <p>
        Kişisel verileriniz; Şirket faaliyetlerinin yürütülmesi, mevzuat gerekliliklerinin yerine getirilmesi, güvenlik, pazarlama, müşteri ilişkileri ve yasal yükümlülüklerin yerine getirilmesi gibi amaçlarla işlenmektedir.
      </p>

      <ul className="list-disc ml-5 mt-2">
        <li><strong>Kimlik bilgisi:</strong> Nüfus cüzdanı, pasaport gibi belgelerdeki bilgiler</li>
        <li><strong>İletişim bilgisi:</strong> Telefon numarası, adres, e-posta</li>
        <li><strong>Müşteri bilgisi:</strong> Ticari ilişkiler kapsamında elde edilen bilgiler</li>
        <li><strong>Müşteri işlem bilgisi:</strong> Ürün/hizmet kullanım kayıtları</li>
        <li><strong>Fiziksel mekân güvenlik bilgisi:</strong> Kamera kayıtları vb.</li>
        <li><strong>İşlem güvenliği bilgisi:</strong> Ticari faaliyetlerin yürütülmesine yönelik teknik veriler</li>
        <li><strong>Risk yönetimi bilgisi:</strong> Ticari ve idari risklerin yönetimi için veriler</li>
        <li><strong>Finansal bilgi:</strong> Her türlü finansal bilgi, belge ve kayıtlar</li>
        <li><strong>Özel nitelikli kişisel veriler:</strong> Sağlık, biyometrik, ceza verileri vb.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">2. Kişisel Verilerinizin Paylaşılması</h2>
      <p>
        Kişisel verileriniz, yukarıda belirtilen amaçlarla Şirket iştirakleri, iş ortakları, tedarikçiler, kamu kurumları ve yetkili özel kişilerle KVK Kanunu’nun 8. ve 9. maddelerine uygun olarak paylaşılabilir.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">3. Kişisel Verilerinizin İmha Edilmesi</h2>
      <p>
        Veriler, mevzuatta belirlenen veya işin gereği olan süreler sonunda KVK Kanunu’nun 7. maddesi uyarınca silinir, yok edilir ya da anonim hale getirilir.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">4. Kişisel Verilerin İşlenmesiyle İlgili Haklarınız</h2>
      <p>Kişisel veri sahibi olarak KVK Kanunu’nun 11. maddesi uyarınca şu haklara sahipsiniz:</p>

      <ul className="list-disc ml-5 mt-2">
        <li>İşlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse bilgi talep etme</li>
        <li>Yurt içi / dışı üçüncü kişileri öğrenme</li>
        <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
        <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
        <li>Aktarılan üçüncü kişilere bildirim isteme</li>
        <li>Otomatik sistemlerle analiz sonucu itiraz</li>
        <li>Kanuna aykırı işleme nedeniyle zarar giderimi talebi</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">5. Başvuru Hakkı</h2>
      <p>
        Yukarıdaki haklarınızı kullanmak için <strong>“Kişisel Verilerin Korunması Başvuru Formu”</strong> ile aşağıdaki yollardan birini kullanarak başvurabilirsiniz:
      </p>

      <ul className="list-disc ml-5 mt-2">
        <li>Yunus Emre Mah. Lütfi Aykaç Blv. No:80 Sultangazi/İstanbul adresine elden teslim</li>
        <li>Noter kanalıyla gönderim</li>
        <li><a href="mailto:istmar@hs01.kep.tr" className="underline text-blue-600 hover:text-blue-800">istmar@hs01.kep.tr</a> adresine kayıtlı e-posta ile gönderim</li>
      </ul>

      <p className="mt-4">
        Talebin şirketimize ulaşmasından itibaren en geç 30 gün içinde cevap verilecektir. Gerekirse başvuru sahibinden ek bilgi talep edilebilir. Ayrıca cevap maliyet doğuruyorsa KVKK Kurulu tarafından belirlenen ücret alınabilir.
      </p>

      <p className="mt-6">
        Detaylı bilgi için bizimle iletişime geçebilirsiniz.
      </p>
    </main>
  );
}
