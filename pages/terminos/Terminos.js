import React from "react";
import "../../styles/globals.css";
import { Footer, Navbar } from "../../components";
{/*Import dependeci for web*/}
import Hero from "../../sections/Terminos/hero";

const terminos = () =>{
    return (
        <div className="overflow-hidden bg-black">
            <Navbar />
            <div className="relative ">
                <Hero />
            </div>
            <Footer />
        </div>
    )
} ;
export default terminos;