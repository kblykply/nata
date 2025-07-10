"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function ContactQrSection() {
  const [selectedTab, setSelectedTab] = useState("whatsapp");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const swiperRef = useRef<SwiperCore | null>(null); // ✅ Fix: provide initial value

  const qrTabs = [
    { id: "whatsapp", icon: "/qr/phoneicon.png", qr: "/qr/telefonnata.png" },
    { id: "instagram", icon: "/face-insta-wp-02.png", qr: "/instagramnata.png" },
    { id: "facebook", icon: "/face-insta-wp-03.png", qr: "/facebooknata.png" },
  ];

  const validateForm = () => {
    if (!name.trim()) {
      setError("Lütfen adınızı ve soyadınızı giriniz.");
      return false;
    }
    if (!phone.trim()) {
      setError("Lütfen telefon numaranızı giriniz.");
      return false;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    const phoneRegex = /^(0|90)?[0-9]{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setError("Lütfen geçerli bir telefon numarası giriniz. Örnek: 05520295752");
      return false;
    }
    if (!recaptchaToken) {
      setError("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: message || "Web form mesajı",
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setPhone("");
        setMessage("");
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-b from-[#3d313f] to-[#2b2230] rounded-3xl p-6 flex flex-col items-center text-white relative w-full max-w-sm mx-auto">
          <div className="flex space-x-4 mb-4">
            {qrTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedTab(tab.id);
                  swiperRef.current?.slideTo(index);
                }}
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  selectedTab === tab.id
                    ? "bg-white text-[#3d313f]"
                    : "bg-[#4b3b4e] hover:bg-[#5d4b5e]"
                }`}
              >
                <Image src={tab.icon} alt={tab.id} width={24} height={24} />
              </button>
            ))}
          </div>

          <p className="text-center text-xs mb-4 leading-tight">
            Kamerayla QR Kodu Okutun,<br />
            Telefonunuz üzerinden iletişim kurabilirsiniz.
          </p>

          <div className="relative w-64 h-96">
            <Image
              src="/telefongorseli.png"
              alt="Phone"
              fill
              className="object-contain"
            />
            <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination",
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) =>
                  setSelectedTab(qrTabs[swiper.activeIndex].id)
                }
                initialSlide={qrTabs.findIndex((tab) => tab.id === selectedTab)}
                className="w-[100px] h-[100px]"
              >
                {qrTabs.map((tab) => (
                  <SwiperSlide key={tab.id}>
                    <Image
                      src={tab.qr}
                      alt={`${tab.id} QR`}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Custom pagination below the phone */}
          <div className="mt-6 custom-swiper-pagination flex justify-center" />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4 leading-snug">
            TÜM SORULARINIZ İÇİN <br />BURADAYIZ
          </h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Bir çağrı talebinde bulunun.<br />
            Aklınızdaki sorular için buradayız.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız ve Soyadınız"
              className="px-6 py-4 bg-gray-50 border text-gray-800 border-gray-300 rounded-full w-full md:w-1/2"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+90 (5__) ___ __ __"
              className="px-6 py-4 bg-gray-50 border text-gray-800 border-gray-300 rounded-full w-full md:w-1/2"
            />
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınız (isteğe bağlı)"
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl mb-4 text-gray-800"
            rows={4}
          />

          <div className="flex justify-center my-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeDBj8rAAAAAITpieFy0OTWktxwblgStiQHc9iv"
              onChange={(token) => setRecaptchaToken(token || "")}
            />
          </div>

          <p className="text-[11px] text-gray-500 text-center mb-6 leading-snug max-w-md mx-auto">
            Formu gönderdiğiniz takdirde <br />
            <span className="font-semibold">Gizlilik Politikalarımızı onaylamış bulunuyorsunuz</span>
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-10 py-4 text-white rounded-full text-sm hover:opacity-90 transition disabled:opacity-50 ${
                name && phone ? "bg-[#ab1e3b]" : "bg-[#c2b8be]"
              }`}
            >
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-center mt-4">
              Form başarıyla gönderildi!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
