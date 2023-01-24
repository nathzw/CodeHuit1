"use client";

import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { straggerContainer } from "../../utils/motion";
import { planetVariants } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import { TitleText } from "../../components";

const NewStart = () => (
  <section className={`${styles.paddings}`}>
    {/* primer apartado */}
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
          src="../branding/logoaladdin.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Identidad visual</>}></TitleText>

        <ul className="mt-[8px] font-normal text-[28px] text-left sm:text-[23px] text-white list-disc">
          <li>Investigamos el mercado, tus clientes y competidores.</li>
          <li>Definimos juntos el propósito y personalidad de tu marca.</li>
          <li>Naming — Buscamos el mejor nombre y dominio que pegue.</li>
          <li>Diseñamos tu logotipo basado en esa personalidad.</li>
          <li>Te guiamos para aplicar la identidad visual donde sea.</li>
        </ul>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={`${styles.flexCenter} mt-[32px]`}
        ></motion.div>
      </motion.div>
    </motion.div>
    {/* segundo apartado */}
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2)}
        className="flex-[0.75] flex justify-center text-center flex-col"
      >
        <TitleText title={<>Agencia de Diseño</>}></TitleText>
        <ul className="mt-[8px] font-normal text-[28px] text-left sm:text-[23px] text-white list-disc">
            <li>Nos encargamos de todo lo que necesitas diseñar.</li>
            <li>Te aseguras coherencia en toda tu comunicación.</li>
            <li>Vas a tener lindo hasta lo que no pensabas.</li>
            <li>Brochures, carpetas y flyers.</li>
            <li>Folletos simples, dípticos y trípticos.</li>
        </ul>
        <div className={`${styles.flexCenter} mt-[20px]`}>
         
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../branding/oficina.png"
          alt="mj"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default NewStart;
