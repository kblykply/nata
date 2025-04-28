import Image from 'next/image';

const ContactSection = () => {
  return (
    <div className="relative px-6 md:px-20 py-16">
      {/* Title & Description */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bizimle İletişime Geçin</h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Projeler hakkında detaylı bilgi almak, kampanyalar, lansman fırsatlarını öğrenmek ve Konut - Villa - Ofis - Ticari Alan taleplerinde bulunmak için bizimle iletişime geçebilirsiniz
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 relative z-10 items-start">
        {/* Left: Contact Info Box */}
        <div className="bg-white rounded-2xl p-8 max-w-sm mx-auto shadow-xl" style={{ boxShadow: '0px 20px 50px rgba(255,0,0,0.1)' }}>
          <h3 className="font-semibold text-base mb-1">Bizimle İletişime Geçin</h3>
          <p className="text-xs text-gray-500 mb-6">VEGA CENTER TANITIM OFİSİ</p>

          <div className="flex items-center gap-3 mb-4">
            <Image src="/contact-phone.png" alt="Phone" width={20} height={20} />
            <p className="text-sm">444 8 018</p>
          </div>

          <div className="flex items-start gap-3">
            <Image src="/contact-pin.png" alt="Location" width={20} height={20} />
            <p className="text-sm leading-snug">
              Mustafa Kemal Mah. 2127 Cad. No:21<br />
              Çankaya · ANKARA
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="flex flex-col gap-4 w-full max-w-lg">
  <input
    type="text"
    placeholder="İsim Soyisim"
    className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
  />
  <input
    type="email"
    placeholder="E-mail"
    className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
  />
  <input
    type="tel"
    placeholder="Telefon"
    className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
  />
  <textarea
    placeholder="Mesajınız"
    rows={4}
    className="bg-gray-100 p-3 rounded-md w-full focus:outline-none resize-none"
  ></textarea>

  <div className="flex items-center gap-2 text-xs text-gray-700">
    <input type="checkbox" id="kvkk" />
    <label htmlFor="kvkk">KVKK koşullarını kabul ediyorum.</label>
  </div>

  <button
    type="submit"
    className="bg-gray-100 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition w-full"
  >
    GÖNDER
  </button>
</form>

      </div>

      {/* Decorative Phone Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/telefon.png" alt="Phone Decor" width={400} height={400} />
      </div>
    </div>
  );
};

export default ContactSection;
