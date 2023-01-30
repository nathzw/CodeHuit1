"use client"
import React from "react";
import { Footer, Navbar } from "../components";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  CTA,
} from "../sections";


function Page() {
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
          <Hero />
          <div className="relative">
            <About />
            <div className="z-0 gradient-03"></div>
            <Explore />
          </div>
          <div className="relative ">
            <GetStarted />
            <div className="z-0 gradient-03"></div>
            <WhatsNew />
          </div>

          <World />
          <div className="relative">
            <Insights />
            <div className="gradient-05" z-0></div>
            <Feedback />
          </div>
          <div className="relative mt-[23px]">
            <CTA />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
