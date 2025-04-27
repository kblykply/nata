import React from "react";
import Hero from "../components/vega-otonomi/Hero"; // Ensure Hero is in components folder
import Life from "../components/vega-otonomi/Life"; // Ensure Life is in components folder
import NearLocations from "../components/vega-otonomi/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/vega-otonomi/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/vega-otonomi/Design"; // Ensure Design is in components folder
import Contact from "../components/Contact"; // Ensure Contact is in components folder
import Office from "../components/Office"; // Ensure Office is in components folder
import UnitTypes from "../components/vega-otonomi/unit-types"; // Ensure UnitTypes is in components folder
import Boxes from "../components/vega-otonomi/boxes"; // Ensure Boxes is in components folder
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
