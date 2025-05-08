'use client';

import Image from 'next/image';
import { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!accepted) {
      setError('Lütfen KVKK koşullarını kabul ediniz.');
      return;
    }
  
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
  
      const data = await res.json();
  
     
     if (data && data.success && data.data) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAccepted(false);
      } else {
        setError('Form gönderilemedi. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Sunucu hatası, lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

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
        {/* Left: Contact Info */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 w-72 mx-auto relative shadow-lg">
          <h3 className="font-semibold text-sm mb-1">Bizimle İletişime Geçin</h3>
          <p className="text-xs text-gray-500 mb-6">VEGA CENTER TANITIM OFİSİ</p>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/contact-phone.png" alt="Phone" width={20} height={20} />
            <p className="text-sm font-medium">444 8 018</p>
          </div>
          <div className="flex items-start gap-3">
            <Image src="/contact-pin.png" alt="Location" width={20} height={20} />
            <p className="text-xs leading-snug text-gray-700">
              Mustafa Kemal Mah. 2127 Cad. No:21<br />
              Çankaya · ANKARA
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-40 h-6 bg-pink-300 opacity-30 rounded-full blur-2xl"></div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="İsim Soyisim"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-100 p-3 rounded-md w-full focus:outline-none"
          />
          <textarea
            placeholder="Mesajınız"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="bg-gray-100 p-3 rounded-md w-full focus:outline-none resize-none"
          />
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              id="kvkk"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <label htmlFor="kvkk">KVKK koşullarını kabul ediyorum.</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-100 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition w-full disabled:opacity-50"
          >
            {loading ? "Gönderiliyor..." : "GÖNDER"}
          </button>

          {/* Feedback Messages */}
          {success && <p className="text-green-600 text-sm">Form başarıyla gönderildi!</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}
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
