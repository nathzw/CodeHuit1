import React from "react";
import { Footer, Navbar } from "../../components";
import About from "../../sections/Ecommerce/About";
import GetStart from "../../sections/Ecommerce/GetStart";
import Hero from "../../sections/Ecommerce/Hero";
import Nuevo from "../../sections/Ecommerce/Nuevo";
import WhatsNew from "../../sections/Ecommerce/WhatsNew";
import List from "../../sections/Ecommerce/List";
import CTA from "../../components/CTA";
import styles from "../../styles";
import "../../styles/globals.css";
//loader
import { useState } from "react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";

function Ecommerce() {
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
      )}
    </div>
  );
}
export default Ecommerce;
