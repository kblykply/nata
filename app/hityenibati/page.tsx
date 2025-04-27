import React from "react";
import Hero from "../components/hityenibati/Hero"; // Ensure Hero is in components folder
import Life from "../components/hityenibati/Life"; // Ensure Life is in components folder
import NearLocations from "../components/hityenibati/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/hityenibati/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/hityenibati/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/hityenibati/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/hityenibati/boxes"; // Ensure Boxes is in components folder
import Navigator from "../components/Navigator"; // Ensure Navigator is in components folder
const Page: React.FC = () => {
   return (
      <main className="scroll-smooth a-color-white ">
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
  
      <section id="life" className="scroll-mt-24">
        <Life />
      </section>
  
      <section id="near-locations" className="scroll-mt-24">
        <NearLocations />
      </section>
  
      <section id="site-plans" className="scroll-mt-24">
        <SitePlans />
      </section>
  
      <section id="unit-types" className="scroll-mt-24">
        <UnitTypes />
      </section>
  
      <section id="design" className="scroll-mt-24">
        <Design />
      </section>
  
      <section id="contact">
        <Contact />
      </section>
  
      <section id="office" className="scroll-mt-24">
        <Office />
      </section>
  
      <section id="boxes" className="scroll-mt-24">
        <Boxes />
      </section>
  
      <Navigator />
    </main>
    );
};

export default Page;
