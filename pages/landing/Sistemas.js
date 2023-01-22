import React from "react";
import { Footer, Navbar } from "../../components";
import "../../styles/globals.css";
import Hero from "../../sections/Sistemas/Hero";
import Abaut from "../../sections/Sistemas/Abaut";
import NewSistem from "../../sections/Sistemas/NewSistem";
import WhatsNew from "../../sections/Sistemas/WhatsNews";
const sistemas = () =>{
    return(
        <div className="overflow-hidden bg-gray">
            <Navbar />
            <div className="relative">
                <Hero />
                <Abaut />
            </div>
            <div className="relative">
                <WhatsNew />
            </div>
            <div className="relative">
                <NewSistem />
            </div>
            <Footer />
            
        </div>
    )
}


export default sistemas;