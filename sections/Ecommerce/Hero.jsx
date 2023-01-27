import React from "react";
import styles from "../../styles";

import Button4 from "../../components/Button4";
import { TitleText } from "../../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { textVariant } from "../../utils/motion";
import {straggerContainer} from "../../utils/motion"
import { planetVariants } from "../../utils/motion";

const Hero = () => (
    <section className={`${styles.paddings} relative`}>
            <div
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient text-white/30">
        <img
          src="/descuento.png"
          alt="Descuento"
          className="w-[35px] h-[35px]"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">10% </span>
          <span className="text-white/30"> DESCUENTO EN</span>
          <span className="text-white"> TU PRIMER LOGO</span>
        </p>
      </div>
      <motion.div
      variants={textVariant(2.6)}
      className="flex flex-row justify-center w-full text-center mt-[50px]">
        <TitleText title={<>BRANDING</>} />
      </motion.div>
      <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex flex-row justify-center w-full mt-[34px]`}>
      <motion.p 
      variants={fadeIn("up", "tween", 0.2, 1)}
      className={`${styles.paragraph} sm:text-[30px] text-[20px] flex justify-center text-white text-center `}>
      Somos una agencia de branding con experiencia en ayudar a las empresas a desarrollar su identidad de marca y aumentar su presencia en el mercado. Ofrecemos servicios completos de branding, desde la investigación de mercado y el desarrollo de estrategias, hasta la creación de logotipos y materiales de marketing.
      </motion.p>
      
      </motion.div>
      <div className="flex flex-row justify-center w-full text-center mt-[100px]">
      <Button4 />
      </div>
      
    </div>
    <motion.div 
    variants={planetVariants("right")}
    className={`flex-1 ${styles.flexCenter}`}
    >
      <img src="../branding/portada.png" alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>
      
    </motion.div>
    </section>
)

export default Hero;