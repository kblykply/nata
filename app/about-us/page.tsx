import React from "react";
import Hero from "../components/about-us/Hero"; // Ensure Hero is in components folder
import Content  from "../components/about-us/Content"; // Ensure Hero is in components folder
import Kalite  from "../components/about-us/Kalite"; // Ensure Hero is in components folder
import Points  from "../components/about-us/Points"; // Ensure Hero is in components folder




const Page: React.FC = () => {
   return (
       <main className="min-h-screen bg-whitetext-white ">
                    
             <Hero/>
             <Content/>
             <Kalite/>
             <Points/>


      
      
      
              
      
      
         
          </main>
  );
};

export default Page;
