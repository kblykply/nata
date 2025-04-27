import React from "react";
import Hero from "../components/rams-garden/Hero"; // Ensure Hero is in components folder
import Life from "../components/rams-garden/Life"; // Ensure Life is in components folder
import NearLocations from "../components/rams-garden/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/rams-garden/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/rams-garden/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/rams-garden/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/rams-garden/boxes"; // Ensure Boxes is in components folder
import Navigator from "../components/vega-center/Navigator"; // Ensure Navigator is in components folder
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
