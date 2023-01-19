import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import HeroD from "../../sections/HeroD";
import AbautD from "../../sections/AbautD";
import GetStarteD from "../../sections/GetStartD";
import WhatsNewD from "../../sections/WhatsNewD";
import GetStarteD1 from "../../sections/GetStartD1";
import NewSection from "../../sections/NewSection";
import NewSection2 from "../../sections/NewSection2";
import NewSectionImg from "../../sections/NewSectionImg";
import NewSectionFin from "../../sections/NewSectionFin";
import NewSectionFin1 from "../../sections/NewSectionFin1";
import Fui from "../../sections/Fui";
import CTA1 from "../../components/CTA1";
import AbautFin from "../../sections/AbautFin";
import Items from "../../sections/Items";
import Prueba from "../../sections/Prueba";
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
      <div className="reletive blanco">
        <NewSection />
      </div>
      <div className="relative">
        <NewSection2 />
        <NewSectionImg />
        <NewSectionFin />
        <NewSectionFin1 />
        <Fui />
      </div>

      <div className="relative">
        <CTA1 />
        <AbautFin />
      </div>
      <div className="relative">
        <Items />
        <Prueba />
      </div>
      <Footer />
    </div>
  );
};
export default desarrollo;
