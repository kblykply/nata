import { Link } from "@/i18n/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://api.whatsapp.com/send/?phone=905017111818&text=Merhaba%2C+projeleriniz+hakk%C4%B1nda+detayl%C4%B1+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" // replace with your real WhatsApp number, like 905321234567
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
