import React from "react";
import PostModernSlider from "./components/slider"; // Ensure Slider is in components folder
import Projects from "./components/projects"; // Ensure Projects is in components folder
import Boxes from "./components/5box"; // Ensure Boxes is in components folder
import FeaturedProjects from "./components/featured";


const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-whitetext-white ">
              
        <PostModernSlider />
        <Boxes/>

        <Projects />
        <FeaturedProjects />



        


   
    </main>
  );
};

export default Page;
