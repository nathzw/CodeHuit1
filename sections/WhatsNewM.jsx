"use client";
import React from "react";
import styles from "../styles";
import straggerContainer from "../utils/motion";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { TitleText } from "../components";
import { planetVariants } from "../utils/motion";
const WhatsNewM = () => (
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
        <TitleText title={<>Aca va info</>}></TitleText>
        <motion.p 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[18px] sm:text-[13px] text-secondary-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptas error laudantium impedit. Nostrum doloribus hic, debitis
          veritatis enim excepturi, natus magnam beatae quas ab est modi,
          deserunt tempora quibusdam.
        </motion.p>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../M2.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNewM;
