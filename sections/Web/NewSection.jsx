"use client";

import React from "react";
import styles from "../../styles";

import { NewTitle } from "../../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const NewSection = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="text-green-500 mt-[120px] flex-[0.75] flex justify-center text-center flex-col">
      <NewTitle title={<>Diseño web integral</>}></NewTitle>
    </div>
  </section>
);

export default NewSection;
