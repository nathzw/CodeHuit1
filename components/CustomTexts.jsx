"use client";
import { motion } from "framer-motion";
import styles from "../styles";

import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
export const NewTitle = ({title, textStyles}) =>(
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
)
export const TitleLeft = ({title, textStyles}) =>(
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`${styles.flexEnd} mt-[8px] font-semibold md:text-[64px] text-[40px] uppercase text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
)
