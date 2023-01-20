"use client";
import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { TitleText } from "../../components";
import { fadeIn } from "../../utils/motion";

  

const HeroD = () =>(
    <section className={`flex md:flex-row flex-col ${styles.yPaddings} sm:pl-16 pl-6`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-40`}>
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient text-white/30">
        <img src="../descuento.png" alt="Descuento" className="w-[35px] h-[35px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% EN</span>
          <span className="text-white/30"> TU PRIMERA WEB</span>
          <span className="text-white"> WEB</span>
        </p>
      </div>
      <div className="flex flex-row justify-center w-full">
        <h1 className="flex-1 font-bold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center">DESARROLLO WEB</h1>
      </div>
    </div>
    <div className="">
      <img src="../desarrollo.png" alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] botton-40 pink__gradient rounded-full"></div>
    </div>
    </section>
)

export default HeroD;