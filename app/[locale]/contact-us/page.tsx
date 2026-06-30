"use client";

import { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function pushFormSubmitToDataLayer() {
  const w = window as Window & { dataLayer?: object[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "form_submit" });
}

export default function ContactMapPopup() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    setError("");
    setSuccess(false);

    const nextErrors = {
      name: !name.trim(),
      email: !email.trim(),
      phone: !phone.trim(),
      message: !message.trim(),
    };
    setErrors(nextErrors);
    setErrorMessages({
      name: nextErrors.name ? tc("requiredField") : "",
      email: nextErrors.email ? tc("requiredField") : "",
      phone: nextErrors.phone ? tc("requiredField") : "",
      message: nextErrors.message ? tc("requiredField") : "",
    });
    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    if (!recaptchaToken) {
      setError(t("recaptchaError"));
      return;
    }
    if (!accepted) {
      setError(t("kvkkError"));
      return;
    }

    setLoading(true);

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
        setRecaptchaToken("");
        setErrors({ name: false, email: false, phone: false, message: false });
        setErrorMessages({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(t("submitFailed"));
      }
    } catch {
      setError(t("serverError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-6 md:px-20 py-16">
      {/* Title & Description */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-700 leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 relative z-10 items-start">
        {/* Left: Contact Info */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 w-72 mx-auto relative shadow-lg">
          <h3 className="font-semibold text-sm mb-1">{t("title")}</h3>
          <p className="text-xs text-gray-500 mb-6">{t("centralOffice")}</p>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/contact-phone.png" alt="Phone" width={20} height={20} />
            <a href="tel:4448018" className="text-sm font-medium">
              444 80 18
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Image src="/contact-pin.png" alt="Location" width={20} height={20} />
            <p className="text-xs leading-snug text-gray-700">
              Mustafa Kemal Mah. 2127 Cad. No:21<br />
              {t("districtCity")}
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-40 h-6 bg-pink-300 opacity-30 rounded-full blur-2xl"></div>
        </div>

        {/* Right: Contact Form */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={tc("nameSurname")}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) {
                  setErrors({ ...errors, name: false });
                  setErrorMessages({ ...errorMessages, name: "" });
                }
              }}
              className={`w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500 ${
                errors.name ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder={tc("email")}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({ ...errors, email: false });
                  setErrorMessages({ ...errorMessages, email: "" });
                }
              }}
              className={`w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500 ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder={tc("phone")}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) {
                  setErrors({ ...errors, phone: false });
                  setErrorMessages({ ...errorMessages, phone: "" });
                }
              }}
              className={`w-full bg-gray-100 rounded-sm px-4 py-2 text-sm placeholder:text-gray-500 ${
                errors.phone ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.phone}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder={tc("message")}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) {
                  setErrors({ ...errors, message: false });
                  setErrorMessages({ ...errorMessages, message: "" });
                }
              }}
              className={`w-full bg-gray-100 rounded-sm px-4 py-2 text-sm h-24 placeholder:text-gray-500 ${
                errors.message ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.message}</p>
            )}
          </div>

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
      <strong>{t("kvkkLabel")}</strong> {t("kvkkInfoText")}{" "}
      <Link href="/kvkk" target="_blank" className="underline text-blue-600 hover:text-blue-800">
        {t("kvkkLinkText")}
      </Link>
      {" "}{t("kvkkAccept")}
    </span>
  </label>
</div>


          <ReCAPTCHA
            sitekey="6LeDBj8rAAAAAITpieFy0OTWktxwblgStiQHc9iv"
            onChange={(token) => setRecaptchaToken(token || "")}
            className="mt-2"
          />

          <button
            onClick={() => {
              pushFormSubmitToDataLayer();
              void handleSubmit();
            }}
            disabled={loading}
            className="w-full bg-gray-100 text-sm font-semibold py-2 rounded-sm hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? tc("sending") : tc("send")}
          </button>

          {success && <p className="text-green-600 text-sm mt-2">{t("formSuccess")}</p>}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="mt-8 text-sm text-black space-y-1">
        
<Link href="/rezervation">
  <button className="mt-4 px-4 py-2 border border-gray-300 rounded-xl font-medium text-sm hover:bg-gray-50 transition">
    {t("planMeeting")}
  </button>
</Link>
          </div>
        </div>
      </div>

      {/* Decorative Phone Image */}
      <div className="hidden md:block absolute bottom-0 right-0 z-0">
        <Image src="/telefon.png" alt="Phone Decor" width={400} height={400} />
      </div>
    </div>
  );
}
