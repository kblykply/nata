import React from "react";
import Hero from "../components/mega-1453/Hero"; // Ensure Hero is in components folder
import Life from "../components/mega-1453/Life"; // Ensure Life is in components folder
import NearLocations from "../components/mega-1453/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/mega-1453/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/mega-1453/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/mega-1453/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/mega-1453/boxes"; // Ensure Boxes is in components folder
import Navigator from "../components/mega-1453/Navigator"; // Ensure Navigator is in components folder
const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
       

        <Hero /> 
        <Life /> 
        <NearLocations /> 


        <SitePlans /> 
        <UnitTypes />
        <Design /> 

        <Contact /> 
        <Office /> 
        <Boxes /> 
        <Navigator />
    </main>
  );
};

export default Page;
