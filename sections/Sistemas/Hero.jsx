import React from "react";
import styles from "../../styles";
{
  /*Importacion de modulos de desarrollo*/
}
import { motion } from "framer-motion";
import { TitleText } from "../../components";
import GetStart from "../../components/GetStart";
const Hero = () => (
  <section
    className={`flex md:flex-row flex-col ${styles.yPaddings} sm:pl-16 pl-6`}
  >
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient text-white/30 text-center">
        <img
          src="/descuento.png"
          alt="Descuento"
          className="w-[35px] h-[35px]"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">10% </span>
          <span className="text-white/30"> DESCUENTO EN</span>
          <span className="text-white"> TU PRIMER SISTEMA</span>
        </p>
      </div>
      <div className="flex flex-row font-bold justify-center w-full text-center uppercase mt-[23px]">
        <TitleText
          title={
            <>
              Sistemas de gestion
            </>
          }
        ></TitleText>
      </div>
      <div className="flex flex-row font-bold justify-center w-full text-center uppercase mt-[23px]">
      <p className={`${styles.paragraph} text-white text-center`}>
        CODE HUIT ofrece una serie de módulos que le permiten enfocarse en un
        área de su negocio y explotar al máximo sus beneficios
      </p>
      </div>
      <div className="flex flex-row justify-center w-full text-center uppercase mt-[23px]">
      <GetStart />
      </div>
    </div>
    

  </section>
);

export default Hero;
