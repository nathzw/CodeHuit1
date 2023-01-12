import React from "react";
import styles from "../styles";

import { Footer, Navbar } from "../components";
import "../styles/globals.css";
import HeroC from "../sections/HeroC";
import FormC from "../components/FormC";

const Contact = () => {
  return (
    <div className="overflow-hidden bg-black ">
      <Navbar />
      <HeroC />
      <div className="relative ">
        <FormC />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
