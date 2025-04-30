import React from "react";
import PostModernSlider from "./components/slider"; // Ensure Slider is in components folder
import Projects from "./components/projects"; // Ensure Projects is in components folder
import Boxes from "./components/5box"; // Ensure Boxes is in components folder
import FeaturedProjects from "./components/featured";
import FinishedProjects from "./components/finished"; // Ensure FinishedProjects is in components folder
import ProjectFilters from "./components/ProjectFilters"

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-whitetext-white ">
              
        <PostModernSlider />
        <Boxes/>
        <ProjectFilters/>

        <FeaturedProjects />
        <FinishedProjects />


   
    </main>
  );
};

export default Page;
