"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";

import { fadeIn, straggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|Acerca de CodeHuit" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Code Huit </span>
        es una agencia creativa de desarrollo y diseño web que fue creada hace
        más de un año con el propósito de diseñar y crear los mejores sitios del
        mercado. Code Huit es tu mejor opción para obtener la mejor calidad en
        tus proyectos de la mano de nuestros diseñadores, programadores y
        expertos en marketing profesionales que cuentan con años de experiencia
        en la industria.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="flecha"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
