import React from "react";
import { Footer, Navbar } from "../../components";
import { CTA } from "../../sections";
import AbautM from "../../sections/AbautM";
import Export from "../../sections/Expo";
import GetStartedM from "../../sections/GetStartedM";
import GetStartedM2 from "../../sections/GetStartedM2";
import WhatsNewM from "../../sections/WhatsNewM";
import styles from "../../styles";
import "../../styles/globals.css";
const marketing = () => {
  return (
    <div className="overflow-hidden bg-black">
      <Navbar />
      
      <div className="relative">
        <AbautM />
      </div>
      <div className="relative">
        <GetStartedM />
        <div className="z-0 gradient-03"></div>
        <WhatsNewM />
        
        <GetStartedM2 />
      </div>
      <div className="gradient-04" z-0></div>
      <div className="relative">
        <Export />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};
export default marketing;
