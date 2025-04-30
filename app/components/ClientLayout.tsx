"use client";

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import NewProjects from "../components/New-Projects-Popup";
import ContactPopup from "../components/ContactPopup";
import KampanyalarPopup from "../components/KampanyalarPopup";


declare global {
  interface Window {
    kampanyaTimeout: ReturnType<typeof setTimeout> | null;
    yeniProjeTimeout: ReturnType<typeof setTimeout> | null;
    iletisimTimeout: ReturnType<typeof setTimeout> | null;
  }
}

if (typeof window !== "undefined" && window.kampanyaTimeout === undefined) {
  window.kampanyaTimeout = null;
  window.yeniProjeTimeout = null;
  window.iletisimTimeout = null;
}





export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isNewProjectsOpen, setIsNewProjectsOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isKampanyalarOpen, setIsKampanyalarOpen] = useState(false);

  return (
    <>
      <Header
        isKampanyalarOpen={isKampanyalarOpen}
        setIsKampanyalarOpen={setIsKampanyalarOpen}
        setIsNewProjectsOpen={setIsNewProjectsOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />

      {/* Kampanyalar Popup (positioned absolutely) */}
      {isKampanyalarOpen && (
  <div
    className="absolute left-[170px] top-[80px] z-[95]"
    onMouseEnter={() => {
      clearTimeout(window.kampanyaTimeout ?? undefined);
            setIsKampanyalarOpen(true);
    }}
    onMouseLeave={() => {
      window.kampanyaTimeout = setTimeout(() => {
        setIsKampanyalarOpen(false);
      }, 200);
    }}
  >
    <KampanyalarPopup onClose={() => setIsKampanyalarOpen(false)} />
  </div>
)}




{isNewProjectsOpen && (
  <div
    className="absolute left-[150px] top-[80px] z-[95]"
    onMouseEnter={() => {
      clearTimeout(window.yeniProjeTimeout ?? undefined);
      setIsNewProjectsOpen(true);
    }}
    onMouseLeave={() => {
      window.yeniProjeTimeout = setTimeout(() => {
        setIsNewProjectsOpen(false);
      }, 200);
    }}
  >
    <NewProjects onClose={() => setIsNewProjectsOpen(false)} />
  </div>
)}




{isContactPopupOpen && (
  <div
    className="absolute right-[50px] top-[80px] z-[95]"
    onMouseEnter={() => {
      clearTimeout(window.iletisimTimeout ?? undefined);
      setIsContactPopupOpen(true);
    }}
    onMouseLeave={() => {
      window.iletisimTimeout = setTimeout(() => {
        setIsContactPopupOpen(false);
      }, 200);
    }}
  >
    <ContactPopup onClose={() => setIsContactPopupOpen(false)} />
  </div>
)}



      {/* Main Content */}
      <main className="min-h-screen pt-0">{children}</main>

      <Footer />

      {/* Other Popups */}
    </>
  );
}
