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
<section className={`flex md:flex-row flex-col ${styles.yPaddings} sm:pl-16 pl-6`}>
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
          <span className="text-white"> TU E-COMMERCE</span>
        </p>
      </div>
      <div className="flex flex-row justify-center w-full mt-[100px]">
        <h1 className="flex-1 font-bold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center">
          ECOMMERCE
        </h1>
        <div className="hidden mr-0 sm:flex md:mr-4">
          
        </div>
      </div>

      <p className={` text-white text-center sm:text-[32px] text-[20px]`}>
      Una tienda online personalizada te permitirá ofrecer una experiencia única a quienes siguen tu marca y necesitan resolver con practicidad la compra de tus productos. En un mismo lugar tendrás integrada la visibilidad de los artículos, variaciones según talle, color, tamaño o cualquier otra dimensión que haya que agregar junto medios de pago, posibilidades de financiación o envío a domicilio.
      </p>
      <div className={`flex w-full mt-[50px] justify-center`}>
      <Button4 />
      </div>
      
    </div>
    
    <div className="">
      <img src="../ecommerce/inicio.png" alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] botton-40 pink__gradient rounded-full"></div>
    </div>
</section>
)

export default Hero;