import React from "react";
import Koru from "../components/natura-20/koru-konfor-hero"; // Ensure Hero is in components folder
import Koru20 from "../components/natura-20/koru-konfor-20"; // Ensure Hero is in components folder
import KoruBoxes from "../components/natura-20/koru-boxes";
import Benzer from "../components/natura-20/benzerprojeler";



const Page: React.FC = () => {
   return (
         <main className="scroll-smooth a-color-white ">
      <Koru/>
      <Koru20/>
      <KoruBoxes/>
      <Benzer/>



       </main>
       );
};

export default Page;
