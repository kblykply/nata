"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactMapPopupProps {
  onClose?: () => void;
}

export default function ContactMapPopup({ onClose }: ContactMapPopupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    if (!recaptchaToken) {
      setError("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }
    if (!accepted) {
      setError("Lütfen KVKK koşullarını kabul ediniz.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, recaptchaToken }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAccepted(false);
      } else {
        setError("Gönderim başarısız.");
      }
    } catch {
      setError("Sunucu hatası, lütfen tekrar deneyin.");
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
        <div className="space-y-4">
          <input
            type="text"
            placeholder="İsim Soyisim"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <textarea
            placeholder="Mesajınız"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm h-24 placeholder:text-gray-500"
          />

          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              id="kvkkCheckbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <label htmlFor="kvkkCheckbox" className="text-xs text-gray-800">
              KVKK koşullarını kabul ediyorum.
            </label>
          </div>

          <ReCAPTCHA
            sitekey="6LeDBj8rAAAAAITpieFy0OTWktxwblgStiQHc9iv"
            onChange={(token) => setRecaptchaToken(token || "")}
            className="mt-2"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gray-100 text-sm font-semibold py-2 rounded-sm hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Gönderiliyor..." : "GÖNDER"}
          </button>

          {success && <p className="text-green-600 text-sm mt-2">Form başarıyla gönderildi!</p>}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="mt-8 text-sm text-black space-y-1">
            <button className="mt-4 px-4 py-2 border border-gray-300 rounded-xl font-medium text-sm hover:bg-gray-50 transition">
              Satış ofisiyle görüşme planlayın
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Phone Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/telefon.png" alt="Phone Decor" width={400} height={400} />
      </div>
    </div>
  );
}
