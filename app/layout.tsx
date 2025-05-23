// pages/_app.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import Script from 'next/script'
  



export const metadata: Metadata = {
  title: "Nata Yaşam",
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

        {/* Zoho SalesIQ Initialization Script */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>

        {/* Zoho SalesIQ Widget Script */}
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.eu/widget?wc=siq12bbb3f71233b881580f172590a15f3e21a37acd0a5d6482713a01047b753e48"
          strategy="lazyOnload"
        />
        
      </head>


      <body className="antialiased">


<ClientLayout>

{children}

</ClientLayout>
        
      </body>
    </html>
  );
}
