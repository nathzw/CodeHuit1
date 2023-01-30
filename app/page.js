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

  );
};

export default Page;
