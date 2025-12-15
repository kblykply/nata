"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';

const Points = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async () => {
    setError("");
    setSuccess(false);

    if (!name.trim() || !email.trim() || !phone.trim() || !business.trim()) {
      setError("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    if (!recaptchaToken) {
      setError("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }

    if (!accepted) {
      setError("Lütfen KVKK koşullarını kabul edin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/form-data/business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: message || "Yetkili Satış Ağı Portalı form mesajı",
          project_name: "Yetkili Satış Ağı",
          business_info: business,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setBusiness("");
        setMessage("");
        setAccepted(false);
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      } else {
        setError(data.error || "Gönderim başarısız oldu. Lütfen tekrar deneyin.");
      }
    } catch {
      setError("Sunucu hatası, lütfen daha sonra tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Images */}
        <div className="flex gap-4 relative">
          {/* First Image */}
          <div className="rounded-xl overflow-hidden w-fit">
            <Image
              src="/yetkili-satis-agi-image-1.jpg"
              alt="Yetkili Satış Ağı"
              width={400}
              height={200}
              className="rounded-xl"
            />
          </div>

          {/* Second Image */}
          <div className="rounded-xl overflow-hidden w-fit">
            <Image
              src="/yetkili-satis-agi-image-2.jpg"
              alt="Satış Ağı"
              width={400}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Bilgi almak için iletişime geçin
          </h3>
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
          <input
            type="text"
            placeholder="İşletme Bilgisi"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
          />
          <textarea
            placeholder="Mesajınız (isteğe bağlı)"
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
            <label htmlFor="kvkkCheckbox" className="text-xs text-gray-800 leading-snug">
              <span className="block">
                <strong>Kişisel Verilerin Korunması</strong> hakkında bilgilendirildim ve{" "}
                <Link href="/kvkk" target="_blank" className="underline text-blue-600 hover:text-blue-800">
                  KVKK Aydınlatma Metni
                </Link>
                'ni okudum. Koşulları kabul ediyorum.
              </span>
            </label>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
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
        </div>
      </div>
    </div>
  );
};

export default Points;
