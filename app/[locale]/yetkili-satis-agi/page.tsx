import React from "react";
import Hero from "../../components/yetkili-satis-agi/Hero";
import Content from "../../components/yetkili-satis-agi/Content";
import Kalite from "../../components/yetkili-satis-agi/Kalite";
import Points from "../../components/yetkili-satis-agi/Points";

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-white">
      <Hero />
      <Content />
      <Kalite />
      <Points />
    </main>
  );
};

export default Page;
