import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
{/*Import dependeci for web*/}
import HeroD from "../../sections/Web/HeroD";
import AbautD from "../../sections/Web/AbautD";
import GetStarteD from "../../sections/Web/GetStartD";
import WhatsNewD from "../../sections/Web/WhatsNewD";
import GetStarteD1 from "../../sections/Web/GetStartD1";
import NewSection from "../../sections/Web/NewSection";
import NewSection2 from "../../sections/Web/NewSection2";
import NewSectionImg from "../../sections/Web/NewSectionImg";
import NewSectionFin from "../../sections/Web/NewSectionFin";
import NewSectionFin1 from "../../sections/Web/NewSectionFin1";
import Fui from "../../sections/Web/Fui";
import CTA1 from "../../components/CTA1";
import AbautFin from "../../sections/Web/AbautFin";
import Items from "../../sections/Web/Items";
import Prueba from "../../sections/Web/Prueba";
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
