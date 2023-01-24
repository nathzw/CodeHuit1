import React from "react";
import "../../styles/globals.css";
import { Footer, Navbar } from "../../components";
import Hero from "../../sections/Branding/Hero";
import Abaut from "../../sections/Branding/Abaut";
import Imagen from "../../sections/Branding/imagen";
import GetStart from "../../sections/Branding/GetStart";
import NewStart from "../../sections/Branding/NewStart";
import CTA from "../../components/CTA"
const branding = () =>{
    return(
        <div className="overflow-hidden bg-black" >
        <Navbar />
        <div className="relative">
            <Hero />
            <Abaut />
            <div className="z-0 gradient-03"></div>
            <Imagen />
        </div>
        <div className="relative">
            <GetStart />
            <NewStart />
        </div>
        <div className="relative">
            <CTA />
        </div>
        <Footer />
        </div>
    )
}

export default branding;