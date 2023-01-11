import React from "react";
import { Footer, Navbar } from "../components";
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

const Page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0"></div>
        <Explore />
      </div>
      <div className="relative ">
        <GetStarted />
        <div className="gradient-03 z-0"></div>
        <WhatsNew />
      </div>

      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-05" z-0></div>
        <Feedback />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
