import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "NATA Yaşam",
  description: "Ankaranın Konut Markası Nata",
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head />
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>
            {children}
            <WhatsAppButton />
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
