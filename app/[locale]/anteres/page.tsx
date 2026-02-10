import React from "react";
import Hero from "@/app/components/anteres/Hero";
import Life from "@/app/components/anteres/Life";
import SitePlans from "@/app/components/anteres/SitePlans";
import NearLocations from "@/app/components/anteres/NearLocations";
import Design from "@/app/components/anteres/Design";
import Contact from "@/app/components/Contact";
import Office from "@/app/components/Office";
import UnitTypes from "@/app/components/anteres/unit-types";
import Boxes from "@/app/components/anteres/boxes";
import Navigator from "@/app/components/Navigator";
const Page: React.FC = () => {
   return (
      <main className="scroll-smooth  ">
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
  
      <section id="life" className="scroll-mt-24">
        <Life />
      </section>
  
      <section id="near-locations" className="scroll-mt-24">
        <NearLocations />
      </section>
  
      <section id="design" className="scroll-mt-24">
        <Design />
      </section>
  
      <section id="contact">
        <Contact />
      </section>
  
     
      <section id="boxes" className="scroll-mt-24">
        <Boxes />
      </section>
  
      <Navigator />
    </main>
    );
};

export default Page;
