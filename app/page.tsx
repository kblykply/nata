import React from "react";
import PostModernSlider from "./components/slider";
import Projects from "./components/projects";
import Boxes from "./components/5box";
import FeaturedProjects from "./components/featured";
import FinishedProjects from "./components/finished";
import ProjectFilters from "./components/ProjectFilters";
import Blogs from "./components/Blogs";
import { blogPosts } from "@/data/blogPosts"; // ✅ import your data

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-whitetext-white">
      <PostModernSlider />
      <Boxes />
      <ProjectFilters />
      <FeaturedProjects />
      <FinishedProjects />
      
      {/* ✅ Pass the blogPosts to Blogs component */}
      <Blogs posts={blogPosts} />
      

    </main>
  );
};

export default Page;
