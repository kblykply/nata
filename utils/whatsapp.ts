const WHATSAPP_PHONE = "905017111818";

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encoded}&type=phone_number&app_absent=0`;
}

