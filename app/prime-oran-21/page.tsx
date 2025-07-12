import React from "react";
import Koru20 from "../components/prime-oran-21/koru-konfor-20"; // Ensure Hero is in components folder
import KoruBoxes from "../components/prime-oran-21/koru-boxes";
import Benzer from "../components/prime-oran-21/benzerprojeler";



const Page: React.FC = () => {
   return (
         <main className="scroll-smooth a-color-white ">
      <Koru20/>
      <KoruBoxes/>
      <Benzer/>



       </main>
       );
};

export default Page;
