"use client";

import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { fadeIn, straggerContainer } from "../../utils/motion"
import { motion } from "framer-motion";
import { planetVariants } from "../../utils/motion";

const GetStart = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter}`}
      >
        <img
          src="../branding/paleta.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Diferenciate</>}></TitleText>
        <motion.p
        className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        variants={fadeIn("up", "tween", 0.2, 1)}
        >La paleta de colores utilizada en la marca es crucial, ya que ayuda a establecer una identidad visual para una empresa o producto. Los colores elegidos pueden evocar ciertas emociones y asociaciones en el espectador, lo que puede influir en su percepción de la marca. </motion.p>
        <motion.div 
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={`${styles.flexCenter} mt-[32px]`}>
        </motion.div>
        
      </motion.div>
    </motion.div>

    <div className={`${styles.flexCenter}`}>
      <TitleText title={<>Buenas marcas atraen buenos clientes.</>} />
    </div>
    <motion.div
    variants={straggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    >
    <motion.p
    variants={fadeIn ("up", "tween", 0.2, 1)}
    className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
    >
    La identidad visual de una marca es la responsable de esa primera impresión que genera en la mente de los consumidores.
Si está diseñada estratégicamente, puede inspirar y transmitir una personalidad única a las personas – tus futuros clientes.
    </motion.p>
    </motion.div>
  </section>
);

export default GetStart;
