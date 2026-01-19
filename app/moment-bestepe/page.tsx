import React from "react";
import MomentBestepeGallery from "../components/moment-bestepe/MomentBestepeGallery";
import MomentBestepeMap from "../components/moment-bestepe/MomentBestepeMap";

const Page: React.FC = () => {
  return (
    <main className="scroll-smooth a-color-white">
      <MomentBestepeGallery />
      <MomentBestepeMap />
    </main>
  );
};

export default Page;
