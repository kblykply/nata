import React from "react";
import PostModernSlider from "./components/slider"; // Ensure Slider is in components folder
import Projects from "./components/projects"; // Ensure Projects is in components folder


const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white ">
        <PostModernSlider />
        <Projects />

        


        


   
    </main>
  );
};

export default Page;
