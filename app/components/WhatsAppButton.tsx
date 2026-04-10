import { CONTACT_PHONE_DISPLAY, getContactPhoneHref } from "@/utils/contact";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export default function WhatsAppButton() {
  const tCommon = useTranslations("common");
  const whatsappHref = buildWhatsAppUrl(tCommon("whatsAppGenericMessage"));
  const phoneHref = getContactPhoneHref();
  const buttonClassName =
    "rounded-full p-4 shadow-lg transition-colors flex items-center justify-center";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href={phoneHref}
        aria-label={`${tCommon("phone")}: ${CONTACT_PHONE_DISPLAY}`}
        className={`bg-[#ab1e3b] hover:bg-[#921a33] text-white ${buttonClassName}`}
      >
        <FaPhoneAlt size={20} />
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`bg-green-500 hover:bg-green-600 text-white ${buttonClassName}`}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
