import React from "react";
import "../../styles/globals.css";
import { Footer, Navbar } from "../../components";
import Hero from "../../sections/Branding/Hero";
import Abaut from "../../sections/Branding/Abaut";
import Imagen from "../../sections/Branding/imagen";
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
        <Footer />
        </div>
    )
}

export default branding;