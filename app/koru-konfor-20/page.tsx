import React from "react";
import Koru from "../components/koru-konfor-hero"; // Ensure Hero is in components folder
import Koru20 from "../components/koru-konfor-20"; // Ensure Hero is in components folder
import KoruBoxes from "../components/koru-boxes";
import Benzer from "../components/benzerprojeler";



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
