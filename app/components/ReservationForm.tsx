"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

export default function MeetingReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    if (!recaptchaToken) {
      setError("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      setLoading(false);
      return;
    }

    const data = {
      name,
      email,
      phone,
      date: selectedDate?.toISOString().split("T")[0],
      time: selectedTime,
      notes,
    };

    try {
      console.log("Sending data:", data);
      // TODO: send to backend
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setSelectedDate(null);
      setSelectedTime("");
      setNotes("");
      setAccepted(false);
      setRecaptchaToken("");
    } catch (err) {
      setError("Gönderim sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-6 md:px-20 py-16">
      {/* Title & Description */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toplantı Rezervasyonu</h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Müsait zaman aralığında sizinle birebir görüşme gerçekleştirelim. Bilgilerinizi girerek rezervasyon talebinizi bize iletebilirsiniz.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 relative z-10 items-start">
        {/* Left: Meeting Office Info */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 w-72 mx-auto relative shadow-lg">
          <h3 className="font-semibold text-sm mb-1">Satış Ofisi</h3>
          <p className="text-xs text-gray-500 mb-6">VEGA CENTER REZERVASYON</p>
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-40 h-6 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>
        </div>

        {/* Right: Reservation Form */}
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

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText="Tarih Seçin"
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500"
            dateFormat="dd/MM/yyyy"
          />

          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full bg-gray-100 rounded-sm px-4 py-2 text-sm text-gray-500"
          >
            <option value="">Saat Seçin</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>

          <textarea
            placeholder="Notlar (isteğe bağlı)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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

          {success && <p className="text-green-600 text-sm mt-2">Rezervasyon başarıyla alındı!</p>}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>

      {/* Decorative Phone Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/telefon.png" alt="Phone Decor" width={400} height={400} />
      </div>
    </div>
  );
}
