import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import Hero from "../../sections/Sistemas/Hero";
import Abaut from "../../sections/Sistemas/Abaut";
import NewSistem from "../../sections/Sistemas/NewSistem";
const sistemas = () =>{
    return(
        <div className="overflow-hidden bg-black">
            <Navbar />
            <div className="relative">
            <div className="z-0 gradient-03"></div>
                <Hero />
                <Abaut />
            </div>
            <div className="relative">
                <NewSistem />
            </div>
            <Footer />
            
        </div>
    )
}


export default sistemas;