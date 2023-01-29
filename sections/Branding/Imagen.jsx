"use client";
import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { TitleText } from "../../components/CustomTexts";
import { textVariant } from "../../utils/motion";
const Imagen = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
          variants={textVariant(2.6)}
          className={`${styles.flexCenter} mx-auto flex  flex-col `}
    >
    <TitleText title={<>¡Tu identidad visual!</>} />
    </motion.div>
    
    <div className="items-center justify-center flex-1">
    <img src="../branding/logoS.png" className="w-full h-full" alt="" />
    </div>
    
  </section>
);
export default Imagen;
