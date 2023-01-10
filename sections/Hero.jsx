"use client";
// import { motion } from "framer-motion";

import styles from "../styles";
// import { slideIn, staggerContainer, textVariant } from "../utils/motion";
// import { NewFeatures, TitleText, TypingText } from "../components";
import GetStart from "../components/GetStart";
{
  /*Impor del title text */
}
const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.yPaddings} sm:pl-16 pl-6`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient text-white/30">
        <img
          src="/descuento.png"
          alt="Descuento"
          className="w-[35px] h-[35px]"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          <span className="text-white/30"> DESCUENTO EN</span>
          <span className="text-white"> TU PRIMERA WEB</span>
        </p>
      </div>
      <div className="flex flex-row justify-center w-full">
        <h1 className="flex-1 font-normal font-regular ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Hola, somos <br className="sm:block hidden" />{" "}
          <span className="text-white font-bold text-[60px]">CODE </span><span className="text-[#b4ff00] font-bold text-[60px]">HUIT</span> 
        </h1>
        <div className="sm:flex hidden md:mr-4 mr-0">
          <GetStart />
        </div>
      </div>
      <h1 className="font-normal font-regular ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        creative
      </h1>
      <p className={`${styles.paragraph} text-white`}>
      Creemos que la innovación ocurre cuando nuestro equipo y nuestros clientes pueden crecer y progresar.
      </p>
    </div>
    <div className="">
      <img src="./robot.png" alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] botton-40 pink__gradient rounded-full"></div>
    </div>
  </section>
);

export default Hero;
{
  /* <motion.div
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
</motion.div> */
}
