import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import HeroD from "../../sections/HeroD";
import { CTA } from "../../sections";
import AbautD from "../../sections/AbautD";
const desarrollo = () => {
  return (
    <div className="overflow-hidden bg-black ">
      <Navbar />
      <div className="relative ">
        <HeroD />
        <AbautD />
      </div>
      <div className="relative">
        <CTA />
        
      </div>
      <Footer />
    </div>
  );
};
export default desarrollo;
