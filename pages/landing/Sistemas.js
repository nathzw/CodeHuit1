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
//loader
import { useState } from "react";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";


function sistemas(){
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return(
    <div className={`loader`}>
    {loading ? (
      <SyncLoader color={"#b4ff00"} loading={loading} size={20} />
    ) : (
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
    )}
  </div>
  )
}


export default sistemas;
