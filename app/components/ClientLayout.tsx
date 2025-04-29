"use client";

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import NewProjects from "../components/New-Projects-Popup";
import ContactPopup from "../components/ContactPopup";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isNewProjectsOpen, setIsNewProjectsOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false); // <-- new state

  return (
    <>
      {/* Header receives the setState */}
      <Header
        setIsNewProjectsOpen={setIsNewProjectsOpen}
        setIsContactPopupOpen={setIsContactPopupOpen} // <-- new prop
      />

      {/* Main Content */}
      <main className="min-h-screen pt-0">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Popup */}
      {isNewProjectsOpen && <NewProjects onClose={() => setIsNewProjectsOpen(false)} />}
      {isContactPopupOpen && <ContactPopup onClose={() => setIsContactPopupOpen(false)} />}
    </>
  );
}
