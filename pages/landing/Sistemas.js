import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import Hero from "../../sections/Sistemas/Hero";
import Abaut from "../../sections/Sistemas/Abaut";
import NewSistem from "../../sections/Sistemas/NewSistem";
import WhatsNew from "../../sections/Sistemas/WhatsNews";
import GetStart from "../../sections/Sistemas/GetStart";
import List from "../../sections/Sistemas/List";
import CTA from "../../components/CTA";
import Finish from "../../sections/Sistemas/Finish";
const sistemas = () => {
  return (
    <div className="overflow-hidden bg-gray">
      <Navbar />
      <div className="relative">
        <Hero />
        <Abaut />
      </div>
      <div className="relative">
        <WhatsNew />
        <GetStart />
      </div>
      <div className="relative">
        <NewSistem />
      </div>
      <div className="relative">
        <List />
      </div>
      <div className="relative">
        <Finish />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default sistemas;
