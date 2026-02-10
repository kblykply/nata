
import React from "react";
import Hero from "../../components/rams-garden/Hero"; // Ensure Hero is in components folder
import Life from "../../components/rams-garden/Life"; // Ensure Life is in components folder
import NearLocations from "../../components/rams-garden/NearLocations"; // Ensure NearLocations is in components folder
import Design from "../../components/rams-garden/Design"; // Ensure Design is in components folder
import Contact from "../../components/Contact"; // Ensure Contact is in components folder
import Boxes from "../../components/rams-garden/boxes"; // Ensure Boxes is in components folder
import Navigator from "../../components/Navigator"; // Ensure Navigator is in components folder



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
