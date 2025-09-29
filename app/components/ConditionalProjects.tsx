"use client";

import { useState, useEffect } from "react";
import ProjectsMap from "./projectsmap";
import Projects from "./projects";

export default function ConditionalProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <Projects /> : <ProjectsMap />;
}
