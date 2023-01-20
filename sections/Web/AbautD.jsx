"use client";

import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const abautD = () => (
  <section className={`${styles.paddings} relative z-10`} id="aboutD">
    <div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TitleText title={<>Diseño web y desarrollo</>} />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        El diseño y desarrollo de páginas web no es un proceso que se deba
        improvisar. Lejos de ser superficial, un buen diseño deberá contar con
        una estrategia adecuada, y una evaluación sobresaliente de los valores
        esenciales de tu marca. En CODE HUIT, somos una agencia de diseño web y
        desarrollo especializada en la creación de páginas atractivas y
        orientadas a la captación de clientes. Nos enfocamos en la experiencia
        del usuario, la usabilidad y la conversión para crear páginas atractivas
        y optimizadas para la venta.
      </motion.p>
      <motion.img
      variants={fadeIn("up", "tween", 0.3, 1)}
      src="../arrow-down.svg"
      alt="flecha"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      >
      </motion.img>
    </div>
  </section>
);
export default abautD;
