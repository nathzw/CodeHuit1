"use client";
import React from "react";
import { Footer, Navbar } from "../components";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import CookieConsent from "react-cookie-consent";
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
          {/* alert cookies */}
          <CookieConsent
            debug={true}
            location="bottom"
            style={{ background: "#1a1a1a", textAlign: "center" }}
            buttonStyle={{
              color: "#fff",
              background: "#3561ff",
              fontSize: "14px",
              border: "2px",
              borderRadius: "10px",
              width: "100px",
              height: "30px",
            }}
            buttonText="Accept"
            expires={365}
            buttonClasses="btn btn-primary"
          >
            Este sitio utiliza cookies. Consulte nuestra{" "}
            <a style={{ color: "#b4ff00" }} href="/terminos/Terminos">
              política de privacidad
            </a>{" "}
            para obtener más información.
          </CookieConsent>
          {/* fin alert cookies */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
