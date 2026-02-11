import { Link } from "@/i18n/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export default function WhatsAppButton() {
  const tCommon = useTranslations("common");
  const whatsappHref = buildWhatsAppUrl(tCommon("whatsAppGenericMessage"));

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
