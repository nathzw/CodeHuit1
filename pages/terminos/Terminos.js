import React from "react";
// import "../../styles/globals.css";
import { Footer, Navbar } from "../../components";

{/*Import dependeci for web*/}
import Hero from "../../sections/Terminos/hero";
import CTA from "../../components/CTA"

const terminos = () =>{
    return (
        <div className="overflow-hidden bg-black">
            <Navbar />
            <div className="relative ">
                <Hero />
                <CTA />
            </div>
            <Footer />
        </div>
    )
} ;
export default terminos;