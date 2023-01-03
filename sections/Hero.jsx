"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";{/*Impor del title text */}
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        CODE <span className={`${styles.heroHeading} color-code`} >HUIT</span>
        </motion.h1>
        <motion.div
          variants={textVariant(1.6)}
          className="flex flex-row justify-center items-center color-code"
        >
          <TitleText title={<>TU NUEVA FORMA DE CREAR UN SITIO WEB</>}textStyles="text-center" className="color-code"/>
          
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.3, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          width="300"
          height="200"
          className="  z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[150px] -mt-[40px] pr-[-30px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[200px] w-[200px] sm:h-[200px] h-[200px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
