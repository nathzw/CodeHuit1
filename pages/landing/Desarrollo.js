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
//loader
import { useState } from "react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";


function desarrollo(){
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return(
    <div className={`loader`}>
    {loading ? (
      <SyncLoader color={"#b4ff00"} loading={loading} size={20} />
    ) : (
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
    )}
  </div>
  )
}


export default desarrollo;
