"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { planetVariants } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { TitleText } from "../components";

const GetStartedM = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../M1.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText className="justify-center w-full text-center" title={<>Va info aca</>}></TitleText>
        <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[18px] sm:text-[13px] text-secondary-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          rerum, laboriosam iusto quae enim voluptatem dignissimos eveniet
          aliquid fugiat veniam ab incidunt odio laudantium inventore minus nam.
          Explicabo, sint. Necessitatibus?
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default GetStartedM;
