import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import HeroD from "../../sections/HeroD";
import { CTA } from "../../sections";
const desarrollo = () => {
  return (
    <div className="overflow-hidden bg-black ">
      <Navbar />
      <div className="relative ">
        <HeroD />
      </div>
      <div className="relative">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};
export default desarrollo;
