  "use client";

  import { X } from "lucide-react";
  import Image from "next/image";
  import { Link } from "@/i18n/navigation";
  import ReCAPTCHA from "react-google-recaptcha";
  import { useState, useEffect, useRef } from "react";
  import { useTranslations } from "next-intl";
  import ConsentVerifyModal from "./ConsentVerifyModal";



  interface ContactMapPopupProps {
    onClose: () => void;
  }

  export default function ContactMapPopup({ onClose }: ContactMapPopupProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [accepted, setAccepted] = useState(false);
    // Ticari elektronik ileti izni (İYS'ye iletilir); aydınlatma onayından ayrıdır.
    const [commercialConsent, setCommercialConsent] = useState(false);
      const [recaptchaToken, setRecaptchaToken] = useState("");

    // Double opt-in: form sonrası SMS koduyla izin doğrulama adımı
    const [pendingConsent, setPendingConsent] = useState<{
      dataId: string;
      phone: string;
    } | null>(null);

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

    const t = useTranslations("contact");
    const tc = useTranslations("common");

    const modalRef = useRef<HTMLDivElement>(null);




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
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
          name,
          email,
          phone,
          message,
          recaptchaToken,
          kvkk_consent: commercialConsent ? 1 : 0,
        }),      });

        const data = await res.json();

        if (data.success) {
          // İzin verildiyse doğrulama kodu ekranı açılır.
          if (data?.verificationRequired && data?.dataId) {
            setPendingConsent({ dataId: data.dataId, phone });
          }

          setSuccess(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setAccepted(false);
          setCommercialConsent(false);
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
      <>
          <div onClick={(e) => e.stopPropagation()}>
<div
  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
  onClick={onClose}
/>  
  <div
    onClick={(e) => e.stopPropagation()}
    ref={modalRef}
    className="fixed top-30 left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-3xl shadow-xl z-[95] overflow-hidden flex animate-fade-in"
  >
          {/* LEFT SIDE */}
          <div className="w-1/2 p-10 space-y-4 bg-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              title={tc("close")}
              aria-label={tc("close")}
            >
              <X size={20} />
            </button>

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

      {/* Ticari elektronik ileti izni: aydınlatma onayından ayrı ve isteğe bağlıdır. */}
      <div className="flex items-start gap-2 text-sm">
  <input
    type="checkbox"
    className="mt-1"
    id="commercialConsentCheckbox"
    checked={commercialConsent}
    onChange={() => setCommercialConsent(!commercialConsent)}
  />
  <label
    htmlFor="commercialConsentCheckbox"
    className="text-xs text-gray-800 leading-snug"
  >
    {t("commercialConsent")}
  </label>
</div>


            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gray-100 text-sm font-semibold py-2 rounded-sm hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? tc("sending") : tc("send")}
            </button>
  <ReCAPTCHA
    sitekey="6LeDBj8rAAAAAITpieFy0OTWktxwblgStiQHc9iv"
    onChange={(token) => setRecaptchaToken(token || "")}
    className="mt-2"
  />
            {success && <p className="text-green-600 text-sm mt-2">{t("formSuccess")}</p>}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-8 text-sm text-black space-y-1">
           <Link
              href="/rezervation"
              className="mt-4 inline-block px-4 py-2 border border-gray-300 rounded-xl font-medium text-sm hover:bg-gray-50 transition"
            >
              {t("planMeeting")}
            </Link>


              
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 relative p-4">
            <Image
              src="/merkezi-satis.png"
              alt="Map"
              fill
              className="object-cover"
            />

            <div className="absolute top-6 right-6 w-[260px] bg-white rounded-xl shadow-md p-3 text-xs space-y-1">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                <Image src="/iletisim-gorsel.png" alt="Building" fill className="object-cover" />
              </div>
              <p className="font-medium">Mustafa Kemal Mah. 2127 Cad. No:21, Çankaya - ANKARA</p>
              <a href="tel:4448018" className="font-semibold text-black">
                444 80 18
              </a>
              <p className="text-gray-500">9:30 AM - 18:30 PM All Week</p>
            </div>
          </div>
        </div>
        </div>

        {pendingConsent && (
          <ConsentVerifyModal
            dataId={pendingConsent.dataId}
            phone={pendingConsent.phone}
            onVerified={() => setPendingConsent(null)}
            onClose={() => setPendingConsent(null)}
          />
        )}
      </>

    );
  }
