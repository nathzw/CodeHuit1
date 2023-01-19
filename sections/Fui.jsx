import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { straggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const Fui = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
      variants={fadeIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TitleText title={<>Lorem Ipsum</>} />
        <motion.p
          className="mt-[8px] font-normal text-[28px] text-start sm:text-[23px] text-secondary-white"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac donec mi est, neque, volutpat feugiat. Porttitor ut fermentum vestibulum bibendum vestibulum, condimentum.
        </motion.p>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../webglass.png"
          alt="webglass"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);
export default Fui;
