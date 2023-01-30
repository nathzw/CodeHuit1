import React from "react";
import "../../styles/globals.css";

import { Footer, Navbar } from "../../components";
import Hero from "../../sections/Branding/Hero";
import Abaut from "../../sections/Branding/Abaut";
import Imagen from "../../sections/Branding/imagen";
import GetStart from "../../sections/Branding/GetStart";
import NewStart from "../../sections/Branding/NewStart";
import CTA from "../../components/CTA";
import { useState } from "react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";

function branding() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`loader`}>
      {loading ? (
        <SyncLoader color={"#b4ff00"} loading={loading} size={20} />
      ) : (
        <div className="overflow-hidden bg-black">
          <Navbar />
          <div className="relative">
            <Hero />
            <Abaut />
            <div className="z-0 gradient-03"></div>
            <Imagen />
          </div>
          <div className="relative">
            <GetStart />
            <NewStart />
          </div>
          <div className="relative">
            <CTA />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}


export default branding;
