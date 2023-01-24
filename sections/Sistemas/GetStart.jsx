import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import {straggerContainer} from "../../utils/motion"
import { fadeIn } from "../../utils/motion";
import { TitleText } from "../../components";
import { planetVariants } from "../../utils/motion";
import Button2 from "../../components/Button2";
const GetStart = () => (
    <section className={`${styles.paddings} relative `}>
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
          src="../Sistem3.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Modular y flexible</>}></TitleText>
        <motion.p
        className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        variants={fadeIn("up", "tween", 0.2, 1)}
        >ofrecemos la posibilidad de elegir con que módulos trabajar en función de las necesidades de su negocio.</motion.p>
        <motion.div 
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={`${styles.flexCenter} mt-[32px]`}>
        <Button2 />
        </motion.div>
        
      </motion.div>
    </motion.div>
    </section>
)

export default GetStart;