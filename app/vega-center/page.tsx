import React from "react";
import Hero from "../components/vega-center/Hero"; // Ensure Hero is in components folder
import Life from "../components/vega-center/Life"; // Ensure Life is in components folder
import NearLocations from "../components/vega-center/NearLocations"; // Ensure NearLocations is in components folder
import SitePlans from "../components/vega-center/SitePlans"; // Ensure SitePlans is in components folder
import Design from "../components/vega-center/Design"; // Ensure Design is in components folder
import Contact from "../components/vega-center/Contact"; // Ensure Contact is in components folder
import Office from "../components/vega-center/Office"; // Ensure Office is in components folder
const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
       

        <Hero /> {/* Hero component for the Vega Center page */}
        {/* Add additional components or sections as needed */}
        {/* Example: <PostModernSlider /> */}
        {/* Example: <Projects /> */}
        {/* Example: <Invest /> */}
        {/* Example: <Why /> */}
        {/* Example: <Test /> */}
        <Life /> {/* Life component for the Vega Center page */}
        {/* Add more components or sections as needed */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
        <NearLocations /> {/* NearLocations component for the Vega Center page */}
        {/* Example: <Contact /> */} {/* Uncomment if you have a Contact component */}
        {/* Example: <Map /> */} {/* Uncomment if you have a Map component */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}


        <SitePlans /> {/* SitePlans component for the Vega Center page */}

        <Design /> {/* Design component for the Vega Center page */}
        {/* Add more components or sections as needed */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
        {/* Example: <Contact /> */} {/* Uncomment if you have a Contact component */}
        {/* Example: <Map /> */} {/* Uncomment if you have a Map component */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}

        <Contact /> {/* Contact component for the Vega Center page */}
        {/* Add more components or sections as needed */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
        {/* Example: <Contact /> */} {/* Uncomment if you have a Contact component */}
        {/* Example: <Map /> */} {/* Uncomment if you have a Map component */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
        <Office /> {/* Office component for the Vega Center page */}
        {/* Add more components or sections as needed */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
        {/* Example: <Contact /> */} {/* Uncomment if you have a Contact component */}
        {/* Example: <Map /> */} {/* Uncomment if you have a Map component */}
        {/* Example: <Footer /> */} {/* Uncomment if you have a Footer component */}
    </main>
  );
};

export default Page;
