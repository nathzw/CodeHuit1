"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import straggerContainer, { fadeIn } from "../utils/motion";
import { TitleText } from "../components";
import { planetVariants } from "../utils/motion";
import Button2 from "../components/Button2";
const WhatsNewD = () => (
  <section className={`${styles.paddings} relative z-10`}>
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
        <TitleText title={<>Diseño páginas corporativas</>}></TitleText>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        >
          Las páginas webs son perfectas para aquellas empresas que ofrecen
          servicios que quieren dar a conocer su negocio, conseguir leads y/o
          ventas. Diseñamos webs a medida con diseño responsive adaptable a
          cualquier dispositivo, cuidando al máximo la imagen corporativa a la
          vez que te ayudamos a generar tráfico y nos preocupamos por ofrecer la
          mejor experiencia de usuario
        </motion.p>
        <div className={`${styles.flexCenter} mt-[20px]`}>
          <Button2 />
        </div>
      </motion.div>
      <motion.div
      variants={planetVariants("right")}
      className={`flex-1 ${styles.flexCenter} `}
      >
        <img src="../compuDesa2.png" alt="mj" className="w-[90%] h-[90%] object-contain" />

      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNewD;
