"use client";

import React from "react";
import styles from "../styles";
import { TitleText } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const abautD = () => (
  <section className={`${styles.paddings} relative z-10`} id="aboutD">
    <div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TitleText title={<>Lorem</>}/>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        exercitationem eos, ut a accusamus nulla numquam nam facilis tempora
        quisquam unde impedit rerum nobis eius, vero eum adipisci pariatur enim.
      </motion.p>
    </div>
  </section>
);
export default abautD;
