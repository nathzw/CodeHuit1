"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { planetVariants } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { TitleText } from "../components";

const GetStartedM2 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../M3.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Va info aca</>}></TitleText>
        <motion.p className="mt-[8px] font-normal text-[18px] sm:text-[13px] text-secondary-white" variants={fadeIn("up", "tween", 0.2, 1)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt
          ullam commodi nostrum debitis quibusdam quaerat molestias dicta magnam
          natus iste blanditiis, voluptatibus reiciendis impedit porro provident
          nam est rem.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default GetStartedM2;
