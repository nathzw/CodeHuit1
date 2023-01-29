import React from "react";
import { Footer, Navbar } from "../../components";
import About from "../../sections/Ecommerce/About";
import GetStart from "../../sections/Ecommerce/GetStart";
import Hero from "../../sections/Ecommerce/Hero";

import Nuevo from "../../sections/Ecommerce/Nuevo";
import WhatsNew from "../../sections/Ecommerce/WhatsNew";
import List from "../../sections/Ecommerce/List";
import CTA from "../../components/CTA"
import styles from "../../styles";
import "../../styles/globals.css";
const Ecommerce = () => {
  return (
    <div className="overflow-hidden bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
      </div>
      <div className="relative">
        <GetStart />
        <WhatsNew />
      </div>
      <div className="relative">
        <Nuevo />
        <List />
      </div>
      <div className="relative">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};
export default Ecommerce;
