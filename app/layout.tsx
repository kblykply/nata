// pages/_app.tsx


export const dynamic = "force-dynamic"; // ⬅️ ADD THIS LINE FIRST



import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import ClientLayout from "./components/ClientLayout";

import Script from 'next/script';
import Preloader from "./components/Preloader";



export const metadata: Metadata = {
  title: "NATA Yaşam",
  description: "Ankaranın Konut Markası Nata",
   icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={"scroll-smooth "}>



<head>

      
        
      </head>


      <body className="antialiased">

                <Preloader />

<ClientLayout>

{children}
      <WhatsAppButton />
</ClientLayout>

      </body>
    </html>
  );
}
