"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

/** IVT doğrulama kodunun geçerlilik süresi (saniye). */
const OTP_VALIDITY_SECONDS = 180;

type Props = {
  /** Form gönderimi sonrası CRM'den dönen kayıt kimliği */
  dataId: string;
  /** Kodun gönderildiği telefon numarası */
  phone?: string;
  onVerified: () => void;
  onClose: () => void;
};

/**
 * Double opt-in doğrulama adımı: kullanıcıya SMS ile gelen kod bu ekrandan
 * gönderilir. Onay tamamlandığında izin İYS'ye işlenmiş olur.
 */
export default function ConsentVerifyModal({
  dataId,
  phone,
  onVerified,
  onClose,
}: Props) {
  const t = useTranslations("consentVerify");
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [remaining, setRemaining] = useState(OTP_VALIDITY_SECONDS);

  // Kodun geçerlilik süresi dolduğunda kullanıcı bilgilendirilir.
  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setTimeout(() => setRemaining((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [remaining]);

  const expired = remaining <= 0;
  const countdown = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(
    remaining % 60
  ).padStart(2, "0")}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = code.trim();

    if (!trimmed) {
      setErrorMsg(t("codeRequired"));
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/consent-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataId, code: trimmed, phone }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || t("verifyFailed"));
      }

      onVerified();
    } catch (err: any) {
      setErrorMsg(err?.message ?? t("verifyFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-xl font-bold text-gray-500 hover:text-gray-700"
          aria-label={t("close")}
          type="button"
        >
          ×
        </button>

        <h3 className="mb-2 text-center text-lg font-semibold">{t("title")}</h3>
        <p className="mb-2 text-center text-sm text-gray-600">
          {phone ? t("descriptionWithPhone", { phone }) : t("description")}
        </p>
        <p
          className={`mb-4 text-center text-xs ${
            expired ? "text-red-600" : "text-gray-500"
          }`}
        >
          {expired ? t("expired") : t("remaining", { time: countdown })}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="consent-code" className="mb-1 block text-sm">
              {t("codeLabel")}
            </label>
            <input
              id="consent-code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              className="w-full rounded-md border border-gray-300 px-3 py-2 tracking-widest"
              placeholder={t("codePlaceholder")}
              autoFocus
            />
          </div>

          {errorMsg && (
            <p className="text-sm text-red-600" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || expired}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
          >
            {submitting ? t("verifying") : t("verify")}
          </button>
        </form>
      </div>
    </div>
  );
}
