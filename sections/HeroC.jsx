"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { straggerContainer } from "../components";
import { fadeIn } from "../utils/motion";
import { TitleText } from "../components";

const HeroC = () => (
  <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <motion.div
      variants={textVariant(2.6)}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TitleText
        title="Hagamos algo genial en equipo."
        textStyles="text-center"
      />
      <TitleText
        title="Contanos sobre vos."
        textStyles="text-center text-[#b4ff00]"
      />
    </motion.div>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        ¿Con qué necesitás ayuda? ¿Tenés un proyecto o una idea en la que
        quisieras que colaboremos? Hablemos de eso.
      </motion.p>
    </motion.div>
  </div>
);
export default HeroC;
