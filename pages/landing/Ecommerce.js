import React from "react";
import { Footer, Navbar } from "../../components";
import About from "../../sections/Ecommerce/About";
import GetStart from "../../sections/Ecommerce/GetStart";
import Hero from "../../sections/Ecommerce/Hero";
import WhatsNew from "../../sections/Ecommerce/WhatsNew";
import styles from "../../styles";
import "../../styles/globals.css";
const Ecommerce = () => {
  return (
    <div className="overflow-hidden bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
        <GetStart />
        <WhatsNew />
      </div>
      <Footer />
    </div>
  );
};
export default Ecommerce;
