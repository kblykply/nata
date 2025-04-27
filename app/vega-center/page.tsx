import React from "react";
import Hero from "../components/vega-center/Hero"; // Ensure Hero is in components folder
import Life from "../components/vega-center/Life"; // Ensure Life is in components folder
import NearLocations from "../components/vega-center/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/vega-center/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/vega-center/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/vega-center/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/vega-center/boxes"; // Ensure Boxes is in components folder
import Navigator from "../components/Navigator"; // Ensure Navigator is in components folder

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
