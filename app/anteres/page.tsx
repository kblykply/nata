import React from "react";
import Hero from "../components/anteres/Hero"; // Ensure Hero is in components folder
import Life from "../components/anteres/Life"; // Ensure Life is in components folder
import NearLocations from "../components/anteres/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/anteres/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/anteres/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/anteres/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/anteres/boxes"; // Ensure Boxes is in components folder
import Navigator from "../components/anteres/Navigator"; // Ensure Navigator is in components folder
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
