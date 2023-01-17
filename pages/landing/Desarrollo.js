import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import HeroD from "../../sections/HeroD";
import { CTA } from "../../sections";
import AbautD from "../../sections/AbautD";
import GetStarteD from "../../sections/GetStartD";
import WhatsNewD from "../../sections/WhatsNewD";
import GetStarteD1 from "../../sections/GetStartD1";
const desarrollo = () => {
  return (
    <div className="overflow-hidden bg-black ">
      <Navbar />
      <div className="relative ">
        <HeroD />
        <AbautD />
      </div>
      <div className="relative">
      <GetStarteD />
      <WhatsNewD />
      <GetStarteD1 />
      </div>
      <div className="relative">
        
        <CTA />
      </div>
      <Footer />
    </div>
  );
};
export default desarrollo;
